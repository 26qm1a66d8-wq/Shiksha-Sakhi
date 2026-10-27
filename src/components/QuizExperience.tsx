import { useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Loader2,
  RefreshCw,
  Sparkles,
  Trophy,
  X,
  XCircle,
} from "lucide-react";
import { QUESTIONS_BANK } from "../data/tet2025Questions";
import { LanguageMode, QuestionItem, QuizSessionConfig } from "../types";

interface QuizExperienceProps {
  session: QuizSessionConfig;
  language: LanguageMode;
  onChangeLanguage: (lang: LanguageMode) => void;
  onRecordAnswer: (questionId: string, isCorrect: boolean) => void;
  onCompleteSession: (params: {
    nodeId?: string;
    quizSessionKey: string;
    correctCount: number;
    totalQuestions: number;
    minutesSpent: number;
  }) => { pointsAwarded: number; newlyUnlockedNextTitle?: string };
  onExit: () => void;
  onRestartWithQuestions: (newSession: QuizSessionConfig) => void;
}

interface DynamicAiExplanation {
  simpleExplanationEn: string;
  whySelectedWrongEn: string;
  analogyEn: string;
  simpleExplanationTe: string;
  whySelectedWrongTe: string;
  analogyTe: string;
  fromGemini: boolean;
}

