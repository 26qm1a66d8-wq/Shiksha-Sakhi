import { useCallback, useEffect, useMemo, useState } from "react";
import {
  DailyGoalType,
  ExamCourseId,
  LanguageMode,
  LearningPathNode,
  NodeType,
  UserProgressState,
} from "../types";
import { LEARNING_UNITS } from "../data/learningPaths";
import { TREASURE_CHESTS_CATALOG, VALID_DEMO_REFERRAL_CODES } from "../data/examsCatalog";

const STORAGE_KEY = "shiksha_sakhi_progress_v1";

export function getLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getPreviousDateString(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() - 1);
  return getLocalDateString(dt);
}

function createInitialState(): UserProgressState {
  const today = getLocalDateString();
  return {
    displayName: "Ananya Sharma",
    selectedExamId: "tg-tet-2025",
    language: LanguageMode.BOTH,
    dailyGoal: DailyGoalType.FIVE_QUESTIONS,
    notificationsEnabled: true,

    points: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastActiveDate: null,
    todayDate: today,
    todayTopicsCompleted: 0,
    todayQuestionsAnswered: 0,
    todayMinutesStudied: 0,
    dailyGoalCelebratedDate: null,

    completedNodeIds: [],
    claimedChestIds: [],
    earnedBadgeIds: [],
    completedQuizIds: [],
    incorrectQuestionIds: [],
    masteredQuestionIds: [],

    trialStartDate: new Date().toISOString(),
    simulateTrialExpired: false,
    isPremiumUnlocked: false,
    paidAmount: null,
    myReferralCode: "ANANYA100",
    appliedReferralCode: null,
    interestedExamIds: [],
  };
}

function normalizeStateForToday(raw: UserProgressState): UserProgressState {
  const today = getLocalDateString();
  const yesterday = getPreviousDateString(today);

  let currentStreak = raw.currentStreak;
  if (raw.lastActiveDate && raw.lastActiveDate !== today && raw.lastActiveDate !== yesterday) {
    // Streak resets if a full local calendar day was missed
    currentStreak = 0;
  }

  if (raw.todayDate !== today) {
    return {
      ...raw,
      currentStreak,
      todayDate: today,
      todayTopicsCompleted: 0,
      todayQuestionsAnswered: 0,
      todayMinutesStudied: 0,
    };
  }

  return {
    ...raw,
    currentStreak,
  };
}

