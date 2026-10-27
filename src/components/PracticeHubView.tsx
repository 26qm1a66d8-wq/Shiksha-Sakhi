import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  FileText,
  Layers,
  Lock,
  Play,
  Shuffle,
  Sparkles,
  X,
} from "lucide-react";
import { OFFICIAL_PDF_URL } from "../data/examsCatalog";
import { QUESTIONS_BANK } from "../data/tet2025Questions";
import {
  LanguageMode,
  QuizSessionConfig,
  SubjectSectionId,
} from "../types";

interface PracticeHubViewProps {
  language: LanguageMode;
  incorrectQuestionIds: string[];
  masteredQuestionIds: string[];
  subscriptionStatus: {
    daysRemaining: number;
    isTrialActive: boolean;
    isPremiumUnlocked: boolean;
    hasFullPyqAccess: boolean;
    applicablePrice: number;
  };
  onStartQuizSession: (session: QuizSessionConfig) => void;
  onOpenUpgradeModal: () => void;
}

const SUBJECT_SECTIONS: {
  id: SubjectSectionId;
  sectionNum: number;
  titleEn: string;
  titleTe: string;
  paperRange: string;
}[] = [
  {
    id: "cdp",
    sectionNum: 1,
    titleEn: "Child Development & Pedagogy",
    titleTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    paperRange: "Official Section 1 · Q.1 – Q.30",
  },
  {
    id: "telugu",
    sectionNum: 2,
    titleEn: "Language I — తెలుగు (Telugu)",
    titleTe: "ప్రథమ భాష — తెలుగు",
    paperRange: "Official Section 2 · Q.31 – Q.60",
  },
  {
    id: "english",
    sectionNum: 3,
    titleEn: "Language II — English",
    titleTe: "ద్వితీయ భాష — ఇంగ్లీష్",
    paperRange: "Official Section 3 · Q.61 – Q.90",
  },
  {
    id: "math",
    sectionNum: 4,
    titleEn: "Mathematics & Pedagogy",
    titleTe: "గణితం & గణిత బోధనా శాస్త్రం",
    paperRange: "Official Section 4 · Q.91 – Q.120",
  },
  {
    id: "science",
    sectionNum: 5,
    titleEn: "General Science & Pedagogy",
    titleTe: "విజ్ఞాన శాస్త్రం (సైన్స్) & బోధన",
    paperRange: "Official Section 5 · Q.121 – Q.150",
  },
];

