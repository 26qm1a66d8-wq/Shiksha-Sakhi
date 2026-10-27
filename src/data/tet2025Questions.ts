import { QuestionItem } from "../types";

const TELUGU_POEM_Q31 = `జనకుని భంగి రామ నృపచంద్రుని, నన్నును దల్లిమాఱుగాఁ
గని, కొలువంగ నేర్చు గుణ గణ్యుని, లక్ష్మణ నీతి పారగున్
వినఁ గన రాని పల్కు లవివేకముచేతను బల్కినట్టి యా
వినుత మహాఫలం బనుభవించితి నంచును జాటి చెప్పుమా`;

const TELUGU_PROSE_Q35 = `నామాత్మకమైన విశ్వానికి సృష్టికర్త కవి. రూపాత్మక విశ్వానికి మూలకర్త బ్రహ్మ. కవి వాక్కుల మహిమ వలనే పోతన భాగవతపద్యాలు దివ్య సంగీతాన్ని వినిపించాయి. విశ్వనాథుడి 'వాక్యం రసాత్మకం కావ్యమనే' మాట కావ్యంలో రసానికున్న ప్రాధాన్యాన్ని గుర్తించింది. 'రమణీయార్థ ప్రతిపాదక శబ్దం కావ్యమ్' అని జగన్నాథుడు కావ్యానికి అర్థవివరణ పలికాడు.`;

const ENGLISH_PASSAGE_Q61 = `Precipitation, commonly referred to rainfall, is a measure of the quantity of atmospheric water in the form of rain, hail, sleet or snow that reaches the ground. It is formed in the clouds when water vapor condenses into bigger and bigger droplets of water. Along with evaporation and condensation, precipitation is one of the three major parts of the global water cycle. As per the general formula, ten inches of snow equals one inch of precipitation, while fifty inches of rain is measured as fifty inches of precipitation. Smaller raindrops are almost perfectly spherical, larger raindrops look like kidney beans, and very large rain drops have a huge indent and look more like a parachute.`;

