export enum NavSection {
  LEARN = "learn",
  PRACTICE = "practice",
  REWARDS = "rewards",
  PROFILE = "profile",
}

export enum LanguageMode {
  EN = "en",
  TE = "te",
  BOTH = "both",
}

export enum NodeType {
  TOPIC = "topic",
  REVISION = "revision",
  CHEST = "chest",
}

export enum DailyGoalType {
  ONE_TOPIC = "one_topic",
  FIVE_QUESTIONS = "five_questions",
  TEN_MINUTES = "ten_minutes",
}

export type ExamCourseId = "tg-tet-2025" | "ctet-sample";

export type SubjectSectionId =
  | "cdp"
  | "math"
  | "science"
  | "english"
  | "telugu";

export interface QuestionItem {
  id: string;
  examId: ExamCourseId;
  examName: string;
  yearSession: string;
  officialQuestionNumber?: number;
  officialQuestionId?: string;
  isSample: boolean;
  subjectId: SubjectSectionId;
  subjectNameEn: string;
  subjectNameTe: string;
  topicTagEn: string;
  topicTagTe: string;
  passageEn?: string;
  passageTe?: string;
  questionEn: string;
  questionTe: string;
  optionsEn: string[];
  optionsTe: string[];
  correctIndex: number; // 0-based index
  explanationEn: string;
  explanationTe: string;
  simplerExplanationEn: string;
  simplerExplanationTe: string;
  wrongOptionNotesEn: string[];
  wrongOptionNotesTe: string[];
  analogyEn: string;
  analogyTe: string;
  similarQuestionId?: string;
}

export interface ConceptCard {
  titleEn: string;
  titleTe: string;
  bodyEn: string;
  bodyTe: string;
  keyTakeawayEn: string;
  keyTakeawayTe: string;
}

export interface LearningPathNode {
  id: string;
  unitId: string;
  examId: ExamCourseId;
  type: NodeType;
  orderIndex: number;
  titleEn: string;
  titleTe: string;
  objectiveEn: string;
  objectiveTe: string;
  estimatedMinutes: number;
  pointsReward: number;
  conceptCards?: ConceptCard[];
  questionIds: string[];
  chestId?: string;
}

export interface LearningUnit {
  id: string;
  examId: ExamCourseId;
  unitNumber: number;
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  subjectId: SubjectSectionId;
  isSampleSyllabus: boolean;
  nodes: LearningPathNode[];
}

export interface TreasureChestConfig {
  id: string;
  examId: ExamCourseId;
  unitNumber: number;
  titleEn: string;
  titleTe: string;
  bonusPoints: number;
  badgeId: string;
  motivationalQuoteEn: string;
  motivationalQuoteTe: string;
}

export interface BadgeConfig {
  id: string;
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  howEarnedEn: string;
  iconName: "Award" | "Flame" | "BookOpen" | "Star" | "CheckCircle2" | "Sparkles" | "Compass";
}

export interface GovExamDirectoryItem {
  id: string;
  name: string;
  shortCode: string;
  category:
    | "Teaching & Eligibility"
    | "UPSC & State PSC"
    | "SSC & Central Govt"
    | "Banking & Insurance"
    | "Railways & Defence";
  conductingBody: string;
  status: "active" | "coming_soon";
  linkedCourseId?: ExamCourseId;
  description: string;
}

export interface QuizSessionConfig {
  title: string;
  subtitle: string;
  questionIds: string[];
  originNodeId?: string;
  mode: "topic" | "pyq_section" | "pyq_topic" | "pyq_mixed" | "pyq_mistakes";
}

export interface UserProgressState {
  displayName: string;
  selectedExamId: ExamCourseId;
  language: LanguageMode;
  dailyGoal: DailyGoalType;
  notificationsEnabled: boolean;

  // Gamification & streaks
  points: number;
  currentStreak: number;
  bestStreak: number;
  lastActiveDate: string | null; // YYYY-MM-DD local date
  todayDate: string; // YYYY-MM-DD local date
  todayTopicsCompleted: number;
  todayQuestionsAnswered: number;
  todayMinutesStudied: number;
  dailyGoalCelebratedDate: string | null;

  // Learning Path & Quizzes
  completedNodeIds: string[];
  claimedChestIds: string[];
  earnedBadgeIds: string[];
  completedQuizIds: string[];
  incorrectQuestionIds: string[];
  masteredQuestionIds: string[];

  // Subscription & Referral (30-Day Free Trial -> Rs 150 / Rs 100 Referral)
  trialStartDate: string; // ISO date string
  simulateTrialExpired: boolean;
  isPremiumUnlocked: boolean;
  paidAmount: number | null;
  myReferralCode: string;
  appliedReferralCode: string | null;
  interestedExamIds: string[];
}