export function PracticeHubView({
  language,
  incorrectQuestionIds,
  masteredQuestionIds,
  subscriptionStatus,
  onStartQuizSession,
  onOpenUpgradeModal,
}: PracticeHubViewProps) {
  const [activeFilterTab, setActiveFilterTab] = useState<
    "subject" | "topic" | "year"
  >("subject");
  const [showPdfDrawer, setShowPdfDrawer] = useState(false);

  const officialQuestions = useMemo(
    () => QUESTIONS_BANK.filter((q) => !q.isSample),
    []
  );

  // Group topics neatly per subject
  const topicsBySubject = useMemo(() => {
    const map = new Map<
      SubjectSectionId,
      { topicEn: string; topicTe: string; ids: string[] }[]
    >();
    for (const sec of SUBJECT_SECTIONS) {
      const secQs = officialQuestions.filter((q) => q.subjectId === sec.id);
      const topicGroups = new Map<
        string,
        { topicEn: string; topicTe: string; ids: string[] }
      >();
      for (const q of secQs) {
        const existing = topicGroups.get(q.topicTagEn);
        if (existing) {
          existing.ids.push(q.id);
        } else {
          topicGroups.set(q.topicTagEn, {
            topicEn: q.topicTagEn,
            topicTe: q.topicTagTe,
            ids: [q.id],
          });
        }
      }
      map.set(sec.id, Array.from(topicGroups.values()));
    }
    return map;
  }, [officialQuestions]);

  const handleStartSectionPractice = (
    sec: (typeof SUBJECT_SECTIONS)[number],
    index: number
  ) => {
    // If 30-day free trial is expired & not upgraded, keep Section 1 free sample & prompt upgrade for additional sections
    if (!subscriptionStatus.hasFullPyqAccess && index > 0) {
      onOpenUpgradeModal();
      return;
    }
    const qs = officialQuestions.filter((q) => q.subjectId === sec.id);
    onStartQuizSession({
      title: `${sec.titleEn} — PYQ Practice`,
      subtitle: "TG TET · 19th Jan 2025 Shift 2",
      questionIds: qs.map((q) => q.id),
      mode: "pyq_section",
    });
  };

  const handleStartMixedPractice = () => {
    if (!subscriptionStatus.hasFullPyqAccess) {
      onOpenUpgradeModal();
      return;
    }
    const shuffled = [...officialQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
    onStartQuizSession({
      title: "Mixed TG TET 2025 PYQ Drill",
      subtitle: "8 Cross-Subject Official Questions",
      questionIds: shuffled.map((q) => q.id),
      mode: "pyq_mixed",
    });
  };

  const handleStartMistakesRevision = () => {
    if (incorrectQuestionIds.length === 0) return;
    onStartQuizSession({
      title: "Incorrect Questions Revision",
      subtitle: "Turn your past mistakes into strengths",
      questionIds: incorrectQuestionIds,
      mode: "pyq_mistakes",
    });
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header + 30-Day Free Access Plan Banner */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs text-[#6E6882]">
              Previous-Year Questions (PYQ) Library
            </div>
            <h1 className="font-display font-bold text-xl sm:text-2xl text-[#1E1B2E]">
              Structured TG TET 2025 Question Bank
            </h1>
            <p className="text-sm text-[#5C5670]">
              Telangana State TET · 19th Jan 2025 (Shift 2) · Mathematics & Science Paper II
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowPdfDrawer(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-xl bg-[#FAF8F5] hover:bg-[#EFECE6] border border-[#E2DCD2] text-xs font-semibold text-[#2E294E] transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#4338CA]" />
            <span>View Official 2025 PDF</span>
          </button>
        </div>

        {/* 30-Day Free Trial / Subscription Status Strip */}
        <div
          className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${
            subscriptionStatus.hasFullPyqAccess
              ? "bg-emerald-50/60 border-emerald-200"
              : "bg-amber-50/80 border-amber-300"
          }`}
        >
          <div className="flex items-center gap-3">
            {subscriptionStatus.hasFullPyqAccess ? (
              <Sparkles className="w-5 h-5 text-[#059669] shrink-0" />
            ) : (
              <Lock className="w-5 h-5 text-amber-700 shrink-0" />
            )}
            <div className="text-xs sm:text-sm">
              {subscriptionStatus.isPremiumUnlocked ? (
                <span className="font-semibold text-[#064E3B]">
                  Full PYQ Plan Active · Unlimited access to all TG TET 2025 sections
                </span>
              ) : subscriptionStatus.isTrialActive ? (
                <span className="text-[#064E3B]">
                  <strong className="font-semibold">
                    30-Day Free Plan Active ({subscriptionStatus.daysRemaining}{" "}
                    days left)
                  </strong>{" "}
                  · All 5 sections unlocked free! Post-trial plan: ₹150 (or ₹100 with referral).
                </span>
              ) : (
                <span className="text-amber-950">
                  <strong className="font-semibold">
                    30-Day Free Trial Ended
                  </strong>{" "}
                  · Section 1 sample remains free. Unlock all PYQ collections for ₹150 (₹100 with referral code!).
                </span>
              )}
            </div>
          </div>

          {!subscriptionStatus.isPremiumUnlocked && (
            <button
              type="button"
              onClick={onOpenUpgradeModal}
              className="px-3.5 py-2 min-h-[38px] rounded-xl bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
            >
              {subscriptionStatus.isTrialActive
                ? "View Plan & ₹100 Referral"
                : `Unlock Full PYQs · ₹${subscriptionStatus.applicablePrice}`}
            </button>
          )}
        </div>
      </section>

      {/* Quick Action Cards: Mixed Practice & Incorrect Questions Revision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 flex flex-col justify-between gap-4 shadow-2xs">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4338CA]">
              <Shuffle className="w-4 h-4" />
              <span>Mixed Exam Simulation</span>
            </div>
            <h2 className="font-display font-bold text-base text-[#1E1B2E]">
              Quick Mixed PYQ Practice
            </h2>
            <p className="text-xs text-[#5C5670] leading-relaxed">
              Practise 8 randomized questions across CDP, Maths, Science, English, and Telugu.
            </p>
          </div>
          <button
            type="button"
            onClick={handleStartMixedPractice}
            className="w-full py-2.5 px-4 min-h-[44px] rounded-xl bg-indigo-50 hover:bg-indigo-100 text-[#4338CA] font-display font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {!subscriptionStatus.hasFullPyqAccess && (
              <Lock className="w-3.5 h-3.5" />
            )}
            <span>Start Mixed Practice</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 flex flex-col justify-between gap-4 shadow-2xs">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
              <AlertTriangle className="w-4 h-4" />
              <span>Mistake Recovery</span>
            </div>
            <h2 className="font-display font-bold text-base text-[#1E1B2E]">
              Incorrect Questions ({incorrectQuestionIds.length})
            </h2>
            <p className="text-xs text-[#5C5670] leading-relaxed">
              {incorrectQuestionIds.length > 0
                ? "Revisit questions you answered wrong earlier with contextual AI coaching."
                : "Zero pending mistakes! Any question you miss in a quiz is saved here automatically."}
            </p>
          </div>
          <button
            type="button"
            disabled={incorrectQuestionIds.length === 0}
            onClick={handleStartMistakesRevision}
            className="w-full py-2.5 px-4 min-h-[44px] rounded-xl bg-amber-50 hover:bg-amber-100 disabled:bg-[#F3F0EA] disabled:text-[#9A94AC] text-amber-900 font-display font-semibold text-xs sm:text-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            {incorrectQuestionIds.length > 0
              ? `Revise ${incorrectQuestionIds.length} Incorrect ${
                  incorrectQuestionIds.length === 1 ? "Question" : "Questions"
                }`
              : "No Mistakes to Revise"}
          </button>
        </div>
      </div>

      {/* Organization Mode Selector (Subject-wise | Topic-wise | Year/Session-wise) */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display font-bold text-lg text-[#1E1B2E]">
            Browse Neatly Organized PYQs
          </h2>

          <div
            role="tablist"
            className="flex items-center gap-1 p-1 rounded-xl bg-[#EFECE6] border border-[#E3DDD3]"
          >
            {(
              [
                { id: "subject", label: "By Subject", icon: Layers },
                { id: "topic", label: "By Topic", icon: BookOpen },
                { id: "year", label: "By Paper & Year", icon: Calendar },
              ] as const
            ).map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilterTab === tab.id}
                  onClick={() => setActiveFilterTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activeFilterTab === tab.id
                      ? "bg-white text-[#4338CA] shadow-2xs"
                      : "text-[#5C5670] hover:text-[#1E1B2E]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: SUBJECT / SECTION-WISE */}
        {activeFilterTab === "subject" && (
          <div className="space-y-3">
            {SUBJECT_SECTIONS.map((sec, idx) => {
              const qs = officialQuestions.filter((q) => q.subjectId === sec.id);
              const masteredInSec = qs.filter((q) =>
                masteredQuestionIds.includes(q.id)
              ).length;
              const isLockedPostTrial =
                !subscriptionStatus.hasFullPyqAccess && idx > 0;

              return (
                <div
                  key={sec.id}
                  className="bg-white rounded-3xl border border-[#E8E2D9] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="text-xs text-[#6E6882]">
                      {sec.paperRange} · {qs.length} Curated PYQs
                      {idx === 0 && !subscriptionStatus.hasFullPyqAccess && (
                        <span> · Free Sample Section</span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#1E1B2E]">
                      {language === LanguageMode.TE ? sec.titleTe : sec.titleEn}
                    </h3>
                    {language === LanguageMode.BOTH &&
                      sec.titleTe !== sec.titleEn && (
                        <p className="text-xs text-[#5C5670]">{sec.titleTe}</p>
                      )}
                    <div className="flex items-center gap-2 pt-1 text-xs text-[#059669]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="font-mono tabular-nums">
                        {masteredInSec}/{qs.length} mastered
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartSectionPractice(sec, idx)}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-2xl font-display font-semibold text-sm transition-colors cursor-pointer shrink-0 ${
                      isLockedPostTrial
                        ? "bg-amber-50 border border-amber-300 text-amber-900 hover:bg-amber-100"
                        : "bg-[#4338CA] hover:bg-[#3730A3] text-white"
                    }`}
                  >
                    {isLockedPostTrial ? (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>Unlock Section</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Practise Section</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: TOPIC-WISE */}
        {activeFilterTab === "topic" && (
          <div className="space-y-5">
            {SUBJECT_SECTIONS.map((sec, secIdx) => {
              const groups = topicsBySubject.get(sec.id) ?? [];
              const isLockedPostTrial =
                !subscriptionStatus.hasFullPyqAccess && secIdx > 0;

              return (
                <div
                  key={sec.id}
                  className="bg-white rounded-3xl border border-[#E8E2D9] p-5 space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between border-b border-[#EFECE6] pb-3">
                    <div>
                      <h3 className="font-display font-bold text-base text-[#1E1B2E]">
                        {language === LanguageMode.TE
                          ? sec.titleTe
                          : sec.titleEn}
                      </h3>
                      <p className="text-xs text-[#6E6882]">{sec.paperRange}</p>
                    </div>
                  </div>

                  <div className="divide-y divide-[#F2EFE9]">
                    {groups.map((grp) => (
                      <div
                        key={grp.topicEn}
                        className="py-3 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-[#2E294E]">
                            {language === LanguageMode.TE
                              ? grp.topicTe
                              : grp.topicEn}
                          </div>
                          <div className="text-xs text-[#6E6882] mt-0.5">
                            {grp.ids.length} Official{" "}
                            {grp.ids.length === 1 ? "Question" : "Questions"}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            if (isLockedPostTrial) {
                              onOpenUpgradeModal();
                              return;
                            }
                            onStartQuizSession({
                              title: grp.topicEn,
                              subtitle: `${sec.titleEn} · TG TET 2025`,
                              questionIds: grp.ids,
                              mode: "pyq_topic",
                            });
                          }}
                          className="px-3.5 py-2 min-h-[40px] rounded-xl bg-[#FAF8F5] hover:bg-indigo-50 border border-[#E2DCD2] text-xs font-semibold text-[#4338CA] flex items-center gap-1.5 shrink-0 cursor-pointer"
                        >
                          {isLockedPostTrial && <Lock className="w-3.5 h-3.5" />}
                          <span>Practise</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: YEAR & PAPER SESSION-WISE */}
        {activeFilterTab === "year" && (
          <div className="space-y-4">
            <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 space-y-4 shadow-2xs">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#059669]">
                    Verified Official Question Paper & Key
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#1E1B2E]">
                    TG TET — 19th January 2025 (Shift 2)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5670]">
                    Mathematics & Science (Telugu & English Medium) · Group ID 698177188 · All 5 Sections
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!subscriptionStatus.hasFullPyqAccess) {
                      onOpenUpgradeModal();
                      return;
                    }
                    onStartQuizSession({
                      title: "TG TET 19 Jan 2025 (Shift 2) — Paper Practice",
                      subtitle: "All 5 Official Sections",
                      questionIds: officialQuestions.map((q) => q.id),
                      mode: "pyq_section",
                    });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-display font-semibold text-sm cursor-pointer"
                >
                  {!subscriptionStatus.hasFullPyqAccess ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                  <span>Practise Full Curated Paper ({officialQuestions.length} Qs)</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
              <div className="space-y-1">
                <div className="text-xs text-[#6E6882]">
                  Sample Demonstration Set (Clearly Marked)
                </div>
                <h3 className="font-display font-bold text-base text-[#1E1B2E]">
                  CTET Pedagogy Sample Practice Set
                </h3>
                <p className="text-xs text-[#5C5670]">
                  Free demonstration questions for CTET Child Development & Pedagogy.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const sampleIds = QUESTIONS_BANK.filter(
                    (q) => q.isSample
                  ).map((q) => q.id);
                  onStartQuizSession({
                    title: "CTET Sample Demonstration Set",
                    subtitle: "Sample Practice Questions",
                    questionIds: sampleIds,
                    mode: "pyq_section",
                  });
                }}
                className="px-4 py-2.5 min-h-[44px] rounded-2xl border border-[#4338CA] text-[#4338CA] font-display font-semibold text-sm hover:bg-indigo-50 cursor-pointer"
              >
                Practise Free Sample
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Official Attached 2025 PDF Reference Modal */}
      {showPdfDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setShowPdfDrawer(false)}
          />
          <div className="relative z-10 w-full max-w-4xl h-[85vh] bg-white rounded-3xl border border-[#E8E2D9] shadow-2xl flex flex-col overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E8E2D9] flex items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-base text-[#1E1B2E]">
                  Official TG TET Paper — 19th Jan 2025 (Shift 2)
                </h3>
                <p className="text-xs text-[#6E6882]">
                  Mathematics & Science (Telugu/English) · Official Answer Key PDF
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={OFFICIAL_PDF_URL}
                  download="TG_TET_2025_Maths_Science_Shift2.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-xl bg-indigo-50 text-[#4338CA] text-xs font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowPdfDrawer(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[#5C5670] hover:bg-[#FAF8F5] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <iframe
              src={OFFICIAL_PDF_URL}
              title="TG TET 2025 Official Question Paper"
              className="w-full flex-1 bg-[#FAF8F5]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
