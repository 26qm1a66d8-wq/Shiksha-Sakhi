import { useState } from "react";
import {
  Award,
  CheckCircle2,
  Copy,
  Flame,
  Gift,
  Lock,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { BADGES_CATALOG, TREASURE_CHESTS_CATALOG } from "../data/examsCatalog";
import {
  DailyGoalType,
  ExamCourseId,
  LanguageMode,
  LearningPathNode,
  NodeType,
} from "../types";

interface RewardsViewProps {
  points: number;
  currentStreak: number;
  bestStreak: number;
  dailyGoal: DailyGoalType;
  dailyGoalProgress: {
    current: number;
    target: number;
    unitLabel: string;
    percent: number;
    isMet: boolean;
  };
  earnedBadgeIds: string[];
  claimedChestIds: string[];
  selectedExamId: ExamCourseId;
  courseNodes: LearningPathNode[];
  getNodeStatus: (
    node: LearningPathNode
  ) => "completed" | "current" | "unlocked_chest" | "claimed_chest" | "locked";
  myReferralCode: string;
  appliedReferralCode: string | null;
  subscriptionStatus: {
    daysRemaining: number;
    isTrialActive: boolean;
    isPremiumUnlocked: boolean;
    applicablePrice: number;
  };
  language: LanguageMode;
  onChangeDailyGoal: (goal: DailyGoalType) => void;
  onOpenChest: (chestId: string) => void;
  onOpenUpgradeModal: () => void;
}

export function RewardsView({
  points,
  currentStreak,
  bestStreak,
  dailyGoal,
  dailyGoalProgress,
  earnedBadgeIds,
  claimedChestIds,
  selectedExamId,
  courseNodes,
  getNodeStatus,
  myReferralCode,
  appliedReferralCode,
  subscriptionStatus,
  language,
  onChangeDailyGoal,
  onOpenChest,
  onOpenUpgradeModal,
}: RewardsViewProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const earnedBadges = BADGES_CATALOG.filter((b) =>
    earnedBadgeIds.includes(b.id)
  );
  const upcomingBadges = BADGES_CATALOG.filter(
    (b) => !earnedBadgeIds.includes(b.id)
  );

  const chestNodes = courseNodes.filter(
    (n) => n.type === NodeType.CHEST && n.chestId
  );

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(myReferralCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      setCopiedCode(true);
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Top Metrics Grid: Points, Current Streak, Best Streak */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="font-mono font-bold text-2xl tabular-nums text-[#1E1B2E]">
              {points}
            </div>
            <div className="text-xs text-[#6E6882]">Total Sakhi Points</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-amber-600 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <div className="font-mono font-bold text-2xl tabular-nums text-[#1E1B2E]">
              {currentStreak} {currentStreak === 1 ? "day" : "days"}
            </div>
            <div className="text-xs text-[#6E6882]">Current Active Streak</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4338CA] flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="font-mono font-bold text-2xl tabular-nums text-[#1E1B2E]">
              {bestStreak} {bestStreak === 1 ? "day" : "days"}
            </div>
            <div className="text-xs text-[#6E6882]">All-Time Best Streak</div>
          </div>
        </div>
      </section>

      {/* Daily Learning Goal Card */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Target className="w-5 h-5 text-[#4338CA]" />
            <div>
              <h2 className="font-display font-bold text-base sm:text-lg text-[#1E1B2E]">
                Daily Study Goal
              </h2>
              <p className="text-xs text-[#6E6882]">
                Choose a realistic target that fits your daily routine (+30 bonus pts when met).
              </p>
            </div>
          </div>
          <span className="font-mono text-xs font-semibold tabular-nums text-[#4338CA]">
            {dailyGoalProgress.current}/{dailyGoalProgress.target}{" "}
            {dailyGoalProgress.unitLabel} today
          </span>
        </div>

        <div className="h-2.5 w-full rounded-full bg-[#EFECE6] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#059669] transition-all duration-300"
            style={{ width: `${Math.max(dailyGoalProgress.percent, 4)}%` }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2.5 pt-1">
          {(
            [
              { id: DailyGoalType.ONE_TOPIC, label: "1 Topic / Day" },
              { id: DailyGoalType.FIVE_QUESTIONS, label: "5 Questions" },
              { id: DailyGoalType.TEN_MINUTES, label: "10 Minutes" },
            ] as const
          ).map((g) => {
            const active = dailyGoal === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => onChangeDailyGoal(g.id)}
                className={`py-2.5 px-3 min-h-[44px] rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                  active
                    ? "bg-indigo-50 border-[#4338CA] text-[#4338CA]"
                    : "bg-[#FAF8F5] border-[#EAE5DC] text-[#5C5670] hover:text-[#1E1B2E]"
                }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Treasure Chest Milestones (Claimed, Claimable & Upcoming) */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-4">
        <div>
          <h2 className="font-display font-bold text-lg text-[#1E1B2E]">
            Treasure Chest Milestones ({selectedExamId === "tg-tet-2025" ? "TG TET 2025" : "CTET"})
          </h2>
          <p className="text-xs text-[#6E6882] mt-0.5">
            Finish all topics in a unit to unlock its golden treasure chest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {chestNodes.map((cNode) => {
            const chest = TREASURE_CHESTS_CATALOG.find(
              (c) => c.id === cNode.chestId
            );
            if (!chest) return null;
            const status = getNodeStatus(cNode);
            const isClaimed = claimedChestIds.includes(chest.id);
            const isClaimable = status === "unlocked_chest" && !isClaimed;

            return (
              <div
                key={chest.id}
                className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                  isClaimed
                    ? "bg-emerald-50/50 border-emerald-200"
                    : isClaimable
                    ? "bg-amber-50 border-amber-300"
                    : "bg-[#FAF8F5] border-[#EAE5DC] opacity-80"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isClaimed
                        ? "bg-emerald-100 text-[#059669]"
                        : isClaimable
                        ? "bg-amber-400 text-[#1E1B2E]"
                        : "bg-[#EAE5DC] text-[#8A849E]"
                    }`}
                  >
                    {isClaimed ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : status === "locked" ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <Gift className="w-5 h-5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-sm text-[#1E1B2E] truncate">
                      {language === LanguageMode.TE
                        ? chest.titleTe
                        : chest.titleEn}
                    </div>
                    <div className="text-xs text-[#6E6882]">
                      {isClaimed
                        ? `Claimed · +${chest.bonusPoints} pts earned`
                        : isClaimable
                        ? `Ready to open! +${chest.bonusPoints} pts`
                        : `Complete Unit ${chest.unitNumber} to unlock`}
                    </div>
                  </div>
                </div>

                {isClaimable && (
                  <button
                    type="button"
                    onClick={() => onOpenChest(chest.id)}
                    className="px-3 py-2 min-h-[38px] rounded-xl bg-amber-400 hover:bg-amber-300 text-[#1E1B2E] text-xs font-bold shrink-0 cursor-pointer"
                  >
                    Open
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Earned Badges vs Upcoming Locked Milestones */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs space-y-5">
        <div>
          <h2 className="font-display font-bold text-lg text-[#1E1B2E]">
            Earned Badges ({earnedBadges.length}/{BADGES_CATALOG.length})
          </h2>
          <p className="text-xs text-[#6E6882] mt-0.5">
            Badges celebrate real learning milestones you have completed.
          </p>
        </div>

        {earnedBadges.length === 0 ? (
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#5C5670]">
            Complete your first topic or daily goal to earn your first Shiksha Sakhi badge!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {earnedBadges.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4338CA] text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-[#1E1B2E]">
                    {b.titleEn} · {b.titleTe}
                  </div>
                  <p className="text-xs text-[#4A445D] mt-0.5">
                    {b.descriptionEn}
                  </p>
                  <p className="text-[11px] text-[#059669] font-medium mt-1">
                    Earned: {b.howEarnedEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {upcomingBadges.length > 0 && (
          <div className="pt-3 border-t border-[#EFECE6] space-y-3">
            <h3 className="font-display font-semibold text-sm text-[#5C5670]">
              Upcoming Milestones (Locked)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {upcomingBadges.map((b) => (
                <div
                  key={b.id}
                  className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-start gap-3 opacity-80"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EAE5DC] text-[#7A748E] flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-xs sm:text-sm text-[#5C5670]">
                      {b.titleEn}
                    </div>
                    <p className="text-xs text-[#6E6882] mt-0.5">
                      How to unlock: {b.howEarnedEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Referral & Subscription Offer Card */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-[#4338CA]">
            Study Together · Referral Offer
          </div>
          <h2 className="font-display font-bold text-lg text-[#1E1B2E]">
            Share Code {myReferralCode} — Unlock ₹100 PYQ Pass
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5670] leading-relaxed">
            After your 30-day free plan, standard PYQ access is ₹150—or ₹100 with an eligible referral code{" "}
            {appliedReferralCode ? `(Applied: ${appliedReferralCode})` : "(e.g. SAKHI100)"}.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-[#FAF8F5] border border-[#DCD6CA] text-xs font-semibold text-[#1E1B2E] cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
          </button>
          <button
            type="button"
            onClick={onOpenUpgradeModal}
            className="px-4 py-2.5 min-h-[44px] rounded-xl bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-semibold cursor-pointer"
          >
            {subscriptionStatus.isPremiumUnlocked
              ? "View Active Pass"
              : `Plan Details · ₹${subscriptionStatus.applicablePrice}`}
          </button>
        </div>
      </section>
    </div>
  );
}
