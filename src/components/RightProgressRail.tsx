import { Flame, Gift, Sparkles, Target } from "lucide-react";

interface RightProgressRailProps {
  points: number;
  currentStreak: number;
  bestStreak: number;
  dailyGoalProgress: {
    current: number;
    target: number;
    unitLabel: string;
    percent: number;
    isMet: boolean;
  };
  subscriptionStatus: {
    daysRemaining: number;
    isTrialActive: boolean;
    isPremiumUnlocked: boolean;
    applicablePrice: number;
  };
  onOpenUpgrade: () => void;
  onGoToRewards: () => void;
}

export function RightProgressRail({
  points,
  currentStreak,
  bestStreak,
  dailyGoalProgress,
  subscriptionStatus,
  onOpenUpgrade,
  onGoToRewards,
}: RightProgressRailProps) {
  return (
    <aside className="hidden xl:block w-80 shrink-0 space-y-5">
      {/* Daily Goal & Streak Card */}
      <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-sm text-[#1E1B2E]">
            <Target className="w-4 h-4 text-[#4338CA]" />
            <span>Today's Goal</span>
          </div>
          <span className="font-mono text-xs font-semibold tabular-nums text-[#4338CA]">
            {dailyGoalProgress.current}/{dailyGoalProgress.target}{" "}
            {dailyGoalProgress.unitLabel}
          </span>
        </div>

        <div className="h-2.5 w-full rounded-full bg-[#EFECE6] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#059669] transition-all duration-300"
            style={{ width: `${Math.max(dailyGoalProgress.percent, 5)}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <div className="flex items-center gap-1.5">
              <Flame
                className={`w-4 h-4 ${
                  currentStreak > 0
                    ? "text-amber-500 fill-amber-500"
                    : "text-[#8A849E]"
                }`}
              />
              <span className="font-mono font-bold text-sm tabular-nums text-[#1E1B2E]">
                {currentStreak}d
              </span>
            </div>
            <div className="text-[11px] text-[#6E6882] mt-0.5">
              Best: {bestStreak}d
            </div>
          </div>

          <button
            type="button"
            onClick={onGoToRewards}
            className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-left hover:bg-amber-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="font-mono font-bold text-sm tabular-nums text-[#1E1B2E]">
                {points}
              </span>
            </div>
            <div className="text-[11px] text-amber-900 mt-0.5">Sakhi Points</div>
          </button>
        </div>
      </div>

      {/* 30-Day Free Plan + Referral Card */}
      <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4338CA]">
          <Gift className="w-4 h-4" />
          <span>
            {subscriptionStatus.isPremiumUnlocked
              ? "Full PYQ Pass Active"
              : subscriptionStatus.isTrialActive
              ? `30-Day Free Plan (${subscriptionStatus.daysRemaining}d left)`
              : "Post-Trial PYQ Pass"}
          </span>
        </div>

        <p className="text-xs text-[#5C5670] leading-relaxed">
          {subscriptionStatus.isPremiumUnlocked
            ? "You have unlocked unlimited access to all organized TG TET 2025 PYQ sections."
            : "Enjoy 30 days of free PYQ practice! Afterwards, continue for ₹150—or ₹100 using a referral code (try SAKHI100)."}
        </p>

        <button
          type="button"
          onClick={onOpenUpgrade}
          className="w-full py-2.5 px-4 min-h-[42px] rounded-xl bg-indigo-50 hover:bg-indigo-100 text-[#4338CA] text-xs font-semibold transition-colors cursor-pointer"
        >
          {subscriptionStatus.isPremiumUnlocked
            ? "View Pass Details"
            : `View ₹150 / ₹100 Referral Offer`}
        </button>
      </div>
    </aside>
  );
}
