import { LearningUnit, NodeType } from "../types";

export const LEARNING_UNITS: LearningUnit[] = [
  // =========================================================================
  // COURSE 1: TG TET 2025 OFFICIAL COURSE (5 UNITS ACROSS ALL 5 SECTIONS)
  // =========================================================================
  {
    id: "unit-tgtet-1",
    examId: "tg-tet-2025",
    unitNumber: 1,
    titleEn: "Unit 1: Child Development & Pedagogy",
    titleTe: "యూనిట్ 1: శిశు వికాసం & బోధనా శాస్త్రం",
    subtitleEn: "Official TG TET Jan 2025 · Growth, Piaget, Vygotsky & RTE 2009",
    subtitleTe: "పెరుగుదల సూత్రాలు, పియాజె, వైగోట్‌స్కీ & RTE 2009",
    subjectId: "cdp",
    isSampleSyllabus: false,
    nodes: [
      {
        id: "node-tgtet-1-1",
        unitId: "unit-tgtet-1",
        examId: "tg-tet-2025",
        type: NodeType.TOPIC,
        orderIndex: 0,
        titleEn: "Growth, Stages & Cognitive Development",
        titleTe: "పెరుగుదల దశలు & సంజ్ఞానాత్మక వికాసం",
        objectiveEn:
          "Understand why teachers study growth stages and master Piaget, Bruner & Vygotsky PYQ concepts.",
        objectiveTe:
          "వికాస దశల ఆవశ్యకత మరియు పియాజె, బ్రూనర్, వైగోట్‌స్కీ సిద్ధాంతాలపై పట్టు సాధించండి.",
        estimatedMinutes: 6,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Why Developmental Principles Matter",
            titleTe: "వికాస సూత్రాలు ఎందుకు ముఖ్యం?",
            bodyEn:
              "Every child develops through predictable stages (Infancy → Early Childhood → Later Childhood → Adolescence), yet each child learns at a unique pace. Teachers use both age-stage readiness and individual ability profiles to plan lessons.",
            bodyTe:
              "పిల్లలందరూ ఒకే క్రమంలో (శైశవ → పూర్వ బాల్య → ఉత్తర బాల్య → కౌమార) ఎదుగుతారు, కానీ ప్రతి బిడ్డ సామర్థ్యం భిన్నంగా ఉంటుంది. అందుకే టీచర్ వయస్సు దశను, వ్యక్తిగత భేదాలను రెండింటినీ గమనిస్తారు.",
            keyTakeawayEn:
              "Later Childhood (6–12 yrs) builds muscle competency for team games!",
            keyTakeawayTe:
              "ఉత్తర బాల్య దశ (6–12 సం.) లో వివిధ ఆటలకు అవసరమైన కండర బలం పెరుగుతుంది.",
          },
          {
            titleEn: "Piaget, Bruner & Vygotsky Quick Contrast",
            titleTe: "పియాజె, బ్రూనర్ & వైగోట్‌స్కీ — ముఖ్య భేదాలు",
            bodyEn:
              "• Piaget: Symbolic drawing/pretend play starts in Preoperational Stage (2–7 yrs).\n• Bruner: Discovery learning is active & inductive—teachers stimulate readiness rather than waiting passively.\n• Vygotsky: 'Scaffolding' (temporary guidance) works for tasks inside the Zone of Proximal Development (ZPD).",
            bodyTe:
              "• పియాజె: బొమ్మల ద్వారా భావాలు చూపడం పూర్వ ప్రచాలక దశ (2–7 సం.).\n• బ్రూనర్: ఆవిష్కరణ అభ్యసనలో సంసిద్ధత కోసం టీచర్ వేచి ఉండకూడదు, ప్రేరేపించాలి.\n• వైగోట్‌స్కీ: ZPD పరిధిలోని కృత్యాలకు 'సారువా' (Scaffolding) అందిస్తారు.",
            keyTakeawayEn:
              "Scaffolding = temporary support inside ZPD, removed as independence grows.",
            keyTakeawayTe:
              "సారువా (Scaffolding) = వికాస సామీప్య మండలం (ZPD) లో ఇచ్చే తాత్కాలిక సహాయం.",
          },
        ],
        questionIds: [
          "tgtet-q1",
          "tgtet-q2",
          "tgtet-q3",
          "tgtet-q4",
          "tgtet-q30",
        ],
      },
      {
        id: "node-tgtet-1-2",
        unitId: "unit-tgtet-1",
        examId: "tg-tet-2025",
        type: NodeType.TOPIC,
        orderIndex: 1,
        titleEn: "Learning Theories, Motivation & Parenting",
        titleTe: "అభ్యసన సిద్ధాంతాలు, ప్రేరణ & పెంపక శైలులు",
        objectiveEn:
          "Distinguish Trial & Error vs. Insight, Intrinsic motivation, Erikson's stages, and Authoritative parenting.",
        objectiveTe:
          "యత్న-దోష, అంతర్ దృష్టి, అంతర్గత ప్రేరణ, ఎరిక్సన్ దశలు మరియు అధికారయుత పెంపక శైలిని గుర్తించండి.",
        estimatedMinutes: 6,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Trial & Error vs. Insightful Learning",
            titleTe: "యత్న-దోష Vs అంతర్ దృష్టి అభ్యసనం",
            bodyEn:
              "Random attempts without logic until accidental success = Thorndike's Trial & Error. Surveying the whole goal and planning study time by subject strength = Kohler's Insightful Learning!",
            bodyTe:
              "లాజిక్ లేకుండా యాదృచ్ఛిక ప్రయత్నాలు చేయడం = థార్న్‌డైక్ యత్న-దోష అభ్యసనం. సామర్థ్యాలను విశ్లేషించుకుని ప్రణాళిక వేసుకోవడం = కోహ్లర్ అంతర్ దృష్టి అభ్యసనం!",
            keyTakeawayEn:
              "Fixed-interval rewards (e.g., weekend gift) give zero mid-week rewards.",
            keyTakeawayTe:
              "వారాంతపు బహుమతి (Fixed Interval) విధానంలో మంగళవారం వచ్చే బహుమతులు సున్నా!",
          },
          {
            titleEn: "Erikson, Carl Rogers & Parenting Styles",
            titleTe: "ఎరిక్సన్, కార్ల్ రోజర్స్ & పెంపక శైలి",
            bodyEn:
              "School-age children (6–12 yrs) working hard on praised activities represent Erikson's Industry vs. Inferiority. Warm guidance fostering independence is Authoritative parenting. In counseling, Carl Rogers rejects Criticism.",
            bodyTe:
              "పాఠశాల వయస్సులో ప్రశంసలతో కష్టపడి పనిచేయడం = శ్రమ శీలత Vs న్యూనత. ప్రేమతో కూడిన మార్గదర్శకత్వం = అధికారయుత పెంపకం. మంత్రణంలో 'విమర్శ' పనికిరాదు.",
            keyTakeawayEn:
              "Acting out of inner joy in the task = Intrinsic Motivation!",
            keyTakeawayTe:
              "కృత్యంపై సహజ ఆసక్తితో చేయడం = అంతర్గత ప్రేరణ (Intrinsic Motivation).",
          },
        ],
        questionIds: [
          "tgtet-q5",
          "tgtet-q6",
          "tgtet-q9",
          "tgtet-q13",
          "tgtet-q15",
        ],
      },
      {
        id: "node-tgtet-1-3",
        unitId: "unit-tgtet-1",
        examId: "tg-tet-2025",
        type: NodeType.REVISION,
        orderIndex: 2,
        titleEn: "Inclusive Education, RTE 2009 & Unit Challenge",
        titleTe: "సమ్మిళిత విద్య, RTE 2009 & పునశ్చరణ సవాలు",
        objectiveEn:
          "Master high-scoring RTE Act 2009 sections, NCPCR tenure, and inclusive classroom steps to unlock your Unit 1 Chest!",
        objectiveTe:
          "RTE 2009 సెక్షన్లు, NCPCR పదవీ కాలం, సమ్మిళిత విద్యపై పట్టు సాధించి యూనిట్ 1 నిధిని అన్‌లాక్ చేయండి!",
        estimatedMinutes: 5,
        pointsReward: 60,
        conceptCards: [
          {
            titleEn: "Inclusive Classroom & Statutory Must-Knows",
            titleTe: "సమ్మిళిత తరగతి & చట్టపరమైన ముఖ్యాంశాలు",
            bodyEn:
              "1. Managing an inclusive classroom ALWAYS begins with 'Knowing the learners'.\n2. RTE Act 2009 Section 23 empowers NCTE to set teacher minimum qualifications.\n3. NCPCR Chairperson/Member term = 3 years.",
            bodyTe:
              "1. సమ్మిళిత తరగతి నిర్వహణ 'అభ్యాసకులను తెలుసుకోవడం'తో మొదలవుతుంది.\n2. RTE 2009 సెక్షన్ 23 ఉపాధ్యాయ కనీస అర్హతలను (NCTE) నిర్దేశిస్తుంది.\n3. NCPCR పదవీ కాలం = 3 సంవత్సరాలు.",
            keyTakeawayEn:
              "Complete this Revision Challenge to unlock the Unit 1 Pedagogy Treasure Chest!",
            keyTakeawayTe:
              "ఈ పునశ్చరణ పూర్తి చేస్తే యూనిట్ 1 బంగారు నిధి (Treasure Chest) తెరుచుకుంటుంది!",
          },
        ],
        questionIds: [
          "tgtet-q17",
          "tgtet-q19",
          "tgtet-q27",
          "tgtet-q28",
          "tgtet-q29",
        ],
      },
      {
        id: "node-tgtet-1-chest",
        unitId: "unit-tgtet-1",
        examId: "tg-tet-2025",
        type: NodeType.CHEST,
        orderIndex: 3,
        titleEn: "Unit 1 Milestone Reward",
        titleTe: "యూనిట్ 1 మైలురాయి బహుమతి",
        objectiveEn: "Claim your Child Development & Pedagogy bonus points and badge!",
        objectiveTe: "బోధనా శాస్త్ర బోనస్ పాయింట్లు మరియు బ్యాడ్జ్‌ను అందుకోండి!",
        estimatedMinutes: 1,
        pointsReward: 100,
        questionIds: [],
        chestId: "chest-tgtet-u1",
      },
    ],
  },

  {
    id: "unit-tgtet-2",
    examId: "tg-tet-2025",
    unitNumber: 2,
    titleEn: "Unit 2: Mathematics & Pedagogy",
    titleTe: "యూనిట్ 2: గణితం & గణిత బోధనా శాస్త్రం",
    subtitleEn: "Official TG TET Jan 2025 · Fractions, Sets, Algebra, Trig & Standards",
    subtitleTe: "భిన్నాలు, సమితులు, బీజగణితం, త్రికోణమితి & విద్యా ప్రమాణాలు",
    subjectId: "math",
    isSampleSyllabus: false,
    nodes: [
      {
        id: "node-tgtet-2-1",
        unitId: "unit-tgtet-2",
        examId: "tg-tet-2025",
        type: NodeType.TOPIC,
        orderIndex: 4,
        titleEn: "Fractions, Sets, Percentages & Interest",
        titleTe: "భిన్నాలు, సమితులు, శాతాలు & సాధారణ వడ్డీ",
        objectiveEn:
          "Solve TET arithmetic and set-builder questions accurately without lengthy calculations.",
        objectiveTe:
          "పెద్ద గణనలు లేకుండా భిన్నాలు, సమితులు, శాతాలు, వడ్డీ లెక్కలను వేగంగా సాధించండి.",
        estimatedMinutes: 7,
        pointsReward: 55,
        conceptCards: [
          {
            titleEn: "Smart Arithmetic Shortcuts",
            titleTe: "అంకగణిత సులభ చిట్కాలు",
            bodyEn:
              "• Mixed Fractions: Add whole parts and fractional parts separately.\n• Equal Sets: Always check domain conditions like x ∈ N (Natural numbers exclude negatives!).\n• Simple Interest: Difference between 7-yr amount and 3-yr amount directly gives 4 years' interest.",
            bodyTe:
              "• మిశ్రమ భిన్నాలలో పూర్ణాంకాలు, భిన్నాలను విడివిడిగా కలపండి.\n• సమితులలో x ∈ N (సహజ సంఖ్యలు) ఉన్నప్పుడు రుణ సంఖ్యలను వదిలేయాలి.\n• 7 ఏళ్ల మొత్తం నుండి 3 ఏళ్ల మొత్తం తీసేస్తే నేరుగా 4 ఏళ్ల సాధారణ వడ్డీ వస్తుంది.",
            keyTakeawayEn:
              "Break 18% into 10% + 8% for fast error-free multiplication!",
            keyTakeawayTe:
              "18% ని 10% + 8% గా విభజిస్తే గుణకారం చాలా సులభం.",
          },
        ],
        questionIds: [
          "tgtet-q91",
          "tgtet-q92",
          "tgtet-q93",
          "tgtet-q107",
          "tgtet-q109",
        ],
      },
      {
        id: "node-tgtet-2-2",
        unitId: "unit-tgtet-2",
        examId: "tg-tet-2025",
        type: NodeType.REVISION,
        orderIndex: 5,
        titleEn: "Geometry, Quadratics & Maths Pedagogy",
        titleTe: "క్షేత్రమితి, వర్గ సమీకరణాలు & గణిత బోధన",
        objectiveEn:
          "Master mensuration wire-reshaping, complementary trig angles, discriminant rules, and SCERT standards.",
        objectiveTe:
          "క్షేత్రమితి, త్రికోణమితి పూరక కోణాలు, విచక్షణి మరియు గణిత విద్యా ప్రమాణాలను సాధించండి.",
        estimatedMinutes: 7,
        pointsReward: 60,
        conceptCards: [
          {
            titleEn: "Geometry, Quadratics & SCERT Standards",
            titleTe: "రేఖాగణితం & గణిత విద్యా ప్రమాణాలు",
            bodyEn:
              "• Wire reshaped from circle to square keeps perimeter constant (2πr = 4a).\n• No real roots ⇔ b² − 4ac < 0.\n• Linking percentages to profit/loss inside Maths = Internal Correlation.\n• 'Explaining method of solving a problem' = Communication standard!",
            bodyTe:
              "• వృత్తాకార తీగను చతురస్రంగా వంచితే చుట్టుకొలత సమానం (2πr = 4a).\n• b² − 4ac < 0 అయితే వాస్తవ మూలాలు ఉండవు.\n• 'సమస్య సాధన పద్ధతిని వివరించడం' = వ్యక్తపరచడం (Communication) విద్యా ప్రమాణం!",
            keyTakeawayEn:
              "Complementary angles (46° + 44° = 90°) make sin 46° / cos 44° = 1!",
            keyTakeawayTe:
              "పూరక కోణాలలో sin 46° / cos 44° విలువ ఎల్లప్పుడూ 1 అవుతుంది.",
          },
        ],
        questionIds: [
          "tgtet-q94",
          "tgtet-q96",
          "tgtet-q98",
          "tgtet-q115",
          "tgtet-q117",
        ],
      },
      {
        id: "node-tgtet-2-chest",
        unitId: "unit-tgtet-2",
        examId: "tg-tet-2025",
        type: NodeType.CHEST,
        orderIndex: 6,
        titleEn: "Unit 2 Mathematics Treasure",
        titleTe: "యూనిట్ 2 గణిత నిధి",
        objectiveEn: "Open your Mathematics milestone chest for bonus points!",
        objectiveTe: "గణిత మైలురాయి నిధిని తెరిచి బోనస్ పాయింట్లు గెలుచుకోండి!",
        estimatedMinutes: 1,
        pointsReward: 120,
        questionIds: [],
        chestId: "chest-tgtet-u2",
      },
    ],
  },

  {
    id: "unit-tgtet-3",
    examId: "tg-tet-2025",
    unitNumber: 3,
    titleEn: "Unit 3: General Science & Pedagogy",
    titleTe: "యూనిట్ 3: విజ్ఞాన శాస్త్రం (సైన్స్) & బోధన",
    subtitleEn: "Official TG TET Jan 2025 · Physics, Chemistry, Biology & Heuristic Method",
    subtitleTe: "భౌతిక, రసాయన, జీవ శాస్త్రాలు & హ్యూరిస్టిక్ పద్ధతి",
    subjectId: "science",
    isSampleSyllabus: false,
    nodes: [
      {
        id: "node-tgtet-3-1",
        unitId: "unit-tgtet-3",
        examId: "tg-tet-2025",
        type: NodeType.TOPIC,
        orderIndex: 7,
        titleEn: "Physics, Chemistry, Cells & Human Body",
        titleTe: "భౌతిక, రసాయన, జీవ శాస్త్ర ముఖ్యాంశాలు",
        objectiveEn:
          "Master high-yield Science PYQs on density, Moon-Earth weight, matchstick chemistry, neurons, pancreas, and heuristic inquiry.",
        objectiveTe:
          "సాంద్రత, బరువు, అగ్గిపుల్ల రసాయనాలు, నాడీ కణాలు, క్లోమ గ్రంథి మరియు హ్యూరిస్టిక్ పద్ధతిపై పట్టు సాధించండి.",
        estimatedMinutes: 6,
        pointsReward: 60,
        conceptCards: [
          {
            titleEn: "High-Yield Science Concepts (2025 Paper)",
            titleTe: "2025 సైన్స్ ముఖ్య భావనలు",
            bodyEn:
              "• Equal volumes mixed ⇒ average density: (1030 + 1000)/2 = 1015 kg/m³.\n• Earth weight = 6 × Moon weight (42 × 6 = 252 N).\n• Matchstick head oxidizer = Potassium Chlorate (KClO₃).\n• Nerve cells lack regeneration; Pancreas secretes BOTH enzymes & hormones!",
            bodyTe:
              "• సమాన ఘనపరిమాణాల మిశ్రమ సాంద్రత = సగటు (1015).\n• భూమిపై బరువు = 6 × చంద్రునిపై బరువు (252 N).\n• అగ్గిపుల్ల తలలో ఆక్సీకరణ కారకం = పొటాషియం క్లోరేట్.\n• నాడీ కణాలకు పునరుత్పత్తి లేదు; క్లోమం ఎంజైమ్‌లు + హార్మోన్లు రెండింటినీ స్రవిస్తుంది!",
            keyTakeawayEn:
              "Heuristic method = students design experiments independently!",
            keyTakeawayTe:
              "హ్యూరిస్టిక్ పద్ధతి = విద్యార్థులు సొంతంగా ప్రయోగాలు రూపొందించి నేర్చుకోవడం.",
          },
        ],
        questionIds: [
          "tgtet-q121",
          "tgtet-q126",
          "tgtet-q129",
          "tgtet-q134",
          "tgtet-q143",
          "tgtet-q145",
        ],
      },
      {
        id: "node-tgtet-3-chest",
        unitId: "unit-tgtet-3",
        examId: "tg-tet-2025",
        type: NodeType.CHEST,
        orderIndex: 8,
        titleEn: "Unit 3 Science Treasure",
        titleTe: "యూనిట్ 3 సైన్స్ నిధి",
        objectiveEn: "Claim your Vijnana Jyothi badge and bonus points!",
        objectiveTe: "విజ్ఞాన జ్యోతి బ్యాడ్జ్ మరియు బోనస్ పాయింట్లు అందుకోండి!",
        estimatedMinutes: 1,
        pointsReward: 120,
        questionIds: [],
        chestId: "chest-tgtet-u3",
      },
    ],
  },

  {
    id: "unit-tgtet-4",
    examId: "tg-tet-2025",
    unitNumber: 4,
    titleEn: "Unit 4: Language II — English",
    titleTe: "యూనిట్ 4: ద్వితీయ భాష — ఇంగ్లీష్",
    subtitleEn: "Official TG TET Jan 2025 · Comprehension, Grammar, Tags & Linguistics",
    subtitleTe: "పఠన అవగాహన, గ్రామర్, క్వశ్చన్ ట్యాగ్స్ & భాషా శాస్త్రం",
    subjectId: "english",
    isSampleSyllabus: false,
    nodes: [
      {
        id: "node-tgtet-4-1",
        unitId: "unit-tgtet-4",
        examId: "tg-tet-2025",
        type: NodeType.TOPIC,
        orderIndex: 9,
        titleEn: "Grammar, Comprehension & Language Features",
        titleTe: "ఇంగ్లీష్ గ్రామర్ & భాషా బోధనా శాస్త్రం",
        objectiveEn:
          "Score effortlessly on past-continuous 'while' clauses, reported speech, imperative question tags, and linguistics.",
        objectiveTe:
          "Tenses, Reported Speech, Question Tags మరియు భాషా లక్షణాల ప్రశ్నలలో పూర్తి మార్కులు సాధించండి.",
        estimatedMinutes: 6,
        pointsReward: 55,
        conceptCards: [
          {
            titleEn: "4 Fast English Rules from TG TET 2025",
            titleTe: "TG TET 2025 — 4 సులభ ఇంగ్లీష్ సూత్రాలు",
            bodyEn:
              "1. Short action + 'while' + ongoing past action ⇒ Simple Past + Past Continuous ('happened, was watching').\n2. 'Don't...' imperative ⇒ tag is ALWAYS 'will you?'.\n3. No natural link between word & object ⇒ Language is Arbitrary.\n4. Study of word formation ⇒ Morphology.",
            bodyTe:
              "1. 'while' తో గతంలో జరుగుతున్న పనికి 'was/were + ing' వస్తుంది.\n2. 'Don't forget' కు Question tag = 'will you?'.\n3. వస్తువుకు, పదానికి సహజ సంబంధం లేకపోవడం = Arbitrariness.\n4. పద నిర్మాణ శాస్త్రం = Morphology.",
            keyTakeawayEn:
              "In Reported Speech, 'are going' → 'was going' and 'tomorrow' → 'the next day'!",
            keyTakeawayTe:
              "Reported speech లో 'tomorrow' తప్పనిసరిగా 'the next day' గా మారుతుంది.",
          },
        ],
        questionIds: [
          "tgtet-q63",
          "tgtet-q68",
          "tgtet-q70",
          "tgtet-q75",
          "tgtet-q85",
          "tgtet-q86",
        ],
      },
      {
        id: "node-tgtet-4-chest",
        unitId: "unit-tgtet-4",
        examId: "tg-tet-2025",
        type: NodeType.CHEST,
        orderIndex: 10,
        titleEn: "Unit 4 Language Treasure",
        titleTe: "యూనిట్ 4 ఆంగ్ల భాషా నిధి",
        objectiveEn: "Open your English proficiency reward chest!",
        objectiveTe: "ఆంగ్ల భాషా నైపుణ్య నిధిని తెరవండి!",
        estimatedMinutes: 1,
        pointsReward: 110,
        questionIds: [],
        chestId: "chest-tgtet-u4",
      },
    ],
  },

  {
    id: "unit-tgtet-5",
    examId: "tg-tet-2025",
    unitNumber: 5,
    titleEn: "Unit 5: Language I — తెలుగు (Telugu)",
    titleTe: "యూనిట్ 5: ప్రథమ భాష — తెలుగు",
    subtitleEn: "Official TG TET Jan 2025 · పద్య/గద్య అవగాహన, సమాసాలు, అలంకారాలు & బోధనా పద్ధతులు",
    subtitleTe: "పద్య/గద్య అవగాహన, సమాసాలు, అలంకారాలు & బోధనా పద్ధతులు",
    subjectId: "telugu",
    isSampleSyllabus: false,
    nodes: [
      {
        id: "node-tgtet-5-1",
        unitId: "unit-tgtet-5",
        examId: "tg-tet-2025",
        type: NodeType.TOPIC,
        orderIndex: 11,
        titleEn: "పద్య/గద్య అవగాహన, వ్యాకరణం & బోధనా పద్ధతులు",
        titleTe: "పద్య/గద్య అవగాహన, వ్యాకరణం & బోధనా పద్ధతులు",
        objectiveEn:
          "Practise Telugu poetry/prose comprehension, Dvigu Samasam, Chekanuprasa Alankaram, and Telugu pedagogy.",
        objectiveTe:
          "తెలుగు పద్య/గద్య అవగాహన, ద్విగు సమాసం, ఛేకానుప్రాస అలంకారం మరియు బోధనా పద్ధతులను అభ్యసించండి.",
        estimatedMinutes: 6,
        pointsReward: 60,
        conceptCards: [
          {
            titleEn: "Telugu Grammar & Pedagogy Highlights",
            titleTe: "తెలుగు వ్యాకరణం & బోధనా ముఖ్యాంశాలు",
            bodyEn:
              "• ద్విగు సమాసం: పూర్వ పదం సంఖ్యావాచకం (సంఖ్యా పూర్వో ద్విగుః).\n• ఛేకానుప్రాస: అర్థ భేదంతో వెంటవెంటనే వచ్చే హల్లుల జంట ('కాలు కాలుతుంది').\n• జాన్ డ్యూయి విద్యాతత్వం ఆధారంగా కిల్ పాట్రిక్ రూపొందించినది = ప్రాజెక్టు పద్ధతి.\n• పాఠ్యాంశం ఆధారంగా కవిత రాయడం = సృజనాత్మకత!",
            bodyTe:
              "• ద్విగు సమాసం: మొదటి పదం సంఖ్యను తెలుపుతుంది.\n• ఛేకానుప్రాస: అర్థ భేదంతో పక్కపక్కనే వచ్చే జంట పదాలు ('నిప్పులో పెడితే కాలు కాలుతుంది').\n• జాన్ డ్యూయి మూల సూత్రాలపై ఆధారపడినది = ప్రాజెక్టు పద్ధతి.\n• కవిత రాయడం = సృజనాత్మక వ్యక్తీకరణ!",
            keyTakeawayEn:
              "'వాక్యం రసాత్మకం కావ్యమ్' అన్న అలంకారికుడు — విశ్వనాథుడు!",
            keyTakeawayTe:
              "'వాక్యం రసాత్మకం కావ్యమ్' అని రస ప్రాధాన్యాన్ని తెలిపినవారు — విశ్వనాథుడు.",
          },
        ],
        questionIds: [
          "tgtet-q31",
          "tgtet-q35",
          "tgtet-q39",
          "tgtet-q42",
          "tgtet-q59",
          "tgtet-q60",
        ],
      },
      {
        id: "node-tgtet-5-chest",
        unitId: "unit-tgtet-5",
        examId: "tg-tet-2025",
        type: NodeType.CHEST,
        orderIndex: 12,
        titleEn: "Grand TG TET 2025 Treasure Chest",
        titleTe: "TG TET 2025 మహా నిధి",
        objectiveEn: "Celebrate completing all 5 units of TG TET 2025!",
        objectiveTe: "TG TET 2025 లోని 5 యూనిట్ల పూర్తిని వేడుక చేసుకోండి!",
        estimatedMinutes: 1,
        pointsReward: 150,
        questionIds: [],
        chestId: "chest-tgtet-u5",
      },
    ],
  },

  // =========================================================================
  // COURSE 2: SAMPLE CTET PREPARATION COURSE (LABELLED SAMPLE SYLLABUS)
  // =========================================================================
  {
    id: "unit-ctet-1",
    examId: "ctet-sample",
    unitNumber: 1,
    titleEn: "Unit 1: Child Development and Pedagogy (Sample Course)",
    titleTe: "యూనిట్ 1: శిశు వికాసం & బోధనా శాస్త్రం (నమూనా కోర్సు)",
    subtitleEn: "Sample CTET Foundation Path · Stages, Principles & Revision",
    subtitleTe: "CTET నమూనా అభ్యసన మార్గం",
    subjectId: "cdp",
    isSampleSyllabus: true,
    nodes: [
      {
        id: "node-ctet-1-1",
        unitId: "unit-ctet-1",
        examId: "ctet-sample",
        type: NodeType.TOPIC,
        orderIndex: 0,
        titleEn: "Topic 1: Introduction to Child Development",
        titleTe: "అంశం 1: శిశు వికాస పరిచయం",
        objectiveEn:
          "Understand holistic physical, cognitive, and socio-emotional growth in learners.",
        objectiveTe:
          "పిల్లలలో శారీరక, సంజ్ఞానాత్మక, సాంఘిక వికాసాన్ని అర్థం చేసుకోండి.",
        estimatedMinutes: 5,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Growth vs. Development",
            titleTe: "పెరుగుదల మరియు వికాసం",
            bodyEn:
              "Growth refers to quantitative physical changes (height, weight), whereas Development encompasses qualitative functional maturity across cognitive, emotional, and social domains.",
            bodyTe:
              "పెరుగుదల పరిమాణాత్మక మార్పులను (ఎత్తు, బరువు) సూచిస్తే, వికాసం గుణాత్మక పరిణతిని సూచిస్తుంది.",
            keyTakeawayEn: "Teachers plan lessons around both stage and individuality.",
            keyTakeawayTe: "వికాస దశలు మరియు వ్యక్తిగత భేదాలు రెండూ బోధనలో కీలకం.",
          },
        ],
        questionIds: ["tgtet-q1", "ctet-sample-q1", "tgtet-q4"],
      },
      {
        id: "node-ctet-1-2",
        unitId: "unit-ctet-1",
        examId: "ctet-sample",
        type: NodeType.TOPIC,
        orderIndex: 1,
        titleEn: "Topic 2: Principles of Development",
        titleTe: "అంశం 2: వికాస సూత్రాలు",
        objectiveEn:
          "Explore Cephalocaudal, Proximodistal, and individual-difference principles.",
        objectiveTe:
          "శిరో-పాదాభిముఖ, సమీప-దూరస్థ మరియు వ్యక్తిగత భేదాల సూత్రాలను అభ్యసించండి.",
        estimatedMinutes: 5,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Direction of Development",
            titleTe: "వికాస దిశ నియమాలు",
            bodyEn:
              "Cephalocaudal progresses from head to toe; Proximodistal progresses from the center of the body outward to extremities.",
            bodyTe:
              "శిరో-పాదాభిముఖ సూత్రం తల నుండి కాళ్ళ వైపు, సమీప-దూరస్థ సూత్రం కేంద్రం నుండి వేళ్ళ వైపు సాగుతుంది.",
            keyTakeawayEn: "Development is continuous and predictable yet unique.",
            keyTakeawayTe: "వికాసం నిరంతరమైనది మరియు ఒక క్రమాన్ని పాటిస్తుంది.",
          },
        ],
        questionIds: ["ctet-sample-q1", "tgtet-q1", "tgtet-q5"],
      },
      {
        id: "node-ctet-1-3",
        unitId: "unit-ctet-1",
        examId: "ctet-sample",
        type: NodeType.TOPIC,
        orderIndex: 2,
        titleEn: "Topic 3: Stages of Development",
        titleTe: "అంశం 3: వికాస దశలు",
        objectiveEn:
          "Connect Piaget's cognitive stages and Erikson's psychosocial stages to classroom scenarios.",
        objectiveTe:
          "పియాజె మరియు ఎరిక్సన్ వికాస దశలను తరగతి గది సన్నివేశాలతో అనుసంధానించండి.",
        estimatedMinutes: 5,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Key Stage Milestones",
            titleTe: "ముఖ్య వికాస మైలురాళ్ళు",
            bodyEn:
              "Preoperational (2–7 yrs) introduces symbolic drawing; Later childhood (6–12 yrs) builds game competency and Erikson's Industry.",
            bodyTe:
              "పూర్వ ప్రచాలక దశలో ప్రతీకాత్మక ఆలోచన, ఉత్తర బాల్య దశలో శ్రమ శీలత ఏర్పడతాయి.",
            keyTakeawayEn: "Match classroom tasks to developmental readiness!",
            keyTakeawayTe: "పిల్లల వికాస దశకు తగిన కృత్యాలు ఇవ్వాలి.",
          },
        ],
        questionIds: ["tgtet-q3", "tgtet-q4", "tgtet-q5"],
      },
      {
        id: "node-ctet-1-4",
        unitId: "unit-ctet-1",
        examId: "ctet-sample",
        type: NodeType.TOPIC,
        orderIndex: 3,
        titleEn: "Topic 4: Learning and Development",
        titleTe: "అంశం 4: అభ్యసనం మరియు వికాసం",
        objectiveEn:
          "Understand Vygotsky's ZPD, Scaffolding, and Bruner's discovery approach.",
        objectiveTe:
          "వైగోట్‌స్కీ ZPD, సారువా మరియు బ్రూనర్ ఆవిష్కరణ అభ్యసనాన్ని నేర్చుకోండి.",
        estimatedMinutes: 5,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Social Constructivism & Scaffolding",
            titleTe: "సాంఘిక నిర్మాణాత్మక వాదం & సారువా",
            bodyEn:
              "Guided interaction within the Zone of Proximal Development (ZPD) accelerates conceptual mastery.",
            bodyTe:
              "వికాస సామీప్య మండలం (ZPD) లో అందించే సారువా అభ్యసనాన్ని వేగవంతం చేస్తుంది.",
            keyTakeawayEn: "Errors are windows into children's thinking!",
            keyTakeawayTe: "పిల్లల తప్పులు వారి ఆలోచనా సరళిని తెలియజేస్తాయి.",
          },
        ],
        questionIds: ["tgtet-q30", "tgtet-q2", "ctet-sample-q2"],
      },
      {
        id: "node-ctet-1-5",
        unitId: "unit-ctet-1",
        examId: "ctet-sample",
        type: NodeType.REVISION,
        orderIndex: 4,
        titleEn: "Topic 5: Revision Challenge",
        titleTe: "అంశం 5: పునశ్చరణ సవాలు",
        objectiveEn: "Review all Unit 1 concepts to unlock your CTET Unit 1 Reward Chest!",
        objectiveTe: "యూనిట్ 1 భావనలను పునశ్చరణ చేసి నిధిని అన్‌లాక్ చేయండి!",
        estimatedMinutes: 5,
        pointsReward: 60,
        conceptCards: [
          {
            titleEn: "Quick Unit 1 Recap",
            titleTe: "యూనిట్ 1 సంక్షిప్త పునశ్చరణ",
            bodyEn:
              "You've studied Growth Principles, Stages, Piaget, Bruner, and Vygotsky. Answer this 5-question challenge to unlock Unit 2!",
            bodyTe:
              "ఇప్పటివరకు నేర్చుకున్న అంశాలపై 5 ప్రశ్నల సవాలును పూర్తి చేసి యూనిట్ 2 తెరవండి!",
            keyTakeawayEn: "Every step takes you closer to your goal!",
            keyTakeawayTe: "ప్రతి అడుగు మిమ్మల్ని లక్ష్యానికి చేరువ చేస్తుంది!",
          },
        ],
        questionIds: [
          "ctet-sample-q1",
          "ctet-sample-q2",
          "tgtet-q1",
          "tgtet-q3",
          "tgtet-q30",
        ],
      },
      {
        id: "node-ctet-1-chest",
        unitId: "unit-ctet-1",
        examId: "ctet-sample",
        type: NodeType.CHEST,
        orderIndex: 5,
        titleEn: "Unit 1 Completion Reward",
        titleTe: "యూనిట్ 1 పూర్తి బహుమతి",
        objectiveEn: "Open your CTET Unit 1 Treasure Chest!",
        objectiveTe: "CTET యూనిట్ 1 నిధిని తెరవండి!",
        estimatedMinutes: 1,
        pointsReward: 100,
        questionIds: [],
        chestId: "chest-ctet-u1",
      },
    ],
  },

  {
    id: "unit-ctet-2",
    examId: "ctet-sample",
    unitNumber: 2,
    titleEn: "Unit 2: Learning and Pedagogy (Sample Course)",
    titleTe: "యూనిట్ 2: అభ్యసనం మరియు బోధనా శాస్త్రం (నమూనా కోర్సు)",
    subtitleEn: "Sample CTET Foundation Path · Motivation, Inclusion & Strategies",
    subtitleTe: "ప్రేరణ, వ్యక్తిగత భేదాలు & బోధనా వ్యూహాలు",
    subjectId: "cdp",
    isSampleSyllabus: true,
    nodes: [
      {
        id: "node-ctet-2-1",
        unitId: "unit-ctet-2",
        examId: "ctet-sample",
        type: NodeType.TOPIC,
        orderIndex: 6,
        titleEn: "Topic 1: How Children Learn",
        titleTe: "అంశం 1: పిల్లలు ఎలా నేర్చుకుంటారు?",
        objectiveEn: "Compare active exploration, trial-and-error, and insightful learning.",
        objectiveTe: "యత్న-దోష మరియు అంతర్ దృష్టి అభ్యసన విధానాలను పోల్చండి.",
        estimatedMinutes: 5,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Active Meaning-Making",
            titleTe: "క్రియాశీల అభ్యసనం",
            bodyEn:
              "Children construct understanding actively through observation, experimentation, and connecting school concepts to life.",
            bodyTe:
              "పిల్లలు పరిశీలన, ప్రయోగాల ద్వారా క్రియాశీలకంగా జ్ఞానాన్ని నిర్మించుకుంటారు.",
            keyTakeawayEn: "Errors help diagnose misconceptions constructively.",
            keyTakeawayTe: "తప్పులు భావనలను సరిదిద్దే అవకాశాలు.",
          },
        ],
        questionIds: ["ctet-sample-q2", "tgtet-q13", "tgtet-q17"],
      },
      {
        id: "node-ctet-2-2",
        unitId: "unit-ctet-2",
        examId: "ctet-sample",
        type: NodeType.TOPIC,
        orderIndex: 7,
        titleEn: "Topic 2: Motivation and Learning",
        titleTe: "అంశం 2: ప్రేరణ మరియు అభ్యసనం",
        objectiveEn: "Foster intrinsic curiosity over external pressure.",
        objectiveTe: "బాహ్య ఒత్తిడి కంటే అంతర్గత ప్రేరణను పెంపొందించడం.",
        estimatedMinutes: 5,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Intrinsic vs. Extrinsic Motivation",
            titleTe: "అంతర్గత & బాహ్య ప్రేరణ",
            bodyEn:
              "Intrinsic motivation comes from genuine interest in learning; fixed external rewards work only on schedule.",
            bodyTe:
              "ఆసక్తితో నేర్చుకోవడం అంతర్గత ప్రేరణ; ఇది దీర్ఘకాలిక విజయాన్ని ఇస్తుంది.",
            keyTakeawayEn: "Encourage mastery goals over rote competition.",
            keyTakeawayTe: "బట్టీ కంటే అవగాహనతో కూడిన అభ్యసనం ముఖ్యం.",
          },
        ],
        questionIds: ["tgtet-q19", "tgtet-q15", "tgtet-q6"],
      },
      {
        id: "node-ctet-2-3",
        unitId: "unit-ctet-2",
        examId: "ctet-sample",
        type: NodeType.TOPIC,
        orderIndex: 8,
        titleEn: "Topic 3: Individual Differences",
        titleTe: "అంశం 3: వ్యక్తిగత భేదాలు & సమ్మిళిత విద్య",
        objectiveEn: "Support diverse learners in an inclusive classroom.",
        objectiveTe: "సమ్మిళిత తరగతిలో విభిన్న అభ్యాసకులకు మద్దతు ఇవ్వడం.",
        estimatedMinutes: 5,
        pointsReward: 50,
        conceptCards: [
          {
            titleEn: "Inclusion Starts With Knowing Learners",
            titleTe: "అభ్యాసకులను తెలుసుకోవడం",
            bodyEn:
              "Flexible pedagogy adapts methods and materials after first understanding each student's unique needs.",
            bodyTe:
              "ప్రతి విద్యార్థి అవసరాలను తెలుసుకోవడమే సమ్మిళిత విద్యకు పునాది.",
            keyTakeawayEn: "Never label or segregate; adapt the environment!",
            keyTakeawayTe: "పిల్లలను వేరు చేయకుండా బోధనా పద్ధతిని మార్చుకోవాలి.",
          },
        ],
        questionIds: ["tgtet-q27", "tgtet-q9", "tgtet-q29"],
      },
      {
        id: "node-ctet-2-4",
        unitId: "unit-ctet-2",
        examId: "ctet-sample",
        type: NodeType.REVISION,
        orderIndex: 9,
        titleEn: "Topic 4: Teaching and Learning Strategies",
        titleTe: "అంశం 4: బోధనాభ్యసన వ్యూహాలు",
        objectiveEn: "Apply heuristic, project, and collaborative teaching methods.",
        objectiveTe: "హ్యూరిస్టిక్, ప్రాజెక్టు మరియు సహకార బోధనా వ్యూహాలను అన్వయించండి.",
        estimatedMinutes: 5,
        pointsReward: 60,
        conceptCards: [
          {
            titleEn: "Learner-Centered Strategies",
            titleTe: "శిశు కేంద్రీకృత వ్యూహాలు",
            bodyEn:
              "Heuristic inquiry, Dewey-inspired Project Method, and scaffolding turn classrooms into lively discovery spaces.",
            bodyTe:
              "హ్యూరిస్టిక్ అన్వేషణ, ప్రాజెక్టు పద్ధతి తరగతి గదిని ఉత్సాహభరితంగా మారుస్తాయి.",
            keyTakeawayEn: "Finish this topic to claim your CTET Unit 2 Mastery Chest!",
            keyTakeawayTe: "దీనిని పూర్తి చేసి యూనిట్ 2 నిధిని గెలుచుకోండి!",
          },
        ],
        questionIds: ["tgtet-q145", "tgtet-q59", "tgtet-q117"],
      },
      {
        id: "node-ctet-2-chest",
        unitId: "unit-ctet-2",
        examId: "ctet-sample",
        type: NodeType.CHEST,
        orderIndex: 10,
        titleEn: "Unit 2 Completion Reward",
        titleTe: "యూనిట్ 2 పూర్తి బహుమతి",
        objectiveEn: "Open your CTET Unit 2 Pedagogy Mastery Chest!",
        objectiveTe: "CTET యూనిట్ 2 బోధనా నిధిని తెరవండి!",
        estimatedMinutes: 1,
        pointsReward: 125,
        questionIds: [],
        chestId: "chest-ctet-u2",
      },
    ],
  },
];
