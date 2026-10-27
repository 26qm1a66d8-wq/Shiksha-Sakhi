import { BadgeConfig, GovExamDirectoryItem, TreasureChestConfig } from "../types";

export const OFFICIAL_PDF_URL =
  "/assets/aistudio/698177188_Mathematics_and_Science_Telugu_19th_Jan_2025__Shift_2_2d280bdc.pdf";

export const GOV_EXAMS_DIRECTORY: GovExamDirectoryItem[] = [
  // Active Teaching Courses
  {
    id: "exam-tg-tet-2025",
    name: "Telangana TET (TG TET 2025)",
    shortCode: "TG TET 2025",
    category: "Teaching & Eligibility",
    conductingBody: "Dept. of School Education, Telangana",
    status: "active",
    linkedCourseId: "tg-tet-2025",
    description: "Official Jan 19, 2025 Shift 2 Paper II (Maths, Science, CDP, Telugu & English).",
  },
  {
    id: "exam-ctet-sample",
    name: "Central Teacher Eligibility Test (CTET)",
    shortCode: "CTET",
    category: "Teaching & Eligibility",
    conductingBody: "CBSE, New Delhi",
    status: "active",
    linkedCourseId: "ctet-sample",
    description: "Structured Child Development & Pedagogy foundation ladder (Sample Course).",
  },

  // Coming Soon — Teaching & Eligibility
  {
    id: "exam-ap-tet",
    name: "Andhra Pradesh TET (AP TET)",
    shortCode: "AP TET",
    category: "Teaching & Eligibility",
    conductingBody: "Dept. of School Education, AP",
    status: "coming_soon",
    description: "Bilingual Paper I & Paper II SGT and School Assistant preparation path.",
  },
  {
    id: "exam-tg-dsc",
    name: "Telangana DSC / TRT Teacher Recruitment",
    shortCode: "TG DSC",
    category: "Teaching & Eligibility",
    conductingBody: "DSC Telangana",
    status: "coming_soon",
    description: "School Assistant, SGT, and Language Pandit post-TET recruitment syllabus.",
  },
  {
    id: "exam-kvs-nvs",
    name: "KVS & NVS Teacher Recruitment (PRT / TGT / PGT)",
    shortCode: "KVS / NVS",
    category: "Teaching & Eligibility",
    conductingBody: "Kendriya & Navodaya Vidyalaya Sangathan",
    status: "coming_soon",
    description: "Central government school teaching recruitment ladders and PYQs.",
  },
  {
    id: "exam-uptet-reet",
    name: "UPTET, REET & Bihar STET",
    shortCode: "State TETs",
    category: "Teaching & Eligibility",
    conductingBody: "State Education Boards",
    status: "coming_soon",
    description: "State-level teacher eligibility tracks across Hindi & regional mediums.",
  },

  // Coming Soon — UPSC & State PSC
  {
    id: "exam-upsc-cse",
    name: "UPSC Civil Services Examination (IAS / IPS / IFS)",
    shortCode: "UPSC CSE",
    category: "UPSC & State PSC",
    conductingBody: "Union Public Service Commission",
    status: "coming_soon",
    description: "GS Paper I & CSAT topic ladders with official UPSC prelims PYQs.",
  },
  {
    id: "exam-tgpsc-groups",
    name: "TGPSC Group 1, Group 2, Group 3 & Group 4",
    shortCode: "TGPSC Groups",
    category: "UPSC & State PSC",
    conductingBody: "Telangana Public Service Commission",
    status: "coming_soon",
    description: "Telangana history, polity, economy, and general studies bilingual tracks.",
  },
  {
    id: "exam-appsc-groups",
    name: "APPSC Group 1 & Group 2 Services",
    shortCode: "APPSC",
    category: "UPSC & State PSC",
    conductingBody: "Andhra Pradesh PSC",
    status: "coming_soon",
    description: "State administrative and executive services structured prelims prep.",
  },
  {
    id: "exam-state-pscs",
    name: "UPPSC, BPSC, MPSC & KPSC Civil Services",
    shortCode: "State PSCs",
    category: "UPSC & State PSC",
    conductingBody: "State Public Service Commissions",
    status: "coming_soon",
    description: "State civil services general studies and previous-year papers.",
  },

  // Coming Soon — SSC & Central Govt
  {
    id: "exam-ssc-cgl",
    name: "SSC Combined Graduate Level (SSC CGL)",
    shortCode: "SSC CGL",
    category: "SSC & Central Govt",
    conductingBody: "Staff Selection Commission",
    status: "coming_soon",
    description: "Quantitative aptitude, reasoning, English, and general awareness Tier I & II.",
  },
  {
    id: "exam-ssc-chsl-mts",
    name: "SSC CHSL, MTS & GD Constable",
    shortCode: "SSC CHSL / MTS",
    category: "SSC & Central Govt",
    conductingBody: "Staff Selection Commission",
    status: "coming_soon",
    description: "10th & 12th level central government clerical and staff exam paths.",
  },

  // Coming Soon — Banking & Insurance
  {
    id: "exam-ibps-po-clerk",
    name: "IBPS PO, Clerk & RRB Regional Rural Banks",
    shortCode: "IBPS PO / Clerk",
    category: "Banking & Insurance",
    conductingBody: "Institute of Banking Personnel Selection",
    status: "coming_soon",
    description: "Data interpretation, puzzles, banking awareness, and speed drills.",
  },
  {
    id: "exam-sbi-rbi-lic",
    name: "SBI PO / Clerk, RBI Assistant & LIC AAO",
    shortCode: "SBI / RBI / LIC",
    category: "Banking & Insurance",
    conductingBody: "SBI, RBI & LIC of India",
    status: "coming_soon",
    description: "Public sector banking and insurance officer preparation modules.",
  },

  // Coming Soon — Railways & Defence
  {
    id: "exam-rrb-ntpc-groupd",
    name: "Indian Railways RRB NTPC, ALP & Group D",
    shortCode: "RRB Railways",
    category: "Railways & Defence",
    conductingBody: "Railway Recruitment Boards",
    status: "coming_soon",
    description: "General science, mathematics, and reasoning shift-wise PYQ practice.",
  },
  {
    id: "exam-defence-cds-afcat",
    name: "UPSC CDS, NDA & Air Force AFCAT",
    shortCode: "CDS / AFCAT",
    category: "Railways & Defence",
    conductingBody: "UPSC & Indian Armed Forces",
    status: "coming_soon",
    description: "Officer entry written examination preparation for women and men.",
  },
];