export function useProgressStore() {
  const [state, setState] = useState<UserProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as UserProgressState;
        return normalizeStateForToday({ ...createInitialState(), ...parsed });
      }
    } catch {
      // Ignore malformed storage and start cleanly
    }
    return createInitialState();
  });

  const [celebrationBanner, setCelebrationBanner] = useState<{
    title: string;
    subtitle: string;
  } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }
  }, [state]);

  const dismissCelebration = useCallback(() => {
    setCelebrationBanner(null);
  }, []);

  // Compute daily goal status
  const dailyGoalProgress = useMemo(() => {
    if (state.dailyGoal === DailyGoalType.ONE_TOPIC) {
      const current = Math.min(state.todayTopicsCompleted, 1);
      return {
        current,
        target: 1,
        unitLabel: "topic",
        percent: Math.round((current / 1) * 100),
        isMet: state.todayTopicsCompleted >= 1,
      };
    }
    if (state.dailyGoal === DailyGoalType.FIVE_QUESTIONS) {
      const current = Math.min(state.todayQuestionsAnswered, 5);
      return {
        current,
        target: 5,
        unitLabel: "questions",
        percent: Math.round((current / 5) * 100),
        isMet: state.todayQuestionsAnswered >= 5,
      };
    }
    const current = Math.min(state.todayMinutesStudied, 10);
    return {
      current,
      target: 10,
      unitLabel: "mins",
      percent: Math.round((current / 10) * 100),
      isMet: state.todayMinutesStudied >= 10,
    };
  }, [
    state.dailyGoal,
    state.todayMinutesStudied,
    state.todayQuestionsAnswered,
    state.todayTopicsCompleted,
  ]);

  // Compute 30-day free trial status
  const subscriptionStatus = useMemo(() => {
    const startMs = new Date(state.trialStartDate).getTime();
    const nowMs = Date.now();
    const elapsedDays = Math.max(0, Math.floor((nowMs - startMs) / (1000 * 60 * 60 * 24)));
    const daysRemaining = state.simulateTrialExpired ? 0 : Math.max(0, 30 - elapsedDays);
    const isTrialActive = !state.isPremiumUnlocked && daysRemaining > 0;
    const hasFullPyqAccess = state.isPremiumUnlocked || isTrialActive;
    const applicablePrice = state.appliedReferralCode ? 100 : 150;

    return {
      daysRemaining,
      isTrialActive,
      isPremiumUnlocked: state.isPremiumUnlocked,
      hasFullPyqAccess,
      applicablePrice,
      standardPrice: 150,
      referralPrice: 100,
    };
  }, [
    state.appliedReferralCode,
    state.isPremiumUnlocked,
    state.simulateTrialExpired,
    state.trialStartDate,
  ]);

  // Ordered nodes for a given course
  const getCourseNodes = useCallback((examId: ExamCourseId): LearningPathNode[] => {
    return LEARNING_UNITS.filter((u) => u.examId === examId)
      .flatMap((u) => u.nodes)
      .sort((a, b) => a.orderIndex - b.orderIndex);
  }, []);

  // Determine node status on the ladder
  const getNodeStatus = useCallback(
    (
      node: LearningPathNode
    ): "completed" | "current" | "unlocked_chest" | "claimed_chest" | "locked" => {
      const courseNodes = getCourseNodes(node.examId);
      const idx = courseNodes.findIndex((n) => n.id === node.id);

      if (node.type === NodeType.CHEST && node.chestId) {
        if (state.claimedChestIds.includes(node.chestId)) {
          return "claimed_chest";
        }
        // Unlocked if the immediately preceding node in the unit is completed
        const prevNode = idx > 0 ? courseNodes[idx - 1] : null;
        if (!prevNode || state.completedNodeIds.includes(prevNode.id)) {
          return "unlocked_chest";
        }
        return "locked";
      }

      if (state.completedNodeIds.includes(node.id)) {
        return "completed";
      }

      if (idx === 0) {
        return "current";
      }

      const prevNode = courseNodes[idx - 1];
      // If prevNode is a chest, check whether either the chest is claimed OR the topic before the chest is completed
      if (prevNode.type === NodeType.CHEST) {
        const beforeChest = idx >= 2 ? courseNodes[idx - 2] : null;
        const prevUnitDone =
          (prevNode.chestId && state.claimedChestIds.includes(prevNode.chestId)) ||
          (beforeChest && state.completedNodeIds.includes(beforeChest.id));
        return prevUnitDone ? "current" : "locked";
      }

      if (state.completedNodeIds.includes(prevNode.id)) {
        return "current";
      }

      return "locked";
    },
    [getCourseNodes, state.claimedChestIds, state.completedNodeIds]
  );

  // Record an answer attempt (saves mistakes or masters revised mistakes)
  const recordQuestionAnswer = useCallback((questionId: string, isCorrect: boolean) => {
    setState((prev) => {
      const normalized = normalizeStateForToday(prev);
      let incorrectQuestionIds = [...normalized.incorrectQuestionIds];
      let masteredQuestionIds = [...normalized.masteredQuestionIds];

      if (!isCorrect) {
        if (!incorrectQuestionIds.includes(questionId)) {
          incorrectQuestionIds.push(questionId);
        }
      } else {
        if (incorrectQuestionIds.includes(questionId)) {
          incorrectQuestionIds = incorrectQuestionIds.filter((id) => id !== questionId);
        }
        if (!masteredQuestionIds.includes(questionId)) {
          masteredQuestionIds.push(questionId);
        }
      }

      return {
        ...normalized,
        todayQuestionsAnswered: normalized.todayQuestionsAnswered + 1,
        incorrectQuestionIds,
        masteredQuestionIds,
      };
    });
  }, []);

  // Complete a meaningful learning activity (Topic node OR standalone Practice Quiz)
  const completeQuizOrTopic = useCallback(
    (params: {
      nodeId?: string;
      quizSessionKey: string;
      correctCount: number;
      totalQuestions: number;
      minutesSpent: number;
    }): { pointsAwarded: number; newlyUnlockedNextTitle?: string } => {
      let awarded = 0;
      let nextTitle: string | undefined;

      setState((prev) => {
        const normalized = normalizeStateForToday(prev);
        const today = getLocalDateString();
        const yesterday = getPreviousDateString(today);

        // Streak activation on meaningful learning completion
        let currentStreak = normalized.currentStreak;
        let lastActiveDate = normalized.lastActiveDate;
        if (lastActiveDate !== today) {
          if (lastActiveDate === yesterday) {
            currentStreak = currentStreak + 1;
          } else {
            currentStreak = 1;
          }
          lastActiveDate = today;
        }
        const bestStreak = Math.max(normalized.bestStreak, currentStreak);

        const completedNodeIds = [...normalized.completedNodeIds];
        const completedQuizIds = [...normalized.completedQuizIds];
        const earnedBadgeIds = [...normalized.earnedBadgeIds];

        let todayTopicsCompleted = normalized.todayTopicsCompleted;
        const todayMinutesStudied =
          normalized.todayMinutesStudied + Math.max(2, params.minutesSpent);

        // Award topic completion points ONLY ONCE per nodeId (idempotent!)
        if (params.nodeId) {
          const allNodes = getCourseNodes(normalized.selectedExamId);
          const targetNode =
            allNodes.find((n) => n.id === params.nodeId) ??
            LEARNING_UNITS.flatMap((u) => u.nodes).find((n) => n.id === params.nodeId);

          if (targetNode && !completedNodeIds.includes(targetNode.id)) {
            completedNodeIds.push(targetNode.id);
            awarded += targetNode.pointsReward;
            todayTopicsCompleted += 1;

            if (!earnedBadgeIds.includes("badge-first-step")) {
              earnedBadgeIds.push("badge-first-step");
            }

            const courseNodes = getCourseNodes(targetNode.examId);
            const curIdx = courseNodes.findIndex((n) => n.id === targetNode.id);
            if (curIdx >= 0 && curIdx + 1 < courseNodes.length) {
              nextTitle = courseNodes[curIdx + 1].titleEn;
            }
          }
        } else if (!completedQuizIds.includes(params.quizSessionKey)) {
          // Standalone PYQ practice quiz bonus (once per unique quiz session key)
          completedQuizIds.push(params.quizSessionKey);
          awarded += Math.max(15, params.correctCount * 10);
        }

        // Check if daily goal was just met today
        const goalMetNow =
          (normalized.dailyGoal === DailyGoalType.ONE_TOPIC && todayTopicsCompleted >= 1) ||
          (normalized.dailyGoal === DailyGoalType.FIVE_QUESTIONS &&
            normalized.todayQuestionsAnswered >= 5) ||
          (normalized.dailyGoal === DailyGoalType.TEN_MINUTES && todayMinutesStudied >= 10);

        let dailyGoalCelebratedDate = normalized.dailyGoalCelebratedDate;
        if (goalMetNow && dailyGoalCelebratedDate !== today) {
          dailyGoalCelebratedDate = today;
          awarded += 30; // Daily goal completion bonus
          if (!earnedBadgeIds.includes("badge-daily-champion")) {
            earnedBadgeIds.push("badge-daily-champion");
          }
          setCelebrationBanner({
            title: `Daily Goal Complete! ${currentStreak}-Day Streak Active`,
            subtitle:
              "You earned +30 bonus points for completing today's learning target.",
          });
        }

        return {
          ...normalized,
          points: normalized.points + awarded,
          currentStreak,
          bestStreak,
          lastActiveDate,
          todayTopicsCompleted,
          todayMinutesStudied,
          dailyGoalCelebratedDate,
          completedNodeIds,
          completedQuizIds,
          earnedBadgeIds,
        };
      });

      return { pointsAwarded: awarded, newlyUnlockedNextTitle: nextTitle };
    },
    [getCourseNodes]
  );

  // Claim a milestone treasure chest (idempotent — cannot be claimed twice)
  const claimTreasureChest = useCallback((chestId: string) => {
    const chest = TREASURE_CHESTS_CATALOG.find((c) => c.id === chestId);
    if (!chest) return null;

    let claimedNow = false;
    setState((prev) => {
      if (prev.claimedChestIds.includes(chestId)) {
        return prev;
      }
      claimedNow = true;
      const earnedBadgeIds = prev.earnedBadgeIds.includes(chest.badgeId)
        ? prev.earnedBadgeIds
        : [...prev.earnedBadgeIds, chest.badgeId];

      return {
        ...prev,
        points: prev.points + chest.bonusPoints,
        claimedChestIds: [...prev.claimedChestIds, chestId],
        earnedBadgeIds,
      };
    });

    return claimedNow ? chest : chest;
  }, []);

  // Validate and apply referral code
  const applyReferralCode = useCallback(
    (rawCode: string): { valid: boolean; message: string } => {
      const code = rawCode.trim().toUpperCase();
      if (!code) {
        return { valid: false, message: "Please enter a referral code." };
      }
      if (code === state.myReferralCode.toUpperCase()) {
        return {
          valid: false,
          message: "You cannot apply your own personal referral code. Try SAKHI100!",
        };
      }
      const isValidDemo =
        VALID_DEMO_REFERRAL_CODES.includes(code) || /^[A-Z]{4,10}100$/.test(code);

      if (!isValidDemo) {
        return {
          valid: false,
          message: "Invalid code for demo. Try SAKHI100, TET2025, or WOMEN100.",
        };
      }

      setState((prev) => ({
        ...prev,
        appliedReferralCode: code,
      }));
      return {
        valid: true,
        message: `Referral code ${code} applied! Your post-trial plan is now ₹100 instead of ₹150.`,
      };
    },
    [state.myReferralCode]
  );

  const removeReferralCode = useCallback(() => {
    setState((prev) => ({ ...prev, appliedReferralCode: null }));
  }, []);

  // Simulate prototype purchase activation
  const activateSimulatedPremium = useCallback(() => {
    setState((prev) => {
      const price = prev.appliedReferralCode ? 100 : 150;
      return {
        ...prev,
        isPremiumUnlocked: true,
        paidAmount: price,
        simulateTrialExpired: false,
      };
    });
  }, []);

  const updateProfilePreferences = useCallback(
    (
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
    ) => {
      setState((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  const toggleExamInterest = useCallback((govExamId: string) => {
    setState((prev) => {
      const exists = prev.interestedExamIds.includes(govExamId);
      return {
        ...prev,
        interestedExamIds: exists
          ? prev.interestedExamIds.filter((id) => id !== govExamId)
          : [...prev.interestedExamIds, govExamId],
      };
    });
  }, []);

  const resetDemoProgress = useCallback(() => {
    const fresh = createInitialState();
    localStorage.removeItem(STORAGE_KEY);
    setState(fresh);
    setCelebrationBanner(null);
  }, []);

  return {
    state,
    dailyGoalProgress,
    subscriptionStatus,
    celebrationBanner,
    dismissCelebration,
    getCourseNodes,
    getNodeStatus,
    recordQuestionAnswer,
    completeQuizOrTopic,
    claimTreasureChest,
    applyReferralCode,
    removeReferralCode,
    activateSimulatedPremium,
    updateProfilePreferences,
    toggleExamInterest,
    resetDemoProgress,
  };
}