export const QUESTIONS_BANK: QuestionItem[] = [
  // =========================================================================
  // SECTION 1: CHILD DEVELOPMENT AND PEDAGOGY (TG TET 19 Jan 2025 Shift 2)
  // =========================================================================
  {
    id: "tgtet-q1",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 1,
    officialQuestionId: "69817730749",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Growth & Development Principles",
    topicTagTe: "పెరుగుదల మరియు వికాస సూత్రాలు",
    questionEn:
      "Identify the statement/s that supports 'teachers need to have correct knowledge of principles of growth and development':\nA) Teachers can plan the teaching-learning process in accordance with the developmental stages of the children.\nB) Each child is different, therefore, learning experiences should be based on each individual child's abilities.",
    questionTe:
      "'ఉపాధ్యాయులకు పెరుగుదల మరియు వికాస సూత్రాల సరైన పరిజ్ఞానం ఉండాలి' అనే దానికి మద్దతు ఇచ్చే స్టేట్‌మెంట్‌లను గుర్తించండి:\nA) ఉపాధ్యాయులు పిల్లల వికాస దశలకు అనుగుణంగా బోధనాభ్యసన ప్రక్రియను ప్రణాళిక చేసుకోవచ్చు.\nB) ప్రతి పిల్లవాడు భిన్నంగా ఉంటాడు, కాబట్టి, అభ్యసన అనుభవాలు ప్రతి పిల్లవాడి సామర్థ్యాలపై ఆధారపడి ఉండాలి.",
    optionsEn: ["Both A and B", "A only", "B only", "Neither A nor B"],
    optionsTe: ["A మరియు B రెండూ", "A మాత్రమే", "B మాత్రమే", "A, B రెండూ కాదు"],
    correctIndex: 0,
    explanationEn:
      "Knowledge of developmental principles helps teachers both match lessons to age-appropriate stages (Statement A) and respect individual differences among learners (Statement B).",
    explanationTe:
      "వికాస సూత్రాల పరిజ్ఞానం వల్ల ఉపాధ్యాయులు పిల్లల వయస్సు/దశలకు తగినట్లు బోధనను ప్లాన్ చేయగలరు (A) మరియు వ్యక్తిగత భేదాలను గుర్తించి బోధించగలరు (B).",
    simplerExplanationEn:
      "Think of two rules every good teacher follows: (1) Don't teach Class 8 algebra to a Class 1 child—that's knowing stages (A). (2) Even in Class 4, two children learn at different speeds—that's knowing individual abilities (B). Both A and B are true!",
    simplerExplanationTe:
      "మంచి టీచర్ రెండు విషయాలు గుర్తుంచుకుంటారు: 1) పిల్లల వయస్సుకు తగ్గట్టు పాఠం చెప్పడం (A), 2) ప్రతి బిడ్డ సామర్థ్యం వేరుగా ఉంటుందని గుర్తించడం (B). కాబట్టి A మరియు B రెండూ సరైనవే!",
    wrongOptionNotesEn: [
      "Correct! Both developmental readiness and individual differences rely on growth principles.",
      "Statement A is true, but ignoring Statement B misses the principle of individual differences.",
      "Statement B is true, but ignoring Statement A misses age-wise developmental planning.",
      "Both statements are core reasons why pedagogy includes child development.",
    ],
    wrongOptionNotesTe: [
      "సరైనది! A మరియు B రెండూ వికాస సూత్రాల ఆవశ్యకతను తెలుపుతాయి.",
      "A సరైనదే కానీ B (వ్యక్తిగత భేదాలు) కూడా అంతే ముఖ్యమైనది.",
      "B సరైనదే కానీ A (వికాస దశల ప్రణాళిక) కూడా సరైనదే.",
      "రెండు వాక్యాలూ సరైనవే కాబట్టి ఇది తప్పు ఎంపిక.",
    ],
    analogyEn:
      "Like a tailor who checks both the general age size chart (A) and the exact measurements of the child (B) before stitching a uniform.",
    analogyTe:
      "దర్జీ స్కూల్ యూనిఫాం కుట్టేటప్పుడు వయస్సు సైజు (A) మరియు ఆ బిడ్డ కొలతలు (B) రెండూ చూసినట్లే టీచర్ కూడా రెండూ గమనిస్తారు.",
    similarQuestionId: "tgtet-q4",
  },
  {
    id: "tgtet-q2",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 2,
    officialQuestionId: "69817730750",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Cognitive Theories (Piaget, Bruner, Vygotsky)",
    topicTagTe: "సంజ్ఞానాత్మక సిద్ధాంతాలు",
    questionEn:
      "Identify the INCORRECT statement relating to Bruner's discovery learning:",
    questionTe:
      "బ్రూనర్ ఆవిష్కరణ అభ్యసనానికి సంబంధించి సరికాని స్టేట్‌మెంట్‌ను గుర్తించండి:",
    optionsEn: [
      "Learning is an active process of discovery",
      "Teachers should wait for learning readiness to set in naturally in a child",
      "Learning proceeds from specific to general",
      "Classroom learning should take place inductively",
    ],
    optionsTe: [
      "అభ్యసనం అనేది ఆవిష్కరణ యొక్క క్రియాశీల ప్రక్రియ",
      "పిల్లలలో అభ్యసన సంసిద్ధత సహజంగా వచ్చే వరకు ఉపాధ్యాయులు వేచి ఉండాలి",
      "అభ్యసనం నిర్దిష్టం నుండి సాధారణం వరకు కొనసాగుతుంది",
      "తరగతి గది అభ్యసనం ఆగమనాత్మకంగా జరగాలి",
    ],
    correctIndex: 1,
    explanationEn:
      "Jerome Bruner famously stated that any subject can be taught effectively in some intellectually honest form to any child at any stage—teachers actively stimulate readiness rather than passively waiting for it.",
    explanationTe:
      "బ్రూనర్ ప్రకారం ఏ విషయాన్నైనా పిల్లల స్థాయికి తగిన రీతిలో ఏ దశలోనైనా బోధించవచ్చు. సంసిద్ధత సహజంగా వచ్చే వరకు టీచర్ ఖాళీగా వేచి ఉండకూడదు. అందువల్ల 2వ ఎంపిక సరికానిది.",
    simplerExplanationEn:
      "The question asks for the WRONG statement. Bruner believed teachers can spark readiness through good activities (enactive/iconic/symbolic) instead of sitting back and waiting for the child to grow older.",
    simplerExplanationTe:
      "ప్రశ్నలో 'సరికాని' వాక్యం అడిగారు. పిల్లల్లో సంసిద్ధత దానంతట అదే వచ్చేవరకు ఆగాలని బ్రూనర్ చెప్పలేదు; తగిన కృత్యాల ద్వారా టీచరే సంసిద్ధత కలిగించాలని చెప్పారు.",
    wrongOptionNotesEn: [
      "This is TRUE for Bruner—discovery learning is active, so it is not the incorrect statement.",
      "Correct answer! Waiting passively contradicts Bruner's spiral curriculum philosophy.",
      "This is TRUE—discovery learning moves from specific examples to general rules.",
      "This is TRUE—Bruner advocated inductive reasoning in classrooms.",
    ],
    wrongOptionNotesTe: [
      "ఇది బ్రూనర్ ప్రకారం సరైన వాక్యమే, కాబట్టి సమాధానం కాదు.",
      "సరైన ఎంపిక! వేచి ఉండాలనేది బ్రూనర్ సిద్ధాంతానికి వ్యతిరేకం.",
      "నిర్దిష్ట ఉదాహరణల నుండి సాధారణ సూత్రానికి వెళ్ళడం సరైనదే.",
      "ఆగమన పద్ధతి (Inductive) బ్రూనర్ సమర్థించినదే.",
    ],
    analogyEn:
      "Instead of waiting years to explain gravity, a teacher drops a ball and a feather so a young child discovers air resistance right away.",
    analogyTe:
      "గురుత్వాకర్షణ చెప్పడానికి పెద్ద తరగతి వరకు ఆగకుండా, బంతిని కింద పడేసి చిన్నప్పుడే పరిశీలన ద్వారా నేర్పించడం.",
    similarQuestionId: "tgtet-q3",
  },
  {
    id: "tgtet-q3",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 3,
    officialQuestionId: "69817730751",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Cognitive Theories (Piaget, Bruner, Vygotsky)",
    topicTagTe: "సంజ్ఞానాత్మక సిద్ధాంతాలు",
    questionEn:
      "Sashi, a small girl, was scolded by her mother for shouting loudly when there were guests in the house. After sometime, Sashi showed her mother a drawing in which some figures were elders with happy faces and a small girl at a distance with a sad face, indicating her feeling. Children can do this from this stage of cognitive development according to Piaget:",
    questionTe:
      "ఇంట్లో అతిథులు ఉన్నప్పుడు బిగ్గరగా కేకలు వేసినందుకు శశి అనే చిన్న అమ్మాయిని ఆమె తల్లి మందలించింది. కొంతసేపటి తర్వాత శశి తన భావాన్ని సూచించే డ్రాయింగ్‌ని చూపించింది (పెద్దలు సంతోషంగా, దూరంగా చిన్న అమ్మాయి విచారంగా). పియాజె ప్రకారం సంజ్ఞానాత్మక వికాసం యొక్క ఈ దశ నుండి పిల్లలు ఇలా చేయగలరు:",
    optionsEn: [
      "Sensory motor stage",
      "Concrete operational stage",
      "Preoperational stage",
      "Formal operational stage",
    ],
    optionsTe: [
      "ఇంద్రియ చాలక దశ",
      "మూర్త ప్రచాలక దశ",
      "పూర్వ ప్రచాలక దశ",
      "అమూర్త ప్రచాలక దశ",
    ],
    correctIndex: 2,
    explanationEn:
      "Symbolic representation—expressing thoughts and emotions through drawings, pretend play, and words—emerges in Piaget's Preoperational stage (ages 2 to 7 years).",
    explanationTe:
      "బొమ్మలు గీయడం, ప్రతీకల (Symbols) ద్వారా భావాలను వ్యక్తపరచడం పియాజె చెప్పిన 'పూర్వ ప్రచాలక దశ' (2–7 సం.) నుండి ప్రారంభమవుతుంది.",
    simplerExplanationEn:
      "Using a drawing or symbol to represent real people and feelings is called 'symbolic thought'. According to Piaget, children start doing this between ages 2 and 7—the Preoperational stage!",
    simplerExplanationTe:
      "మనసులోని బాధను బొమ్మ రూపంలో (ప్రతీకాత్మకంగా) చూపించడం 2 నుండి 7 ఏళ్ల మధ్య ఉండే 'పూర్వ ప్రచాలక దశ' లక్షణం.",
    wrongOptionNotesEn: [
      "In the Sensory motor stage (0–2 yrs), infants act via senses and reflexes, not symbolic drawings.",
      "Concrete operational (7–11 yrs) comes later; symbolic drawing already begins in the Preoperational stage.",
      "Correct! Symbolic function (drawing, pretend play) begins in the Preoperational stage.",
      "Formal operational (11+ yrs) deals with abstract scientific reasoning, much later than basic symbolic drawing.",
    ],
    wrongOptionNotesTe: [
      "ఇంద్రియ చాలక దశ (0–2 సం.) లో పిల్లలు బొమ్మల ద్వారా భావాలు చూపలేరు.",
      "మూర్త ప్రచాలక దశ (7–11 సం.) కంటే ముందే ఈ సామర్థ్యం మొదలవుతుంది.",
      "సరైనది! పూర్వ ప్రచాలక దశలోనే ప్రతీకాత్మక ఆలోచన మొదలవుతుంది.",
      "అమూర్త ప్రచాలక దశ 11 ఏళ్ల తర్వాత వస్తుంది.",
    ],
    analogyEn:
      "Just like a 4-year-old holding a wooden block to her ear pretending it is a mobile phone, Sashi uses crayons to represent her family.",
    analogyTe:
      "4 ఏళ్ల పాప కట్టె ముక్కను ఫోన్‌లా ఊహించుకుని మాట్లాడినట్లే, శశి తన భావాన్ని బొమ్మ ద్వారా చూపింది.",
    similarQuestionId: "tgtet-q30",
  },
  {
    id: "tgtet-q4",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 4,
    officialQuestionId: "69817730752",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Growth & Development Principles",
    topicTagTe: "పెరుగుదల మరియు వికాస సూత్రాలు",
    questionEn:
      "Increase in the muscular strength required to gain competency for playing different games begins during this stage:",
    questionTe:
      "వివిధ ఆటలు ఆడే సామర్థ్యం పొందడానికి అవసరమైన కండరాల బలం పెరగడం ఈ దశలో ప్రారంభమవుతుంది:",
    optionsEn: ["Adolescence", "Early childhood", "Infancy", "Later childhood"],
    optionsTe: ["కౌమారదశ", "పూర్వ బాల్య దశ", "శైశవ దశ", "ఉత్తర బాల్య దశ"],
    correctIndex: 3,
    explanationEn:
      "Later childhood (6–12 years, often called the elementary school or 'gang age') marks steady growth in muscular coordination and strength needed for structured team games.",
    explanationTe:
      "ఉత్తర బాల్య దశ (6–12 సం., ముఠా వయస్సు / పాఠశాల దశ) లో రకరకాల ఆటలు ఆడటానికి అవసరమైన కండరాల బలం, సమన్వయం ప్రారంభమవుతాయి.",
    simplerExplanationEn:
      "Between ages 6 and 12 (Later Childhood), children enter primary school, join friend groups, and build the muscle coordination needed for kabaddi, kho-kho, cycling, and team sports.",
    simplerExplanationTe:
      "6 నుండి 12 ఏళ్ల 'ఉత్తర బాల్య దశ'లో పిల్లలు జట్టు ఆటలు (ఖో-ఖో, కబడ్డీ మొదలైనవి) ఆడటానికి కావలసిన కండర పుష్టిని పొందుతారు.",
    wrongOptionNotesEn: [
      "Adolescence brings rapid puberty growth, but game-playing muscle competency begins earlier in Later childhood.",
      "Early childhood (2–6 yrs) involves basic gross motor play (running/jumping) rather than structured game competency.",
      "Infancy (0–2 yrs) focuses on sitting, crawling, and learning to walk.",
      "Correct! Later childhood (6–12 yrs) is when physical skill for organized games develops.",
    ],
    wrongOptionNotesTe: [
      "కౌమారదశ కంటే ముందే ఉత్తర బాల్య దశలో ఆటల సామర్థ్యం మొదలవుతుంది.",
      "పూర్వ బాల్య దశలో సాధారణ కదలికలు మాత్రమే ఉంటాయి.",
      "శైశవ దశలో నడవడం, పాకడం మాత్రమే నేర్చుకుంటారు.",
      "సరైనది! ఉత్తర బాల్య దశలోనే వివిధ ఆటలకు అవసరమైన కండర బలం పెరుగుతుంది.",
    ],
    analogyEn:
      "Think of Class 3–6 playground games like Kho-Kho—this is the exact stage when children master rules and physical stamina.",
    analogyTe:
      "3 నుండి 6 తరగతుల పిల్లలు గ్రౌండ్‌లో ఖో-ఖో, పరుగు పందాలు ఆడటం దీనికి చక్కని ఉదాహరణ.",
    similarQuestionId: "tgtet-q5",
  },
  {
    id: "tgtet-q5",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 5,
    officialQuestionId: "69817730753",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Motivation, Personality & Mental Health",
    topicTagTe: "ప్రేరణ, మూర్తిమత్వం & మానసిక ఆరోగ్యం",
    questionEn:
      "Vidhatri is a school-age child. Apart from school she attends many co-curricular activities. As she is getting good appreciation for her various works, she keeps working hard to achieve more competency. The stage of Erikson's Psycho-Social development that corresponds to Vidhatri is:",
    questionTe:
      "విధాత్రి పాఠశాల వయసు గల పిల్ల. సహ-పాఠ్య కార్యక్రమాలలో పాల్గొంటూ ప్రశంసలు పొందుతున్నందున మరింత నైపుణ్యాన్ని సాధించడానికి కష్టపడి పనిచేస్తుంది. విధాత్రి ఉన్న ఎరిక్సన్ మనో సాంఘిక వికాస దశ:",
    optionsEn: [
      "Autonomy Vs Shame and doubt",
      "Initiative Vs Guilt",
      "Trust Vs Mistrust",
      "Industry Vs Inferiority",
    ],
    optionsTe: [
      "స్వయంప్రతిపత్తి Vs సిగ్గు మరియు సంశయం",
      "చొరవ Vs అపరాధ భావం",
      "నమ్మకం Vs అపనమ్మకం",
      "శ్రమ శీలత Vs న్యూనత",
    ],
    correctIndex: 3,
    explanationEn:
      "For school-age children (6–12 years), Erikson's fourth stage is Industry vs. Inferiority, where praise for productive effort builds a sense of competence ('Industry').",
    explanationTe:
      "పాఠశాల వయస్సు (6–12 సం.) పిల్లలలో ప్రశంసల వల్ల కష్టపడి పనిచేసే గుణం (శ్రమ శీలత - Industry) ఏర్పడుతుంది. ఇది ఎరిక్సన్ 4వ దశ.",
    simplerExplanationEn:
      "Clue words in the question: 'school-age child', 'appreciation', 'working hard for competency'. In Erikson's chart, school age = Industry (hard work & skill) vs. Inferiority!",
    simplerExplanationTe:
      "ప్రశ్నలో 'పాఠశాల వయసు', 'నైపుణ్యం కోసం కష్టపడి పనిచేయడం' అనే పదాలు ఉన్నాయి. ఎరిక్సన్ సిద్ధాంతంలో పాఠశాల వయసు = శ్రమ శీలత Vs న్యూనత!",
    wrongOptionNotesEn: [
      "Autonomy vs Shame (1–3 yrs) is toddlerhood (toilet training, dressing).",
      "Initiative vs Guilt (3–6 yrs) is preschool play exploration.",
      "Trust vs Mistrust (0–1 yr) is infancy.",
      "Correct! School-age mastery and diligence represent Industry vs Inferiority.",
    ],
    wrongOptionNotesTe: [
      "ఇది 1–3 ఏళ్ల దశ.",
      "ఇది 3–6 ఏళ్ల ప్రీ-స్కూల్ దశ.",
      "ఇది 0–1 ఏడాది శైశవ దశ.",
      "సరైనది! పాఠశాల వయస్సులో నైపుణ్య సాధన 'శ్రమ శీలత Vs న్యూనత' దశ.",
    ],
    analogyEn:
      "When a teacher puts a gold star on a Class 4 student's science model, the student eagerly builds an even better project next week—that's Industry!",
    analogyTe:
      "టీచర్ 4వ తరగతి విద్యార్థిని ప్రాజెక్టును మెచ్చుకుంటే, ఆమె మరింత ఉత్సాహంగా పనిచేయడమే 'శ్రమ శీలత'.",
    similarQuestionId: "tgtet-q6",
  },
  {
    id: "tgtet-q6",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 6,
    officialQuestionId: "69817730754",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Motivation, Personality & Mental Health",
    topicTagTe: "ప్రేరణ, మూర్తిమత్వం & మానసిక ఆరోగ్యం",
    questionEn:
      "According to Carl Rogers, one among the following DOES NOT help in facilitating personal growth of his clients by a counselor:",
    questionTe:
      "కార్ల్ రోజర్స్ ప్రకారం, తన సహాయార్థుల వ్యక్తిగత వృద్ధిని సులభతరం చేయడంలో మంత్రణకుడికి కింది వాటిలో ఒకటి సహాయం చేయదు:",
    optionsEn: ["Genuineness", "Acceptance", "Criticism", "Transparency"],
    optionsTe: ["యథార్థత", "అంగీకారం", "విమర్శ", "పారదర్శకత"],
    correctIndex: 2,
    explanationEn:
      "Carl Rogers' person-centered counseling requires unconditional positive regard (acceptance), congruence (genuineness/transparency), and empathy—never judgmental criticism.",
    explanationTe:
      "కార్ల్ రోజర్స్ వ్యక్తి-కేంద్రీకృత మంత్రణంలో యథార్థత, అంగీకారం, పారదర్శకత సహాయపడతాయి; కానీ 'విమర్శ' (Criticism) సహాయం చేయదు.",
    simplerExplanationEn:
      "A caring counselor listens with honesty (genuineness/transparency) and warmth (acceptance). Criticizing someone makes them defensive and blocks personal growth!",
    simplerExplanationTe:
      "కౌన్సెలర్ నిజాయితీగా, అంగీకార భావంతో ఉండాలి కానీ ఎదుటివారిని విమర్శించకూడదు. కాబట్టి 'విమర్శ' సరైన సమాధానం.",
    wrongOptionNotesEn: [
      "Genuineness is one of Rogers' core conditions for growth.",
      "Acceptance (unconditional positive regard) is central to Rogers' approach.",
      "Correct! Criticism hinders rather than helps personal growth.",
      "Transparency is part of congruence/genuineness in counseling.",
    ],
    wrongOptionNotesTe: [
      "యథార్థత వ్యక్తిగత వృద్ధికి తోడ్పడుతుంది.",
      "అంగీకారం (Acceptance) రోజర్స్ సిద్ధాంతంలో కీలకం.",
      "సరైనది! విమర్శ వ్యక్తిగత వృద్ధికి ఆటంకం కలిగిస్తుంది.",
      "పారదర్శకత కౌన్సెలింగ్‌లో సహాయపడుతుంది.",
    ],
    analogyEn:
      "Plants grow with sunlight and water (acceptance and warmth), not by scolding the leaves (criticism).",
    analogyTe:
      "మొక్కకు నీరు, వెలుతురు ఎలాగో, విద్యార్థి ఎదుగుదలకు ఆదరణ అలాగ; విమర్శ వల్ల ఎదుగుదల ఆగిపోతుంది.",
    similarQuestionId: "tgtet-q9",
  },
  {
    id: "tgtet-q9",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 9,
    officialQuestionId: "69817730757",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Motivation, Personality & Mental Health",
    topicTagTe: "ప్రేరణ, మూర్తిమత్వం & మానసిక ఆరోగ్యం",
    questionEn:
      "Shradda is sending her 14-year-old son to hostel alone for the first time. Before dropping him at the airport she told him how to go through the check-in and security counters, boarding, and after landing taking an airport cab to reach the hostel. This type of parenting is:",
    questionTe:
      "శ్రద్ధా తన 14 ఏళ్ల కొడుకును మొదటిసారి ఒంటరిగా హాస్టల్‌కి పంపుతోంది. ఎయిర్‌పోర్ట్‌లో చెక్-ఇన్, సెక్యూరిటీ, బోర్డింగ్ మరియు ల్యాండింగ్ తర్వాత క్యాబ్‌లో హాస్టల్‌కు ఎలా వెళ్లాలో వివరంగా చెప్పింది. ఇది ఏ రకమైన పెంపక శైలి?",
    optionsEn: ["Authoritative", "Authoritarian", "Uninvolved", "Permissive"],
    optionsTe: ["అధికారయుత", "నిరంకుశ", "జోక్య రహిత", "అనుమతి పూర్వక"],
    correctIndex: 0,
    explanationEn:
      "Diana Baumrind's Authoritative parenting combines clear guidance, communication, and supportive encouragement of independence—unlike Authoritarian (strict/controlling without warmth).",
    explanationTe:
      "పిల్లల్లో స్వతంత్రతను ప్రోత్సహిస్తూనే తగిన మార్గదర్శకత్వం, బాధ్యత నేర్పే పెంపక శైలిని 'అధికారయుత' (Authoritative / ప్రజాస్వామ్య) పెంపక శైలి అంటారు.",
    simplerExplanationEn:
      "Don't confuse 'Authoritative' with 'Authoritarian'! Authoritarian = harsh bossy orders. Authoritative = warm, supportive guide who explains steps clearly and trusts the child.",
    simplerExplanationTe:
      "'అధికారయుత' (Authoritative) అంటే ప్రేమతో కూడిన మార్గదర్శకత్వం. 'నిరంకుశ' (Authoritarian) అంటే భయపెట్టే కఠిన శాసనాలు. శ్రద్ధా ప్రేమగా దారి చూపింది కాబట్టి 'అధికారయుత' సరైనది!",
    wrongOptionNotesEn: [
      "Correct! Supportive step-by-step guidance encouraging independence is Authoritative parenting.",
      "Authoritarian parents enforce rigid obedience through fear rather than supportive guidance.",
      "Uninvolved parents neglect communication and support altogether.",
      "Permissive parents offer little structure or practical preparation.",
    ],
    wrongOptionNotesTe: [
      "సరైనది! మార్గదర్శకత్వం + స్వతంత్రత = అధికారయుత శైలి.",
      "నిరంకుశ శైలిలో కఠిన ఆంక్షలు ఉంటాయి.",
      "జోక్య రహిత శైలిలో తల్లిదండ్రులు పట్టించుకోరు.",
      "అనుమతి పూర్వక శైలిలో సరైన దిశానిర్దేశం ఉండదు.",
    ],
    analogyEn:
      "Like teaching your daughter traffic rules before handing her the bicycle keys, instead of locking the bicycle away.",
    analogyTe:
      "సైకిల్ ఇవ్వకుండా ఆపడం కాకుండా, ట్రాఫిక్ నియమాలు నేర్పి ధైర్యంగా పంపడం లాంటిది.",
    similarQuestionId: "tgtet-q19",
  },
  {
    id: "tgtet-q13",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 13,
    officialQuestionId: "69817730761",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Learning Theories & Classroom Processes",
    topicTagTe: "అభ్యసన సిద్ధాంతాలు",
    questionEn:
      "Eight-year-old Santosh, who went on a tour with his parents, came out of the hotel and walked a few streets looking at the new places. When he realized that he came a long way and is lost, he randomly ran here and there without any logic till he could reach the hotel. This is an example for this theory of learning:",
    questionTe:
      "తల్లిదండ్రులతో టూర్‌కి వెళ్లిన 8 ఏళ్ల సంతోష్ హోటల్ నుంచి బయటకు వచ్చి దారి తప్పిపోయాడని గ్రహించి, ఎలాంటి లాజిక్ లేకుండా హోటల్‌కు చేరుకునే వరకు యాదృచ్ఛికంగా పరుగెత్తాడు. ఇది ఏ అభ్యసన సిద్ధాంతానికి ఉదాహరణ?",
    optionsEn: [
      "Classical Conditioning Learning",
      "Trial and Error Learning",
      "Operant Conditioning Learning",
      "Insightful learning",
    ],
    optionsTe: [
      "శాస్త్రీయ నిబంధన అభ్యసన",
      "యత్న - దోష అభ్యసన",
      "కార్యసాధక నిబంధన అభ్యసన",
      "అంతర్ దృష్టి అభ్యసన",
    ],
    correctIndex: 1,
    explanationEn:
      "Making random attempts without prior planning or sudden insight until accidentally hitting the successful path is the hallmark of Thorndike's Trial and Error learning.",
    explanationTe:
      "ఎలాంటి లాజిక్ లేదా ముందస్తు ప్రణాళిక లేకుండా యాదృచ్ఛిక ప్రయత్నాలు చేస్తూ చివరకు లక్ష్యాన్ని చేరుకోవడం థార్న్‌డైక్ 'యత్న-దోష అభ్యసన' (Trial and Error) కు ఉదాహరణ.",
    simplerExplanationEn:
      "Notice the key words: 'randomly ran here and there without any logic'. Random attempts + mistakes + eventual success = Trial and Error! (If he had planned logically, it would be Insightful learning.)",
    simplerExplanationTe:
      "'ఎలాంటి లాజిక్ లేకుండా యాదృచ్ఛికంగా' ప్రయత్నించడం అంటేనే యత్న-దోష పద్ధతి! ఆలోచించి ప్రణాళిక వేస్తే అది అంతర్ దృష్టి అభ్యసనం అవుతుంది.",
    wrongOptionNotesEn: [
      "Classical conditioning (Pavlov) involves pairing stimuli for involuntary reflexes, not finding a route.",
      "Correct! Random unguided attempts leading to eventual success define Trial and Error.",
      "Operant conditioning focuses on reinforcement schedules shaping behavior.",
      "Insightful learning (Kohler) uses sudden logical understanding of the whole situation, opposite of 'without any logic'.",
    ],
    wrongOptionNotesTe: [
      "శాస్త్రీయ నిబంధన ఉద్దీపన-ప్రతిస్పందనల జతకు సంబంధించినది.",
      "సరైనది! యాదృచ్ఛిక ప్రయత్నాల ద్వారా విజయం సాధించడం యత్న-దోష అభ్యసనం.",
      "కార్యసాధక నిబంధన పునర్బలనంపై ఆధారపడుతుంది.",
      "అంతర్ దృష్టిలో లాజిక్, సమగ్ర ఆలోచన ఉంటాయి.",
    ],
    analogyEn:
      "Trying every key on a big keyring one by one until the lock clicks open!",
    analogyTe:
      "తాళం చెవుల గుత్తిలో ఏది సరిపోతుందో తెలియక ఒక్కొక్కటి పెట్టి చూడటం లాంటిది.",
    similarQuestionId: "tgtet-q17",
  },
  {
    id: "tgtet-q15",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 15,
    officialQuestionId: "69817730763",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Learning Theories & Classroom Processes",
    topicTagTe: "అభ్యసన సిద్ధాంతాలు",
    questionEn:
      "Meena gives her daughter Sri one gift every weekend for solving mathematics problems during the whole week. On Tuesday Sri solved ten problems. The number of gifts Sri gets on that day is:",
    questionTe:
      "మీనా తన కూతురు శ్రీకి వారం మొత్తంలో గణిత సమస్యలను పరిష్కరించినందుకు ప్రతి వారాంతంలో ఒక బహుమతి ఇస్తుంది. మంగళవారం శ్రీ పది సమస్యలను పరిష్కరించింది. ఆ రోజు శ్రీకి లభించే బహుమతుల సంఖ్య:",
    optionsEn: ["Zero", "One", "Ten", "Two"],
    optionsTe: ["సున్నా", "ఒకటి", "పది", "రెండు"],
    correctIndex: 0,
    explanationEn:
      "This is Skinner's Fixed-Interval reinforcement schedule: the reward is given only at the fixed time (weekend), regardless of how many problems are solved on Tuesday. So on Tuesday, she gets Zero gifts.",
    explanationTe:
      "ఇది స్కిన్నర్ 'నియత కాలవ్యవధి పునర్బలనం' (Fixed Interval). బహుమతి వారాంతంలో మాత్రమే ఇస్తారు కాబట్టి మంగళవారం 10 లెక్కలు చేసినా ఆ రోజు వచ్చే బహుమతులు సున్నా (0)!",
    simplerExplanationEn:
      "Read carefully! Mother gives the gift ONLY on the weekend. Tuesday is not the weekend—so even though Sri solved 10 sums on Tuesday, on Tuesday itself she gets 0 gifts!",
    simplerExplanationTe:
      "ప్రశ్నలోని చిన్న మెలిక గమనించండి: బహుమతి ఇచ్చేది 'వారాంతంలో' (Weekend) మాత్రమే. మంగళవారం వారాంతం కాదు కాబట్టి ఆ రోజు వచ్చే బహుమతి 'సున్నా'!",
    wrongOptionNotesEn: [
      "Correct! Fixed-interval rewards happen only at the scheduled weekend, so Tuesday = Zero.",
      "One gift is given at the weekend, not on Tuesday.",
      "It is not a continuous reward per problem solved.",
      "No gifts are distributed mid-week.",
    ],
    wrongOptionNotesTe: [
      "సరైనది! మంగళవారం వారాంతం కాదు కాబట్టి ఆ రోజు సున్నా బహుమతులు లభిస్తాయి.",
      "ఒక బహుమతి వారాంతంలో ఇస్తారు, మంగళవారం కాదు.",
      "ప్రతి లెక్కకు ఒక బహుమతి అని చెప్పలేదు.",
      "రెండు అనేది సరికాదు.",
    ],
    analogyEn:
      "Just like monthly salary—even if you finish a big project on the 10th of the month, payday still happens at month-end!",
    analogyTe:
      "నెలవారీ జీతం లాంటిది—నెల మధ్యలో ఎక్కువ పని చేసినా జీతం వచ్చేది నెలాఖరునే కదా!",
    similarQuestionId: "tgtet-q13",
  },
  {
    id: "tgtet-q17",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 17,
    officialQuestionId: "69817730765",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Learning Theories & Classroom Processes",
    topicTagTe: "అభ్యసన సిద్ధాంతాలు",
    questionEn:
      "A student during his preparation for admission to a medical course plans his preparation by allocating the time he has to study the different subjects based on his ability in those subjects. He prepares accordingly and secures a seat. This is an example of:",
    questionTe:
      "ఒక విద్యార్థి మెడికల్ కోర్సు ప్రవేశానికి తన సామర్థ్యం ఆధారంగా వివిధ సబ్జెక్టులకు సమయాన్ని కేటాయించుకుని ప్రణాళికాబద్ధంగా చదివి సీటు దక్కించుకున్నాడు. ఇది దీనికి ఉదాహరణ:",
    optionsEn: [
      "Trial and error",
      "Insightful learning",
      "Experimental learning",
      "Operant conditioning",
    ],
    optionsTe: [
      "యత్న - దోష",
      "అంతర్ దృష్టి అభ్యసనం",
      "ప్రయోగాత్మక అభ్యసనం",
      "కార్యసాధక నిబంధనం",
    ],
    correctIndex: 1,
    explanationEn:
      "Analyzing the whole goal, understanding relationships between one's strengths and available time, and planning intelligently exemplifies Gestalt / Kohler's Insightful learning.",
    explanationTe:
      "సమస్యను సమగ్రంగా అర్థం చేసుకుని, తన సామర్థ్యాలను విశ్లేషించుకుని ప్రణాళికాబద్ధంగా లక్ష్యాన్ని చేరుకోవడం కోహ్లర్ 'అంతర్ దృష్టి అభ్యసనం' (Insightful learning).",
    simplerExplanationEn:
      "Whenever a student surveys the whole syllabus, assesses strengths/weaknesses, and makes a smart strategy, that's using mental 'Insight'—not blind guessing!",
    simplerExplanationTe:
      "గుడ్డిగా ప్రయత్నించకుండా, మొత్తం పరిస్థితిని అర్థం చేసుకుని తెలివిగా టైమ్-టేబుల్ వేసుకోవడమే 'అంతర్ దృష్టి అభ్యసనం'.",
    wrongOptionNotesEn: [
      "Trial and error is random without planning, whereas this student planned strategically.",
      "Correct! Holistic perception and intelligent planning represent Insightful learning.",
      "He did not run laboratory experiments; he organized cognitive strategy.",
      "No external reward/punishment schedule drove the planning.",
    ],
    wrongOptionNotesTe: [
      "యత్న-దోషలో ప్రణాళిక ఉండదు.",
      "సరైనది! వివేచనతో కూడిన ప్రణాళిక అంతర్ దృష్టి అభ్యసనం.",
      "ఇది ప్రయోగశాల పద్ధతి కాదు.",
      "ఇది పునర్బలన నిబంధనం కాదు.",
    ],
    analogyEn:
      "Just like organizing your festival cooking order so long-simmering dishes start first and everything finishes on time.",
    analogyTe:
      "పండుగ వంట చేసేటప్పుడు ఏ వంటకు ఎంత సమయం పడుతుందో ముందే ఆలోచించి ప్లాన్ చేసుకోవడం లాంటిది.",
    similarQuestionId: "tgtet-q19",
  },
  {
    id: "tgtet-q19",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 19,
    officialQuestionId: "69817730767",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Motivation, Personality & Mental Health",
    topicTagTe: "ప్రేరణ, మూర్తిమత్వం & మానసిక ఆరోగ్యం",
    questionEn:
      "When a person performs an act because he finds interest in the activity, it is:",
    questionTe:
      "ఒక వ్యక్తి కృత్యంలో గల ఆసక్తి కారణంగా ఆ కృత్యాన్ని చేసినట్లయితే అది:",
    optionsEn: [
      "Extraneous motivation",
      "Extrinsic motivation",
      "Unnatural motivation",
      "Intrinsic motivation",
    ],
    optionsTe: ["అదనపు ప్రేరణ", "బాహ్య ప్రేరణ", "అసహజ ప్రేరణ", "అంతర్గత ప్రేరణ"],
    correctIndex: 3,
    explanationEn:
      "Doing an activity purely for inner joy, curiosity, and personal interest—without needing external prizes—is Intrinsic motivation.",
    explanationTe:
      "బహుమతులు లేదా బయటి ప్రోత్సాహకాల కోసం కాకుండా, ఆ పనిపై ఉన్న సహజ ఆసక్తి, ఆనందం కోసం చేయడాన్ని 'అంతర్గత ప్రేరణ' (Intrinsic Motivation) అంటారు.",
    simplerExplanationEn:
      "Inside interest = Intrinsic! Outside prize/fear = Extrinsic! Since the person acts out of genuine interest in the activity itself, it is Intrinsic motivation.",
    simplerExplanationTe:
      "లోపలి ఇష్టంతో చేసేది = అంతర్గత ప్రేరణ! బహుమతి కోసమో, భయంతోనో చేసేది = బాహ్య ప్రేరణ!",
    wrongOptionNotesEn: [
      "Extraneous refers to outside/unrelated factors.",
      "Extrinsic motivation relies on external rewards like marks, money, or praise.",
      "Unnatural motivation is an outdated term equivalent to artificial/extrinsic pressure.",
      "Correct! Interest within the activity itself is Intrinsic motivation.",
    ],
    wrongOptionNotesTe: [
      "ఇది బాహ్య కారకాలకు సంబంధించినది.",
      "బాహ్య ప్రేరణ బహుమతులు, మార్కుల కోసం ఉంటుంది.",
      "ఆసక్తితో చేయడం అసహజ ప్రేరణ కాదు.",
      "సరైనది! స్వయం ఆసక్తితో చేయడం అంతర్గత ప్రేరణ.",
    ],
    analogyEn:
      "Singing a lullaby or painting a rangoli simply because it makes your heart happy, even if nobody is judging a competition.",
    analogyTe:
      "పోటీ లేకపోయినా మనసుకు ఆనందంగా ఉందని ముగ్గు వేయడం లేదా పాట పాడుకోవడం అంతర్గత ప్రేరణ.",
    similarQuestionId: "tgtet-q27",
  },
  {
    id: "tgtet-q27",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 27,
    officialQuestionId: "69817730775",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Inclusive Education & RTE Act 2009",
    topicTagTe: "సమ్మిళిత విద్య & RTE చట్టం 2009",
    questionEn: "Managing an inclusive classroom begins with:",
    questionTe: "సమ్మిళిత తరగతి గదిని నిర్వహించడం దీనితో ప్రారంభమవుతుంది:",
    optionsEn: [
      "Peer involvement",
      "Selecting the resources",
      "Appropriate classroom seating arrangement",
      "Knowing the learners",
    ],
    optionsTe: [
      "సమ వయస్కుల ప్రమేయం",
      "వనరులను ఎంచుకోవడం",
      "తగిన తరగతి గది సీటింగ్ అమరిక",
      "అభ్యాసకులను తెలుసుకోవడం",
    ],
    correctIndex: 3,
    explanationEn:
      "Before choosing resources, seating, or peer groups, an inclusive teacher must first understand every learner's strengths, needs, background, and learning profile.",
    explanationTe:
      "సమ్మిళిత తరగతిలో వనరులు లేదా సీటింగ్ కంటే ముందుగా ఉపాధ్యాయురాలు ప్రతి విద్యార్థి అవసరాలు, సామర్థ్యాలు, నేపథ్యాన్ని తెలుసుకోవాలి ('అభ్యాసకులను తెలుసుకోవడం').",
    simplerExplanationEn:
      "Ask yourself: how can you arrange seats or pick teaching aids if you don't yet know which child has low vision, who learns tactilely, or who needs extra support? Knowing the learners is always Step 1!",
    simplerExplanationTe:
      "పిల్లల అవసరాలు ఏమిటో తెలియకుండా సీటింగ్ గానీ, బోధనోపకరణాలు గానీ ఎంచుకోలేము కదా! కాబట్టి మొదటి మెట్టు 'అభ్యాసకులను తెలుసుకోవడం'.",
    wrongOptionNotesEn: [
      "Peer involvement comes later during collaborative activities.",
      "Resources can only be chosen after you know what your learners need.",
      "Seating arrangement depends on first knowing learners' visual/hearing/mobility needs.",
      "Correct! Understanding each child is the foundational first step of inclusion.",
    ],
    wrongOptionNotesTe: [
      "ఇది బోధన సమయంలో వచ్చే తదుపరి అంశం.",
      "పిల్లల అవసరాలు తెలిశాకే వనరులను ఎంచుకోగలము.",
      "పిల్లల ప్రత్యేక అవసరాలు తెలిశాకే సీటింగ్ అమర్చగలము.",
      "సరైనది! అభ్యాసకులను తెలుసుకోవడమే సమ్మిళిత విద్యకు తొలి మెట్టు.",
    ],
    analogyEn:
      "A doctor checks the patient's symptoms first before prescribing medicine or diet.",
    analogyTe:
      "డాక్టర్ మందులు ఇచ్చే ముందు రోగి పరిస్థితిని తెలుసుకున్నట్లే, టీచర్ ముందుగా పిల్లలను అర్థం చేసుకోవాలి.",
    similarQuestionId: "tgtet-q29",
  },
  {
    id: "tgtet-q28",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 28,
    officialQuestionId: "69817730776",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Inclusive Education & RTE Act 2009",
    topicTagTe: "సమ్మిళిత విద్య & RTE చట్టం 2009",
    questionEn:
      "The term of office of the Chairperson or a Member of the National Commission for Protection of Child Rights (NCPCR) is:",
    questionTe:
      "బాలల హక్కుల పరిరక్షణ కోసం జాతీయ కమిషన్ (NCPCR) చైర్‌పర్సన్ లేదా సభ్యుని పదవీ కాలం:",
    optionsEn: ["2 years", "4 years", "5 years", "3 years"],
    optionsTe: ["2 సంవత్సరాలు", "4 సంవత్సరాలు", "5 సంవత్సరాలు", "3 సంవత్సరాలు"],
    correctIndex: 3,
    explanationEn:
      "Under the Commissions for Protection of Child Rights Act, 2005, both the Chairperson and Members of NCPCR hold office for a term of 3 years.",
    explanationTe:
      "బాలల హక్కుల పరిరక్షణ కమిషన్ చట్టం 2005 ప్రకారం, NCPCR చైర్‌పర్సన్ మరియు సభ్యుల పదవీ కాలం 3 సంవత్సరాలు.",
    simplerExplanationEn:
      "Easy memory hook: N-C-P-C-R protects 'Child' rights -> 3 syllables in 'Child-ren's Rights' -> 3 years term!",
    simplerExplanationTe:
      "సులభంగా గుర్తుంచుకోండి: బాలల హక్కుల కమిషన్ (NCPCR) చైర్‌పర్సన్ మరియు సభ్యుల పదవీ కాలం = 3 సంవత్సరాలు!",
    wrongOptionNotesEn: [
      "2 years is shorter than the statutory 3-year tenure.",
      "4 years does not apply to NCPCR.",
      "Many constitutional posts have 5 years, which makes this a common exam trap—NCPCR is 3 years.",
      "Correct! 3 years is the official statutory term under the CPCR Act, 2005.",
    ],
    wrongOptionNotesTe: [
      "2 సంవత్సరాలు కాదు.",
      "4 సంవత్సరాలు కాదు.",
      "చాలా పదవులకు 5 ఏళ్లు ఉండటం వల్ల ఇది సాధారణ కన్ఫ్యూజన్—కానీ NCPCR కి 3 ఏళ్లు మాత్రమే.",
      "సరైనది! 3 సంవత్సరాలు అధికారిక పదవీ కాలం.",
    ],
    analogyEn:
      "Remember '3 years' alongside RTE Act 2009 rules for quick 1-mark statutory recall in TET.",
    analogyTe:
      "TET లో చట్టపరమైన ప్రశ్నలలో NCPCR = 3 ఏళ్లు అని గుర్తుంచుకుంటే 1 మార్కు ఖాయం.",
    similarQuestionId: "tgtet-q29",
  },
  {
    id: "tgtet-q29",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 29,
    officialQuestionId: "69817730777",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Inclusive Education & RTE Act 2009",
    topicTagTe: "సమ్మిళిత విద్య & RTE చట్టం 2009",
    questionEn:
      "The Central Government has made NCTE the academic authority for laying down the minimum qualifications for appointment as a teacher as provided for under this Section of RTE Act, 2009:",
    questionTe:
      "RTE చట్టం, 2009లోని ఈ సెక్షన్ కింద పొందుపరిచిన విధంగా ఉపాధ్యాయ నియామకానికి కనీస అర్హతలను నిర్దేశించడానికి కేంద్ర ప్రభుత్వం NCTEని అకడమిక్ అథారిటీగా చేసింది:",
    optionsEn: ["Section 23", "Section 24", "Section 25", "Section 26"],
    optionsTe: ["సెక్షన్ 23", "సెక్షన్ 24", "సెక్షన్ 25", "సెక్షన్ 26"],
    correctIndex: 0,
    explanationEn:
      "Section 23 of the RTE Act, 2009 deals with 'Qualifications for appointment and terms and conditions of service of teachers'—which is the very basis for conducting TET!",
    explanationTe:
      "RTE చట్టం 2009 లోని 'సెక్షన్ 23' ఉపాధ్యాయుల నియామక కనీస అర్హతలను (TET అర్హతతో సహా) నిర్దేశిస్తుంది. సెక్షన్ 24 ఉపాధ్యాయుల విధులను తెలుపుతుంది.",
    simplerExplanationEn:
      "Quick RTE Section map:\n• Section 23 = Teacher Qualifications (NCTE & TET!)\n• Section 24 = Teacher Duties\n• Section 25 = Pupil-Teacher Ratio\n• Section 26 = Filling Teacher Vacancies.",
    simplerExplanationTe:
      "సులభమైన గుర్తు:\n• సెక్షన్ 23 = టీచర్ అర్హతలు (NCTE / TET)\n• సెక్షన్ 24 = టీచర్ విధులు\n• సెక్షన్ 25 = విద్యార్థి-ఉపాధ్యాయ నిష్పత్తి\n• సెక్షన్ 26 = ఖాళీల భర్తీ.",
    wrongOptionNotesEn: [
      "Correct! Section 23 empowers NCTE to set minimum teacher qualifications (including TET).",
      "Section 24 covers duties of teachers and redressal of grievances.",
      "Section 25 specifies the Pupil-Teacher Ratio (PTR).",
      "Section 26 states teacher vacancies shall not exceed 10% of total strength.",
    ],
    wrongOptionNotesTe: [
      "సరైనది! సెక్షన్ 23 ఉపాధ్యాయ కనీస అర్హతలకు సంబంధించినది.",
      "సెక్షన్ 24 ఉపాధ్యాయుల విధులను వివరిస్తుంది.",
      "సెక్షన్ 25 విద్యార్థి-ఉపాధ్యాయ నిష్పత్తిని తెలుపుతుంది.",
      "సెక్షన్ 26 ఉపాధ్యాయ ఖాళీలు 10% మించకూడదని చెబుతుంది.",
    ],
    analogyEn:
      "First you get qualified (Section 23), then you perform your classroom duties (Section 24)!",
    analogyTe:
      "ముందు అర్హత సాధించి ఉద్యోగంలో చేరతాం (23), ఆ తర్వాతే విధులు నిర్వహిస్తాం (24)!",
    similarQuestionId: "tgtet-q28",
  },
  {
    id: "tgtet-q30",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 30,
    officialQuestionId: "69817730778",
    isSample: false,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Cognitive Theories (Piaget, Bruner, Vygotsky)",
    topicTagTe: "సంజ్ఞానాత్మక సిద్ధాంతాలు",
    questionEn:
      "According to Vygotsky, 'scaffolding' can be provided for activities that:",
    questionTe:
      "వైగోట్‌స్కీ ప్రకారం, ఈ కృత్యాలకు 'సారువా' (Scaffolding) అందించవచ్చు:",
    optionsEn: [
      "that a child can do independently",
      "occur within Zone of Proximal Development",
      "cannot be conducted even with support",
      "are at a level beyond the cognitive capacity of the child",
    ],
    optionsTe: [
      "పిల్లవాడు స్వతంత్రంగా చేయగలిగేవి",
      "వికాస సామీప్య మండలంలో (ZPD) ఉన్న వాటికి",
      "మద్దతుతో కూడా నిర్వహించలేనివి",
      "పిల్లల సంజ్ఞానాత్మక సామర్థ్యానికి మించిన స్థాయిలో ఉండేవి",
    ],
    correctIndex: 1,
    explanationEn:
      "Lev Vygotsky defined the Zone of Proximal Development (ZPD) as the sweet spot of tasks a learner cannot yet do alone but can accomplish with temporary guidance ('scaffolding') from a More Knowledgeable Other.",
    explanationTe:
      "పిల్లవాడు ఒంటరిగా చేయలేనివి కానీ పెద్దల/ఉపాధ్యాయుల తాత్కాలిక సహాయంతో (సారువా - Scaffolding) చేయగలిగే కృత్యాలు 'వికాస సామీప్య మండలం' (ZPD) లో ఉంటాయి.",
    simplerExplanationEn:
      "Imagine 3 rings:\n1. Too easy (can do alone — no help needed).\n2. Just out of reach (can do WITH hints — ZPD! Scaffolding works here!).\n3. Way too hard right now.",
    simplerExplanationTe:
      "పిల్లవాడు సొంతంగా చేయగలిగే దానికి సహాయం అక్కర్లేదు. కానీ కొంచెం సహాయం అందిస్తే చేయగలిగే పనులు ZPD (వికాస సామీప్య మండలం) లో ఉంటాయి—అక్కడే 'సారువా' ఇస్తారు!",
    wrongOptionNotesEn: [
      "If a child can already do it independently, scaffolding is unnecessary.",
      "Correct! Scaffolding specifically targets tasks inside the Zone of Proximal Development (ZPD).",
      "Tasks impossible even with support lie outside the child's current ZPD.",
      "Tasks completely beyond cognitive capacity cannot yet be bridged by scaffolding.",
    ],
    wrongOptionNotesTe: [
      "స్వతంత్రంగా చేయగలిగే వాటికి సారువా అవసరం లేదు.",
      "సరైనది! ZPD పరిధిలో ఉన్న కృత్యాలకే సారువా అందిస్తారు.",
      "సహాయంతో కూడా చేయలేనివి ZPD పరిధికి బయట ఉంటాయి.",
      "సామర్థ్యానికి పూర్తిగా మించిన వాటికి సారువా పనిచేయదు.",
    ],
    analogyEn:
      "Holding the back of a child's bicycle seat while she learns to balance, then letting go once she pedals steadily.",
    analogyTe:
      "పాప సైకిల్ నేర్చుకునేటప్పుడు వెనుక సీటు పట్టుకుని నడిపించి, బ్యాలెన్స్ వచ్చాక వదిలేయడమే 'సారువా'!",
    similarQuestionId: "tgtet-q3",
  },

  // =========================================================================
  // SECTION 4: MATHEMATICS (TG TET 19 Jan 2025 Shift 2)
  // =========================================================================
  {
    id: "tgtet-q91",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 91,
    officialQuestionId: "69817730842",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Numbers, Fractions & Sets",
    topicTagTe: "సంఖ్యలు, భిన్నాలు & సమితులు",
    questionEn:
      "The least fraction in the following that must be subtracted from the sum of 2⅛, 4⅙, 5⅓ so that the total results in a whole number is:",
    questionTe:
      "క్రింది వాటిలో నుండి ఏ అత్యల్ప భిన్నంను 2⅛, 4⅙, 5⅓ ల మొత్తం నుండి తీసివేస్తే వచ్చే ఫలితం పూర్ణాంకం అవుతుంది?",
    optionsEn: ["3/8", "5/8", "1/8", "7/8"],
    optionsTe: ["3/8", "5/8", "1/8", "7/8"],
    correctIndex: 1,
    explanationEn:
      "Add the whole parts: 2 + 4 + 5 = 11. Add the fractions: 1/8 + 1/6 + 1/3 = (3 + 4 + 8)/24 = 15/24 = 5/8. Total sum = 11 + 5/8. Subtracting 5/8 leaves the whole number 11!",
    explanationTe:
      "పూర్ణాంకాల మొత్తం = 2 + 4 + 5 = 11. భిన్నాల మొత్తం = 1/8 + 1/6 + 1/3 = (3 + 4 + 8)/24 = 15/24 = 5/8. మొత్తం = 11⅝. దీని నుండి 5/8 తీసివేస్తే 11 (పూర్ణాంకం) వస్తుంది!",
    simplerExplanationEn:
      "Don't convert into huge improper fractions! Just add the fraction pieces separately:\n• LCM of 8, 6, 3 is 24.\n• 1/8 = 3/24, 1/6 = 4/24, 1/3 = 8/24.\n• Sum = 15/24, divide top & bottom by 3 -> 5/8. Remove that extra 5/8 to make it an exact whole number!",
    simplerExplanationTe:
      "పెద్ద అపక్రమ భిన్నాలుగా మార్చకుండా కేవలం భిన్న భాగాలను కలపండి: 1/8 + 1/6 + 1/3 = 15/24 = 5/8. ఆ అదనపు 5/8 తీసేస్తే ఖచ్చితమైన పూర్ణాంకం (11) మిగులుతుంది!",
    wrongOptionNotesEn: [
      "3/8 is what you would ADD to 5/8 to reach the next whole number (12), not subtract!",
      "Correct! The fractional remainder of the sum is 5/8.",
      "Subtracting 1/8 leaves 11 + 4/8 = 11.5, which is not a whole number.",
      "Subtracting 7/8 leaves 10 + 6/8, not a whole number.",
    ],
    wrongOptionNotesTe: [
      "3/8 కలిపితే 12 అవుతుంది—కానీ ప్రశ్నలో 'తీసివేస్తే' (subtracted) అని అడిగారు!",
      "సరైనది! 15/24 ను సూక్ష్మీకరిస్తే 5/8 వస్తుంది.",
      "1/8 తీసివేస్తే ఇంకా 4/8 మిగిలిపోతుంది.",
      "7/8 తీసివేస్తే పూర్ణాంకం రాదు.",
    ],
    analogyEn:
      "If you have 11 full rotis and 5/8 of a roti on a plate, taking away the 5/8 piece leaves 11 full rotis.",
    analogyTe:
      "11 పూర్తి రొట్టెలు మరియు 5/8 ముక్క ఉన్నప్పుడు, ఆ 5/8 ముక్క తీసేస్తే 11 పూర్తి రొట్టెలు మిగులుతాయి.",
    similarQuestionId: "tgtet-q92",
  },
  {
    id: "tgtet-q92",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 92,
    officialQuestionId: "69817730843",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Numbers, Fractions & Sets",
    topicTagTe: "సంఖ్యలు, భిన్నాలు & సమితులు",
    questionEn:
      "Read the following statements related to sets:\nA) If X = {x : x − 6 = 0}, Y = {x : x² = 36 and x > 0}, then sets X and Y are equal sets.\nB) If P = {x : x² + 2x − 15 = 0 and x ∈ N}, Q = {3, −5}, then sets P and Q are equal sets.",
    questionTe:
      "సమితులకు సంబంధించి క్రింది వ్యాఖ్యలను చదవండి:\nA) X = {x : x − 6 = 0}, Y = {x : x² = 36 మరియు x > 0} అయితే X మరియు Y లు సమసమితులు.\nB) P = {x : x² + 2x − 15 = 0 మరియు x ∈ N}, Q = {3, −5} అయితే P మరియు Q లు సమసమితులు.",
    optionsEn: [
      "Both the statements A and B are correct.",
      "Both the statements A and B are incorrect.",
      "Statement A is correct and Statement B is incorrect.",
      "Statement A is incorrect and Statement B is correct.",
    ],
    optionsTe: [
      "రెండు వ్యాఖ్యలు A మరియు B సరైనవి.",
      "రెండు వ్యాఖ్యలు A మరియు B సరికావు.",
      "వ్యాఖ్య A సరైనది మరియు వ్యాఖ్య B సరికానిది.",
      "వ్యాఖ్య A సరికానిది మరియు వ్యాఖ్య B సరైనది.",
    ],
    correctIndex: 2,
    explanationEn:
      "In A: X = {6}, and for Y, x² = 36 with x > 0 gives Y = {6}, so X = Y (True). In B: x² + 2x − 15 = (x+5)(x−3) = 0 gives roots 3 and −5, but x ∈ N (Natural numbers) restricts P to {3} only, so P ≠ Q (False).",
    explanationTe:
      "A లో X = {6} మరియు x > 0 కాబట్టి Y = {6}, కనుక X = Y (సరైనది). B లో x ∈ N (సహజ సంఖ్యలు) కాబట్టి −5 సహజ సంఖ్య కాదు, అందుకే P = {3} మాత్రమే అవుతుంది; Q = {3, −5} తో సమానం కాదు.",
    simplerExplanationEn:
      "Watch out for the symbol 'x ∈ N' in Statement B! N means Natural counting numbers (1, 2, 3...). Negative −5 is NOT a natural number, so set P only has {3}, while Q has {3, −5}. Hence A is right and B is wrong!",
    simplerExplanationTe:
      "B లో 'x ∈ N' (సహజ సంఖ్యలు 1, 2, 3...) అనే షరతు ఉంది. −5 రుణ సంఖ్య కాబట్టి సహజ సంఖ్య కాదు! అందుకే P = {3} మాత్రమే. కాబట్టి A సరైనది, B సరికానిది.",
    wrongOptionNotesEn: [
      "Statement B is false because −5 is not a natural number (N).",
      "Statement A is true because x > 0 eliminates −6 from Y.",
      "Correct! X = Y = {6}, while P = {3} ≠ Q = {3, −5}.",
      "A is true and B is false, not the reverse.",
    ],
    wrongOptionNotesTe: [
      "−5 సహజ సంఖ్య కాదు కాబట్టి B తప్పు.",
      "A లో x > 0 ఉంది కాబట్టి X = Y = {6} సరైనదే.",
      "సరైనది! A సరైనది మరియు B సరికానిది.",
      "A సరైనది కాబట్టి ఇది తప్పు ఎంపిక.",
    ],
    analogyEn:
      "If a womens-only bus allows passengers from a ticket list, only eligible passengers enter the set!",
    analogyTe:
      "అర్హత షరతు (x ∈ N) ఉన్నప్పుడు ఆ షరతుకు సరిపోయే సంఖ్య (3) మాత్రమే సమితిలోకి వస్తుంది.",
    similarQuestionId: "tgtet-q93",
  },
  {
    id: "tgtet-q93",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 93,
    officialQuestionId: "69817730844",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Commercial Math & Algebra",
    topicTagTe: "అంకగణితం & బీజగణితం",
    questionEn:
      "A company sold 93,500 televisions in the year 2024 and decided to increase the sales by 18% in the year 2025 over the previous year's sales. The total number of televisions to be sold in 2025 is:",
    questionTe:
      "ఒక కంపెనీ 2024లో 93,500 టెలివిజన్‌లను అమ్మింది. 2025లో అమ్మకాలను 18% పెంచాలని నిర్ణయించుకుంటే, 2025లో అమ్మాల్సిన మొత్తం టెలివిజన్‌ల సంఖ్య:",
    optionsEn: ["1,00,330", "1,10,000", "1,10,300", "1,10,330"],
    optionsTe: ["1,00,330", "1,10,000", "1,10,300", "1,10,330"],
    correctIndex: 3,
    explanationEn:
      "18% of 93,500 = 18 × 935 = 16,830. Adding to 2024 sales: 93,500 + 16,830 = 1,10,330.",
    explanationTe:
      "93,500 లో 18% = 935 × 18 = 16,830. మొత్తం అమ్మకాలు = 93,500 + 16,830 = 1,10,330.",
    simplerExplanationEn:
      "Fast mental math trick:\n• 10% of 93,500 = 9,350\n• 8% of 93,500 = 8 × 935 = 7,480\n• Add all three: 93,500 + 9,350 + 7,480 = 1,10,330!",
    simplerExplanationTe:
      "సులభ చిట్కా:\n• 10% = 9,350\n• 8% = 935 × 8 = 7,480\n• మొత్తం = 93,500 + 9,350 + 7,480 = 1,10,330!",
    wrongOptionNotesEn: [
      "1,00,330 misses a ten-thousand carry while adding 93,500 + 16,830.",
      "1,10,000 rounds off the hundreds digits inaccurately.",
      "1,10,300 drops the 30 from 18 × 50 = 900 (935 × 18 = 16,830).",
      "Correct! 93,500 × 1.18 = 1,10,330.",
    ],
    wrongOptionNotesTe: [
      "కూడికలో పదివేల స్థానం మిస్ అయితే 1,00,330 వస్తుంది.",
      "ఇది ఉజ్జాయింపు సంఖ్య మాత్రమే.",
      "935 × 18 = 16,830 లో 30 మిస్ అయితే 1,10,300 వస్తుంది.",
      "సరైనది! 93,500 + 16,830 = 1,10,330.",
    ],
    analogyEn:
      "Check the tens digit: 5 × 8 = 40, plus 3 × 8... 935 × 18 ends in 30, immediately eliminating 1,10,000 and 1,10,300!",
    analogyTe:
      "చివరి అంకెలు 500 + 830 = 330 వస్తాయి కాబట్టి 1,10,330 ని క్షణాల్లో గుర్తించవచ్చు!",
    similarQuestionId: "tgtet-q107",
  },
  {
    id: "tgtet-q94",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 94,
    officialQuestionId: "69817730845",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Geometry, Trigonometry & Mensuration",
    topicTagTe: "రేఖాగణితం, త్రికోణమితి & క్షేత్రమితి",
    questionEn:
      "A wire when bent in the form of a circle encloses an area of 2464 cm². If the same wire is bent to form a square, then the length of the side (in centimeters) of the square is (use π = 22/7):",
    questionTe:
      "ఒక తీగను వృత్తాకార రూపంలో వంచినప్పుడు 2464 చ.సెం.మీ. వైశాల్యాన్ని ఆవరిస్తుంది. అదే తీగను చతురస్రాకార రూపంలోకి మార్చినప్పుడు ఏర్పడిన చతురస్ర భుజం పొడవు (π = 22/7):",
    optionsEn: ["44", "22", "28", "11"],
    optionsTe: ["44", "22", "28", "11"],
    correctIndex: 0,
    explanationEn:
      "Circle area πr² = 2464 ⇒ (22/7)r² = 2464 ⇒ r² = 784 ⇒ r = 28 cm. Wire length = circumference 2πr = 2 × (22/7) × 28 = 176 cm. Square perimeter 4a = 176 ⇒ side a = 44 cm.",
    explanationTe:
      "వృత్త వైశాల్యం (22/7)r² = 2464 ⇒ r² = 784 ⇒ r = 28 సెం.మీ. తీగ పొడవు (వృత్త పరిధి) = 2 × (22/7) × 28 = 176 సెం.మీ. చతురస్ర భుజం a = 176 / 4 = 44 సెం.మీ.",
    simplerExplanationEn:
      "Key rule: When you reshape a wire, its TOTAL LENGTH (perimeter) stays the same!\n1. Find radius from area: r = 28 cm.\n2. Find wire length: 2 × 22/7 × 28 = 176 cm.\n3. Divide equally into 4 sides of a square: 176 ÷ 4 = 44 cm!",
    simplerExplanationTe:
      "తీగ ఆకారం మార్చినప్పుడు 'తీగ పొడవు' (చుట్టుకొలత) మారదు!\n1. వ్యాసార్థం r = 28 సెం.మీ.\n2. వృత్త పరిధి = 176 సెం.మీ.\n3. చతురస్రానికి 4 సమాన భుజాలు కాబట్టి 176 ÷ 4 = 44 సెం.మీ.!",
    wrongOptionNotesEn: [
      "Correct! Circumference 176 cm ÷ 4 sides = 44 cm.",
      "22 cm is half the correct side length.",
      "28 cm is the radius of the circle, not the side of the square!",
      "11 cm is a quarter of the side length.",
    ],
    wrongOptionNotesTe: [
      "సరైనది! 176 ÷ 4 = 44 సెం.మీ.",
      "22 సెం.మీ. సరైన భుజంలో సగం మాత్రమే.",
      "28 సెం.మీ. అనేది వృత్త వ్యాసార్థం (r), చతురస్ర భుజం కాదు!",
      "11 సెం.మీ. సరికాదు.",
    ],
    analogyEn:
      "Reshaping a bangle of thread into a square frame keeps the exact same thread length of 176 cm.",
    analogyTe:
      "176 సెం.మీ. దారాన్ని గుండ్రంగా పెట్టినా, చతురస్రంగా పెట్టినా దారం పొడవు మారదు కదా!",
    similarQuestionId: "tgtet-q96",
  },
  {
    id: "tgtet-q96",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 96,
    officialQuestionId: "69817730847",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Geometry, Trigonometry & Mensuration",
    topicTagTe: "రేఖాగణితం, త్రికోణమితి & క్షేత్రమితి",
    questionEn: "Evaluate: (3 sin 46° / cos 44°) − (cos 28° / sin 62°) + 2 =",
    questionTe: "విలువ కనుగొనండి: (3 sin 46° / cos 44°) − (cos 28° / sin 62°) + 2 =",
    optionsEn: ["5", "3", "6", "4"],
    optionsTe: ["5", "3", "6", "4"],
    correctIndex: 3,
    explanationEn:
      "Using complementary angles: sin 46° = sin(90° − 44°) = cos 44°, so sin 46°/cos 44° = 1. Similarly cos 28° = sin 62°, so cos 28°/sin 62° = 1. Expression = 3(1) − 1 + 2 = 4.",
    explanationTe:
      "పూరక కోణాల సూత్రం ప్రకారం sin 46° = cos 44° మరియు cos 28° = sin 62°. కాబట్టి విలువ = 3(1) − 1 + 2 = 4.",
    simplerExplanationEn:
      "Whenever two angles add up to 90° (46+44=90 and 28+62=90), sin ÷ cos equals 1! So the scary trig fractions become simple numbers: 3(1) − 1 + 2 = 4!",
    simplerExplanationTe:
      "46° + 44° = 90° మరియు 28° + 62° = 90° కాబట్టి ఆ భిన్నాల విలువ 1 అవుతుంది! అప్పుడు 3(1) − 1 + 2 = 4 ఎంత సులభమో చూడండి!",
    wrongOptionNotesEn: [
      "5 happens if you accidentally add +1 instead of subtracting −1 in the middle term.",
      "3 happens if you forget the '+ 2' or miscalculate 3 − 1 + 2.",
      "6 adds all terms (3 + 1 + 2).",
      "Correct! 3 − 1 + 2 = 4.",
    ],
    wrongOptionNotesTe: [
      "మధ్యలో మైనస్ (−1) బదులు ప్లస్ వేస్తే 6 లేదా 5 వస్తుంది.",
      "3 − 1 = 2, దానికి + 2 కలిపితే 4 అవుతుంది.",
      "అన్నీ కూడితే 6 వస్తుంది, కానీ మధ్యలో మైనస్ గుర్తు ఉంది.",
      "సరైనది! 3 − 1 + 2 = 4.",
    ],
    analogyEn:
      "Complementary angles (adding to 90°) cancel out like twin mirror images!",
    analogyTe:
      "90° పూరక కోణాల జతలు sin/cos లో ఉన్నప్పుడు ఒకదానికొకటి క్యాన్సిల్ అయి 1 మిగులుతుంది.",
    similarQuestionId: "tgtet-q98",
  },
  {
    id: "tgtet-q98",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 98,
    officialQuestionId: "69817730849",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Commercial Math & Algebra",
    topicTagTe: "అంకగణితం & బీజగణితం",
    questionEn:
      "Choose the quadratic equation with NO real roots from the following:",
    questionTe:
      "క్రింది వాటిలో వాస్తవ మూలాలు లేని వర్గ సమీకరణాన్ని గుర్తించండి:",
    optionsEn: [
      "2x² + 2√6x + 3 = 0",
      "6x² − 9x − 5 = 0",
      "3x² − 2x + 1 = 0",
      "2x² + 3√3x + 2 = 0",
    ],
    optionsTe: [
      "2x² + 2√6x + 3 = 0",
      "6x² − 9x − 5 = 0",
      "3x² − 2x + 1 = 0",
      "2x² + 3√3x + 2 = 0",
    ],
    correctIndex: 2,
    explanationEn:
      "A quadratic equation ax² + bx + c = 0 has NO real roots when discriminant b² − 4ac < 0. For 3x² − 2x + 1 = 0, b² − 4ac = (−2)² − 4(3)(1) = 4 − 12 = −8 < 0.",
    explanationTe:
      "విచక్షణి b² − 4ac < 0 (రుణాత్మకం) అయితే వాస్తవ మూలాలు ఉండవు. 3x² − 2x + 1 = 0 లో (−2)² − 4(3)(1) = 4 − 12 = −8 < 0 కాబట్టి దీనికి వాస్తవ మూలాలు లేవు.",
    simplerExplanationEn:
      "Just test b² − 4ac for negative value!\nIn Option 3 (a=3, b=−2, c=1): b² is 4, and 4ac is 12. Since 4 − 12 = −8 (negative!), you can't take a real square root of −8, so NO real roots!",
    simplerExplanationTe:
      "b² − 4ac విలువ మైనస్ (0 కంటే తక్కువ) వస్తే వాస్తవ మూలాలు ఉండవు. 3వ ఎంపికలో (−2)² − 4(3)(1) = 4 − 12 = −8 వచ్చింది కాబట్టి అదే సరైన జవాబు!",
    wrongOptionNotesEn: [
      "Here b² − 4ac = 24 − 24 = 0, giving two equal real roots.",
      "Here b² − 4ac = 81 − 4(6)(−5) = 201 > 0, giving two distinct real roots.",
      "Correct! Discriminant = 4 − 12 = −8 < 0, so no real roots.",
      "Here b² − 4ac = 27 − 16 = 11 > 0, giving real roots.",
    ],
    wrongOptionNotesTe: [
      "దీని విచక్షణి 24 − 24 = 0, సమాన వాస్తవ మూలాలు ఉంటాయి.",
      "దీని విచక్షణి 201 > 0, వాస్తవ మూలాలు ఉంటాయి.",
      "సరైనది! 4 − 12 = −8 < 0 కాబట్టి వాస్తవ మూలాలు లేవు.",
      "దీని విచక్షణి 27 − 16 = 11 > 0.",
    ],
    analogyEn:
      "Think of b² − 4ac as your bank balance: if 4ac exceeds b², the balance goes negative!",
    analogyTe:
      "b² కంటే 4ac పెద్దదైతే విలువ మైనస్‌లోకి వెళ్తుంది—అదే వాస్తవ మూలాలు లేని సమీకరణం.",
    similarQuestionId: "tgtet-q107",
  },
  {
    id: "tgtet-q107",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 107,
    officialQuestionId: "69817730858",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Commercial Math & Algebra",
    topicTagTe: "అంకగణితం & బీజగణితం",
    questionEn:
      "Ramesh and Surya own a business. Surya receives 35% of the profit in each month. If Surya received a profit of ₹3318 in a particular month, then the total profit they received in that month is:",
    questionTe:
      "రమేష్ మరియు సూర్య కలిసి వ్యాపారం చేస్తున్నారు. సూర్య ప్రతి నెల లాభంలో 35% పొందుతాడు. ఒక నెలలో సూర్యకి ₹3318 లాభం వస్తే, ఆ నెలలో వారికి వచ్చిన మొత్తం లాభం:",
    optionsEn: ["₹12798", "₹9480", "₹6162", "₹4480"],
    optionsTe: ["₹12798", "₹9480", "₹6162", "₹4480"],
    correctIndex: 1,
    explanationEn:
      "35% of Total Profit = 3318 ⇒ Total Profit = (3318 × 100) / 35 = (474 × 100) / 5 = 474 × 20 = ₹9480.",
    explanationTe:
      "మొత్తం లాభంలో 35% = ₹3318 ⇒ మొత్తం లాభం = (3318 × 100) / 35 = 474 × 20 = ₹9480.",
    simplerExplanationEn:
      "Divide by 7 first to make numbers tiny!\n• 35% ÷ 7 = 5%\n• ₹3318 ÷ 7 = ₹474 (so 5% = ₹474)\n• Multiply by 20 to reach 100%: ₹474 × 20 = ₹9480!",
    simplerExplanationTe:
      "7 తో భాగిస్తే లెక్క చాలా సులభం:\n• 35% ÷ 7 = 5%\n• 3318 ÷ 7 = 474 (అంటే 5% = ₹474)\n• 100% కావాలంటే 20 తో గుణించండి: 474 × 20 = ₹9480!",
    wrongOptionNotesEn: [
      "₹12798 adds 3318 to 9480 instead of finding 100%.",
      "Correct! 35% of ₹9480 is ₹3318.",
      "₹6162 is Ramesh's 65% share (9480 − 3318), whereas the question asks for TOTAL profit!",
      "₹4480 is far too small (35% of 4480 would only be ₹1568).",
    ],
    wrongOptionNotesTe: [
      "ఇది 100% కంటే ఎక్కువ.",
      "సరైనది! ₹9480 లో 35% = ₹3318.",
      "₹6162 అనేది రమేష్ 65% వాటా మాత్రమే—కానీ అడిగింది మొత్తం లాభం!",
      "ఇది సరైన విలువ కాదు.",
    ],
    analogyEn:
      "Always check whether a partnership question asks for the other partner's share (65%) or the total pot (100%)!",
    analogyTe:
      "భాగస్వామ్య లెక్కల్లో రెండో వ్యక్తి వాటా అడిగారా లేక 'మొత్తం లాభం' (100%) అడిగారా అనేది జాగ్రత్తగా చూడాలి.",
    similarQuestionId: "tgtet-q109",
  },
  {
    id: "tgtet-q109",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 109,
    officialQuestionId: "69817730860",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Commercial Math & Algebra",
    topicTagTe: "అంకగణితం & బీజగణితం",
    questionEn:
      "A certain sum amounts to ₹7314 in 3 years and to ₹8586 in 7 years at simple interest, then the rate of interest per annum is:",
    questionTe:
      "కొంత సొమ్ము సాధారణ వడ్డీకి 3 సంవత్సరాలలో ₹7314 మరియు 7 సంవత్సరాలలో ₹8586 అవుతుంది, అయితే సంవత్సరానికి వడ్డీ రేటు:",
    optionsEn: ["3%", "5%", "6%", "8%"],
    optionsTe: ["3%", "5%", "6%", "8%"],
    correctIndex: 1,
    explanationEn:
      "Interest for 4 years (7 − 3) = 8586 − 7314 = ₹1272 ⇒ Interest for 1 year = 1272 / 4 = ₹318. Interest for 3 years = 3 × 318 = ₹954. Principal P = 7314 − 954 = ₹6360. Rate R = (318 / 6360) × 100 = 5%.",
    explanationTe:
      "4 ఏళ్ల వడ్డీ = 8586 − 7314 = ₹1272 ⇒ 1 ఏడాది వడ్డీ = ₹318. 3 ఏళ్ల వడ్డీ = ₹954. అసలు P = 7314 − 954 = ₹6360. వడ్డీ రేటు R = (318 / 6360) × 100 = 5%.",
    simplerExplanationEn:
      "Simple Interest grows by the exact same rupee amount every year!\n1. Extra 4 years gave ₹1272 extra ⇒ ₹318 per year.\n2. Subtract 3 years' interest (₹954) from ₹7314 to get original money = ₹6360.\n3. Notice 318 is half of 636, so ₹318 out of ₹6360 is 5%!",
    simplerExplanationTe:
      "సాధారణ వడ్డీ ప్రతి ఏటా సమానంగా ఉంటుంది:\n1. 4 ఏళ్ల తేడాకు వడ్డీ = ₹1272 ⇒ ఏడాదికి ₹318.\n2. అసలు = 7314 − 954 = ₹6360.\n3. 6360 లో 10% = 636, దాంట్లో సగం 318 కాబట్టి వడ్డీ రేటు = 5%!",
    wrongOptionNotesEn: [
      "3% would give only ₹190.80 annual interest on ₹6360.",
      "Correct! ₹318 is 5% of principal ₹6360.",
      "6% happens if you divide ₹318 by ₹7314 or miscalculate principal.",
      "8% is too high for an annual interest of ₹318.",
    ],
    wrongOptionNotesTe: [
      "3% తక్కువ విలువ.",
      "సరైనది! ₹6360 పై ఏడాదికి ₹318 అంటే 5% వడ్డీ రేటు.",
      "అసలు కనుక్కోకుండా నేరుగా భాగిస్తే తప్పు వస్తుంది.",
      "8% సరికాదు.",
    ],
    analogyEn:
      "Like measuring how much water fills a bucket between minute 3 and minute 7 to find how much water was already inside at minute 0.",
    analogyTe:
      "3వ నిమిషం నుండి 7వ నిమిషం వరకు నిండిన నీటిని బట్టి నిమిషానికి ఎంత పడుతుందో లెక్కించడం లాంటిది.",
    similarQuestionId: "tgtet-q115",
  },
  {
    id: "tgtet-q115",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 115,
    officialQuestionId: "69817730866",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Mathematics Pedagogy",
    topicTagTe: "గణిత బోధనా శాస్త్రం",
    questionEn:
      "'The concepts of ratio, profit and loss, interest, etc. in arithmetic are all based on percentages.' This sentence reveals the correlation of mathematics is:",
    questionTe:
      "'అంకగణితం లోని నిష్పత్తి, లాభనష్టాలు, వడ్డీ మొదలైన భావనలన్నీ శాతాలపై ఆధారపడి ఉంటాయి.' అనే వాక్యం గణితం యొక్క ఏ సహసంబంధాన్ని తెలుపుతుంది?",
    optionsEn: [
      "External correlation",
      "Internal correlation",
      "Correlation of mathematics with daily life situations",
      "Correlation of mathematics with other curricular subjects",
    ],
    optionsTe: [
      "బాహ్య సహసంబంధం",
      "అంతర్గత సహసంబంధం",
      "గణితానికి నిత్య జీవిత పరిస్థితులతో గల సహసంబంధం",
      "గణితానికి ఇతర పాఠ్య విషయాలతో గల సహసంబంధం",
    ],
    correctIndex: 1,
    explanationEn:
      "Linking different topics or branches WITHIN mathematics itself (percentages with profit-loss, ratio, and interest) is called Internal Correlation.",
    explanationTe:
      "గణితంలోని ఒక అంశానికి (శాతాలు) గణితంలోనే ఉన్న ఇతర అంశాలతో (లాభనష్టాలు, వడ్డీ) గల సంబంధాన్ని 'అంతర్గత సహసంబంధం' (Internal Correlation) అంటారు.",
    simplerExplanationEn:
      "Inside Maths to Maths = Internal correlation!\nMaths to Science/Geography/Shopping = External correlation!",
    simplerExplanationTe:
      "గణితం లోపలి అంశాల మధ్య సంబంధం = అంతర్గత సహసంబంధం! గణితానికి ఇతర సబ్జెక్టులతో సంబంధం = బాహ్య సహసంబంధం!",
    wrongOptionNotesEn: [
      "External correlation connects mathematics with other subjects like Physics or Economics.",
      "Correct! Connecting arithmetic topics within mathematics is Internal correlation.",
      "No real-life market story was mentioned—only links between mathematical concepts.",
      "All mentioned topics belong to Mathematics itself, not other school subjects.",
    ],
    wrongOptionNotesTe: [
      "బాహ్య సహసంబంధం ఇతర సబ్జెక్టులతో ఉంటుంది.",
      "సరైనది! గణితంలోని అధ్యాయాల మధ్య సంబంధం అంతర్గత సహసంబంధం.",
      "ఇక్కడ నిత్యజీవిత సన్నివేశం ప్రస్తావించలేదు.",
      "ఇవన్నీ గణితంలోని భాగాలే.",
    ],
    analogyEn:
      "Just like cousins within the same joint family helping one another!",
    analogyTe:
      "ఒకే కుటుంబంలోని సభ్యుల మధ్య ఉన్న అనుబంధం లాంటిది.",
    similarQuestionId: "tgtet-q117",
  },
  {
    id: "tgtet-q117",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 117,
    officialQuestionId: "69817730868",
    isSample: false,
    subjectId: "math",
    subjectNameEn: "Mathematics",
    subjectNameTe: "గణితం",
    topicTagEn: "Mathematics Pedagogy",
    topicTagTe: "గణిత బోధనా శాస్త్రం",
    questionEn:
      "'Explaining method of solving a problem' is a learning indicator for this academic standard:",
    questionTe:
      "'సమస్య సాధన పద్ధతిని వివరించడం' అనునది ఈ విద్యా ప్రమాణానికి సంబంధించిన అభ్యసన సూచిక:",
    optionsEn: [
      "Problem solving",
      "Reasoning and proof",
      "Communication",
      "Representation – Visualisation",
    ],
    optionsTe: [
      "సమస్య సాధన",
      "కార్య కారణ వివేచన, నిరూపణ",
      "వ్యక్తపరచడం (Communication)",
      "ప్రాతినిధ్యపరచడం – దృశ్యీకరణ",
    ],
    correctIndex: 2,
    explanationEn:
      "In Telangana SCERT Mathematics Academic Standards, expressing mathematical ideas, symbols, and 'explaining the method of solving a problem' belongs to the 'Communication' standard.",
    explanationTe:
      "తెలంగాణ గణిత విద్యా ప్రమాణాలలో గణిత పరిభాషను వాడటం, 'సమస్య సాధన పద్ధతిని వివరించడం' అనేది 'వ్యక్తపరచడం' (Communication) ప్రమాణం కిందికి వస్తుంది.",
    simplerExplanationEn:
      "Watch out for the word 'problem'! Solving the problem = Problem Solving. EXPLAINING how you solved it in words/symbols = Communication!",
    simplerExplanationTe:
      "'సమస్య' అనే పదం చూసి 'సమస్య సాధన' అనుకోవద్దు! ఆ పద్ధతిని ఇతరులకు 'వివరించడం' అంటే భావాలను 'వ్యక్తపరచడం' (Communication)!",
    wrongOptionNotesEn: [
      "Trap alert! Actually computing the answer is Problem Solving, but explaining the method is Communication.",
      "Reasoning & proof focuses on verifying conjectures and logical arguments.",
      "Correct! Explaining mathematical steps and language is the Communication standard.",
      "Representation-Visualisation involves graphs, tables, and geometric figures.",
    ],
    wrongOptionNotesTe: [
      "సమస్యను సాధించడం వేరు, సాధించిన పద్ధతిని వివరించడం (వ్యక్తపరచడం) వేరు!",
      "ఇది తార్కిక నిరూపణకు సంబంధించినది.",
      "సరైనది! వివరించడం = వ్యక్తపరచడం (Communication).",
      "ఇది చిత్రాలు, గ్రాఫ్‌లుగా చూపడానికి సంబంధించినది.",
    ],
    analogyEn:
      "Cooking a dish is problem-solving; explaining the recipe clearly to your sister is communication!",
    analogyTe:
      "వంట చేయడం సమస్య సాధన అయితే, ఆ వంట ఎలా చేశారో వేరొకరికి వివరించడం 'వ్యక్తపరచడం'!",
    similarQuestionId: "tgtet-q115",
  },

  // =========================================================================
  // SECTION 5: SCIENCE (TG TET 19 Jan 2025 Shift 2)
  // =========================================================================
  {
    id: "tgtet-q121",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 121,
    officialQuestionId: "69817730872",
    isSample: false,
    subjectId: "science",
    subjectNameEn: "Science",
    subjectNameTe: "విజ్ఞాన శాస్త్రం (సైన్స్)",
    topicTagEn: "Physics & Everyday Mechanics",
    topicTagTe: "భౌతిక శాస్త్రం",
    questionEn:
      "You have 5 litres of milk and 5 litres of water. If the density of milk is 1030 kg/m³ and the density of water is 1000 kg/m³, calculate the effective density of the mixture:",
    questionTe:
      "మీవద్ద 5 లీటర్ల పాలు (సాంద్రత 1030 కి.గ్రా./మీ³) మరియు 5 లీటర్ల నీరు (సాంద్రత 1000 కి.గ్రా./మీ³) ఉన్నాయి. మిశ్రమం యొక్క ఫలిత సాంద్రతను లెక్కించండి:",
    optionsEn: ["2030 kg/m³", "1015 kg/m³", "10150 kg/m³", "20300 kg/m³"],
    optionsTe: [
      "2030 కి.గ్రా./మీ³",
      "1015 కి.గ్రా./మీ³",
      "10150 కి.గ్రా./మీ³",
      "20300 కి.గ్రా./మీ³",
    ],
    correctIndex: 1,
    explanationEn:
      "When EQUAL volumes (5 L and 5 L) are mixed, the effective density is simply the average of the two densities: (1030 + 1000) / 2 = 1015 kg/m³.",
    explanationTe:
      "సమాన ఘనపరిమాణాలు (5 లీ + 5 లీ) కలిపినప్పుడు మిశ్రమ సాంద్రత ఆ రెండింటి సగటు అవుతుంది: (1030 + 1000) / 2 = 1015 కి.గ్రా./మీ³.",
    simplerExplanationEn:
      "Common sense check! Density of a mixture MUST lie between water (1000) and milk (1030). Since you mixed equal 5L + 5L, it lands right in the middle: 1015 kg/m³!",
    simplerExplanationTe:
      "పాలు (1030), నీరు (1000) సమాన పరిమాణంలో కలిపితే మిశ్రమ సాంద్రత ఖచ్చితంగా రెండింటి మధ్యలో (సగటు = 1015) ఉంటుంది!",
    wrongOptionNotesEn: [
      "Densities do not simply add up to 2030 when volumes also double!",
      "Correct! Total mass / Total volume = (1030V + 1000V) / 2V = 1015 kg/m³.",
      "10150 is 10 times too large (decimal error).",
      "20300 multiplies instead of averaging.",
    ],
    wrongOptionNotesTe: [
      "ఘనపరిమాణం కూడా రెట్టింపు అవుతుంది కాబట్టి సాంద్రతలను నేరుగా కూడకూడదు.",
      "సరైనది! సమాన పరిమాణాల సగటు = 1015 కి.గ్రా./మీ³.",
      "ఇది 10 రెట్లు ఎక్కువ.",
      "ఇది సరైన విలువ కాదు.",
    ],
    analogyEn:
      "Mixing half a cup of hot tea and half a cup of warm tea gives medium-warm tea—never boiling!",
    analogyTe:
      "వేడి నీరు, చల్లని నీరు సమానంగా కలిపితే గోరువెచ్చగా ఉంటుంది (మధ్యస్థ విలువ).",
    similarQuestionId: "tgtet-q126",
  },
  {
    id: "tgtet-q126",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 126,
    officialQuestionId: "69817730877",
    isSample: false,
    subjectId: "science",
    subjectNameEn: "Science",
    subjectNameTe: "విజ్ఞాన శాస్త్రం (సైన్స్)",
    topicTagEn: "Physics & Everyday Mechanics",
    topicTagTe: "భౌతిక శాస్త్రం",
    questionEn:
      "An object weighs 42 N on the surface of the Moon. What would be its weight on the surface of the Earth?",
    questionTe:
      "చంద్రుని ఉపరితలంపై ఒక వస్తువు బరువు 42 న్యూటన్లు. భూమి ఉపరితలంపై దాని బరువు ఎంత?",
    optionsEn: ["252 N", "126 N", "7 N", "14 N"],
    optionsTe: ["252 న్యూటన్లు", "126 న్యూటన్లు", "7 న్యూటన్లు", "14 న్యూటన్లు"],
    correctIndex: 0,
    explanationEn:
      "Gravity on Earth is 6 times stronger than on the Moon (W_moon = W_earth / 6). Therefore, W_earth = 6 × 42 N = 252 N.",
    explanationTe:
      "భూమిపై గురుత్వాకర్షణ చంద్రుని కంటే 6 రెట్లు ఎక్కువ. కాబట్టి భూమిపై బరువు = 42 × 6 = 252 న్యూటన్లు!",
    simplerExplanationEn:
      "Careful—don't divide by 6! Things feel LIGHTER on the Moon and 6 times HEAVIER on Earth. Since Moon weight = 42 N, Earth weight = 42 × 6 = 252 N!",
    simplerExplanationTe:
      "జాగ్రత్త! 42 ని 6 తో భాగించి 7 న్యూటన్లు పెట్టకండి! చంద్రునిపై కంటే భూమిపై బరువు 6 రెట్లు 'ఎక్కువ' ఉంటుంది: 42 × 6 = 252 N!",
    wrongOptionNotesEn: [
      "Correct! Earth's gravity is 6× Moon's gravity: 42 × 6 = 252 N.",
      "126 N multiplies by 3 instead of 6.",
      "Classic trap! 7 N (42 ÷ 6) would be if Earth weight was 42 N and Moon weight was asked.",
      "14 N divides by 3 instead of multiplying by 6.",
    ],
    wrongOptionNotesTe: [
      "సరైనది! 42 × 6 = 252 న్యూటన్లు.",
      "3 తో గుణిస్తే 126 వస్తుంది, కానీ 6 తో గుణించాలి.",
      "ఇది సాధారణ ట్రాప్! భూమిపై 42 N ఉండి చంద్రునిపై అడిగితే మాత్రమే 7 N అవుతుంది.",
      "14 N సరికాదు.",
    ],
    analogyEn:
      "Astronauts bounce lightly on the Moon because Earth pulls 6 times harder!",
    analogyTe:
      "చంద్రుని మీద వ్యోమగాములు తేలికగా ఎగురుతారు, భూమి మీద 6 రెట్లు బరువుగా ఉంటారు.",
    similarQuestionId: "tgtet-q129",
  },
  {
    id: "tgtet-q129",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 129,
    officialQuestionId: "69817730880",
    isSample: false,
    subjectId: "science",
    subjectNameEn: "Science",
    subjectNameTe: "విజ్ఞాన శాస్త్రం (సైన్స్)",
    topicTagEn: "Chemistry & Matter",
    topicTagTe: "రసాయన శాస్త్రం",
    questionEn:
      "Among the following, the chemical that is commonly found in the head of a matchstick and also serves as an oxidizing agent to ignite the matchstick:",
    questionTe:
      "కింది వాటిలో సాధారణంగా అగ్గిపుల్ల తల భాగంలో కనిపించే మరియు అగ్గిపుల్లను మండించడంలో సహాయపడే ఆక్సీకరణ కారకంగా పనిచేసే రసాయన పదార్థం:",
    optionsEn: [
      "Sulphur",
      "Potassium Chlorate",
      "Antimony Sulphide",
      "Red Phosphorus",
    ],
    optionsTe: [
      "సల్ఫర్",
      "పొటాషియం క్లోరేట్",
      "ఆంటిమోనీ సల్ఫైడ్",
      "ఎర్ర భాస్వరం",
    ],
    correctIndex: 1,
    explanationEn:
      "Modern safety matchstick heads contain Antimony Trisulphide (fuel) and Potassium Chlorate (KClO₃, the oxidizing agent that supplies oxygen), while Red Phosphorus sits on the striking box side.",
    explanationTe:
      "అగ్గిపుల్ల తల భాగంలో యాంటిమోనీ ట్రైసల్ఫైడ్ (ఇంధనం) మరియు 'పొటాషియం క్లోరేట్' (ఆక్సీకరణ కారకం - KClO₃) ఉంటాయి. ఎర్ర భాస్వరం అగ్గిపెట్టె పక్క గరుకు తలంపై ఉంటుంది.",
    simplerExplanationEn:
      "Remember the matchbox team:\n• Box side strip = Red Phosphorus\n• Match head fuel = Antimony Sulphide\n• Match headXYGEN giver (Oxidizing agent) = Potassium Chlorate (KClO₃—notice the O₃ oxygen atoms!).",
    simplerExplanationTe:
      "గుర్తుంచుకోండి:\n• అగ్గిపెట్టె గరుకు భాగం = ఎర్ర భాస్వరం\n• అగ్గిపుల్ల తలలో ఆక్సిజన్ ఇచ్చే ఆక్సీకరణ కారకం = పొటాషియం క్లోరేట్ (KClO₃)!",
    wrongOptionNotesEn: [
      "Sulphur acts as a secondary fuel, not the oxidizing agent.",
      "Correct! Potassium Chlorate (KClO₃) releases oxygen to ignite the fuel.",
      "Antimony Sulphide is in the match head, but as combustible fuel, not oxidizer.",
      "Red Phosphorus is on the rubbing surface of the matchbox, not the match head!",
    ],
    wrongOptionNotesTe: [
      "సల్ఫర్ ఆక్సీకరణ కారకం కాదు.",
      "సరైనది! పొటాషియం క్లోరేట్ ఆక్సిజన్‌ను అందించి మండించే ఆక్సీకరణ కారకం.",
      "ఆంటిమోనీ సల్ఫైడ్ తలలో ఉన్నప్పటికీ అది ఇంధనం మాత్రమే, ఆక్సీకరణ కారకం కాదు.",
      "ఎర్ర భాస్వరం అగ్గిపెట్టె పక్క భాగంలో ఉంటుంది, పుల్ల తలపై కాదు!",
    ],
    analogyEn:
      "Fire needs wood (Antimony Sulphide) + air/oxygen fan (Potassium Chlorate) + spark (Red Phosphorus).",
    analogyTe:
      "మంటకు కట్టె (ఆంటిమోనీ సల్ఫైడ్) + గాలి/ఆక్సిజన్ (పొటాషియం క్లోరేట్) + నిప్పురవ్వ (ఎర్ర భాస్వరం) అవసరం.",
    similarQuestionId: "tgtet-q134",
  },
  {
    id: "tgtet-q134",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 134,
    officialQuestionId: "69817730885",
    isSample: false,
    subjectId: "science",
    subjectNameEn: "Science",
    subjectNameTe: "విజ్ఞాన శాస్త్రం (సైన్స్)",
    topicTagEn: "Biology & Living World",
    topicTagTe: "జీవ శాస్త్రం",
    questionEn:
      "Among the following cells, which cells do NOT have regeneration capacity?",
    questionTe:
      "క్రింద ఇవ్వబడిన కణాలలో ఏ కణాలకు పునరుత్పత్తి (Regeneration) చేయగల సామర్థ్యం లేదు?",
    optionsEn: ["Blood cells", "Nerve cells", "Muscle cells", "Epithelial cells"],
    optionsTe: ["రక్త కణాలు", "నాడీ కణాలు", "కండర కణాలు", "ఉపకళా కణాలు"],
    correctIndex: 1,
    explanationEn:
      "Mature nerve cells (neurons) lack centrosomes/centrioles required for cell division, so they generally do not divide or regenerate once destroyed.",
    explanationTe:
      "నాడీ కణాలలో (Neurons) కణ విభజనకు అవసరమైన సెంట్రియోల్స్ ఉండవు, కాబట్టి అవి నశిస్తే తిరిగి పునరుత్పత్తి కావు.",
    simplerExplanationEn:
      "Skin (epithelial) heals after a cut, and blood cells renew constantly—but mature brain/spinal Nerve cells lack centrioles and cannot divide again. That's why wearing a helmet is so vital!",
    simplerExplanationTe:
      "చర్మం గీసుకుపోతే మళ్ళీ పెరుగుతుంది, రక్త కణాలు కొత్తవి పుడతాయి—కానీ 'నాడీ కణాలు' దెబ్బతింటే మళ్ళీ విభజన చెందవు. అందుకే హెల్మెట్ పెట్టుకోవాలని చెబుతారు!",
    wrongOptionNotesEn: [
      "Blood cells are continuously replaced by bone marrow.",
      "Correct! Nerve cells lack centrioles and do not regenerate.",
      "Skeletal/smooth muscle tissues have satellite repair mechanisms.",
      "Epithelial (skin/lining) cells regenerate rapidly.",
    ],
    wrongOptionNotesTe: [
      "రక్త కణాలు ఎముక మజ్జలో నిరంతరం తయారవుతాయి.",
      "సరైనది! నాడీ కణాలకు పునరుత్పత్తి సామర్థ్యం ఉండదు.",
      "కండర కణాలకు మరమ్మతు సామర్థ్యం ఉంటుంది.",
      "ఉపకళా కణాలు వేగంగా పునరుత్పత్తి చెందుతాయి.",
    ],
    analogyEn:
      "Skin cells are like chalk that can be replaced anytime; neurons are like precious heirloom wiring.",
    analogyTe:
      "చర్మ కణాలు ఎప్పటికప్పుడు కొత్తవి వస్తాయి, కానీ నాడీ కణాలు ఒకసారి దెబ్బతింటే తిరిగి ఏర్పడవు.",
    similarQuestionId: "tgtet-q143",
  },
  {
    id: "tgtet-q143",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 143,
    officialQuestionId: "69817730894",
    isSample: false,
    subjectId: "science",
    subjectNameEn: "Science",
    subjectNameTe: "విజ్ఞాన శాస్త్రం (సైన్స్)",
    topicTagEn: "Biology & Living World",
    topicTagTe: "జీవ శాస్త్రం",
    questionEn:
      "Identify the gland that secretes both enzymes and hormones from the following:",
    questionTe:
      "క్రింది వానిలో ఎంజైమ్‌లను మరియు హార్మోన్‌లను రెండింటినీ స్రవించే గ్రంథిని గుర్తించండి:",
    optionsEn: [
      "Liver",
      "Adrenal gland",
      "Pituitary gland",
      "Pancreatic gland",
    ],
    optionsTe: ["కాలేయం", "అడ్రినల్ గ్రంథి", "పీయూష గ్రంథి", "క్లోమరస గ్రంథి (క్లోమం)"],
    correctIndex: 3,
    explanationEn:
      "The Pancreas is a mixed (heterocrine) gland: its exocrine part secretes digestive enzymes (trypsin, amylase, lipase) and its endocrine Islets of Langerhans secrete hormones (insulin and glucagon).",
    explanationTe:
      "క్లోమం (Pancreas) ఒక 'మిశ్రమ గ్రంథి'. ఇది జీర్ణక్రియకు ఉపయోగపడే ఎంజైమ్‌లను (ట్రిప్సిన్, లైపేజ్) మరియు రక్తంలో చక్కెరను నియంత్రించే హార్మోన్‌లను (ఇన్సులిన్, గ్లూకాగాన్) రెండింటినీ స్రవిస్తుంది.",
    simplerExplanationEn:
      "Double-duty gland = Pancreas (Mixed Gland)!\n1. Digestive Enzymes (for food)\n2. Insulin & Glucagon Hormones (for blood sugar).",
    simplerExplanationTe:
      "క్లోమం (Pancreas) ను 'మిశ్రమ గ్రంథి' అంటారు—ఎందుకంటే ఇది ఆహారం జీర్ణం చేసే ఎంజైమ్‌లను + షుగర్ నియంత్రించే ఇన్సులిన్ హార్మోన్‌ను రెండింటినీ ఇస్తుంది!",
    wrongOptionNotesEn: [
      "Liver secretes bile (which has no digestive enzymes) and is primarily exocrine/metabolic.",
      "Adrenal is purely an endocrine gland secreting hormones like adrenaline.",
      "Pituitary is purely an endocrine master gland secreting hormones.",
      "Correct! Pancreas acts as both an exocrine (enzymes) and endocrine (hormones) gland.",
    ],
    wrongOptionNotesTe: [
      "కాలేయం పైత్యరసాన్ని స్రవిస్తుంది (అందులో ఎంజైమ్‌లు ఉండవు).",
      "అడ్రినల్ గ్రంథి హార్మోన్లను మాత్రమే స్రవిస్తుంది.",
      "పీయూష గ్రంథి వినాళ గ్రంథి (హార్మోన్లు మాత్రమే).",
      "సరైనది! క్లోమ గ్రంథి ఎంజైమ్‌లు మరియు హార్మోన్లు రెండింటినీ స్రవిస్తుంది.",
    ],
    analogyEn:
      "Like a teacher who both teaches classroom lessons (enzymes) and coordinates school administration (hormones)!",
    analogyTe:
      "తరగతిలో పాఠాలు చెబుతూనే పాఠశాల నిర్వహణ కూడా చూసే ఉపాధ్యాయురాలిలా క్లోమం రెండు పనులూ చేస్తుంది.",
    similarQuestionId: "tgtet-q145",
  },
  {
    id: "tgtet-q145",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 145,
    officialQuestionId: "69817730896",
    isSample: false,
    subjectId: "science",
    subjectNameEn: "Science",
    subjectNameTe: "విజ్ఞాన శాస్త్రం (సైన్స్)",
    topicTagEn: "Science Pedagogy",
    topicTagTe: "సైన్స్ బోధనా శాస్త్రం",
    questionEn:
      "To help students grasp the concept of density, a teacher Venkat asks them to design their own experiments using various liquids and objects. Which aspect of the heuristic method is this exemplifying?",
    questionTe:
      "వెంకట్ అనే ఉపాధ్యాయుడు సాంద్రత భావనను గ్రహించడానికి విద్యార్థులను వివిధ ద్రవాలు, వస్తువులతో సొంత ప్రయోగాలను రూపొందించమని అడుగుతాడు. హ్యూరిస్టిక్ పద్ధతిలోని ఏ అంశాన్ని ఇది ఉదాహరిస్తుంది?",
    optionsEn: [
      "Following strict guidelines to obtain results.",
      "Encouraging creativity and independent problem-solving.",
      "Preparing instruction cards only.",
      "Using only theoretical explanations without trial and error methods.",
    ],
    optionsTe: [
      "ఫలితాలను పొందడానికి కఠినమైన మార్గదర్శకాలను అనుసరించడం.",
      "సృజనాత్మకత మరియు స్వతంత్ర సమస్యా పరిష్కారాన్ని ప్రోత్సహించడం.",
      "సూచనా పత్రాలను మాత్రమే తయారు చేయడం.",
      "యత్న దోష పద్ధతులు లేకుండా సైద్ధాంతిక వివరణలను మాత్రమే ఉపయోగించడం.",
    ],
    correctIndex: 1,
    explanationEn:
      "H.E. Armstrong's Heuristic method ('I find out') places students in the role of independent discoverers who design experiments and solve problems creatively.",
    explanationTe:
      "ఆర్మ్‌స్ట్రాంగ్ రూపొందించిన 'హ్యూరిస్టిక్ పద్ధతి' (అన్వేషణ పద్ధతి) లో విద్యార్థులు స్వయంగా శాస్త్రవేత్తలలా ఆలోచించి సృజనాత్మకంగా ప్రయోగాలు చేస్తారు.",
    simplerExplanationEn:
      "'Heuristic' comes from Greek 'Heurisko' = 'I discover myself!' Letting children design their own floating/sinking test encourages creativity and independent problem-solving.",
    simplerExplanationTe:
      "'హ్యూరిస్టిక్' అంటే 'నేనే స్వయంగా కనుగొంటాను' అని అర్థం. పిల్లలు సొంతంగా ప్రయోగాలు చేయడం సృజనాత్మకతను, స్వతంత్ర సమస్యా పరిష్కారాన్ని పెంచుతుంది.",
    wrongOptionNotesEn: [
      "Strict step-by-step recipe sheets defeat open discovery.",
      "Correct! Designing one's own experiment embodies independent discovery.",
      "Heuristic learning goes far beyond reading instruction cards.",
      "Lecture-only theory is the exact opposite of heuristic experimentation.",
    ],
    wrongOptionNotesTe: [
      "కఠిన నియమాలు అన్వేషణ స్వేచ్ఛను తగ్గిస్తాయి.",
      "సరైనది! స్వతంత్ర సమస్యా పరిష్కారమే హ్యూరిస్టిక్ పద్ధతి జీవాతువు.",
      "సూచనా పత్రాలకే పరిమితం కాదు.",
      "కేవలం సిద్ధాంతం చెప్పడం హ్యూరిస్టిక్ పద్ధతి కాదు.",
    ],
    analogyEn:
      "Giving children oil, water, honey, and a grape so they test and discover density layers with their own hands!",
    analogyTe:
      "నీరు, నూనె, తేనె ఇచ్చి ఏది తేలుతుందో పిల్లలే ప్రయోగం చేసి కనుక్కోవడం.",
    similarQuestionId: "tgtet-q121",
  },

  // =========================================================================
  // SECTION 3: LANGUAGE II ENGLISH (TG TET 19 Jan 2025 Shift 2)
  // =========================================================================
  {
    id: "tgtet-q63",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 63,
    officialQuestionId: "69817730814",
    isSample: false,
    subjectId: "english",
    subjectNameEn: "Language II — English",
    subjectNameTe: "ద్వితీయ భాష — ఇంగ్లీష్",
    topicTagEn: "Reading Comprehension",
    topicTagTe: "పఠన అవగాహన (Comprehension)",
    passageEn: ENGLISH_PASSAGE_Q61,
    passageTe:
      "సారాంశం: మేఘాలలో నీటి ఆవిరి సాంద్రీకరణం చెంది వర్షపు చినుకులుగా మారుతుంది. చిన్న చినుకులు గుండ్రంగా, పెద్ద చినుకులు కిడ్నీ బీన్స్ ఆకారంలో, అతి పెద్ద వర్షపు చినుకులు అడుగున నొక్కు పడి పారాచూట్ (parachute) ఆకారంలో కనిపిస్తాయి.",
    questionEn: "As per the passage, very large rain drops look like:",
    questionTe: "పై గద్యం ప్రకారం, అతి పెద్ద వర్షపు చినుకులు (Very large rain drops) వేటిలా కనిపిస్తాయి?",
    optionsEn: ["teardrop", "kidney beans", "parachutes", "marbles"],
    optionsTe: [
      "teardrop (కన్నీటి బొట్టు)",
      "kidney beans (చిక్కుడు గింజలు)",
      "parachutes (పారాచూట్లు)",
      "marbles (గోళీలు)",
    ],
    correctIndex: 2,
    explanationEn:
      "The final sentence of the passage explicitly states: 'Very large rain drops have a huge indent and look more like a parachute.' (Teardrop is noted as a common misconception!)",
    explanationTe:
      "గద్యం చివరి వాక్యంలో 'Very large rain drops have a huge indent and look more like a parachute' అని స్పష్టంగా ఉంది.",
    simplerExplanationEn:
      "Trap alert in the passage:\n• Teardrop = common myth!\n• Larger drops = kidney beans\n• VERY LARGE drops = parachutes!",
    simplerExplanationTe:
      "గద్యంలో 3 ఆకారాలు ఉన్నాయి:\n• Teardrop = అపోహ మాత్రమే\n• Larger drops = kidney beans\n• Very large drops = parachutes!",
    wrongOptionNotesEn: [
      "The passage says teardrop shape is a 'common misconception', not reality!",
      "Kidney beans describe 'larger raindrops', whereas 'very large raindrops' look like parachutes.",
      "Correct! Very large raindrops have a huge bottom indent like parachutes.",
      "Marbles are not mentioned; small drops are spherical.",
    ],
    wrongOptionNotesTe: [
      "Teardrop అనేది అపోహ అని గద్యంలో చెప్పారు.",
      "Kidney beans అనేది సాధారణ పెద్ద చినుకుల ఆకారం.",
      "సరైనది! Very large raindrops పారాచూట్‌లలా కనిపిస్తాయి.",
      "Marbles గద్యంలో లేదు.",
    ],
    analogyEn:
      "Air pushing up against a big falling water drop flattens and curves it just like an open parachute.",
    analogyTe:
      "కిందకు పడే పెద్ద నీటి బొట్టుకు గాలి తగిలి పారాచూట్ లాగా వంపు తిరుగుతుంది.",
    similarQuestionId: "tgtet-q68",
  },
  {
    id: "tgtet-q68",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 68,
    officialQuestionId: "69817730819",
    isSample: false,
    subjectId: "english",
    subjectNameEn: "Language II — English",
    subjectNameTe: "ద్వితీయ భాష — ఇంగ్లీష్",
    topicTagEn: "Grammar, Tenses & Sentence Structure",
    topicTagTe: "ఇంగ్లీష్ వ్యాకరణం & కాలాలు (Tenses)",
    questionEn:
      "A woman called to report a burglary. It _______ at five in the evening while she _______ the news on TV.",
    questionTe:
      "ఖాళీలను పూరించండి: A woman called to report a burglary. It _______ at five in the evening while she _______ the news on TV.",
    optionsEn: [
      "happened, watched",
      "happened, had watched",
      "had happened, had watched",
      "happened, was watching",
    ],
    optionsTe: [
      "happened, watched",
      "happened, had watched",
      "had happened, had watched",
      "happened, was watching",
    ],
    correctIndex: 3,
    explanationEn:
      "When a short completed past event ('happened' — Simple Past) interrupts a longer ongoing past action introduced by 'while', we use Past Continuous ('was watching').",
    explanationTe:
      "గతంలో ఒక పని జరుగుతూ ఉన్నప్పుడు ('while she was watching' — Past Continuous) మరొక సంఘటన జరిగితే ('It happened' — Simple Past) ఉపయోగిస్తారు.",
    simplerExplanationEn:
      "Golden grammar rule for TET: Whenever you see 'while' showing a background action in the past, pair Simple Past ('happened') with Past Continuous ('was watching')!",
    simplerExplanationTe:
      "TET గ్రామర్ చిట్కా: 'while' తర్వాత గతంలో జరుగుతూ ఉన్న పనికి 'was/were + ing' (was watching) వస్తుంది, జరిగిన సంఘటనకు 'happened' వస్తుంది!",
    wrongOptionNotesEn: [
      "'watched' misses the continuous ongoing nature after 'while'.",
      "'had watched' means she finished watching BEFORE the burglary, which contradicts 'while'.",
      "Double past perfect ('had... had...') makes no timeline sense.",
      "Correct! 'It happened... while she was watching.'",
    ],
    wrongOptionNotesTe: [
      "'while' ఉన్నప్పుడు 'was watching' రావాలి.",
      "'had watched' అంటే ముందే పూర్తయిన పని అని అర్థం.",
      "రెండు చోట్లా 'had' వాడకూడదు.",
      "సరైనది! Simple Past + while + Past Continuous.",
    ],
    analogyEn:
      "The phone rang (short event) while I was making tea (ongoing background activity).",
    analogyTe:
      "నేను టీ పెడుతూ ఉండగా (was making) ఫోన్ మోగింది (rang) అన్నట్లే!",
    similarQuestionId: "tgtet-q70",
  },
  {
    id: "tgtet-q70",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 70,
    officialQuestionId: "69817730821",
    isSample: false,
    subjectId: "english",
    subjectNameEn: "Language II — English",
    subjectNameTe: "ద్వితీయ భాష — ఇంగ్లీష్",
    topicTagEn: "Grammar, Tenses & Sentence Structure",
    topicTagTe: "ఇంగ్లీష్ వ్యాకరణం & కాలాలు (Tenses)",
    questionEn:
      '"Are you going to the lecture tomorrow?" Susan asked Jane.\nThe sentence can be reported as:',
    questionTe:
      '"Are you going to the lecture tomorrow?" Susan asked Jane. — దీనిని పరోక్ష వాక్యంగా (Reported Speech) మార్చండి:',
    optionsEn: [
      "Susan asked Jane if she went to the lecture tomorrow.",
      "Susan asked Jane if she is going to the lecture the next day.",
      "Susan asked Jane if she was going to the lecture tomorrow.",
      "Susan asked Jane if she was going to the lecture the next day.",
    ],
    optionsTe: [
      "Susan asked Jane if she went to the lecture tomorrow.",
      "Susan asked Jane if she is going to the lecture the next day.",
      "Susan asked Jane if she was going to the lecture tomorrow.",
      "Susan asked Jane if she was going to the lecture the next day.",
    ],
    correctIndex: 3,
    explanationEn:
      "In Reported Speech for a Yes/No question with past reporting verb ('asked'): 1) Add 'if/whether', 2) Present Continuous ('are going') shifts to Past Continuous ('was going'), 3) 'tomorrow' shifts to 'the next day'.",
    explanationTe:
      "Reported speech లో 'asked' ఉన్నప్పుడు: 1) Yes/No ప్రశ్నకు 'if' వస్తుంది, 2) 'are going' → 'was going' గా మారుతుంది, 3) 'tomorrow' → 'the next day' గా మారుతుంది.",
    simplerExplanationEn:
      "Check 3 quick boxes:\n✓ 'Are going' → 'was going'\n✓ 'tomorrow' → 'the next day'\nOnly Option 4 passes both checks!",
    simplerExplanationTe:
      "రెండు మార్పులు చూస్తే చాలు:\n1) are going → was going\n2) tomorrow → the next day\nఈ రెండూ ఉన్నది 4వ ఎంపిక మాత్రమే!",
    wrongOptionNotesEn: [
      "Keeps 'tomorrow' unchanged and uses 'went' instead of 'was going'.",
      "Fails to backshift 'is going' to 'was going'.",
      "Fails to change 'tomorrow' to 'the next day'.",
      "Correct! Both verb tense ('was going') and time adverb ('the next day') shift accurately.",
    ],
    wrongOptionNotesTe: [
      "'tomorrow' మారలేదు మరియు 'was going' రాలేదు.",
      "'is going' భూతకాలంలోకి ('was going') మారలేదు.",
      "'tomorrow' ను 'the next day' గా మార్చలేదు.",
      "సరైనది! అన్ని నియమాలు పాటించబడ్డాయి.",
    ],
    analogyEn:
      "Reporting yesterday's conversation means stepping one tense back and updating 'tomorrow' on the calendar!",
    analogyTe:
      "నిన్న మాట్లాడిన మాటను ఈరోజు చెప్పేటప్పుడు కాలాన్ని ఒక అడుగు వెనక్కి మార్చాలి.",
    similarQuestionId: "tgtet-q75",
  },
  {
    id: "tgtet-q75",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 75,
    officialQuestionId: "69817730826",
    isSample: false,
    subjectId: "english",
    subjectNameEn: "Language II — English",
    subjectNameTe: "ద్వితీయ భాష — ఇంగ్లీష్",
    topicTagEn: "Grammar, Tenses & Sentence Structure",
    topicTagTe: "ఇంగ్లీష్ వ్యాకరణం & కాలాలు (Tenses)",
    questionEn: "Don't forget, _______ ? Choose the correct question tag.",
    questionTe: "సరైన Question Tag ఎంచుకోండి: Don't forget, _______ ?",
    optionsEn: ["will you", "won't you", "do you", "don't you"],
    optionsTe: ["will you", "won't you", "do you", "don't you"],
    correctIndex: 0,
    explanationEn:
      "Negative imperative sentences starting with 'Don't...' always take the positive question tag 'will you?'.",
    explanationTe:
      "'Don't...' తో మొదలయ్యే ఆజ్ఞాపక వాక్యాలకు (Negative Imperatives) ఎల్లప్పుడూ 'will you?' అనే Question Tag వస్తుంది.",
    simplerExplanationEn:
      "Super fast TET rule: Imperative commands ('Open the door', 'Don't forget') use 'will you?'! Especially since 'Don't' is already negative, the tag must be positive: 'will you'!",
    simplerExplanationTe:
      "సులభ సూత్రం: 'Don't' తో మొదలయ్యే వాక్యానికి ఎప్పుడూ 'will you?' మాత్రమే వస్తుంది! (Don't నెగటివ్ కాబట్టి ట్యాగ్ పాజిటివ్ 'will you' అవుతుంది).",
    wrongOptionNotesEn: [
      "Correct! Negative imperatives ('Don't...') always take 'will you?'.",
      "'won't you' is negative, whereas 'Don't forget' already has a negative.",
      "'do you' is used for negative simple present statements ('You don't forget, do you?'), not imperatives!",
      "'don't you' repeats the negative.",
    ],
    wrongOptionNotesTe: [
      "సరైనది! 'Don't forget, will you?' అనేది ప్రామాణిక నియమం.",
      "రెండు నెగటివ్‌లు రాకూడదు.",
      "ఇది సాధారణ వాక్యం కాదు, ఆజ్ఞా/సూచనా వాక్యం (Imperative) కాబట్టి 'do you' రాదు.",
      "'don't you' సరికాదు.",
    ],
    analogyEn:
      "Saying 'Don't forget your hall ticket, will you?' sounds natural and polite.",
    analogyTe:
      "'హాల్ టికెట్ మర్చిపోవద్దు సుమా (will you?)' అన్నట్లే!",
    similarQuestionId: "tgtet-q85",
  },
  {
    id: "tgtet-q85",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 85,
    officialQuestionId: "69817730836",
    isSample: false,
    subjectId: "english",
    subjectNameEn: "Language II — English",
    subjectNameTe: "ద్వితీయ భాష — ఇంగ్లీష్",
    topicTagEn: "English Pedagogy & Linguistics",
    topicTagTe: "ఇంగ్లీష్ బోధనా శాస్త్రం",
    questionEn:
      "'We have different words in different languages to represent the same object. There is no systematic way in naming things.' This feature of language is called:",
    questionTe:
      "'ఒకే వస్తువును పిలవడానికి వేర్వేరు భాషల్లో వేర్వేరు పదాలు ఉన్నాయి. వస్తువులకు పేర్లు పెట్టడంలో సహజమైన/నిర్దిష్టమైన సంబంధం లేదు.' భాష యొక్క ఈ లక్షణాన్ని ఏమంటారు?",
    optionsEn: [
      "Language is creative and extendible.",
      "Language is arbitrary.",
      "Language exhibits displacement.",
      "Language is not inherited.",
    ],
    optionsTe: [
      "Language is creative and extendible.",
      "Language is arbitrary. (యాదృచ్ఛికం)",
      "Language exhibits displacement.",
      "Language is not inherited.",
    ],
    correctIndex: 1,
    explanationEn:
      "Arbitrariness means there is no natural or logical connection between a word's sound/form and the object it refers to—which is why 'water', 'నీరు', and 'पानी' all refer to H₂O.",
    explanationTe:
      "వస్తువుకు, దానిని పిలిచే పదానికి మధ్య సహజ సంబంధం లేకపోవడాన్ని 'Arbitrariness' (భాష యాదృచ్ఛికమైనది) అంటారు. అందుకే ఒకే నీటిని Water, నీరు, పానీ అని పిలుస్తాం.",
    simplerExplanationEn:
      "Why is a tree called 'tree' in English and 'చెట్టు' in Telugu? Not because the leaves make that sound—society simply agreed on those symbols! No natural link = Language is ARBITRARY!",
    simplerExplanationTe:
      "చెట్టును ఇంగ్లీష్‌లో 'Tree' అనీ, తెలుగులో 'చెట్టు' అనీ ఎందుకు అంటాం? దానికి సహజ కారణం లేదు, సమాజం ఏర్పరచుకున్న సంకేతం మాత్రమే. దీనినే 'Language is arbitrary' అంటారు!",
    wrongOptionNotesEn: [
      "Creativity/productivity refers to making infinite new sentences, not naming objects.",
      "Correct! Lack of natural connection between word and object is Arbitrariness.",
      "Displacement means talking about past, future, or distant things not physically present.",
      "Cultural transmission ('not inherited') explains how children learn language from society, not naming.",
    ],
    wrongOptionNotesTe: [
      "ఇది కొత్త వాక్యాల నిర్మాణానికి సంబంధించినది.",
      "సరైనది! పదానికి, వస్తువుకు సహజ సంబంధం లేకపోవడమే Arbitrariness.",
      "Displacement అంటే కంటి ముందు లేని భూత/భవిష్యత్ విషయాల గురించి మాట్లాడటం.",
      "ఇది భాషా వారసత్వానికి సంబంధించినది.",
    ],
    analogyEn:
      "Like traffic lights—red doesn't physically stop cars on its own, we all simply agreed red means 'Stop'!",
    analogyTe:
      "ట్రాఫిక్ సిగ్నల్‌లో ఎరుపు రంగుకు 'ఆగడం' అనే అర్థం మనం పెట్టుకున్న సంకేతమే కదా!",
    similarQuestionId: "tgtet-q86",
  },
  {
    id: "tgtet-q86",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 86,
    officialQuestionId: "69817730837",
    isSample: false,
    subjectId: "english",
    subjectNameEn: "Language II — English",
    subjectNameTe: "ద్వితీయ భాష — ఇంగ్లీష్",
    topicTagEn: "English Pedagogy & Linguistics",
    topicTagTe: "ఇంగ్లీష్ బోధనా శాస్త్రం",
    questionEn: 'The term "morphology" refers to the study of:',
    questionTe: '"Morphology" (పదనిర్మాణ శాస్త్రం) అనగా దేని గురించిన అధ్యయనం?',
    optionsEn: [
      "word meanings.",
      "grammar and its rules.",
      "formation of words.",
      "sounds and pronunciation.",
    ],
    optionsTe: [
      "word meanings (పదాల అర్థాలు - Semantics)",
      "grammar and its rules (వాక్య నియమాలు - Syntax)",
      "formation of words (పదాల నిర్మాణం)",
      "sounds and pronunciation (ధ్వనులు - Phonology)",
    ],
    correctIndex: 2,
    explanationEn:
      "Morphology studies morphemes (roots, prefixes, suffixes) and the internal structure / formation of words (e.g., 'un- + kind + -ness').",
    explanationTe:
      "Morphology అనగా ఉపసర్గలు, ప్రత్యయాలు, ధాతువుల ద్వారా 'పదాలు ఏర్పడే విధానం' (formation of words) గురించిన అధ్యయనం.",
    simplerExplanationEn:
      "Quick 4-branch Linguistics cheat sheet:\n• Sounds = Phonology\n• Word formation = Morphology ('morph' = form/shape of words!)\n• Sentence structure = Syntax\n• Meanings = Semantics.",
    simplerExplanationTe:
      "4 పదాలు గుర్తుంచుకోండి:\n• Phonology = ధ్వనులు\n• Morphology = పద నిర్మాణం (formation of words)\n• Syntax = వాక్య నిర్మాణం\n• Semantics = పదాల అర్థాలు.",
    wrongOptionNotesEn: [
      "Study of word meanings is Semantics.",
      "Sentence rules belong to Syntax / Grammar.",
      "Correct! Morphology is the study of internal structure and formation of words.",
      "Study of speech sounds is Phonetics / Phonology.",
    ],
    wrongOptionNotesTe: [
      "పదాల అర్థాలను అధ్యయనం చేసేది Semantics.",
      "వాక్య నిర్మాణ నియమాలు Syntax.",
      "సరైనది! Morphology = పద నిర్మాణ శాస్త్రం.",
      "ధ్వనుల అధ్యయనం Phonetics / Phonology.",
    ],
    analogyEn:
      "Snap-together building blocks ('teach' + '-er' + '-s' = 'teachers')—that's morphology!",
    analogyTe:
      "'teach + er = teacher' లాగా పదం ఎలా తయారవుతుందో చెప్పేదే Morphology.",
    similarQuestionId: "tgtet-q85",
  },

  // =========================================================================
  // SECTION 2: LANGUAGE I TELUGU (TG TET 19 Jan 2025 Shift 2)
  // =========================================================================
  {
    id: "tgtet-q31",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 31,
    officialQuestionId: "69817730780",
    isSample: false,
    subjectId: "telugu",
    subjectNameEn: "Language I — Telugu",
    subjectNameTe: "ప్రథమ భాష — తెలుగు",
    topicTagEn: "Poetry & Prose Comprehension",
    topicTagTe: "పద్య & గద్య అవగాహన",
    passageEn: TELUGU_POEM_Q31,
    passageTe: TELUGU_POEM_Q31,
    questionEn:
      "రాముని ఏ రకమైన భావనతో చూసినట్లుగా ఉంది? (In the given verse, how did Lakshmana view Lord Rama?)",
    questionTe: "పై పద్యంలో రాముని ఏ రకమైన భావనతో చూసినట్లుగా ఉంది?",
    optionsEn: [
      "పెదనాన్న (Paternal Uncle - Elder)",
      "చిన్నాన్న (Paternal Uncle - Younger)",
      "తండ్రి (Father)",
      "మామయ్య (Maternal Uncle)",
    ],
    optionsTe: ["పెదనాన్న", "చిన్నాన్న", "తండ్రి", "మామయ్య"],
    correctIndex: 2,
    explanationEn:
      "In the first line 'జనకుని భంగి రామ నృపచంద్రుని, నన్నును దల్లిమాఱుగాఁ గని', 'జనకుడు' means father—Lakshmana revered Rama like a father and Sita like a mother.",
    explanationTe:
      "పద్యం మొదటి పాదంలో 'జనకుని భంగి రామ నృపచంద్రుని' అని ఉంది. 'జనకుడు' అనగా తండ్రి, 'భంగి' అనగా వలె (విధముగా). అంటే రాముని తండ్రి వలె భావించాడు.",
    simplerExplanationEn:
      "Look at the very first word of the poem: 'జనకుని భంగి' = Like a Father ('జనకుడు' = తండ్రి)!",
    simplerExplanationTe:
      "పద్యం మొదటి పదం చూడండి: 'జనకుని భంగి' — 'జనకుడు' అంటే తండ్రి! లక్ష్మణుడు రాముణ్ణి తండ్రిలా, సీతను తల్లిలా సేవించాడు.",
    wrongOptionNotesEn: [
      "'జనకుడు' means biological/revered father, not పెదనాన్న.",
      "చిన్నాన్న is incorrect.",
      "Correct! 'జనకుడు' = తండ్రి (Father).",
      "మామయ్య is incorrect.",
    ],
    wrongOptionNotesTe: [
      "'జనకుడు' అంటే తండ్రి, పెదనాన్న కాదు.",
      "చిన్నాన్న సరికాదు.",
      "సరైనది! జనకుని భంగి = తండ్రి వలె.",
      "మామయ్య సరికాదు.",
    ],
    analogyEn:
      "Notice how knowing 'జనకుడు = తండ్రి' and 'భంగి = విధము' solves two questions (Q31 & Q33) in the same poem!",
    analogyTe:
      "'జనకుడు = తండ్రి', 'భంగి = విధము' అని తెలిస్తే ఒకే పద్యంలో రెండు మార్కులు సులభంగా వస్తాయి!",
    similarQuestionId: "tgtet-q35",
  },
  {
    id: "tgtet-q35",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 35,
    officialQuestionId: "69817730785",
    isSample: false,
    subjectId: "telugu",
    subjectNameEn: "Language I — Telugu",
    subjectNameTe: "ప్రథమ భాష — తెలుగు",
    topicTagEn: "Poetry & Prose Comprehension",
    topicTagTe: "పద్య & గద్య అవగాహన",
    passageEn: TELUGU_PROSE_Q35,
    passageTe: TELUGU_PROSE_Q35,
    questionEn:
      "కావ్యంలో రస ప్రాధాన్యాన్ని తెలిపినవారు ఎవరు? (According to the passage, who emphasized 'Rasa' in poetry through 'Vakyam Rasatmakam Kavyam'?)",
    questionTe: "పై గద్యం ఆధారంగా కావ్యంలో రస ప్రాధాన్యాన్ని తెలిపినవారు ఎవరు?",
    optionsEn: [
      "విశ్వనాథ సత్యనారాయణ",
      "జగన్నాథుడు",
      "విశ్వనాథుడు",
      "దండి",
    ],
    optionsTe: [
      "విశ్వనాథ సత్యనారాయణ",
      "జగన్నాథుడు",
      "విశ్వనాథుడు",
      "దండి",
    ],
    correctIndex: 2,
    explanationEn:
      "The passage explicitly reads: \"విశ్వనాథుడి 'వాక్యం రసాత్మకం కావ్యమనే' మాట కావ్యంలో రసానికున్న ప్రాధాన్యాన్ని గుర్తించింది\" — referring to Sanskrit rhetorician आचार्य విశ్వనాథుడు (not modern poet Viswanatha Satyanarayana).",
    explanationTe:
      "గద్యంలో \"విశ్వనాథుడి 'వాక్యం రసాత్మకం కావ్యమనే' మాట కావ్యంలో రసానికున్న ప్రాధాన్యాన్ని గుర్తించింది\" అని స్పష్టంగా ఉంది. కాబట్టి 'విశ్వనాథుడు' సరైన సమాధానం.",
    simplerExplanationEn:
      "Careful of Option 1! The passage says Sanskrit rhetorician 'విశ్వనాథుడు' (author of Sahitya Darpana), NOT modern poet 'విశ్వనాథ సత్యనారాయణ'!",
    simplerExplanationTe:
      "1వ ఎంపిక 'విశ్వనాథ సత్యనారాయణ' చూసి తొందరపడకండి! గద్యంలో ఉన్న అలంకారికుడు 'విశ్వనాథుడు' (3వ ఎంపిక).",
    wrongOptionNotesEn: [
      "Trap option! Viswanatha Satyanarayana is a modern poet; the Sanskrit definition is by అలంకారికుడు విశ్వనాథుడు.",
      "జగన్నాథుడు gave 'రమణీయార్థ ప్రతిపాదక శబ్దం కావ్యమ్'.",
      "Correct! విశ్వనాథుడు stated 'వాక్యం రసాత్మకం కావ్యమ్'.",
      "దండి discussed Shabda and Artha roles separately.",
    ],
    wrongOptionNotesTe: [
      "ఇది కన్ఫ్యూజ్ చేయడానికి ఇచ్చిన ఆప్షన్—అలంకారికుడు 'విశ్వనాథుడు' మాత్రమే సరైనది.",
      "జగన్నాథుడు 'రమణీయార్థ ప్రతిపాదక శబ్దం కావ్యమ్' అని నిర్వచించాడు.",
      "సరైనది! 'వాక్యం రసాత్మకం కావ్యమ్' అన్నది విశ్వనాథుడు.",
      "దండి రస నిర్వచనం ఇవ్వలేదు.",
    ],
    analogyEn:
      "Always match exact names inside comprehension passages before clicking Option 1!",
    analogyTe:
      "గద్యం ప్రశ్నల్లో మొదటి ఆప్షన్‌లో సగం పేరు కలిసినా పూర్తిగా సరిచూసుకుని సమాధానం పెట్టాలి.",
    similarQuestionId: "tgtet-q39",
  },
  {
    id: "tgtet-q39",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 39,
    officialQuestionId: "69817730789",
    isSample: false,
    subjectId: "telugu",
    subjectNameEn: "Language I — Telugu",
    subjectNameTe: "ప్రథమ భాష — తెలుగు",
    topicTagEn: "Telugu Grammar (Sandhi, Samasa, Alankara)",
    topicTagTe: "తెలుగు వ్యాకరణం (సంధులు, సమాసాలు, అలంకారాలు)",
    questionEn:
      "సంఖ్యా వాచకం పూర్వ పదంగా ఉన్న సమాసం ఏది? (Which Samasa has a numeral as its first word?)",
    questionTe: "సంఖ్యా వాచకం పూర్వ పదంగా ఉన్న సమాసం ఏది?",
    optionsEn: [
      "కర్మధారయ (Karmadharaya)",
      "తత్పురుష (Tatpurusha)",
      "ద్విగు (Dvigu)",
      "ద్వంద్వ (Dvandva)",
    ],
    optionsTe: ["కర్మధారయ", "తత్పురుష", "ద్విగు", "ద్వంద్వ"],
    correctIndex: 2,
    explanationEn:
      "'సంఖ్యా పూర్వో ద్విగుః' — When the first part (పూర్వ పదం) of a compound word denotes a number (e.g., మూడు లోకములు = ముల్లోకములు, నవరసాలు), it is Dvigu Samasam.",
    explanationTe:
      "'సంఖ్యా పూర్వో ద్విగుః' — సమాసంలో పూర్వ పదం (మొదటి పదం) సంఖ్యను తెలిపితే దానిని 'ద్విగు సమాసం' అంటారు (ఉదా: ముల్లోకాలు, సప్తర్షులు, నవరసాలు).",
    simplerExplanationEn:
      "Notice the word 'ద్విగు' itself starts with 'ద్వి' (Two = a number)! Number first = ద్విగు సమాసం!",
    simplerExplanationTe:
      "'ద్విగు' అనే పేరులోనే 'ద్వి' (రెండు - సంఖ్య) ఉంది! మొదటి పదం సంఖ్య అయితే అది 'ద్విగు సమాసం'!",
    wrongOptionNotesEn: [
      "Karmadharaya involves adjective + noun (విశేషణ + విశేష్య).",
      "Tatpurusha relies on case markers (విభక్తి ప్రత్యయాలు).",
      "Correct! Numeral as first term = ద్విగు సమాసం.",
      "Dvandva joins two equal nouns ('తల్లిదండ్రులు', 'రామలక్ష్మణులు').",
    ],
    wrongOptionNotesTe: [
      "కర్మధారయం విశేషణ విశేష్యాలకు సంబంధించినది.",
      "తత్పురుష విభక్తి ప్రత్యయాలపై ఆధారపడుతుంది.",
      "సరైనది! సంఖ్యా వాచకం పూర్వ పదంగా ఉండేది ద్విగు సమాసం.",
      "ద్వంద్వ సమాసంలో రెండు నామవాచకాలకు సమ ప్రాధాన్యం ఉంటుంది (ఉదా: తల్లిదండ్రులు).",
    ],
    analogyEn:
      "'చతుర్ముఖాలు' (4 faces), 'త్రిలోకాలు' (3 worlds)—every one begins with a number!",
    analogyTe:
      "త్రిలోకాలు (3), చతుర్వేదాలు (4), పంచపాండవులు (5) — ఇవన్నీ ద్విగు సమాసాలే.",
    similarQuestionId: "tgtet-q42",
  },
  {
    id: "tgtet-q42",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 42,
    officialQuestionId: "69817730792",
    isSample: false,
    subjectId: "telugu",
    subjectNameEn: "Language I — Telugu",
    subjectNameTe: "ప్రథమ భాష — తెలుగు",
    topicTagEn: "Telugu Grammar (Sandhi, Samasa, Alankara)",
    topicTagTe: "తెలుగు వ్యాకరణం (సంధులు, సమాసాలు, అలంకారాలు)",
    questionEn:
      "'నిప్పులో పెడితే కాలు కాలుతుంది' ఇందలి అలంకారం ఏది? (Identify the figure of speech in 'నిప్పులో పెడితే కాలు కాలుతుంది')",
    questionTe: "'నిప్పులో పెడితే కాలు కాలుతుంది' — ఇందలి అలంకారం ఏది?",
    optionsEn: [
      "లాటానుప్రాస (Latanuprasa)",
      "ముక్తపదగ్రస్తం (Muktapadagrastam)",
      "ఛేకానుప్రాస (Chekanuprasa)",
      "స్వభావోక్తి (Svabhavokti)",
    ],
    optionsTe: ["లాటానుప్రాస", "ముక్తపదగ్రస్తం", "ఛేకానుప్రాస", "స్వభావోక్తి"],
    correctIndex: 2,
    explanationEn:
      "When a pair of consonants ('కాలు - కాలు') repeats immediately WITHOUT any gap and with DIFFERENT meanings (1st కాలు = leg, 2nd కాలు = burns), it is ఛేకానుప్రాస అలంకారం.",
    explanationTe:
      "హల్లుల జంట ('కాలు - కాలు') అర్థ భేదంతో వ్యవధానం లేకుండా (వెంటవెంటనే) ఆవృతమైతే అది 'ఛేకానుప్రాస అలంకారం'. (మొదటి 'కాలు' = పాదం/అవయవం; రెండవ 'కాలుతుంది' = మండుతుంది).",
    simplerExplanationEn:
      "Compare the twins:\n• ఛేకానుప్రాస = Same sound side-by-side, DIFFERENT meaning ('కాలు కాలుతుంది' = leg burns!).\n• లాటానుప్రాస = Same word, SAME meaning with deeper emphasis ('తండ్రి తండ్రియే').",
    simplerExplanationTe:
      "సులభ భేదం:\n• ఛేకానుప్రాస = పక్కపక్కనే ఒకే జంట పదాలు + వేర్వేరు అర్థాలు ('కాలు' = అవయవం, 'కాలుతుంది' = మండుతుంది).\n• లాటానుప్రాస = ఒకే అర్థం, తాత్పర్య భేదం మాత్రమే.",
    wrongOptionNotesEn: [
      "లాటానుప్రాస keeps the same literal meaning with shift in emphasis.",
      "ముక్తపదగ్రస్తం repeats the last word of one line at the start of the next line.",
      "Correct! Immediate repetition of 'కాలు - కాలు' with different meanings is ఛేకానుప్రాస.",
      "స్వభావోక్తి describes natural appearance vividly without sound-pair play.",
    ],
    wrongOptionNotesTe: [
      "లాటానుప్రాసలో అర్థం మారదు, తాత్పర్యం మాత్రమే మారుతుంది.",
      "ముక్తపదగ్రస్తంలో పాదం చివరి పదం తర్వాతి పాదం మొదట వస్తుంది.",
      "సరైనది! అర్థ భేదంతో వెంటవెంటనే వచ్చిన హల్లుల జంట = ఛేకానుప్రాస.",
      "స్వభావోక్తి జాతి, గుణ, క్రియలను ఉన్నదున్నట్లు వర్ణిస్తుంది.",
    ],
    analogyEn:
      "Classic sibling example: 'అరటి తొక్క తొక్కరాదు' (Don't step on a banana peel) — same sound, two meanings = ఛేకానుప్రాస!",
    analogyTe:
      "'అరటి తొక్క తొక్కరాదు', 'నీకు వంద వందనాలు' — ఇవన్నీ ఛేకానుప్రాసకు ప్రసిద్ధ ఉదాహరణలు!",
    similarQuestionId: "tgtet-q59",
  },
  {
    id: "tgtet-q59",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 59,
    officialQuestionId: "69817730809",
    isSample: false,
    subjectId: "telugu",
    subjectNameEn: "Language I — Telugu",
    subjectNameTe: "ప్రథమ భాష — తెలుగు",
    topicTagEn: "Telugu Literature & Language Pedagogy",
    topicTagTe: "తెలుగు సాహిత్యం & బోధనా పద్ధతులు",
    questionEn:
      "జాన్ డ్యూయి ప్రతిపాదించిన విద్యాతత్వ మూల సూత్రాలపై ఆధారపడి రూపొందించిన పద్ధతి ఏది? (Which teaching method is based on John Dewey's pragmatic educational philosophy?)",
    questionTe:
      "జాన్ డ్యూయి ప్రతిపాదించిన విద్యాతత్వ మూల సూత్రాలపై ఆధారపడి రూపొందించిన పద్ధతి:",
    optionsEn: [
      "క్రీడా పద్ధతి (Play-way Method)",
      "ప్రాజెక్టు పద్ధతి (Project Method)",
      "కృత్యాధార పద్ధతి (Activity Method)",
      "డాల్టన్ పద్ధతి (Dalton Plan)",
    ],
    optionsTe: ["క్రీడా పద్ధతి", "ప్రాజెక్టు పద్ధతి", "కృత్యాధార పద్ధతి", "డాల్టన్ పద్ధతి"],
    correctIndex: 1,
    explanationEn:
      "Based on John Dewey's Pragmatism ('Learning by Doing'), his disciple William Heard Kilpatrick developed the Project Method (ప్రాజెక్టు పద్ధతి).",
    explanationTe:
      "జాన్ డ్యూయి వ్యవహారిక సత్తావాదం (Pragmatism) మూల సూత్రాలపై ఆధారపడి ఆయన శిష్యుడు కిల్ పాట్రిక్ 'ప్రాజెక్టు పద్ధతి'ని రూపొందించారు.",
    simplerExplanationEn:
      "Classic TET pair to remember forever:\n• Philosophy = John Dewey\n• Method built on it = Project Method (by Kilpatrick)!",
    simplerExplanationTe:
      "TET లో ఎప్పుడూ అడిగే జత:\n• తాత్విక పునాది = జాన్ డ్యూయి\n• దాని ఆధారంగా కిల్ పాట్రిక్ రూపొందించిన పద్ధతి = ప్రాజెక్టు పద్ధతి!",
    wrongOptionNotesEn: [
      "Play-way method is associated with Froebel and Caldwell Cook.",
      "Correct! Project Method stems directly from John Dewey's philosophy.",
      "General activity method is broader and not specifically Dewey-Kilpatrick's named method.",
      "Dalton Plan was developed by Helen Parkhurst.",
    ],
    wrongOptionNotesTe: [
      "క్రీడా పద్ధతి ఫ్రోబెల్ / కాల్డ్‌వెల్ కుక్‌లకు సంబంధించినది.",
      "సరైనది! జాన్ డ్యూయి సూత్రాలపై ఆధారపడినది ప్రాజెక్టు పద్ధతి.",
      "ఇది సాధారణ పద్ధతి.",
      "డాల్టన్ పద్ధతిని హెలెన్ పార్క్‌హర్స్ట్ రూపొందించారు.",
    ],
    analogyEn:
      "Dewey drew the architectural blueprint; Kilpatrick built the Project Method house on it!",
    analogyTe:
      "జాన్ డ్యూయి పునాది వేస్తే, ఆయన శిష్యుడు కిల్ పాట్రిక్ ప్రాజెక్టు పద్ధతి అనే భవనం నిర్మించారు.",
    similarQuestionId: "tgtet-q60",
  },
  {
    id: "tgtet-q60",
    examId: "tg-tet-2025",
    examName: "TG TET 2025",
    yearSession: "19 Jan 2025 · Shift 2",
    officialQuestionNumber: 60,
    officialQuestionId: "69817730810",
    isSample: false,
    subjectId: "telugu",
    subjectNameEn: "Language I — Telugu",
    subjectNameTe: "ప్రథమ భాష — తెలుగు",
    topicTagEn: "Telugu Literature & Language Pedagogy",
    topicTagTe: "తెలుగు సాహిత్యం & బోధనా పద్ధతులు",
    questionEn:
      "కింది వానిలో 'సృజనాత్మకత'కు సంబంధించినది ఏది? (Which of the following relates to 'Creativity / Creative Expression' in Telugu language standards?)",
    questionTe: "కింది వానిలో 'సృజనాత్మకత'కు సంబంధించినది:",
    optionsEn: [
      "ప్రశ్నకు జవాబు రాయడం (Writing answer to a question)",
      "పాఠంలోని నూతన పదాలను గుర్తించి గీతగీయడం (Underlining new words)",
      "పాఠం ఆధారంగా తప్పొప్పులను గుర్తించడం (Identifying True/False)",
      "'పాఠ్యాంశం'లోని విషయం ఆధారంగా కవిత రాయడం (Writing a poem based on the lesson theme)",
    ],
    optionsTe: [
      "ప్రశ్నకు జవాబు రాయడం",
      "పాఠంలోని నూతన పదాలను గుర్తించి గీతగీయడం",
      "పాఠం ఆధారంగా తప్పొప్పులను గుర్తించడం",
      "'పాఠ్యాంశం'లోని విషయం ఆధారంగా కవిత రాయడం",
    ],
    correctIndex: 3,
    explanationEn:
      "Transforming a prose lesson's theme into a new genre such as a poem, dialogue, poster, or song demonstrates 'సృజనాత్మక వ్యక్తీకరణ' (Creative Expression).",
    explanationTe:
      "పాఠ్యాంశంలోని విషయాన్ని కవిత, గేయం, సంభాషణ లేదా లేఖ రూపంలో సొంతంగా రాయడం 'సృజనాత్మకత' (Creative Expression) సామర్థ్యానికి చెందుతుంది.",
    simplerExplanationEn:
      "Creativity means creating something NEW in your own voice—like turning a story into a poem! Underlining words or marking True/False only checks basic reading recall.",
    simplerExplanationTe:
      "సృజనాత్మకత అంటే సొంత ఊహతో కొత్త రూపంలో (కవిత, పాట, నాటిక) రాయడం! గీత గీయడం, తప్పొప్పులు గుర్తించడం కేవలం అవగాహన మాత్రమే.",
    wrongOptionNotesEn: [
      "Writing standard textbook answers tests expression/comprehension, not creative transformation.",
      "Underlining new words relates to vocabulary recognition.",
      "True/False checks reading comprehension.",
      "Correct! Composing a poem from a lesson theme is pure Creative Expression.",
    ],
    wrongOptionNotesTe: [
      "ప్రశ్నకు జవాబు రాయడం స్వీయరచన/అవగాహనకు చెందుతుంది.",
      "కొత్త పదాల కింద గీత గీయడం పదజాలానికి చెందుతుంది.",
      "తప్పొప్పులు గుర్తించడం అవగాహనకు చెందుతుంది.",
      "సరైనది! కవిత రాయడం సృజనాత్మక వ్యక్తీకరణ.",
    ],
    analogyEn:
      "Reading a recipe is comprehension; inventing a festive sweet twist from those ingredients is creativity!",
    analogyTe:
      "కథ చదవడం అవగాహన అయితే, ఆ కథను చక్కని కవితగా మలచడం సృజనాత్మకత!",
    similarQuestionId: "tgtet-q31",
  },

  // =========================================================================
  // CLEARLY LABELLED SAMPLE QUESTIONS FOR CTET FOUNDATION SAMPLE PATH
  // =========================================================================
  {
    id: "ctet-sample-q1",
    examId: "ctet-sample",
    examName: "CTET Sample Question",
    yearSession: "Sample Demonstration Item",
    isSample: true,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Principles of Development",
    topicTagTe: "వికాస సూత్రాలు",
    questionEn:
      "[Sample Question] A baby learns to control head movements first, then sits up, and finally stands and walks. Which principle of development does this illustrate?",
    questionTe:
      "[నమూనా ప్రశ్న] శిశువు మొదట తలను నిలపడం, ఆపై కూర్చోవడం, చివరకు నిలబడి నడవడం నేర్చుకుంటుంది. ఇది ఏ వికాస సూత్రాన్ని తెలుపుతుంది?",
    optionsEn: [
      "Proximodistal principle",
      "Cephalocaudal principle",
      "Discontinuous development",
      "Uniform rate principle",
    ],
    optionsTe: [
      "సమీప-దూరస్థ సూత్రం (Proximodistal)",
      "శిరో-పాదాభిముఖ సూత్రం (Cephalocaudal)",
      "అవిచ్ఛిన్నం కాని వికాసం",
      "ఏకరూప వేగ సూత్రం",
    ],
    correctIndex: 1,
    explanationEn:
      "'Cephalo' means head and 'caudal' means tail/foot. Development progressing from head downward to the feet is the Cephalocaudal principle.",
    explanationTe:
      "'శిరో' అనగా తల, 'పాద' అనగా కాళ్ళు. తల నుండి పాదాల వైపు సాగే వికాసాన్ని 'శిరో-పాదాభిముఖ వికాస సూత్రం' (Cephalocaudal) అంటారు.",
    simplerExplanationEn:
      "Word trick:\n• Cephalo-caudal = Head to Toe (head -> sitting -> walking).\n• Proximo-distal = Center/chest outward to finger tips!",
    simplerExplanationTe:
      "రెండు పదాలు సులభంగా గుర్తుపెట్టుకోండి:\n• శిరో-పాదాభిముఖ (Cephalocaudal) = తల నుండి కాళ్ళ వరకు.\n• సమీప-దూరస్థ (Proximodistal) = గుండె/భుజాల నుండి వేళ్ళ చివరి వరకు!",
    wrongOptionNotesEn: [
      "Proximodistal goes from center of body outward to hands/fingers.",
      "Correct! Head-to-foot motor control is Cephalocaudal.",
      "Motor milestones build continuously rather than randomly.",
      "Different children reach milestones at slightly different paces, not a rigid uniform rate.",
    ],
    wrongOptionNotesTe: [
      "సమీప-దూరస్థ సూత్రం శరీర మధ్య భాగం నుండి చేతి వేళ్ల వైపు సాగుతుంది.",
      "సరైనది! తల నుండి కాళ్ళ వైపు వికాసం = శిరో-పాదాభిముఖ సూత్రం.",
      "ఇది సరైన సూత్రం కాదు.",
      "అందరిలో వికాస వేగం ఒకేలా ఉండదు.",
    ],
    analogyEn:
      "Like pouring water gently over your head during a bath—it flows from head down to toes!",
    analogyTe:
      "తల నుండి పాదాల వైపు ప్రవహించే క్రమం = శిరో-పాదాభిముఖ సూత్రం.",
    similarQuestionId: "ctet-sample-q2",
  },
  {
    id: "ctet-sample-q2",
    examId: "ctet-sample",
    examName: "CTET Sample Question",
    yearSession: "Sample Demonstration Item",
    isSample: true,
    subjectId: "cdp",
    subjectNameEn: "Child Development & Pedagogy",
    subjectNameTe: "శిశు వికాసం & బోధనా శాస్త్రం",
    topicTagEn: "Child-Centered & Progressive Pedagogy",
    topicTagTe: "శిశు కేంద్రీకృత బోధన",
    questionEn:
      "[Sample Question] In a learner-centered classroom, mistakes made by children during problem solving should be viewed by the teacher as:",
    questionTe:
      "[నమూనా ప్రశ్న] శిశు కేంద్రీకృత తరగతి గదిలో, పిల్లలు చేసే తప్పులను ఉపాధ్యాయురాలు ఎలా చూడాలి?",
    optionsEn: [
      "Carelessness that requires strict punishment",
      "Proof that the child cannot learn the concept",
      "Meaningful windows into the child's thinking process",
      "Irrelevant distractions to be ignored completely",
    ],
    optionsTe: [
      "కఠిన శిక్ష విధించాల్సిన నిర్లక్ష్యంగా",
      "ఆ బిడ్డకు చదువు రాదనడానికి రుజువుగా",
      "పిల్లల ఆలోచనా విధానాన్ని అర్థం చేసుకునే అవకాశాలుగా",
      "పూర్తిగా విస్మరించాల్సిన అంశాలుగా",
    ],
    correctIndex: 2,
    explanationEn:
      "Constructivist pedagogy (NCF & NEP) views children's errors as valuable diagnostic windows into how they reason, helping teachers guide conceptual clarity.",
    explanationTe:
      "నిర్మాణాత్మక బోధనా విధానంలో పిల్లలు చేసే తప్పులు వారి ఆలోచనా సరళిని పట్టిచూపే కిటికీల వంటివి; అవి అభ్యసనంలో సహజ భాగం.",
    simplerExplanationEn:
      "Whenever a CTET/TET question asks about children's mistakes, always choose the option that treats errors positively as clues to how the child thinks!",
    simplerExplanationTe:
      "TET/CTET లో పిల్లల తప్పుల గురించి ప్రశ్న వస్తే—తప్పులు అభ్యసనంలో భాగం, అవి పిల్లల ఆలోచనను అర్థం చేసుకోవడానికి తోడ్పడతాయి అనే సానుకూల ఆప్షన్ ఎంచుకోవాలి!",
    wrongOptionNotesEn: [
      "Punishment creates fear and violates child-friendly RTE principles.",
      "Every child can learn when supported appropriately.",
      "Correct! Errors reveal the learner's current mental model.",
      "Ignoring errors misses the chance to scaffold understanding.",
    ],
    wrongOptionNotesTe: [
      "శిక్షించడం RTE చట్టానికి, శిశు కేంద్రీకృత విద్యకు వ్యతిరేకం.",
      "ప్రతి బిడ్డ నేర్చుకోగలడు.",
      "సరైనది! తప్పులు పిల్లల ఆలోచనా విధానాన్ని తెలియజేస్తాయి.",
      "విస్మరిస్తే పిల్లలకు సరైన భావన అర్థం కాదు.",
    ],
    analogyEn:
      "Just like Shiksha Sakhi! When you pick a wrong option here, it helps us show the exact explanation you need.",
    analogyTe:
      "మన 'శిక్షా సఖి' యాప్ లాగే—తప్పు సమాధానం ద్వారానే అసలు కాన్సెప్ట్ మరింత బలంగా అర్థమవుతుంది!",
    similarQuestionId: "ctet-sample-q1",
  },
];
