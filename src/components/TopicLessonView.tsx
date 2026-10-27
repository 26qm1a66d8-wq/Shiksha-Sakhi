import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Play,
  Sparkles,
} from "lucide-react";
import { LanguageMode, LearningPathNode } from "../types";

interface TopicLessonViewProps {
  node: LearningPathNode;
  isCompleted: boolean;
  language: LanguageMode;
  onChangeLanguage: (lang: LanguageMode) => void;
  onBack: () => void;
  onStartPractice: (node: LearningPathNode) => void;
}

export function TopicLessonView({
  node,
  isCompleted,
  language,
  onChangeLanguage,
  onBack,
  onStartPractice,
}: TopicLessonViewProps) {
  const cards = node.conceptCards ?? [];
  const [activeCardIdx, setActiveCardIdx] = useState(0);

  const progressPercent =
    cards.length > 0
      ? Math.round(((activeCardIdx + 1) / cards.length) * 100)
      : 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-8">
      {/* Top Navigation & Language Switch */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] rounded-xl text-sm font-medium text-[#4A445D] hover:bg-white hover:shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Learning Path</span>
        </button>

        <div className="flex items-center p-0.5 rounded-lg bg-[#EFECE6] border border-[#E3DDD3]">
          {(
            [
              { mode: LanguageMode.EN, label: "English" },
              { mode: LanguageMode.TE, label: "తెలుగు" },
              { mode: LanguageMode.BOTH, label: "Both" },
            ] as const
          ).map((opt) => (
            <button
              key={opt.mode}
              type="button"
              onClick={() => onChangeLanguage(opt.mode)}
              className={`px-2.5 py-1 min-h-[32px] text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                language === opt.mode
                  ? "bg-white text-[#4338CA] shadow-2xs"
                  : "text-[#5C5670] hover:text-[#1E1B2E]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Header Card */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between gap-2 text-xs text-[#6E6882]">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#4338CA]" />
            <span>Estimated time: {node.estimatedMinutes} mins</span>
            <span aria-hidden="true">·</span>
            <span>{node.questionIds.length} PYQ Practice Questions</span>
          </div>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-[#059669] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Completed</span>
            </span>
          )}
        </div>

        <div>
          <h1 className="font-display font-bold text-xl sm:text-2xl text-[#1E1B2E] text-balance">
            {language === LanguageMode.TE ? node.titleTe : node.titleEn}
          </h1>
          {language === LanguageMode.BOTH && node.titleTe !== node.titleEn && (
            <p className="font-display font-medium text-base text-[#4A445D] mt-1">
              {node.titleTe}
            </p>
          )}
        </div>

        {/* Learning Objective */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
          <div className="text-xs font-semibold text-[#4338CA] mb-1">
            Learning Objective
          </div>
          {(language === LanguageMode.EN || language === LanguageMode.BOTH) && (
            <p className="text-sm text-[#2E294E] leading-relaxed">
              {node.objectiveEn}
            </p>
          )}
          {(language === LanguageMode.TE || language === LanguageMode.BOTH) && (
            <p className="text-sm text-[#4A445D] leading-relaxed mt-1">
              {node.objectiveTe}
            </p>
          )}
        </div>

        {/* Lesson Study Progress */}
        {cards.length > 0 && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-[#6E6882]">
              <span>
                Concept Card {activeCardIdx + 1} of {cards.length}
              </span>
              <span className="font-mono tabular-nums">{progressPercent}%</span>
            </div>
            <div className="h-2 rounded-full bg-[#EFECE6] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#4338CA] transition-all duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Approachable Bite-Sized Concept Card */}
      {cards.length > 0 && (
        <section className="bg-white rounded-3xl border border-[#E8E2D9] p-6 shadow-2xs space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4338CA]">
            <BookOpen className="w-4 h-4" />
            <span>Quick Concept Guide</span>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-lg text-[#1E1B2E]">
              {language === LanguageMode.TE
                ? cards[activeCardIdx].titleTe
                : cards[activeCardIdx].titleEn}
            </h2>
            {language === LanguageMode.BOTH && (
              <p className="font-display font-semibold text-sm text-[#5C5670]">
                {cards[activeCardIdx].titleTe}
              </p>
            )}

            {(language === LanguageMode.EN ||
              language === LanguageMode.BOTH) && (
              <p className="text-[15px] text-[#2E294E] leading-relaxed whitespace-pre-line">
                {cards[activeCardIdx].bodyEn}
              </p>
            )}

            {(language === LanguageMode.TE ||
              language === LanguageMode.BOTH) && (
              <p className="text-[15px] text-[#3F3A52] leading-relaxed whitespace-pre-line pt-2 border-t border-[#F0ECE4]">
                {cards[activeCardIdx].bodyTe}
              </p>
            )}
          </div>

          {/* Key Takeaway Callout */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exam Memory Tip</span>
            </div>
            {(language === LanguageMode.EN ||
              language === LanguageMode.BOTH) && (
              <p className="text-sm font-medium text-[#1E1B2E]">
                {cards[activeCardIdx].keyTakeawayEn}
              </p>
            )}
            {(language === LanguageMode.TE ||
              language === LanguageMode.BOTH) && (
              <p className="text-sm text-[#4A445D]">
                {cards[activeCardIdx].keyTakeawayTe}
              </p>
            )}
          </div>

          {/* Card Step Controls */}
          {cards.length > 1 && (
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                disabled={activeCardIdx === 0}
                onClick={() => setActiveCardIdx((i) => Math.max(0, i - 1))}
                className="px-4 py-2 min-h-[44px] rounded-xl border border-[#E2DCD2] text-sm font-medium text-[#2E294E] disabled:opacity-40 hover:bg-[#FAF8F5] transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                Previous Card
              </button>
              {activeCardIdx < cards.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveCardIdx((i) => Math.min(cards.length - 1, i + 1))
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-xl bg-indigo-50 text-[#4338CA] text-sm font-semibold hover:bg-indigo-100 transition-colors cursor-pointer"
                >
                  <span>Next Concept</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-xs font-medium text-[#059669]">
                  All cards reviewed ✓
                </span>
              )}
            </div>
          )}
        </section>
      )}

      {/* Primary Action CTA: Start Practice */}
      <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-display font-semibold text-base text-[#1E1B2E]">
            Ready to test what you just read?
          </div>
          <div className="text-xs text-[#6E6882] mt-0.5">
            Practise {node.questionIds.length} questions with instant feedback & AI explanations.{" "}
            {!isCompleted && `Earn +${node.pointsReward} pts on completion!`}
          </div>
        </div>
        <button
          type="button"
          onClick={() => onStartPractice(node)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-display font-semibold text-sm shadow-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Start Practice</span>
        </button>
      </div>
    </div>
  );
}