export const BADGES_CATALOG: BadgeConfig[] = [
  {
    id: "badge-first-step",
    titleEn: "First Step Sakhi",
    titleTe: "మొదటి అడుగు సఖి",
    descriptionEn: "Completed your very first topic on the Shiksha Sakhi path.",
    howEarnedEn: "Complete any 1 learning path topic.",
    iconName: "Sparkles",
  },
  {
    id: "badge-cdp-scholar",
    titleEn: "Pedagogy Builder",
    titleTe: "బోధనా శాస్త్ర నిపుణురాలు",
    descriptionEn: "Finished Unit 1 Child Development & Pedagogy milestone.",
    howEarnedEn: "Open the Unit 1 Milestone Treasure Chest.",
    iconName: "BookOpen",
  },
  {
    id: "badge-math-solver",
    titleEn: "Ganita Sakhi",
    titleTe: "గణిత సఖి",
    descriptionEn: "Conquered Unit 2 Mathematics PYQ concepts and milestone.",
    howEarnedEn: "Open the Unit 2 Mathematics Treasure Chest.",
    iconName: "Compass",
  },
  {
    id: "badge-science-explorer",
    titleEn: "Vijnana Jyothi",
    titleTe: "విజ్ఞాన జ్యోతి",
    descriptionEn: "Mastered General Science PYQs and unlocked Unit 3 chest.",
    howEarnedEn: "Open the Unit 3 Science Treasure Chest.",
    iconName: "Star",
  },
  {
    id: "badge-bilingual-voice",
    titleEn: "Bhasha Nipuna",
    titleTe: "భాషా నిపుణ",
    descriptionEn: "Completed Language proficiency milestones in English or Telugu.",
    howEarnedEn: "Open Unit 4 or Unit 5 Language Treasure Chest.",
    iconName: "Award",
  },
  {
    id: "badge-daily-champion",
    titleEn: "Daily Goal Finisher",
    titleTe: "రోజువారీ లక్ష్య విజేత",
    descriptionEn: "Reached your chosen daily study goal in a single day.",
    howEarnedEn: "Complete your daily target (1 Topic, 5 Questions, or 10 Mins).",
    iconName: "Flame",
  },
  {
    id: "badge-ctet-pioneer",
    titleEn: "CTET Unit Finisher",
    titleTe: "CTET యూనిట్ విజేత",
    descriptionEn: "Completed a full pedagogy unit in the CTET preparation path.",
    howEarnedEn: "Claim a Unit Completion Chest on the CTET path.",
    iconName: "CheckCircle2",
  },
];

