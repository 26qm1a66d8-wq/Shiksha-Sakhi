import { useMemo, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { HeaderBar } from "./components/HeaderBar";
import { BottomNav } from "./components/BottomNav";
import {
  ExamSelectorPanel,
  MobileExamDrawer,
} from "./components/ExamSidebarDrawer";
import { LearningPathView } from "./components/LearningPathView";
import { TopicLessonView } from "./components/TopicLessonView";
import { QuizExperience } from "./components/QuizExperience";
import { PracticeHubView } from "./components/PracticeHubView";
import { RewardsView } from "./components/RewardsView";
import { ProfileView } from "./components/ProfileView";
import { RightProgressRail } from "./components/RightProgressRail";
import { TreasureChestModal } from "./components/TreasureChestModal";
import { UpgradeModal } from "./components/UpgradeModalAndCard";
import { TREASURE_CHESTS_CATALOG } from "./data/examsCatalog";
import { LEARNING_UNITS } from "./data/learningPaths";
import { useProgressStore } from "./store/useProgressStore";
import {
  LearningPathNode,
  NavSection,
  NodeType,
  QuizSessionConfig,
} from "./types";

export default function App() {
  const {
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
  } = useProgressStore();

  const [activeNav, setActiveNav] = useState<NavSection>(NavSection.LEARN);
  const [selectedTopicNode, setSelectedTopicNode] =
    useState<LearningPathNode | null>(null);
  const [activeQuizSession, setActiveQuizSession] =
    useState<QuizSessionConfig | null>(null);
  const [activeChestModalId, setActiveChestModalId] = useState<string | null>(
    null
  );
  const [isExamDrawerOpen, setIsExamDrawerOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const activeUnits = useMemo(
    () => LEARNING_UNITS.filter((u) => u.examId === state.selectedExamId),
    [state.selectedExamId]
  );

  const courseNodes = useMemo(
    () => getCourseNodes(state.selectedExamId),
    [getCourseNodes, state.selectedExamId]
  );

  const topicNodesForCourse = useMemo(
    () => courseNodes.filter((n) => n.type !== NodeType.CHEST),
    [courseNodes]
  );

  const completedTopicsCount = useMemo(
    () =>
      topicNodesForCourse.filter((n) =>
        state.completedNodeIds.includes(n.id)
      ).length,
    [state.completedNodeIds, topicNodesForCourse]
  );

  const activeChestConfig = useMemo(
    () =>
      activeChestModalId
        ? TREASURE_CHESTS_CATALOG.find((c) => c.id === activeChestModalId) ??
          null
        : null,
    [activeChestModalId]
  );

  const handleSelectNav = (nav: NavSection) => {
    setActiveNav(nav);
    setSelectedTopicNode(null);
    setActiveQuizSession(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartTopicPractice = (node: LearningPathNode) => {
    setActiveQuizSession({
      title: node.titleEn,
      subtitle: "Topic Practice Quiz",
      questionIds: node.questionIds,
      originNodeId: node.id,
      mode: "topic",
    });
    setSelectedTopicNode(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1B2E]">
      {/* Compact Sticky Top Header */}
      <HeaderBar
        selectedExamId={state.selectedExamId}
        language={state.language}
        currentStreak={state.currentStreak}
        dailyPercent={dailyGoalProgress.percent}
        displayName={state.displayName}
        activeNav={activeNav}
        onSelectNav={handleSelectNav}
        onChangeLanguage={(language) => updateProfilePreferences({ language })}
        onOpenExamDrawer={() => setIsExamDrawerOpen(true)}
      />

      {/* Friendly Daily Goal Celebration Banner */}
      {celebrationBanner && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#059669] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-[#064E3B]">
                  {celebrationBanner.title}
                </div>
                <div className="text-xs text-[#047857]">
                  {celebrationBanner.subtitle}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={dismissCelebration}
              aria-label="Dismiss celebration banner"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#064E3B] hover:bg-emerald-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Responsive Workspace (Mobile Single-Column -> Desktop 3-Column) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-5 pb-20 lg:pb-10 flex items-start gap-6 bg-[#9380ed]">
        {/* Desktop Left Sidebar: Exam Chooser + All-India Govt Exams ("Coming Soon") */}
        <aside className="hidden lg:block w-72 shrink-0 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto bg-white rounded-3xl border border-[#E8E2D9] p-5 shadow-2xs">
          <ExamSelectorPanel
            selectedExamId={state.selectedExamId}
            interestedExamIds={state.interestedExamIds}
            onSelectExamCourse={(courseId) => {
              updateProfilePreferences({ selectedExamId: courseId });
              setSelectedTopicNode(null);
              setActiveQuizSession(null);
              setActiveNav(NavSection.LEARN);
            }}
            onToggleExamInterest={toggleExamInterest}
          />
        </aside>

        {/* Center Primary View Stage */}
        <div className="flex-1 min-w-0">
          {activeQuizSession ? (
            <QuizExperience
              key={`${activeQuizSession.title}-${activeQuizSession.questionIds.join(",")}`}
              session={activeQuizSession}
              language={state.language}
              onChangeLanguage={(language) =>
                updateProfilePreferences({ language })
              }
              onRecordAnswer={recordQuestionAnswer}
              onCompleteSession={completeQuizOrTopic}
              onExit={() => setActiveQuizSession(null)}
              onRestartWithQuestions={(newSession) =>
                setActiveQuizSession(newSession)
              }
            />
          ) : selectedTopicNode ? (
            <TopicLessonView
              node={selectedTopicNode}
              isCompleted={state.completedNodeIds.includes(
                selectedTopicNode.id
              )}
              language={state.language}
              onChangeLanguage={(language) =>
                updateProfilePreferences({ language })
              }
              onBack={() => setSelectedTopicNode(null)}
              onStartPractice={handleStartTopicPractice}
            />
          ) : activeNav === NavSection.LEARN ? (
            <LearningPathView
              selectedExamId={state.selectedExamId}
              units={activeUnits}
              language={state.language}
              currentStreak={state.currentStreak}
              getNodeStatus={getNodeStatus}
              onOpenTopicNode={(node) => {
                setSelectedTopicNode(node);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenChestNode={(chestId) => setActiveChestModalId(chestId)}
              onOpenExamDrawer={() => setIsExamDrawerOpen(true)}
            />
          ) : activeNav === NavSection.PRACTICE ? (
            <PracticeHubView
              language={state.language}
              incorrectQuestionIds={state.incorrectQuestionIds}
              masteredQuestionIds={state.masteredQuestionIds}
              subscriptionStatus={subscriptionStatus}
              onStartQuizSession={(session) => {
                setActiveQuizSession(session);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenUpgradeModal={() => setIsUpgradeModalOpen(true)}
            />
          ) : activeNav === NavSection.REWARDS ? (
            <RewardsView
              points={state.points}
              currentStreak={state.currentStreak}
              bestStreak={state.bestStreak}
              dailyGoal={state.dailyGoal}
              dailyGoalProgress={dailyGoalProgress}
              earnedBadgeIds={state.earnedBadgeIds}
              claimedChestIds={state.claimedChestIds}
              selectedExamId={state.selectedExamId}
              courseNodes={courseNodes}
              getNodeStatus={getNodeStatus}
              myReferralCode={state.myReferralCode}
              appliedReferralCode={state.appliedReferralCode}
              subscriptionStatus={subscriptionStatus}
              language={state.language}
              onChangeDailyGoal={(dailyGoal) =>
                updateProfilePreferences({ dailyGoal })
              }
              onOpenChest={(chestId) => setActiveChestModalId(chestId)}
              onOpenUpgradeModal={() => setIsUpgradeModalOpen(true)}
            />
          ) : (
            <ProfileView
              state={state}
              completedTopicsCount={completedTopicsCount}
              totalTopicsCount={topicNodesForCourse.length}
              subscriptionStatus={subscriptionStatus}
              onUpdatePreferences={updateProfilePreferences}
              onOpenExamDrawer={() => setIsExamDrawerOpen(true)}
              onOpenUpgradeModal={() => setIsUpgradeModalOpen(true)}
              onResetDemoProgress={resetDemoProgress}
            />
          )}
        </div>

        {/* Desktop Right Rail: Daily Goal, Streak & 30-Day Free Trial Card */}
        {!activeQuizSession && (
          <RightProgressRail
            points={state.points}
            currentStreak={state.currentStreak}
            bestStreak={state.bestStreak}
            dailyGoalProgress={dailyGoalProgress}
            subscriptionStatus={subscriptionStatus}
            onOpenUpgrade={() => setIsUpgradeModalOpen(true)}
            onGoToRewards={() => handleSelectNav(NavSection.REWARDS)}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      {!activeQuizSession && (
        <BottomNav
          activeNav={activeNav}
          mistakeCount={state.incorrectQuestionIds.length}
          onSelectNav={handleSelectNav}
        />
      )}

      {/* Mobile / Tablet Slide-Over Exam Selector Drawer */}
      <MobileExamDrawer
        isOpen={isExamDrawerOpen}
        onClose={() => setIsExamDrawerOpen(false)}
        selectedExamId={state.selectedExamId}
        interestedExamIds={state.interestedExamIds}
        onSelectExamCourse={(courseId) => {
          updateProfilePreferences({ selectedExamId: courseId });
          setSelectedTopicNode(null);
          setActiveQuizSession(null);
          setActiveNav(NavSection.LEARN);
        }}
        onToggleExamInterest={toggleExamInterest}
      />

      {/* Interactive Treasure Chest Opening Modal */}
      {activeChestConfig && (
        <TreasureChestModal
          key={activeChestConfig.id}
          chest={activeChestConfig}
          alreadyClaimed={state.claimedChestIds.includes(activeChestConfig.id)}
          language={state.language}
          onClaim={(chestId) => claimTreasureChest(chestId)}
          onClose={() => setActiveChestModalId(null)}
        />
      )}

      {/* 30-Day Free Plan + Post-Trial Rs 150 / Rs 100 Referral Upgrade Modal */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        myReferralCode={state.myReferralCode}
        appliedReferralCode={state.appliedReferralCode}
        subscriptionStatus={subscriptionStatus}
        onApplyReferral={applyReferralCode}
        onRemoveReferral={removeReferralCode}
        onConfirmSimulatedPurchase={activateSimulatedPremium}
      />
    </div>
  );
}
