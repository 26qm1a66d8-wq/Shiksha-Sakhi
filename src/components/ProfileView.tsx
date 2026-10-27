import { useState } from "react";
import {
  Bell,
  BookOpen,
  Check,
  Flame,
  Globe,
  RotateCcw,
  Sparkles,
  User,
} from "lucide-react";
import {
  DailyGoalType,
  ExamCourseId,
  LanguageMode,
  UserProgressState,
} from "../types";

interface ProfileViewProps {
  state: UserProgressState;
  completedTopicsCount: number;
  totalTopicsCount: number;
  subscriptionStatus: {
    daysRemaining: number;
    isTrialActive: boolean;
    isPremiumUnlocked: boolean;
    applicablePrice: number;
  };
  onUpdatePreferences: (
    updates: Partial<
      Pick<
        UserProgressState,
        | "displayName"
        | "selectedExamId"
        | "language"
        | "dailyGoal"
        | "notificationsEnabled"
        | "simulateTrialExpired"
      >
    >
  ) => void;
  onOpenExamDrawer: () => void;
  onOpenUpgradeModal: () => void;
  onResetDemoProgress: () => void;
}

export function ProfileView({
  state,
  completedTopicsCount,
  totalTopicsCount,
  subscriptionStatus,
  onUpdatePreferences,
  onOpenExamDrawer,
  onOpenUpgradeModal,
  onResetDemoProgress,
}: ProfileViewProps) {
  const [editingName, setEditingName] = useState(state.displayName);
  const [savedNameToast, setSavedNameToast] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const handleSaveName = () => {
    const trimmed = editingName.trim() || "Shiksha Learner";
    onUpdatePreferences({ displayName: trimmed });
    setEditingName(trimmed);
    setSavedNameToast(true);
    setTimeout(() => setSavedNameToast(false), 2000);
  };

  return (
    <div className="space-y-6 pb-8 max-w-3xl">
      {/* Profile Identity Card */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 border border-indigo-200 text-[#3730A3] font-display font-bold text-xl flex items-center justify-center shrink-0">
            {state.displayName.charAt(0).toUpperCase() || (
              <User className="w-6 h-6" />
            )}
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-[#1E1B2E]">
              {state.displayName}
            </h1>
            <p className="text-xs text-[#6E6882]">
              Preparing for{" "}
              {state.selectedExamId === "tg-tet-2025"
                ? "Telangana TET 2025 (Paper II)"
                : "CTET Foundation Course"}{" "}
              · {state.points} Points
            </p>
          </div>
        </div>

        {/* Display Name Editor */}
        <div className="space-y-1.5">
          <label
            htmlFor="display-name-input"
            className="text-xs font-semibold text-[#4A445D]"
          >
            Display Name
          </label>
          <div className="flex items-center gap-2">
            <input
              id="display-name-input"
              type="text"
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              className="flex-1 min-h-[44px] px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD6CA] text-sm text-[#1E1B2E] focus:outline-2 focus:outline-[#4338CA]"
            />
            <button
              type="button"
              onClick={handleSaveName}
              className="px-4 py-2 min-h-[44px] rounded-xl bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-semibold cursor-pointer"
            >
              {savedNameToast ? "Saved ✓" : "Save"}
            </button>
          </div>
        </div>

        {/* Quick Progress Summary */}
        <div className="grid grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <div className="flex items-center gap-1.5 text-amber-600">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span className="font-mono font-bold text-base tabular-nums text-[#1E1B2E]">
                {state.currentStreak}d
              </span>
            </div>
            <div className="text-[11px] text-[#6E6882] mt-0.5">
              Streak (Best: {state.bestStreak}d)
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <div className="font-mono font-bold text-base tabular-nums text-[#1E1B2E]">
              {completedTopicsCount}/{totalTopicsCount}
            </div>
            <div className="text-[11px] text-[#6E6882] mt-0.5">
              Path Topics Done
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <div className="font-mono font-bold text-base tabular-nums text-[#059669]">
              {state.masteredQuestionIds.length}
            </div>
            <div className="text-[11px] text-[#6E6882] mt-0.5">
              PYQs Mastered
            </div>
          </div>
        </div>
      </section>

      {/* Study Preferences: Exam, Daily Goal, Language & Notifications */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-5">
        <h2 className="font-display font-bold text-lg text-[#1E1B2E]">
          Study & App Preferences
        </h2>

        {/* Exam Selection */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F2EFE9]">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#4338CA]" />
            <div>
              <div className="text-sm font-semibold text-[#1E1B2E]">
                Selected Examination
              </div>
              <div className="text-xs text-[#6E6882]">
                {state.selectedExamId === "tg-tet-2025"
                  ? "TG TET 2025 · Paper II Maths & Science"
                  : "CTET Preparation Course (Sample)"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {(
              [
                { id: "tg-tet-2025", label: "TG TET 2025" },
                { id: "ctet-sample", label: "CTET Sample" },
              ] as { id: ExamCourseId; label: string }[]
            ).map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => onUpdatePreferences({ selectedExamId: ex.id })}
                className={`px-3 py-2 min-h-[38px] rounded-xl text-xs font-semibold border cursor-pointer ${
                  state.selectedExamId === ex.id
                    ? "bg-indigo-50 border-[#4338CA] text-[#4338CA]"
                    : "bg-[#FAF8F5] border-[#E2DCD2] text-[#5C5670]"
                }`}
              >
                {ex.label}
              </button>
            ))}
            <button
              type="button"
              onClick={onOpenExamDrawer}
              className="px-3 py-2 min-h-[38px] rounded-xl bg-[#FAF8F5] border border-[#E2DCD2] text-xs font-semibold text-[#2E294E] hover:border-indigo-300 cursor-pointer"
            >
              All Govt Exams
            </button>
          </div>
        </div>

        {/* Language Preference */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F2EFE9]">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#4338CA]" />
            <div>
              <div className="text-sm font-semibold text-[#1E1B2E]">
                Question & Explanation Language
              </div>
              <div className="text-xs text-[#6E6882]">
                Switch anytime between English, Telugu, or side-by-side bilingual view.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {(
              [
                { mode: LanguageMode.EN, label: "English" },
                { mode: LanguageMode.TE, label: "తెలుగు" },
                { mode: LanguageMode.BOTH, label: "Bilingual" },
              ] as const
            ).map((l) => (
              <button
                key={l.mode}
                type="button"
                onClick={() => onUpdatePreferences({ language: l.mode })}
                className={`px-3 py-2 min-h-[38px] rounded-xl text-xs font-semibold border cursor-pointer ${
                  state.language === l.mode
                    ? "bg-indigo-50 border-[#4338CA] text-[#4338CA]"
                    : "bg-[#FAF8F5] border-[#E2DCD2] text-[#5C5670]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Study Goal */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F2EFE9]">
          <div>
            <div className="text-sm font-semibold text-[#1E1B2E]">
              Daily Study Target
            </div>
            <div className="text-xs text-[#6E6882]">
              Completing this target earns +30 daily streak bonus points.
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {(
              [
                { id: DailyGoalType.ONE_TOPIC, label: "1 Topic" },
                { id: DailyGoalType.FIVE_QUESTIONS, label: "5 Questions" },
                { id: DailyGoalType.TEN_MINUTES, label: "10 Mins" },
              ] as const
            ).map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => onUpdatePreferences({ dailyGoal: g.id })}
                className={`px-3 py-2 min-h-[38px] rounded-xl text-xs font-semibold border cursor-pointer ${
                  state.dailyGoal === g.id
                    ? "bg-indigo-50 border-[#4338CA] text-[#4338CA]"
                    : "bg-[#FAF8F5] border-[#E2DCD2] text-[#5C5670]"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Reminder Notifications Toggle */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-[#4338CA]" />
            <div>
              <div className="text-sm font-semibold text-[#1E1B2E]">
                Gentle Daily Study Reminders
              </div>
              <div className="text-xs text-[#6E6882]">
                Evening streak reminder preference
              </div>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={state.notificationsEnabled}
            onClick={() =>
              onUpdatePreferences({
                notificationsEnabled: !state.notificationsEnabled,
              })
            }
            className={`px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-semibold border flex items-center gap-1.5 cursor-pointer ${
              state.notificationsEnabled
                ? "bg-emerald-50 border-emerald-300 text-[#059669]"
                : "bg-[#FAF8F5] border-[#DCD6CA] text-[#6E6882]"
            }`}
          >
            {state.notificationsEnabled && <Check className="w-3.5 h-3.5" />}
            <span>{state.notificationsEnabled ? "Enabled" : "Paused"}</span>
          </button>
        </div>
      </section>

      {/* Subscription, Referral & Prototype Testing Controls */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4338CA]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Subscription & Referral Status</span>
            </div>
            <h2 className="font-display font-bold text-lg text-[#1E1B2E]">
              {subscriptionStatus.isPremiumUnlocked
                ? `Full PYQ Pass Active (Demo Unlocked at ₹${
                    state.paidAmount ?? subscriptionStatus.applicablePrice
                  })`
                : subscriptionStatus.isTrialActive
                ? `30-Day Free Plan Active (${subscriptionStatus.daysRemaining} Days Remaining)`
                : "30-Day Free Trial Ended · Post-Trial Upgrade Available"}
            </h2>
            <p className="text-xs text-[#5C5670]">
              Your Referral Code:{" "}
              <span className="font-mono font-semibold text-[#1E1B2E]">
                {state.myReferralCode}
              </span>{" "}
              · Standard Post-Trial: ₹150 · Eligible Referral Offer: ₹100
              {state.appliedReferralCode &&
                ` (Code ${state.appliedReferralCode} applied!)`}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenUpgradeModal}
            className="px-4 py-2.5 min-h-[42px] rounded-xl bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-semibold cursor-pointer"
          >
            Open Plan & Referral Offer
          </button>
        </div>

        {/* Prototype Demo Control: Preview Post-30-Day Trial Paywall */}
        {!subscriptionStatus.isPremiumUnlocked && (
          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-[#4A445D]">
              <strong className="font-semibold text-[#1E1B2E]">
                Prototype Tester Switch:
              </strong>{" "}
              Preview how the app behaves after the 30-day free plan ends (Day 31 paywall + ₹150/₹100 upgrade).
            </div>
            <button
              type="button"
              onClick={() =>
                onUpdatePreferences({
                  simulateTrialExpired: !state.simulateTrialExpired,
                })
              }
              className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold border cursor-pointer ${
                state.simulateTrialExpired
                  ? "bg-amber-100 border-amber-300 text-amber-900"
                  : "bg-white border-[#DCD6CA] text-[#2E294E]"
              }`}
            >
              {state.simulateTrialExpired
                ? "Showing Day 31 (Trial Expired) · Switch Back"
                : "Simulate Day 31 (Post-Trial)"}
            </button>
          </div>
        )}

        {/* Reset Demo Progress */}
        <div className="pt-3 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#6E6882]">
            Reset all local demo streaks, unlocked nodes, points, chests, and subscription state.
          </div>
          {!confirmReset ? (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Demo Progress</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="px-3 py-1.5 min-h-[36px] rounded-lg bg-[#FAF8F5] border border-[#DCD6CA] text-xs font-semibold text-[#2E294E] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetDemoProgress();
                  setConfirmReset(false);
                }}
                className="px-3 py-1.5 min-h-[36px] rounded-lg bg-rose-600 text-white text-xs font-semibold cursor-pointer"
              >
                Confirm Full Reset
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