export const TREASURE_CHESTS_CATALOG: TreasureChestConfig[] = [
  {
    id: "chest-tgtet-u1",
    examId: "tg-tet-2025",
    unitNumber: 1,
    titleEn: "Unit 1 Pedagogy Treasure",
    titleTe: "యూనిట్ 1 బోధనా శాస్త్ర నిధి",
    bonusPoints: 100,
    badgeId: "badge-cdp-scholar",
    motivationalQuoteEn:
      "Consistent small steps turn big syllabi into calm confidence. You now own core Child Development concepts!",
    motivationalQuoteTe:
      "చిన్న చిన్న స్థిరమైన అడుగులే పెద్ద లక్ష్యాలను చేరుస్తాయి. శిశు వికాస భావనలపై మీకు మంచి పట్టు లభించింది!",
  },
  {
    id: "chest-tgtet-u2",
    examId: "tg-tet-2025",
    unitNumber: 2,
    titleEn: "Unit 2 Mathematics Treasure",
    titleTe: "యూనిట్ 2 గణిత నిధి",
    bonusPoints: 120,
    badgeId: "badge-math-solver",
    motivationalQuoteEn:
      "Every problem solved sharpens your exam speed. Keep trusting your method!",
    motivationalQuoteTe:
      "మీరు సాధించే ప్రతి గణిత సమస్య పరీక్షలో మీ వేగాన్ని, ఆత్మవిశ్వాసాన్ని పెంచుతుంది!",
  },
  {
    id: "chest-tgtet-u3",
    examId: "tg-tet-2025",
    unitNumber: 3,
    titleEn: "Unit 3 Science Treasure",
    titleTe: "యూనిట్ 3 సైన్స్ నిధి",
    bonusPoints: 120,
    badgeId: "badge-science-explorer",
    motivationalQuoteEn:
      "Curiosity makes great teachers. You have unlocked the Science Milestone!",
    motivationalQuoteTe:
      "జిజ్ఞాసే ఉత్తమ ఉపాధ్యాయులను తయారు చేస్తుంది. సైన్స్ మైలురాయిని విజయవంతంగా చేరుకున్నారు!",
  },
  {
    id: "chest-tgtet-u4",
    examId: "tg-tet-2025",
    unitNumber: 4,
    titleEn: "Unit 4 English & Language Treasure",
    titleTe: "యూనిట్ 4 ఆంగ్ల భాషా నిధి",
    bonusPoints: 110,
    badgeId: "badge-bilingual-voice",
    motivationalQuoteEn:
      "Clear language unlocks clear teaching. Your grammar & pedagogy accuracy is growing!",
    motivationalQuoteTe:
      "స్పష్టమైన భాషా నైపుణ్యం ఉత్తమ బోధనకు పునాది. అభినందనలు!",
  },
  {
    id: "chest-tgtet-u5",
    examId: "tg-tet-2025",
    unitNumber: 5,
    titleEn: "Unit 5 Telugu Sahitya Grand Chest",
    titleTe: "యూనిట్ 5 తెలుగు సాహిత్య మహా నిధి",
    bonusPoints: 150,
    badgeId: "badge-bilingual-voice",
    motivationalQuoteEn:
      "Phenomenal dedication! You have walked across all five sections of TG TET 2025.",
    motivationalQuoteTe:
      "అద్భుతమైన పట్టుదల! TG TET 2025 లోని ఐదు విభాగాలను మీరు పూర్తి చేశారు.",
  },
  {
    id: "chest-ctet-u1",
    examId: "ctet-sample",
    unitNumber: 1,
    titleEn: "CTET Unit 1 Completion Chest",
    titleTe: "CTET యూనిట్ 1 నిధి",
    bonusPoints: 100,
    badgeId: "badge-ctet-pioneer",
    motivationalQuoteEn:
      "Unit 1 complete! Understanding how children grow is the heart of every teaching exam.",
    motivationalQuoteTe:
      "యూనిట్ 1 పూర్తయింది! పిల్లల వికాసాన్ని అర్థం చేసుకోవడమే ఉపాధ్యాయ పరీక్షల జీవాతువు.",
  },
  {
    id: "chest-ctet-u2",
    examId: "ctet-sample",
    unitNumber: 2,
    titleEn: "CTET Unit 2 Pedagogy Mastery Chest",
    titleTe: "CTET యూనిట్ 2 బోధనా నిధి",
    bonusPoints: 125,
    badgeId: "badge-ctet-pioneer",
    motivationalQuoteEn:
      "You completed the full CTET Foundation Path! Every day of practice brings your classroom dream closer.",
    motivationalQuoteTe:
      "CTET ఫౌండేషన్ మార్గాన్ని పూర్తి చేశారు! ప్రతిరోజూ చేసే సాధన మీ ఉపాధ్యాయ కలను నిజం చేస్తుంది.",
  },
];

export const VALID_DEMO_REFERRAL_CODES = [
  "SAKHI100",
  "TET2025",
  "WOMEN100",
  "PRERANA",
  "FRIEND100",
];
