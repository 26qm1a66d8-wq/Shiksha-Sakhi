import { useState } from "react";
import {
  BookOpen,
  Check,
  Flame,
  Gift,
  Lock,
  Play,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import {
  ExamCourseId,
  LanguageMode,
  LearningPathNode,
  LearningUnit,
  NodeType,
} from "../types";

interface LearningPathViewProps {
  selectedExamId: ExamCourseId;
  units: LearningUnit[];
  language: LanguageMode;
  currentStreak: number;
  getNodeStatus: (
    node: LearningPathNode
  ) => "completed" | "current" | "unlocked_chest" | "claimed_chest" | "locked";
  onOpenTopicNode: (node: LearningPathNode) => void;
  onOpenChestNode: (chestId: string) => void;
  onOpenExamDrawer: () => void;
}

// Horizontal offsets (in px) to create an organic, balanced winding trail
const WINDING_OFFSETS = [0, -48, 0, 48, 0, -40];

export function LearningPathView({
  selectedExamId,
  units,
  language,
  currentStreak,
  getNodeStatus,
  onOpenTopicNode,
  onOpenChestNode,
  onOpenExamDrawer,
}: LearningPathViewProps) {
  const [lockedNoticeNodeId, setLockedNoticeNodeId] = useState<string | null>(
    null
  );

  const allNodes = units.flatMap((u) => u.nodes);
  const topicNodes = allNodes.filter((n) => n.type !== NodeType.CHEST);
  const completedTopicCount = topicNodes.filter(
    (n) => getNodeStatus(n) === "completed"
  ).length;
  const overallPercent =
    topicNodes.length > 0
      ? Math.round((completedTopicCount / topicNodes.length) * 100)
      : 0;

  // Determine active current unit
  const activeUnit =
    units.find((u) =>
      u.nodes.some((n) => {
        const st = getNodeStatus(n);
        return st === "current" || st === "unlocked_chest";
      })
    ) ?? units[units.length - 1];

  const examTitle =
    selectedExamId === "tg-tet-2025"
      ? "TG TET 2025 · Paper II (Maths & Science)"
      : "CTET Preparation Course (Sample Syllabus)";

  const renderTitle = (en: string, te: string) => {
    if (language === LanguageMode.TE) return te;
    if (language === LanguageMode.EN) return en;
    return en === te ? en : `${en} · ${te}`;
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Top Course & Journey Overview Card */}
      <section className="bg-white rounded-3xl border border-[#E8E2D9] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1 min-w-0">
            <div className="text-xs text-[#6E6882] flex items-center flex-wrap gap-1.5">
              <span>Selected Exam</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={onOpenExamDrawer}
                className="font-semibold text-[#4338CA] hover:underline cursor-pointer"
              >
                Change Exam
              </button>
            </div>
            <h1 className="font-display font-bold text-xl sm:text-2xl text-[#1E1B2E] text-balance">
              {examTitle}
            </h1>
            {activeUnit && (
              <p className="text-sm text-[#5C5670]">
                Current Focus:{" "}
                <span className="font-medium text-[#2E294E]">
                  {language === LanguageMode.TE
                    ? activeUnit.titleTe
                    : activeUnit.titleEn}
                </span>
              </p>
            )}
          </div>

          {/* Streak & Progress Numeric Summary */}
          <div className="flex items-center gap-4 bg-[#FAF8F5] border border-[#EAE5DC] rounded-2xl px-4 py-2.5 shrink-0">
            <div className="flex items-center gap-2">
              <Flame
                className={`w-5 h-5 ${
                  currentStreak > 0
                    ? "text-amber-500 fill-amber-500"
                    : "text-[#8A849E]"
                }`}
              />
              <div>
                <div className="font-mono font-semibold text-sm tabular-nums text-[#1E1B2E]">
                  {currentStreak} {currentStreak === 1 ? "day" : "days"}
                </div>
                <div className="text-[11px] text-[#6E6882]">Current Streak</div>
              </div>
            </div>
            <div className="w-px h-8 bg-[#E4DFD5]" />
            <div>
              <div className="font-mono font-semibold text-sm tabular-nums text-[#4338CA]">
                {overallPercent}%
              </div>
              <div className="text-[11px] text-[#6E6882]">
                {completedTopicCount}/{topicNodes.length} Topics
              </div>
            </div>
          </div>
        </div>

        {/* Overall Journey Progress Bar */}
        <div className="mt-4">
          <div className="h-2.5 w-full rounded-full bg-[#EFECE6] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#059669] transition-all duration-300"
              style={{ width: `${Math.max(overallPercent, 4)}%` }}
            />
          </div>
          <p className="text-xs text-[#6E6882] mt-2">
            Every Step Takes You Closer to Your Goal · Complete each node to unlock the next topic and unit treasure chests.
          </p>
        </div>
      </section>

      {/* Winding Ladder Units */}
      <div className="space-y-8">
        {units.map((unit, unitIndex) => {
          const unitTopicNodes = unit.nodes.filter(
            (n) => n.type !== NodeType.CHEST
          );
          const unitDoneCount = unitTopicNodes.filter(
            (n) => getNodeStatus(n) === "completed"
          ).length;

          return (
            <section
              key={unit.id}
              className="bg-white rounded-3xl border border-[#E8E2D9] overflow-hidden shadow-2xs"
            >
              {/* Unit Header Banner */}
              <div className="px-5 py-4 sm:px-6 sm:py-5 bg-[#F6F3EC] border-b border-[#E8E2D9] flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-xs text-[#6E6882]">
                    Unit {unit.unitNumber} ·{" "}
                    {unit.isSampleSyllabus
                      ? "Sample CTET Syllabus"
                      : "Official TG TET Jan 2025"}
                  </div>
                  <h2 className="font-display font-bold text-lg text-[#1E1B2E] mt-0.5 text-balance">
                    {renderTitle(unit.titleEn, unit.titleTe)}
                  </h2>
                  <p className="text-xs text-[#5C5670] mt-1">
                    {language === LanguageMode.TE
                      ? unit.subtitleTe
                      : unit.subtitleEn}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-xs font-semibold tabular-nums text-[#2E294E]">
                    {unitDoneCount}/{unitTopicNodes.length} done
                  </span>
                </div>
              </div>

              {/* Winding Vertical Trail */}
              <div className="py-8 px-4 sm:px-8 flex flex-col items-center relative">
                {unit.nodes.map((node, index) => {
                  const status = getNodeStatus(node);
                  const offsetX =
                    WINDING_OFFSETS[index % WINDING_OFFSETS.length];
                  const nextOffsetX =
                    index + 1 < unit.nodes.length
                      ? WINDING_OFFSETS[(index + 1) % WINDING_OFFSETS.length]
                      : offsetX;

                  const isLocked = status === "locked";
                  const isCurrent = status === "current";
                  const isCompleted = status === "completed";
                  const isUnlockedChest = status === "unlocked_chest";
                  const isClaimedChest = status === "claimed_chest";

                  // Find prerequisite title for locked notice
                  const prevNode = index > 0 ? unit.nodes[index - 1] : null;

                  const handleNodeClick = () => {
                    if (isLocked) {
                      setLockedNoticeNodeId((cur) =>
                        cur === node.id ? null : node.id
                      );
                      return;
                    }
                    setLockedNoticeNodeId(null);
                    if (node.type === NodeType.CHEST && node.chestId) {
                      onOpenChestNode(node.chestId);
                    } else {
                      onOpenTopicNode(node);
                    }
                  };

                  // Visual node styles by type & status
                  let circleClasses =
                    "bg-[#EFECE6] border-[#DCD6CA] text-[#8A849E]";
                  if (isCompleted) {
                    circleClasses =
                      "bg-[#059669] border-[#047857] text-white shadow-md shadow-emerald-900/10";
                  } else if (isCurrent) {
                    circleClasses =
                      "bg-[#4338CA] border-[#312E81] text-white shadow-lg shadow-indigo-900/15";
                  } else if (isUnlockedChest) {
                    circleClasses =
                      "bg-amber-400 border-amber-600 text-[#1E1B2E] shadow-lg shadow-amber-700/15";
                  } else if (isClaimedChest) {
                    circleClasses =
                      "bg-amber-50 border-amber-300 text-amber-700";
                  }

                  if (unitIndex === 0 && index === 1) {
                    circleClasses = circleClasses.replace(
                      /\bbg-\S+/g,
                      "bg-[#dfdfea]"
                    );
                  } else if (unitIndex === 0 && index === 3) {
                    circleClasses = circleClasses.replace(
                      /\bbg-\S+/g,
                      "bg-[#79cde3]"
                    );
                  } else if (unitIndex === 1 && index === 2) {
                    circleClasses = circleClasses
                      .replace(/\bbg-\S+/g, "bg-[#e6efed]")
                      .replace(/\bborder-\S+/g, "border-[#d1dcca]");
                  }

                  const iconExtraClass =
                    unitIndex === 0 && index === 3 ? " border-[#000000]" : "";

                  return (
                    <div
                      key={node.id}
                      className="flex flex-col items-center w-full max-w-md"
                    >
                      {/* Node Row */}
                      <div
                        className="flex flex-col items-center transition-transform duration-200"
                        style={{ transform: `translateX(${offsetX}px)` }}
                      >
                        {/* Floating prompt above active node or claimable chest */}
                        {(isCurrent || isUnlockedChest) && (
                          <div
                            className={`mb-2 px-3 py-1 rounded-xl text-xs font-semibold shadow-xs border whitespace-nowrap ${
                              isUnlockedChest
                                ? "bg-amber-50 border-amber-300 text-amber-900"
                                : "bg-indigo-50 border-indigo-200 text-[#3730A3]"
                            }`}
                          >
                            {isUnlockedChest
                              ? "Tap to Open Treasure!"
                              : "Current Step · Tap to Start"}
                          </div>
                        )}

                        <div className="relative flex items-center justify-center">
                          {/* Subtle animated highlight ring on current node or unlocked chest */}
                          {(isCurrent || isUnlockedChest) && (
                            <span
                              aria-hidden="true"
                              className={`absolute -inset-2 rounded-full animate-node-ring ${
                                isUnlockedChest
                                  ? "bg-amber-400/50"
                                  : "bg-indigo-500/40"
                              }`}
                            />
                          )}

                          <button
                            type="button"
                            onClick={handleNodeClick}
                            aria-label={`${node.titleEn} — ${status}`}
                            className={`relative z-10 w-[72px] h-[72px] rounded-full border-b-4 flex items-center justify-center transition-transform duration-150 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 ${circleClasses}`}
                          >
                            {node.type === NodeType.CHEST ? (
                              isClaimedChest ? (
                                <Sparkles className={`w-7 h-7${iconExtraClass}`} />
                              ) : isLocked ? (
                                <Gift className={`w-7 h-7 opacity-65${iconExtraClass}`} />
                              ) : (
                                <Gift className={`w-8 h-8${iconExtraClass}`} />
                              )
                            ) : isCompleted ? (
                              <Check className={`w-8 h-8 stroke-[2.8]${iconExtraClass}`} />
                            ) : isLocked ? (
                              <Lock className={`w-6 h-6${iconExtraClass}`} />
                            ) : node.type === NodeType.REVISION ? (
                              <RefreshCw className={`w-7 h-7${iconExtraClass}`} />
                            ) : isCurrent ? (
                              <Play className={`w-7 h-7 fill-current ml-0.5${iconExtraClass}`} />
                            ) : (
                              <BookOpen className={`w-7 h-7${iconExtraClass}`} />
                            )}
                          </button>
                        </div>

                        {/* Node Label & Metadata */}
                        <button
                          type="button"
                          onClick={handleNodeClick}
                          className="mt-2.5 text-center max-w-[230px] group cursor-pointer"
                        >
                          <div
                            className={`font-display text-sm font-semibold leading-snug group-hover:underline ${
                              isLocked ? "text-[#7A748E]" : "text-[#1E1B2E]"
                            }`}
                          >
                            {language === LanguageMode.TE
                              ? node.titleTe
                              : node.titleEn}
                          </div>
                          {language === LanguageMode.BOTH &&
                            node.titleTe !== node.titleEn && (
                              <div className="text-xs text-[#5C5670] mt-0.5 leading-snug">
                                {node.titleTe}
                              </div>
                            )}
                          <div className="text-[11px] text-[#6E6882] mt-1">
                            {node.type === NodeType.CHEST ? (
                              isClaimedChest ? (
                                "Reward Claimed"
                              ) : (
                                `+${node.pointsReward} Bonus Pts`
                              )
                            ) : (
                              <>
                                <span>{node.questionIds.length} Questions</span>
                                <span aria-hidden="true"> · </span>
                                <span>{node.estimatedMinutes} min</span>
                                {isCompleted && (
                                  <>
                                    <span aria-hidden="true"> · </span>
                                    <span className="text-[#059669] font-medium">
                                      Completed
                                    </span>
                                  </>
                                )}
                              </>
                            )}
                          </div>
                        </button>

                        {/* Locked Node Explanation Tooltip */}
                        {isLocked && lockedNoticeNodeId === node.id && (
                          <div className="mt-2.5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#E2DCD2] text-xs text-[#4A445D] max-w-[250px] text-center shadow-xs">
                            Complete{" "}
                            <span className="font-semibold text-[#1E1B2E]">
                              {prevNode
                                ? language === LanguageMode.TE
                                  ? prevNode.titleTe
                                  : prevNode.titleEn
                                : "the previous unit"}
                            </span>{" "}
                            first to unlock this step!
                          </div>
                        )}
                      </div>

                      {/* Curved SVG Trail Connector to Next Node */}
                      {index + 1 < unit.nodes.length && (
                        <svg
                          width="180"
                          height="54"
                          viewBox="-90 0 180 54"
                          aria-hidden="true"
                          className="my-1 overflow-visible"
                        >
                          <path
                            d={`M ${offsetX} 2 C ${offsetX} 27, ${nextOffsetX} 27, ${nextOffsetX} 52`}
                            fill="none"
                            stroke={isCompleted || isClaimedChest ? "#059669" : "#DED8CC"}
                            strokeWidth="4"
                            strokeDasharray={
                              isCompleted || isClaimedChest ? undefined : "6 6"
                            }
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