export function QuizExperience({
  session,
  language,
  onChangeLanguage,
  onRecordAnswer,
  onCompleteSession,
  onExit,
  onRestartWithQuestions,
}: QuizExperienceProps) {
  const startTimeRef = useRef<number>(Date.now());

  const [questionIdQueue, setQuestionIdQueue] = useState<string[]>(
    session.questionIds
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [showSimplerView, setShowSimplerView] = useState(false);
  const [loadingSimpler, setLoadingSimpler] = useState(false);
  const [dynamicAiData, setDynamicAiData] =
    useState<DynamicAiExplanation | null>(null);
  const [confirmExit, setConfirmExit] = useState(false);
  const [showPassage, setShowPassage] = useState(true);

  // Track session score & wrong IDs
  const [correctCount, setCorrectCount] = useState(0);
  const [sessionWrongIds, setSessionWrongIds] = useState<string[]>([]);
  const [completionSummary, setCompletionSummary] = useState<{
    pointsAwarded: number;
    newlyUnlockedNextTitle?: string;
  } | null>(null);

  const questionsList: QuestionItem[] = useMemo(() => {
    return questionIdQueue
      .map((id) => QUESTIONS_BANK.find((q) => q.id === id))
      .filter((q): q is QuestionItem => Boolean(q));
  }, [questionIdQueue]);

  const currentQuestion = questionsList[currentIndex];

  if (!currentQuestion) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-[#E8E2D9] p-8 text-center space-y-4">
        <p className="text-sm text-[#5C5670]">
          No questions found for this session.
        </p>
        <button
          type="button"
          onClick={onExit}
          className="px-5 py-2.5 min-h-[44px] rounded-xl bg-[#4338CA] text-white font-semibold text-sm cursor-pointer"
        >
          Return
        </button>
      </div>
    );
  }

  // Completed Summary Screen
  if (completionSummary) {
    const accuracy = Math.round((correctCount / questionsList.length) * 100);
    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-[#E8E2D9] p-6 sm:p-8 shadow-xs text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 text-[#059669] flex items-center justify-center">
          <Trophy className="w-8 h-8" />
        </div>

        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-[#059669]">
            Practice Completed!
          </div>
          <h1 className="font-display font-bold text-2xl text-[#1E1B2E]">
            {session.title}
          </h1>
          <p className="text-sm text-[#5C5670]">
            Great effort! Every question practised strengthens your exam recall.
          </p>
        </div>

        {/* Score & Points Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <div className="font-mono font-bold text-xl tabular-nums text-[#1E1B2E]">
              {correctCount}/{questionsList.length}
            </div>
            <div className="text-xs text-[#6E6882] mt-0.5">Correct</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <div className="font-mono font-bold text-xl tabular-nums text-[#4338CA]">
              {accuracy}%
            </div>
            <div className="text-xs text-[#6E6882] mt-0.5">Accuracy</div>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="font-mono font-bold text-xl tabular-nums text-amber-800">
              +{completionSummary.pointsAwarded}
            </div>
            <div className="text-xs text-amber-800 mt-0.5">Points Earned</div>
          </div>
        </div>

        {completionSummary.newlyUnlockedNextTitle && (
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#059669] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#059669]">
                Next Step Unlocked on Your Path
              </div>
              <div className="font-display font-semibold text-sm text-[#1E1B2E]">
                {completionSummary.newlyUnlockedNextTitle}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {sessionWrongIds.length > 0 && (
            <button
              type="button"
              onClick={() => {
                onRestartWithQuestions({
                  title: "Mistakes Revision",
                  subtitle: "Revisit questions missed in this quiz",
                  questionIds: sessionWrongIds,
                  mode: "pyq_mistakes",
                });
              }}
              className="flex-1 py-3 px-4 min-h-[48px] rounded-2xl border border-[#4338CA] text-[#4338CA] font-display font-semibold text-sm hover:bg-indigo-50 transition-colors cursor-pointer"
            >
              Retry {sessionWrongIds.length} Missed{" "}
              {sessionWrongIds.length === 1 ? "Question" : "Questions"}
            </button>
          )}
          <button
            type="button"
            onClick={onExit}
            className="flex-1 py-3 px-4 min-h-[48px] rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-display font-semibold text-sm transition-colors cursor-pointer"
          >
            Continue Journey
          </button>
        </div>
      </div>
    );
  }

  const isCorrect =
    hasChecked && selectedOption === currentQuestion.correctIndex;
  const progressPercent = Math.round(
    ((currentIndex + (hasChecked ? 1 : 0)) / questionsList.length) * 100
  );

  const handleCheckAnswer = () => {
    if (selectedOption === null || hasChecked) return;
    const right = selectedOption === currentQuestion.correctIndex;
    setHasChecked(true);
    onRecordAnswer(currentQuestion.id, right);

    if (right) {
      setCorrectCount((c) => c + 1);
      setShowAiPanel(false);
    } else {
      setSessionWrongIds((prev) =>
        prev.includes(currentQuestion.id)
          ? prev
          : [...prev, currentQuestion.id]
      );
      // Automatically open contextual AI coach directly below options on wrong answer
      setShowAiPanel(true);
    }
  };

  const resetQuestionVisualState = () => {
    setSelectedOption(null);
    setHasChecked(false);
    setShowAiPanel(false);
    setShowSimplerView(false);
    setDynamicAiData(null);
    setLoadingSimpler(false);
  };

  const handleNextOrFinish = () => {
    if (currentIndex + 1 < questionsList.length) {
      setCurrentIndex((i) => i + 1);
      resetQuestionVisualState();
    } else {
      const elapsedMins = Math.max(
        2,
        Math.round((Date.now() - startTimeRef.current) / 60000)
      );
      const summary = onCompleteSession({
        nodeId: session.originNodeId,
        quizSessionKey: `${session.mode}-${session.title}`,
        correctCount,
        totalQuestions: questionsList.length,
        minutesSpent: elapsedMins,
      });
      setCompletionSummary(summary);
    }
  };

  // Contextual server-side Gemini call ("Explain more simply")
  const handleExplainMoreSimply = async () => {
    setShowAiPanel(true);
    setShowSimplerView(true);
    if (dynamicAiData || loadingSimpler) return;

    setLoadingSimpler(true);
    try {
      const res = await fetch("/api/ai/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionEn: currentQuestion.questionEn,
          questionTe: currentQuestion.questionTe,
          optionsEn: currentQuestion.optionsEn,
          optionsTe: currentQuestion.optionsTe,
          selectedIndex: selectedOption,
          correctIndex: currentQuestion.correctIndex,
          subject: currentQuestion.subjectNameEn,
          examLabel: `${currentQuestion.examName} (${currentQuestion.yearSession})`,
          mode: "simpler",
          language,
        }),
      });
      if (res.ok) {
        const payload = await res.json();
        if (payload.source === "gemini" && payload.data) {
          setDynamicAiData({
            ...payload.data,
            fromGemini: true,
          });
        }
      }
    } catch {
      // Gracefully falls back to verified built-in simplerExplanationEn / Te
    } finally {
      setLoadingSimpler(false);
    }
  };

  // "Try a similar question" action
  const handleTrySimilarQuestion = () => {
    const candidateId =
      currentQuestion.similarQuestionId &&
      currentQuestion.similarQuestionId !== currentQuestion.id
        ? currentQuestion.similarQuestionId
        : QUESTIONS_BANK.find(
            (q) =>
              q.subjectId === currentQuestion.subjectId &&
              q.id !== currentQuestion.id &&
              !questionIdQueue.includes(q.id)
          )?.id ??
          QUESTIONS_BANK.find(
            (q) =>
              q.subjectId === currentQuestion.subjectId &&
              q.id !== currentQuestion.id
          )?.id;

    if (!candidateId) return;

    const nextQueue = [...questionIdQueue];
    nextQueue.splice(currentIndex + 1, 0, candidateId);
    setQuestionIdQueue(nextQueue);
    setCurrentIndex(currentIndex + 1);
    resetQuestionVisualState();
  };

  const passageTextEn = currentQuestion.passageEn;
  const passageTextTe = currentQuestion.passageTe;

  return (
    <div className="max-w-2xl mx-auto space-y-5 pb-10">
      {/* Top Quiz Progress & Pause/Exit Bar */}
      <div className="bg-white rounded-2xl border border-[#E8E2D9] p-4 space-y-3 shadow-2xs">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setConfirmExit((v) => !v)}
            aria-label="Pause or exit quiz"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[38px] rounded-xl text-xs font-medium text-[#5C5670] hover:bg-[#FAF8F5] cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Exit</span>
          </button>

          <div className="font-mono text-xs font-semibold tabular-nums text-[#2E294E]">
            Question {currentIndex + 1} of {questionsList.length}
          </div>

          {/* Inline Bilingual Switch */}
          <div className="flex items-center p-0.5 rounded-lg bg-[#EFECE6] border border-[#E3DDD3]">
            {(
              [
                { mode: LanguageMode.EN, label: "EN" },
                { mode: LanguageMode.TE, label: "తె" },
                { mode: LanguageMode.BOTH, label: "EN+తె" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.mode}
                type="button"
                onClick={() => onChangeLanguage(opt.mode)}
                className={`px-2 py-1 min-h-[30px] text-[11px] font-semibold rounded-md transition-colors cursor-pointer ${
                  language === opt.mode
                    ? "bg-white text-[#4338CA] shadow-2xs"
                    : "text-[#5C5670]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full rounded-full bg-[#EFECE6] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#4338CA] transition-all duration-200"
            style={{ width: `${Math.max(progressPercent, 6)}%` }}
          />
        </div>

        {/* Inline Pause / Exit Confirmation */}
        {confirmExit && (
          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DCD2] flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-[#2E294E] font-medium">
              Leave this practice session? Answered mistakes are already saved.
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setConfirmExit(false)}
                className="px-3 py-1.5 min-h-[34px] rounded-lg bg-white border border-[#DCD6CA] font-semibold text-[#2E294E] cursor-pointer"
              >
                Resume
              </button>
              <button
                type="button"
                onClick={onExit}
                className="px-3 py-1.5 min-h-[34px] rounded-lg bg-rose-600 text-white font-semibold cursor-pointer"
              >
                Exit Quiz
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Question Card */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-5">
        {/* Clean Unboxed Metadata Line (Zero-Pill Discipline) */}
        <div className="text-xs text-[#6E6882] flex flex-wrap items-center gap-1.5">
          <span className="font-semibold text-[#4338CA]">
            {currentQuestion.isSample
              ? "Sample Demonstration Question"
              : `${currentQuestion.examName} Official PYQ`}
          </span>
          <span aria-hidden="true">·</span>
          <span>{currentQuestion.yearSession}</span>
          {currentQuestion.officialQuestionNumber && (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                Paper Q.{currentQuestion.officialQuestionNumber}
              </span>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>
            {language === LanguageMode.TE
              ? currentQuestion.topicTagTe
              : currentQuestion.topicTagEn}
          </span>
        </div>

        {/* Optional Reading Comprehension Passage */}
        {(passageTextEn || passageTextTe) && (
          <div className="rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4338CA]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Reference Passage / పద్యం-గద్యం</span>
              </span>
              <button
                type="button"
                onClick={() => setShowPassage((v) => !v)}
                className="text-xs font-semibold text-[#5C5670] hover:text-[#1E1B2E] cursor-pointer"
              >
                {showPassage ? "Hide" : "Show"}
              </button>
            </div>
            {showPassage && (
              <div className="text-sm text-[#2E294E] leading-relaxed whitespace-pre-line space-y-2 pt-1">
                {(language === LanguageMode.EN ||
                  language === LanguageMode.BOTH) &&
                  passageTextEn && <p>{passageTextEn}</p>}
                {language === LanguageMode.TE && passageTextTe && (
                  <p>{passageTextTe}</p>
                )}
                {language === LanguageMode.BOTH &&
                  passageTextTe &&
                  passageTextTe !== passageTextEn && (
                    <p className="text-xs text-[#5C5670] pt-2 border-t border-[#E8E2D9]">
                      {passageTextTe}
                    </p>
                  )}
              </div>
            )}
          </div>
        )}

        {/* Question Stem */}
        <div className="space-y-2.5">
          {(language === LanguageMode.EN || language === LanguageMode.BOTH) && (
            <h2 className="font-display font-semibold text-lg sm:text-[19px] text-[#1E1B2E] leading-relaxed whitespace-pre-line">
              {currentQuestion.questionEn}
            </h2>
          )}
          {(language === LanguageMode.TE || language === LanguageMode.BOTH) && (
            <p
              className={`${
                language === LanguageMode.TE
                  ? "font-display font-semibold text-lg text-[#1E1B2E]"
                  : "text-[15px] text-[#3F3A52] pt-2 border-t border-[#F2EFE9]"
              } leading-relaxed whitespace-pre-line`}
            >
              {currentQuestion.questionTe}
            </p>
          )}
        </div>

        {/* Four Large Touch-Friendly Answer Options */}
        <div className="space-y-2.5 pt-1">
          {currentQuestion.optionsEn.map((optEn, idx) => {
            const optTe = currentQuestion.optionsTe[idx] ?? optEn;
            const isSelected = selectedOption === idx;
            const isActualCorrect = idx === currentQuestion.correctIndex;

            let optionClasses =
              "bg-[#FAF8F5] border-[#E4DFD5] hover:border-indigo-300 text-[#1E1B2E]";
            let badgeClasses = "bg-white border-[#DCD6CA] text-[#5C5670]";

            if (!hasChecked && isSelected) {
              optionClasses =
                "bg-indigo-50/90 border-[#4338CA] text-[#1E1B2E] ring-1 ring-[#4338CA]";
              badgeClasses = "bg-[#4338CA] border-[#4338CA] text-white";
            } else if (hasChecked) {
              if (isActualCorrect) {
                optionClasses =
                  "bg-emerald-50/90 border-[#059669] text-[#064E3B] ring-1 ring-[#059669]";
                badgeClasses = "bg-[#059669] border-[#059669] text-white";
              } else if (isSelected && !isActualCorrect) {
                optionClasses =
                  "bg-rose-50/90 border-rose-500 text-rose-950 ring-1 ring-rose-400";
                badgeClasses = "bg-rose-600 border-rose-600 text-white";
              } else {
                optionClasses =
                  "bg-[#FAF8F5]/60 border-[#ECE8E0] text-[#7A748E] opacity-80";
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={hasChecked}
                onClick={() => setSelectedOption(idx)}
                className={`w-full min-h-[56px] p-3.5 sm:p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer disabled:cursor-default ${optionClasses}`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className={`w-7 h-7 rounded-lg border font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5 tabular-nums ${badgeClasses}`}
                  >
                    {idx + 1}
                  </span>
                  <div className="space-y-0.5 min-w-0">
                    {(language === LanguageMode.EN ||
                      language === LanguageMode.BOTH) && (
                      <div className="text-[15px] font-medium leading-snug">
                        {optEn}
                      </div>
                    )}
                    {(language === LanguageMode.TE ||
                      language === LanguageMode.BOTH) &&
                      (language === LanguageMode.TE || optTe !== optEn) && (
                        <div
                          className={`${
                            language === LanguageMode.TE
                              ? "text-[15px] font-medium"
                              : "text-xs opacity-85"
                          } leading-snug`}
                        >
                          {optTe}
                        </div>
                      )}
                  </div>
                </div>

                {hasChecked && isActualCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                )}
                {hasChecked && isSelected && !isActualCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Submit / Next Action Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          {!hasChecked ? (
            <button
              type="button"
              disabled={selectedOption === null}
              onClick={handleCheckAnswer}
              className="w-full py-3.5 px-6 min-h-[50px] rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] disabled:bg-[#DDD7CC] disabled:text-[#8A849E] text-white font-display font-semibold text-sm transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowAiPanel((v) => !v)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[46px] rounded-xl bg-indigo-50 hover:bg-indigo-100 text-[#4338CA] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {showAiPanel
                    ? "Hide AI Explanation"
                    : isCorrect
                    ? "Explain This Answer"
                    : "Understand This Question"}
                </span>
              </button>

              <button
                type="button"
                onClick={handleNextOrFinish}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-display font-semibold text-sm transition-all cursor-pointer ml-auto"
              >
                <span>
                  {currentIndex + 1 < questionsList.length
                    ? "Next Question"
                    : "Finish Practice"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* ====================================================================
            BELOW-OPTIONS FEEDBACK & CONTEXTUAL SHIKSHA SAKHI AI EXPLANATION
            (Unfolds smoothly directly below the 4 options — "down the options")
            ==================================================================== */}
        {hasChecked && (
          <div className="pt-3 border-t border-[#ECE7DE] space-y-4">
            {/* Concise Immediate Result Banner */}
            <div
              className={`p-4 rounded-2xl border flex items-start gap-3 ${
                isCorrect
                  ? "bg-emerald-50/70 border-emerald-200 text-[#064E3B]"
                  : "bg-rose-50/70 border-rose-200 text-rose-950"
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1 text-sm">
                <div className="font-display font-bold">
                  {isCorrect
                    ? "Well done! That is the official correct answer."
                    : `Not quite — Option ${
                        currentQuestion.correctIndex + 1
                      } is the verified answer.`}
                </div>
                {(language === LanguageMode.EN ||
                  language === LanguageMode.BOTH) && (
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                    {currentQuestion.explanationEn}
                  </p>
                )}
                {(language === LanguageMode.TE ||
                  language === LanguageMode.BOTH) && (
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                    {currentQuestion.explanationTe}
                  </p>
                )}
              </div>
            </div>

            {/* Contextual AI Explanation Panel (Directly Below Options) */}
            {showAiPanel && (
              <div className="rounded-3xl bg-[#FAF8F5] border border-[#E2DCD2] p-5 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#4338CA] text-white flex items-center justify-center">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-[#1E1B2E]">
                        Shiksha Sakhi Contextual AI Guide
                      </h3>
                      <p className="text-[11px] text-[#6E6882]">
                        Step-by-step concept clarity ·{" "}
                        {dynamicAiData?.fromGemini
                          ? "Live Gemini Simplification"
                          : "Verified Answer Key"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1 & 2. Original Question Summary & Verified Correct Answer */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#EAE5DC] space-y-1.5 text-xs sm:text-sm">
                  <div className="text-[11px] font-semibold text-[#6E6882]">
                    Verified Official Answer
                  </div>
                  <div className="font-semibold text-[#059669]">
                    Option {currentQuestion.correctIndex + 1}:{" "}
                    {currentQuestion.optionsEn[currentQuestion.correctIndex]}
                    {currentQuestion.optionsTe[currentQuestion.correctIndex] !==
                      currentQuestion.optionsEn[currentQuestion.correctIndex] &&
                      ` (${
                        currentQuestion.optionsTe[currentQuestion.correctIndex]
                      })`}
                  </div>
                </div>

                {/* 3. Beginner-Friendly Explanation (or Ultra-Simple Mode) */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-[#4338CA]">
                    {showSimplerView
                      ? "Explained Even More Simply"
                      : "Concept Breakdown"}
                  </div>
                  {loadingSimpler ? (
                    <div className="flex items-center gap-2 text-xs text-[#5C5670] py-2">
                      <Loader2 className="w-4 h-4 animate-spin text-[#4338CA]" />
                      <span>Simplifying this concept step-by-step...</span>
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm text-[#2E294E] leading-relaxed whitespace-pre-line">
                      {(language === LanguageMode.EN ||
                        language === LanguageMode.BOTH) && (
                        <p>
                          {dynamicAiData
                            ? dynamicAiData.simpleExplanationEn
                            : showSimplerView
                            ? currentQuestion.simplerExplanationEn
                            : currentQuestion.explanationEn}
                        </p>
                      )}
                      {(language === LanguageMode.TE ||
                        language === LanguageMode.BOTH) && (
                        <p className="text-[#3F3A52]">
                          {dynamicAiData
                            ? dynamicAiData.simpleExplanationTe
                            : showSimplerView
                            ? currentQuestion.simplerExplanationTe
                            : currentQuestion.explanationTe}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* 4. Why Learner's Selected Option is Incorrect */}
                {selectedOption !== null &&
                  selectedOption !== currentQuestion.correctIndex && (
                    <div className="p-3.5 rounded-2xl bg-white border border-rose-200/80 space-y-1">
                      <div className="text-xs font-semibold text-rose-700">
                        Why Your Choice (Option {selectedOption + 1}) Was Incorrect
                      </div>
                      {(language === LanguageMode.EN ||
                        language === LanguageMode.BOTH) && (
                        <p className="text-xs sm:text-sm text-[#2E294E] leading-relaxed">
                          {dynamicAiData
                            ? dynamicAiData.whySelectedWrongEn
                            : currentQuestion.wrongOptionNotesEn[selectedOption]}
                        </p>
                      )}
                      {(language === LanguageMode.TE ||
                        language === LanguageMode.BOTH) && (
                        <p className="text-xs sm:text-sm text-[#4A445D] leading-relaxed">
                          {dynamicAiData
                            ? dynamicAiData.whySelectedWrongTe
                            : currentQuestion.wrongOptionNotesTe[selectedOption]}
                        </p>
                      )}
                    </div>
                  )}

                {/* 5. Relatable Classroom / Everyday Analogy */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                  <div className="text-xs font-semibold text-amber-800">
                    Everyday Example to Remember
                  </div>
                  {(language === LanguageMode.EN ||
                    language === LanguageMode.BOTH) && (
                    <p className="text-xs sm:text-sm text-[#1E1B2E] leading-relaxed">
                      {dynamicAiData
                        ? dynamicAiData.analogyEn
                        : currentQuestion.analogyEn}
                    </p>
                  )}
                  {(language === LanguageMode.TE ||
                    language === LanguageMode.BOTH) && (
                    <p className="text-xs sm:text-sm text-[#4A445D] leading-relaxed">
                      {dynamicAiData
                        ? dynamicAiData.analogyTe
                        : currentQuestion.analogyTe}
                    </p>
                  )}
                </div>

                {/* 6 & 7. Contextual Actions: Explain More Simply + Try Similar Question */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    disabled={loadingSimpler}
                    onClick={handleExplainMoreSimply}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[42px] rounded-xl bg-white border border-[#DCD6CA] hover:border-[#4338CA] text-xs font-semibold text-[#2E294E] transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-[#4338CA]" />
                    <span>
                      {showSimplerView && !loadingSimpler
                        ? "Simpler Explanation Shown ✓"
                        : "Explain More Simply"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleTrySimilarQuestion}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[42px] rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-xs font-semibold text-[#4338CA] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Try a Similar Question</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
