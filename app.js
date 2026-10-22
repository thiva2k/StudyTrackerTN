// Nuvetha's G.C.E. O/L Study Tracker - JavaScript Logic

// 1. COMPREHENSIVE BILINGUAL SYLLABUS DATA
const DEFAULT_SYLLABUS = {
  math: {
    id: 'math',
    name: 'Mathematics',
    tamilName: 'கணிதம்',
    color: '#ff2a5f',
    topics: [
      // Grade 10
      { id: 'math_g10_1', grade: 10, name: 'Sets', tamilName: 'கணங்கள்', status: 'not-started' },
      { id: 'math_g10_2', grade: 10, name: 'Real Numbers', tamilName: 'மெய் எண்கள்', status: 'not-started' },
      { id: 'math_g10_3', grade: 10, name: 'Indices & Logarithms', tamilName: 'சுட்டிகளும் மடக்கைகளும்', status: 'not-started' },
      { id: 'math_g10_4', grade: 10, name: 'Equations (Linear/Simultaneous)', tamilName: 'சமன்பாடுகள்', status: 'not-started' },
      { id: 'math_g10_5', grade: 10, name: 'Graphs', tamilName: 'வரைபுகள்', status: 'not-started' },
      { id: 'math_g10_6', grade: 10, name: 'Percentages & Proportions', tamilName: 'வீதங்களும் பங்கீடுகளும்', status: 'not-started' },
      { id: 'math_g10_7', grade: 10, name: 'Angles', tamilName: 'கோணங்கள்', status: 'not-started' },
      { id: 'math_g10_8', grade: 10, name: 'Triangles & Congruency', tamilName: 'முக்கோணங்கள்', status: 'not-started' },
      { id: 'math_g10_9', grade: 10, name: 'Scientific Notation', tamilName: 'தராதர வடிவம்', status: 'not-started' },
      // Grade 11
      { id: 'math_g11_1', grade: 11, name: 'Quadratic Equations', tamilName: 'இருபடிச் சமன்பாடுகள்', status: 'not-started' },
      { id: 'math_g11_2', grade: 11, name: 'Progressions (Arithmetic/Geometric)', tamilName: 'விருத்திகள்', status: 'not-started' },
      { id: 'math_g11_3', grade: 11, name: 'Tangents to a Circle', tamilName: 'தொடுகோடுகள்', status: 'not-started' },
      { id: 'math_g11_4', grade: 11, name: 'Mensuration (Volume & Area)', tamilName: 'அளவீடு', status: 'not-started' },
      { id: 'math_g11_5', grade: 11, name: 'Trigonometry', tamilName: 'திரிகோணகணிதம்', status: 'not-started' },
      { id: 'math_g11_6', grade: 11, name: 'Matrices', tamilName: 'தாயங்கள்', status: 'not-started' },
      { id: 'math_g11_7', grade: 11, name: 'Probability', tamilName: 'நிகழ்தகவு', status: 'not-started' },
      { id: 'math_g11_8', grade: 11, name: 'Statistics', tamilName: 'புள்ளிவிபரவியல்', status: 'not-started' }
    ]
  },
  science: {
    id: 'science',
    name: 'Science',
    tamilName: 'விஞ்ஞானம்',
    color: '#2979ff',
    topics: [
      // Grade 10
      { id: 'sci_g10_1', grade: 10, name: 'Cell Biology', tamilName: 'கலங்கள்', status: 'not-started' },
      { id: 'sci_g10_2', grade: 10, name: 'Bioprocesses in Plants/Animals', tamilName: 'உயிரியல் செயன்முறைகள்', status: 'not-started' },
      { id: 'sci_g10_3', grade: 10, name: 'Structure of Matter', tamilName: 'பதார்த்தத்தின் கட்டமைப்பு', status: 'not-started' },
      { id: 'sci_g10_4', grade: 10, name: 'Chemical Bonds', tamilName: 'இரசாயனப் பிணைப்புகள்', status: 'not-started' },
      { id: 'sci_g10_5', grade: 10, name: 'Force & Motion', tamilName: 'விசை, இயக்கம்', status: 'not-started' },
      { id: 'sci_g10_6', grade: 10, name: 'Work, Energy & Power', tamilName: 'வேலை, சக்தி, வலு', status: 'not-started' },
      { id: 'sci_g10_7', grade: 10, name: 'Light & Reflection', tamilName: 'ஒளி, ஒளித்தெறிப்பு', status: 'not-started' },
      { id: 'sci_g10_8', grade: 10, name: 'Electricity & Circuits', tamilName: 'மின்னோட்டம், சுற்றுகள்', status: 'not-started' },
      // Grade 11
      { id: 'sci_g11_1', grade: 11, name: 'Human Body Physiology', tamilName: 'மனித உடற்றொழிலியல்', status: 'not-started' },
      { id: 'sci_g11_2', grade: 11, name: 'Heredity & Genetics', tamilName: 'மரபுரிமை, மரபியல்', status: 'not-started' },
      { id: 'sci_g11_3', grade: 11, name: 'Acids, Bases & Salts', tamilName: 'அமிலங்கள், மூலங்கள், உப்புகள்', status: 'not-started' },
      { id: 'sci_g11_4', grade: 11, name: 'Chemical Rates & Calculations', tamilName: 'இரசாயன தாக்கவீதமும் கணக்கீடுகளும்', status: 'not-started' },
      { id: 'sci_g11_5', grade: 11, name: 'Heat & Thermodynamics', tamilName: 'வெப்பம், வெப்பவியக்கவியல்', status: 'not-started' },
      { id: 'sci_g11_6', grade: 11, name: 'Waves & Sound', tamilName: 'அலைகளும் ஒலியும்', status: 'not-started' },
      { id: 'sci_g11_7', grade: 11, name: 'Electronics & Modern Physics', tamilName: 'இலத்திரனியல்', status: 'not-started' },
      { id: 'sci_g11_8', grade: 11, name: 'Ecosystems & Pollution', tamilName: 'சூழற்தொகுதிகள்', status: 'not-started' }
    ]
  },
  history: {
    id: 'history',
    name: 'History',
    tamilName: 'வரலாறு',
    color: '#ffd600',
    topics: [
      // Grade 10
      { id: 'hist_g10_1', grade: 10, name: 'Geographical Background of Sri Lanka', tamilName: 'இலங்கையின் புவியியல் பின்னணி', status: 'not-started' },
      { id: 'hist_g10_2', grade: 10, name: 'Anuradhapura Social/Economic Conditions', tamilName: 'அனுராதபுர சமூகப் பொருளாதாரம்', status: 'not-started' },
      { id: 'hist_g10_3', grade: 10, name: 'Polonnaruwa Administration', tamilName: 'பொலன்னறுவை ஆட்சிமுறை', status: 'not-started' },
      { id: 'hist_g10_4', grade: 10, name: 'Kingdom of Kandy & Foreign Policies', tamilName: 'கண்டி இராஜதானி', status: 'not-started' },
      { id: 'hist_g10_5', grade: 10, name: 'European Arrivals in Ceylon', tamilName: 'ஐரோப்பியரின் வருகை', status: 'not-started' },
      // Grade 11
      { id: 'hist_g11_1', grade: 11, name: 'British Administrative & Economic Reforms', tamilName: 'பிரித்தானிய நிர்வாக, பொருளாதார சீர்திருத்தங்கள்', status: 'not-started' },
      { id: 'hist_g11_2', grade: 11, name: 'Sri Lankan Independence Movement', tamilName: 'இலங்கை சுதந்திர இயக்கம்', status: 'not-started' },
      { id: 'hist_g11_3', grade: 11, name: 'National Revival & Social Leaders', tamilName: 'தேசிய மறுமலர்ச்சி', status: 'not-started' },
      { id: 'hist_g11_4', grade: 11, name: 'World Wars I & II', tamilName: 'உலக மகா யுத்தங்கள்', status: 'not-started' },
      { id: 'hist_g11_5', grade: 11, name: 'Post-Independence Developments', tamilName: 'சுதந்திரத்தின் பின்னரான இலங்கை', status: 'not-started' }
    ]
  },
  tamil: {
    id: 'tamil',
    name: 'Tamil Language & Lit.',
    tamilName: 'தமிழ் மொழி',
    color: '#9d4edd',
    topics: [
      // Grade 10
      { id: 'tam_g10_1', grade: 10, name: 'Basic Grammar & Phonology', tamilName: 'எழுத்து, சொல் இலக்கணம்', status: 'not-started' },
      { id: 'tam_g10_2', grade: 10, name: 'Ancient Poetry (Thirukkural, Naladiyar)', tamilName: 'பண்டைய செய்யுள்கள்', status: 'not-started' },
      { id: 'tam_g10_3', grade: 10, name: 'Prose Comprehension & Summarizing', tamilName: 'உரைநடை வினாக்கள், சுருக்கம்', status: 'not-started' },
      { id: 'tam_g10_4', grade: 10, name: 'Creative Writing (Essays & Dialogues)', tamilName: 'கட்டுரையாக்கம், உரையாடல்', status: 'not-started' },
      // Grade 11
      { id: 'tam_g11_1', grade: 11, name: 'Classical Sangam Literature', tamilName: 'சங்க இலக்கியம்', status: 'not-started' },
      { id: 'tam_g11_2', grade: 11, name: 'Modern Poetry & Short Stories', tamilName: 'நவீன கவிதையும் சிறுகதையும்', status: 'not-started' },
      { id: 'tam_g11_3', grade: 11, name: 'Letter & Official Communication Drafts', tamilName: 'கடிதங்கள்', status: 'not-started' },
      { id: 'tam_g11_4', grade: 11, name: 'Advanced Syntax & Sentence Structure', tamilName: 'வாக்கிய அமைப்பு, இலக்கண வழுவமைதி', status: 'not-started' }
    ]
  },
  english: {
    id: 'english',
    name: 'English',
    tamilName: 'ஆங்கிலம்',
    color: '#ff6b35',
    topics: [
      // Grade 10
      { id: 'eng_g10_1', grade: 10, name: 'Nouns, Pronouns & Articles', tamilName: 'பெயர்ச்சொற்கள், சுட்டுச் சொற்கள்', status: 'not-started' },
      { id: 'eng_g10_2', grade: 10, name: 'Tenses (Simple & Continuous)', tamilName: 'காலங்கள் (எளிய & தொடர்)', status: 'not-started' },
      { id: 'eng_g10_3', grade: 10, name: 'Reading Comprehension Exercises', tamilName: 'வாசிப்பு பயிற்சி', status: 'not-started' },
      { id: 'eng_g10_4', grade: 10, name: 'Letter Writing (Formal/Informal)', tamilName: 'கடிதங்கள் வரைதல்', status: 'not-started' },
      // Grade 11
      { id: 'eng_g11_1', grade: 11, name: 'Active & Passive Voice', tamilName: 'செய்வினை, செயப்பாட்டு வினை', status: 'not-started' },
      { id: 'eng_g11_2', grade: 11, name: 'Direct & Indirect Speech', tamilName: 'நேர்க்கூற்று, அயற்கூற்று', status: 'not-started' },
      { id: 'eng_g11_3', grade: 11, name: 'Essay & Paragraph Composition', tamilName: 'கட்டுரைகள் எழுதுதல்', status: 'not-started' },
      { id: 'eng_g11_4', grade: 11, name: 'Interpretation of Charts & Bar Graphs', tamilName: 'வரைபுகளை விளக்குதல்', status: 'not-started' }
    ]
  },
  religion: {
    id: 'religion',
    name: 'Saivaneri (Hinduism)',
    tamilName: 'சைவநெறி',
    color: '#ff9100',
    topics: [
      // Grade 10
      { id: 'rel_g10_1', grade: 10, name: 'Saiva Rituals & Prayer', tamilName: 'சைவக் கிரியைகளும் வழிபாடும்', status: 'not-started' },
      { id: 'rel_g10_2', grade: 10, name: 'Nayanmars (Appar, Sundarar, Sambandar)', tamilName: 'நாயன்மார்களின் வரலாறு', status: 'not-started' },
      { id: 'rel_g10_3', grade: 10, name: 'Temple Architecture & Symbolism', tamilName: 'ஆலய அமைப்பும் தத்துவமும்', status: 'not-started' },
      { id: 'rel_g10_4', grade: 10, name: 'Introduction to Thirumurai', tamilName: 'பன்னிரு திருமுறைகள் அறிமுகம்', status: 'not-started' },
      // Grade 11
      { id: 'rel_g11_1', grade: 11, name: 'Saiva Siddhanta Philosophies', tamilName: 'சைவ சித்தாந்தக் கோட்பாடுகள்', status: 'not-started' },
      { id: 'rel_g11_2', grade: 11, name: 'Historic Temples of Sri Lanka', tamilName: 'இலங்கையின் வரலாற்றுச் சிறப்புமிக்க ஆலயங்கள்', status: 'not-started' },
      { id: 'rel_g11_3', grade: 11, name: 'Periya Puranam Narrative Stories', tamilName: 'பெரியபுராண கதைகள்', status: 'not-started' },
      { id: 'rel_g11_4', grade: 11, name: 'Ethical Values in Hinduism', tamilName: 'சைவநெறி ஒழுக்க விழுமியங்கள்', status: 'not-started' }
    ]
  },
  dance: {
    id: 'dance',
    name: 'Dance (Bharatanatyam)',
    tamilName: 'பரதநாட்டியம்',
    color: '#ec407a',
    topics: [
      // Grade 10
      { id: 'dan_g10_1', grade: 10, name: 'Basic Adavus (Steps)', tamilName: 'அடிப்படை அடவுகள்', status: 'not-started' },
      { id: 'dan_g10_2', grade: 10, name: 'Hasta Lakshana (Mudras/Gestures)', tamilName: 'கை முத்திரைகள்', status: 'not-started' },
      { id: 'dan_g10_3', grade: 10, name: 'Tala System & Rhythm', tamilName: 'தாளக் கோட்பாடுகள்', status: 'not-started' },
      { id: 'dan_g10_4', grade: 10, name: 'Origin & History of Dance', tamilName: 'நடன வரலாறு', status: 'not-started' },
      // Grade 11
      { id: 'dan_g11_1', grade: 11, name: 'Abhinaya (Expression Theory)', tamilName: 'அபிநயக் கோட்பாடுகள்', status: 'not-started' },
      { id: 'dan_g11_2', grade: 11, name: 'Arangetram Procedures & Routines', tamilName: 'அரங்கேற்றப் படிமுறைகள்', status: 'not-started' },
      { id: 'dan_g11_3', grade: 11, name: 'Natya Shastra Verses/Slokas', tamilName: 'நாட்டிய சாஸ்திர ஸ்லோகங்கள்', status: 'not-started' },
      { id: 'dan_g11_4', grade: 11, name: 'Traditional Musical Instruments', tamilName: 'நடன பின்னணி இசைக்கருவிகள்', status: 'not-started' },
      { id: 'dan_g11_5', grade: 11, name: 'Performance Items (Sabdam, Varnam, Patham)', tamilName: 'சப்தம், வர்ணம், பதம்', status: 'not-started' }
    ]
  },
  sinhala: {
    id: 'sinhala',
    name: 'Sinhala (Second Lang.)',
    tamilName: 'சிங்களம்',
    color: '#00b0ff',
    topics: [
      // Grade 10
      { id: 'sin_g10_1', grade: 10, name: 'Sinhala Alphabet & Phonetics', tamilName: 'சிங்கள எழுத்துக்கள்', status: 'not-started' },
      { id: 'sin_g10_2', grade: 10, name: 'Everyday Vocabulary & Terms', tamilName: 'அடிப்படைச் சொற்கள்', status: 'not-started' },
      { id: 'sin_g10_3', grade: 10, name: 'Greetings & Basic Conversations', tamilName: 'தினசரி வாழ்த்துக்கள்', status: 'not-started' },
      { id: 'sin_g10_4', grade: 10, name: 'Short Sentence Comprehension', tamilName: 'வாசிப்புப் பயிற்சி', status: 'not-started' },
      // Grade 11
      { id: 'sin_g11_1', grade: 11, name: 'Sentence Syntax & Gender Rules', tamilName: 'வாக்கிய அமைப்பு, பால் வேறுபாடு', status: 'not-started' },
      { id: 'sin_g11_2', grade: 11, name: 'Short Essay Composition', tamilName: 'கட்டுரைகள் வரைதல்', status: 'not-started' },
      { id: 'sin_g11_3', grade: 11, name: 'Interactive Dialogue & Speeches', tamilName: 'உரையாடல் பயிற்சிகள்', status: 'not-started' },
      { id: 'sin_g11_4', grade: 11, name: 'Bilingual Translation (Tamil <-> Sinhala)', tamilName: 'மொழிபெயர்ப்பு', status: 'not-started' }
    ]
  },
  ict: {
    id: 'ict',
    name: 'ICT',
    tamilName: 'தகவல் தொழில்நுட்பம்',
    color: '#00e676',
    topics: [
      // Grade 10
      { id: 'ict_g10_1', grade: 10, name: 'Computer Architecture & Components', tamilName: 'கணினிக் கூறுகள்', status: 'not-started' },
      { id: 'ict_g10_2', grade: 10, name: 'Data Representation (Binary, Octal, Hex)', tamilName: 'தரவுப் பிரதிநிதித்துவம்', status: 'not-started' },
      { id: 'ict_g10_3', grade: 10, name: 'Computer Operating Systems', tamilName: 'இயக்க முறைமைகள்', status: 'not-started' },
      { id: 'ict_g10_4', grade: 10, name: 'Office Productivity Tools (Word, Excel, PPT)', tamilName: 'அலுவலக மென்பொருள்கள்', status: 'not-started' },
      // Grade 11
      { id: 'ict_g11_1', grade: 11, name: 'Programming Concepts (Python/Pascal)', tamilName: 'Python நிரலாக்கம்', status: 'not-started' },
      { id: 'ict_g11_2', grade: 11, name: 'Database Management Systems', tamilName: 'தரவுத்தள மேலாண்மை', status: 'not-started' },
      { id: 'ict_g11_3', grade: 11, name: 'Web Designing (HTML & CSS)', tamilName: 'HTML வலை வடிவமைப்பு', status: 'not-started' },
      { id: 'ict_g11_4', grade: 11, name: 'Computer Networking & Internet', tamilName: 'வலையமைப்புகள், இணையம்', status: 'not-started' },
      { id: 'ict_g11_5', grade: 11, name: 'Systems Development Lifecycle (SDLC)', tamilName: 'முறைமை விருத்தி வலயங்கள்', status: 'not-started' }
    ]
  }
};

// 2. MOTIVATIONAL QUOTES LIST
const STUDY_QUOTES = [
  { text: "வெற்றியின் இரகசியம் தொடங்குவதே! / The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "கற்றல் என்பது ஒரு பொக்கிஷம், அது எங்கு சென்றாலும் பின் தொடரும்! / Learning is a treasure that will follow its owner everywhere.", author: "Chinese Proverb" },
  { text: "பரீட்சைக்கான கடின உழைப்பு என்றும் வீண்போகாது! / Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "உன்னால் முடியும் என்று நம்பு, அதுவே பாதி வெற்றி! / Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "இன்றைய கடின உழைப்பே நாளைய சிறந்த வெற்றி! / Today's hard work builds tomorrow's achievements.", author: "Anonymous" }
];

// 3. APPLICATION STATE
let state = {
  name: "Nuvetha",
  examDate: "2026-12-10",
  syllabus: JSON.parse(JSON.stringify(DEFAULT_SYLLABUS)), // deep clone
  logs: [],
  planner: [
    // Pre-populate some dummy entries to make the calendar look alive!
    { id: "p1", subjectId: "math", topic: "Quadratic Equations review", day: "Monday", time: "16:00" },
    { id: "p2", subjectId: "science", topic: "Human Physiology", day: "Wednesday", time: "18:00" },
    { id: "p3", subjectId: "ict", topic: "HTML & CSS coding session", day: "Friday", time: "15:00" },
    { id: "p4", subjectId: "dance", topic: "Mudras practice", day: "Saturday", time: "17:00" }
  ],
  notes: [
    { id: "n1", content: "கணிதம் வாய்பாடு:\nஇருபடி சமன்பாடு தீர்வு: x = (-b ± √(b² - 4ac)) / 2a", color: "yellow", date: "Jun 3, 2026" },
    { id: "n2", content: "IT HTML Checklist:\n• Use semantic tags (<header>, <main>, <aside>)\n• Always close tags", color: "blue", date: "Jun 3, 2026" }
  ],
  pomo: {
    duration: 25 * 60, // 25 minutes
    originalDuration: 25 * 60,
    status: 'Focus Time',
    isRunning: false,
    intervalId: null
  }
};

// 4. THEME & INITIAL LOADS
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initTheme();
  setupNav();
  setupCountdown();
  renderQuote();
  renderSubjectsProgress();
  initSyllabusUI();
  initPlannerUI();
  initLogsUI();
  initNotesUI();
  initSettingsUI();
  initPomodoro();
  
  // Set default logging dates in forms
  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('logFormDate').value = todayStr;
  document.getElementById('quickLogDate').value = todayStr;

  // Refresh countdown every second
  setInterval(updateCountdown, 1000);
});

// Load state from LocalStorage
function loadState() {
  const savedState = localStorage.getItem("ol_study_tracker_state");
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      if (parsed.syllabus) state.syllabus = parsed.syllabus;
      if (parsed.logs) state.logs = parsed.logs;
      if (parsed.planner) state.planner = parsed.planner;
      if (parsed.notes) state.notes = parsed.notes;
      if (parsed.name) state.name = parsed.name;
      if (parsed.examDate) state.examDate = parsed.examDate;
    } catch (e) {
      console.error("Error reading saved state, keeping defaults", e);
    }
  } else {
    // Generate some default logs for the last week to make the graph look amazing initially!
    const today = new Date();
    const subDays = (d) => {
      const copy = new Date(today);
      copy.setDate(today.getDate() - d);
      return copy.toISOString().split('T')[0];
    };
    state.logs = [
      { id: "l1", subjectId: "math", duration: 60, date: subDays(4) },
      { id: "l2", subjectId: "science", duration: 90, date: subDays(3) },
      { id: "l3", subjectId: "ict", duration: 45, date: subDays(2) },
      { id: "l4", subjectId: "dance", duration: 120, date: subDays(1) },
      { id: "l5", subjectId: "tamil", duration: 30, date: subDays(1) },
      { id: "l6", subjectId: "religion", duration: 60, date: subDays(0) }
    ];
    saveState();
  }
}

// Save state to LocalStorage
function saveState() {
  localStorage.setItem("ol_study_tracker_state", JSON.stringify({
    name: state.name,
    examDate: state.examDate,
    syllabus: state.syllabus,
    logs: state.logs,
    planner: state.planner,
    notes: state.notes
  }));
}

// Theme management (Dark/Light)
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeToggleBtnMobile = document.getElementById("themeToggleBtnMobile");
  
  // check localstorage theme preference
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeUI(currentTheme);

  const handleToggle = () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeUI(nextTheme);
  };

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", handleToggle);
  if (themeToggleBtnMobile) themeToggleBtnMobile.addEventListener("click", handleToggle);
}

function updateThemeUI(theme) {
  const themeToggleLabel = document.getElementById("themeToggleLabel");
  const themeIcon = document.getElementById("themeIcon");
  const themeIconMobile = document.querySelector(".themeIconMobile");
  
  const sunIcon = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;

  if (theme === "light") {
    if (themeToggleLabel) themeToggleLabel.textContent = "Dark Mode";
    if (themeIcon) themeIcon.innerHTML = moonIcon;
    if (themeIconMobile) themeIconMobile.innerHTML = moonIcon;
  } else {
    if (themeToggleLabel) themeToggleLabel.textContent = "Light Mode";
    if (themeIcon) themeIcon.innerHTML = sunIcon;
    if (themeIconMobile) themeIconMobile.innerHTML = sunIcon;
  }
}

// 5. NAVIGATION & VIEW SWITCHING
function setupNav() {
  const navLinks = document.querySelectorAll(".nav-link");
  const viewPanels = document.querySelectorAll(".view-panel");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.getAttribute("data-view");

      // Set active nav link
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Toggle views
      viewPanels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.id === `${targetView}View`) {
          panel.classList.add("active");
        }
      });

      // Special re-renders when views change
      if (targetView === 'dashboard') {
        renderSubjectsProgress();
        renderChart();
      } else if (targetView === 'planner') {
        renderPlanner();
      } else if (targetView === 'logs') {
        renderLogs();
      } else if (targetView === 'notes') {
        renderNotes();
      }
    });
  });
}

// 6. EXAM COUNTDOWN ENGINE
function setupCountdown() {
  // Set student name in headers
  const profileName = document.getElementById("profileName");
  if (profileName) profileName.textContent = state.name;
  
  const userAvatar = document.getElementById("userAvatar");
  if (userAvatar) userAvatar.textContent = state.name.charAt(0).toUpperCase();
  
  const userAvatarMobile = document.getElementById("userAvatarMobile");
  if (userAvatarMobile) userAvatarMobile.textContent = state.name.charAt(0).toUpperCase();
  
  // Set welcoming greeting depending on time of day
  const hours = new Date().getHours();
  let greeting = "Vanakkam";
  if (hours >= 5 && hours < 12) greeting = "Kaalai Vanakkam / காலை வணக்கம்";
  else if (hours >= 12 && hours < 16) greeting = "Madhiya Vanakkam / மதிய வணக்கம்";
  else greeting = "Maalai Vanakkam / மாலை வணக்கம்";

  document.getElementById("greetingMessage").textContent = `${greeting}, ${state.name}!`;

  // Format localized date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("greetingDate").textContent = `Today is ${new Date().toLocaleDateString('en-US', options)}`;
  document.getElementById("examDateBadge").textContent = formatDateString(state.examDate);

  updateCountdown();
}

function updateCountdown() {
  const examTarget = new Date(`${state.examDate}T00:00:00`).getTime();
  const now = new Date().getTime();
  const timeDifference = examTarget - now;

  if (timeDifference <= 0) {
    document.getElementById("cdDays").textContent = "00";
    document.getElementById("cdHours").textContent = "00";
    document.getElementById("cdMinutes").textContent = "00";
    document.getElementById("cdSeconds").textContent = "00";
    document.getElementById("academicYearProgress").style.width = "100%";
    document.getElementById("academicPercentText").textContent = "Exam Time! All the best Nuvetha!";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("cdDays").textContent = String(days).padStart(2, '0');
  document.getElementById("cdHours").textContent = String(hours).padStart(2, '0');
  document.getElementById("cdMinutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("cdSeconds").textContent = String(seconds).padStart(2, '0');

  // academic year progress percentage
  // Assuming school year starts Jan 1st and ends at exam date
  const examYear = new Date(state.examDate).getFullYear();
  const yearStart = new Date(`${examYear}-01-01T00:00:00`).getTime();
  const totalDuration = examTarget - yearStart;
  const elapsed = now - yearStart;
  
  let percent = 0;
  if (totalDuration > 0) {
    percent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
  }
  
  document.getElementById("academicYearProgress").style.width = `${percent.toFixed(1)}%`;
  document.getElementById("academicPercentText").textContent = `${percent.toFixed(1)}% of Prep Time Completed`;
}

// 7. STUDY ADVICE & QUOTE GENERATION
function renderQuote() {
  const randomIndex = Math.floor(Math.random() * STUDY_QUOTES.length);
  const quote = STUDY_QUOTES[randomIndex];
  document.getElementById("quoteText").textContent = `"${quote.text}"`;
  document.getElementById("quoteAuthor").textContent = `- ${quote.author}`;
}

// 8. DASHBOARD SUBJECTS PROGRESS VIEW
function renderSubjectsProgress() {
  const container = document.getElementById("subjectsPreviewGrid");
  container.innerHTML = "";

  Object.values(state.syllabus).forEach(subj => {
    const total = subj.topics.length;
    const mastered = subj.topics.filter(t => t.status === 'mastered').length;
    const inProgress = subj.topics.filter(t => t.status === 'in-progress').length;
    
    // Weighted progress percentage: Mastered = 100%, In progress = 50%
    const progressPercent = total > 0 
      ? Math.round(((mastered * 1 + inProgress * 0.5) / total) * 100) 
      : 0;

    // SVG dash offset (radius = 20, circumference = 125.6)
    const circleCircumference = 125.6;
    const strokeDashoffset = circleCircumference - (progressPercent / 100) * circleCircumference;

    const card = document.createElement("div");
    card.className = "subject-preview-card";
    card.style.setProperty("--subject-accent", subj.color);
    card.addEventListener("click", () => {
      // Trigger navigation to syllabus page
      const navLinks = document.querySelectorAll(".nav-link");
      const activeLink = Array.from(navLinks).find(l => l.getAttribute("data-view") === "syllabus");
      if (activeLink) activeLink.click();
      
      // select this subject in checklist
      selectSyllabusSubject(subj.id);
    });

    card.innerHTML = `
      <div class="subj-header">
        <div class="subj-info">
          <span class="subj-name">${subj.name}</span>
          <span class="subj-tamil">${subj.tamilName}</span>
        </div>
        <div class="subj-stat-ring">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle class="subj-circle-bg" cx="24" cy="24" r="20"></circle>
            <circle class="subj-circle-fill" cx="24" cy="24" r="20" style="stroke-dashoffset: ${strokeDashoffset}px;"></circle>
          </svg>
          <div class="subj-percent-text">${progressPercent}%</div>
        </div>
      </div>
      <div class="subj-footer-stats">
        <span>Mastered: <strong>${mastered}/${total}</strong></span>
        <span>Studying: <strong>${inProgress}</strong></span>
      </div>
    `;
    container.appendChild(card);
  });
}

// 9. SYLLABUS CHECKLIST CONTROLLER
let activeSyllabusSubjectId = 'math';
let activeSyllabusGrade = 10;

function initSyllabusUI() {
  // Subject list buttons
  const listContainer = document.getElementById("syllabusSubjectList");
  listContainer.innerHTML = "";
  
  Object.values(state.syllabus).forEach(subj => {
    const li = document.createElement("li");
    li.className = "nav-item";
    
    const btn = document.createElement("button");
    btn.className = `subj-nav-btn ${subj.id === activeSyllabusSubjectId ? 'active' : ''}`;
    btn.id = `btn_nav_${subj.id}`;
    btn.style.setProperty("--subj-nav-color", subj.color);
    btn.addEventListener("click", () => selectSyllabusSubject(subj.id));
    
    btn.innerHTML = `
      <span>${subj.name}</span>
      <span class="subj-nav-title-tamil">${subj.tamilName}</span>
    `;
    
    li.appendChild(btn);
    listContainer.appendChild(li);
  });

  // Grade Toggle Buttons
  const tabBtns = document.querySelectorAll(".syllabus-grade-tabs .tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSyllabusGrade = parseInt(btn.getAttribute("data-grade"));
      renderSyllabusList();
    });
  });

  // Add Syllabus Topic Modal Handlers
  const addTopicBtn = document.getElementById("btnAddSyllabusTopicBtn");
  const addTopicModal = document.getElementById("addTopicModal");
  const closeAddTopicModal = document.getElementById("closeAddTopicModal");
  const addTopicForm = document.getElementById("addTopicForm");

  addTopicBtn.addEventListener("click", () => {
    document.getElementById("topicFormName").value = "";
    document.getElementById("topicFormTamilName").value = "";
    openModal(addTopicModal);
  });

  closeAddTopicModal.addEventListener("click", () => {
    closeModal(addTopicModal);
  });

  addTopicForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("topicFormName").value.trim();
    const tamilName = document.getElementById("topicFormTamilName").value.trim();
    
    if (name && tamilName) {
      const activeSubj = state.syllabus[activeSyllabusSubjectId];
      if (activeSubj) {
        const newTopic = {
          id: `${activeSyllabusSubjectId}_custom_${Date.now()}`,
          grade: activeSyllabusGrade,
          name: name,
          tamilName: tamilName,
          status: 'not-started'
        };
        activeSubj.topics.push(newTopic);
        saveState();
        closeModal(addTopicModal);
        renderSyllabusList();
        renderSubjectsProgress();
      }
    }
  });

  renderSyllabusList();
}

function selectSyllabusSubject(subjectId) {
  activeSyllabusSubjectId = subjectId;
  
  // Highlight active button in subject side nav
  document.querySelectorAll(".subj-nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtn = document.getElementById(`btn_nav_${subjectId}`);
  if (activeBtn) activeBtn.classList.add("active");

  renderSyllabusList();
}

function renderSyllabusList() {
  const subject = state.syllabus[activeSyllabusSubjectId];
  if (!subject) return;

  // Update header text
  document.getElementById("syllabusActiveSubjectName").textContent = `${subject.tamilName} | ${subject.name}`;
  
  // Count stats
  const total = subject.topics.length;
  const mastered = subject.topics.filter(t => t.status === 'mastered').length;
  document.getElementById("syllabusProgressSummary").textContent = `${mastered} of ${total} topics mastered / ${mastered} தேர்ச்சி பெற்றுள்ளார்`;

  // Render chapters
  const container = document.getElementById("topicsContainer");
  container.innerHTML = "";

  const filteredTopics = subject.topics.filter(t => t.grade === activeSyllabusGrade);

  if (filteredTopics.length === 0) {
    container.innerHTML = `<div class="text-muted" style="padding:2rem; text-align:center;">No topics found for Grade ${activeSyllabusGrade}</div>`;
    return;
  }

  filteredTopics.forEach(topic => {
    const row = document.createElement("div");
    row.className = "topic-row";

    const info = document.createElement("div");
    info.className = "topic-info-side";

    const nameEl = document.createElement("span");
    nameEl.className = "topic-name";
    nameEl.textContent = topic.name;

    const tamilEl = document.createElement("span");
    tamilEl.className = "topic-name-tamil";
    tamilEl.textContent = topic.tamilName;

    info.appendChild(nameEl);
    info.appendChild(tamilEl);

    const selector = document.createElement("div");
    selector.className = "status-pill-selector";
    selector.innerHTML = `
        <button class="status-pill not-started ${topic.status === 'not-started' ? 'active' : ''}" data-status="not-started">
          Not Started
        </button>
        <button class="status-pill in-progress ${topic.status === 'in-progress' ? 'active' : ''}" data-status="in-progress">
          In Progress
        </button>
        <button class="status-pill mastered ${topic.status === 'mastered' ? 'active' : ''}" data-status="mastered">
          Mastered
        </button>
    `;

    row.appendChild(info);
    row.appendChild(selector);

    // Hook buttons clicks
    const statusPills = row.querySelectorAll(".status-pill");
    statusPills.forEach(pill => {
      pill.addEventListener("click", () => {
        const nextStatus = pill.getAttribute("data-status");
        
        // update memory state
        topic.status = nextStatus;
        saveState();

        // Update checklist UI buttons
        statusPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        // Refresh stats
        const freshMastered = subject.topics.filter(t => t.status === 'mastered').length;
        document.getElementById("syllabusProgressSummary").textContent = `${freshMastered} of ${total} topics mastered / ${freshMastered} தேர்ச்சி பெற்றுள்ளார்`;
        
        // Dynamic re-render dashboard summary if needed
        renderSubjectsProgress();
      });
    });

    container.appendChild(row);
  });
}

// 10. WEEKLY PLANNER & CALENDAR SCHEDULER
let currentWeekOffset = 0; // 0 = current week, -1 = last week, 1 = next week

function initPlannerUI() {
  const modal = document.getElementById("scheduleModal");
  const closeBtn = document.getElementById("closeScheduleModal");
  const form = document.getElementById("scheduleForm");
  
  // Open add scheduler modal
  document.getElementById("btnAddScheduleBtn").addEventListener("click", () => {
    document.getElementById("schedFormId").value = "";
    document.getElementById("schedFormTopic").value = "";
    document.getElementById("btnDeleteSchedule").style.display = "none";
    document.getElementById("scheduleModalTitle").textContent = "Schedule Study Session";
    openModal(modal);
  });

  closeBtn.addEventListener("click", () => closeModal(modal));
  
  // Submit Schedule Form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("schedFormId").value;
    const subjectId = document.getElementById("schedFormSubject").value;
    const topic = document.getElementById("schedFormTopic").value;
    const day = document.getElementById("schedFormDay").value;
    const time = document.getElementById("schedFormTime").value;

    if (id) {
      // Edit
      const idx = state.planner.findIndex(p => p.id === id);
      if (idx !== -1) {
        state.planner[idx] = { id, subjectId, topic, day, time };
      }
    } else {
      // Create
      const newBlock = {
        id: "sched_" + Date.now(),
        subjectId, topic, day, time
      };
      state.planner.push(newBlock);
    }

    saveState();
    closeModal(modal);
    renderPlanner();
  });

  // Delete Schedule button
  document.getElementById("btnDeleteSchedule").addEventListener("click", () => {
    const id = document.getElementById("schedFormId").value;
    if (id) {
      state.planner = state.planner.filter(p => p.id !== id);
      saveState();
      closeModal(modal);
      renderPlanner();
    }
  });

  // Set subjects in planner select dropdown
  const select = document.getElementById("schedFormSubject");
  select.innerHTML = "";
  Object.values(state.syllabus).forEach(subj => {
    const opt = document.createElement("option");
    opt.value = subj.id;
    opt.textContent = `${subj.name} (${subj.tamilName})`;
    select.appendChild(opt);
  });

  // Week navigation listeners
  document.getElementById("btnPrevWeek").addEventListener("click", () => {
    currentWeekOffset--;
    renderPlanner();
  });
  document.getElementById("btnNextWeek").addEventListener("click", () => {
    currentWeekOffset++;
    renderPlanner();
  });

  renderPlanner();
}

function renderPlanner() {
  const grid = document.getElementById("plannerWeekGrid");
  grid.innerHTML = "";

  // 1. Calculate Current Week Header Dates
  const today = new Date();
  const firstDayOfWeek = new Date(today);
  // Get Sunday of current week, then adjust by offset
  const dayIndex = today.getDay(); // 0 is Sunday, 1 is Monday...
  const distanceToMonday = dayIndex === 0 ? -6 : 1 - dayIndex; // Distance to Monday
  firstDayOfWeek.setDate(today.getDate() + distanceToMonday + (currentWeekOffset * 7));

  // Display week ranges
  const weekStart = new Date(firstDayOfWeek);
  const weekEnd = new Date(firstDayOfWeek);
  weekEnd.setDate(weekStart.getDate() + 6);
  
  const options = { month: 'short', day: 'numeric' };
  document.getElementById("calWeekDisplay").textContent = `${weekStart.toLocaleDateString('en-US', options)} - ${weekEnd.toLocaleDateString('en-US', options)}, ${weekStart.getFullYear()}`;

  // 2. Generate grid cells
  // A. Header Row (Top corner cell + 7 days)
  const emptyCorner = document.createElement("div");
  emptyCorner.className = "grid-header-cell";
  emptyCorner.textContent = "Time / நேரம்";
  grid.appendChild(emptyCorner);

  const daysOfWeek = [
    { eng: "Monday", tam: "திங்கள்" },
    { eng: "Tuesday", tam: "செவ்வாய்" },
    { eng: "Wednesday", tam: "புதன்" },
    { eng: "Thursday", tam: "வியாழன்" },
    { eng: "Friday", tam: "வெள்ளி" },
    { eng: "Saturday", tam: "சனி" },
    { eng: "Sunday", tam: "ஞாயிறு" }
  ];

  daysOfWeek.forEach((day, index) => {
    const dayDate = new Date(firstDayOfWeek);
    dayDate.setDate(firstDayOfWeek.getDate() + index);

    const cell = document.createElement("div");
    cell.className = "grid-header-cell";
    cell.innerHTML = `
      ${day.eng} (${dayDate.getDate()})
      <span class="day-header-tamil">${day.tam}</span>
    `;
    grid.appendChild(cell);
  });

  // B. Body Rows (3 PM to 10 PM)
  const hourSlots = ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const formatHourLabel = (timeStr) => {
    const hr = parseInt(timeStr.split(":")[0]);
    if (hr === 12) return "12:00 PM";
    return hr > 12 ? `${hr - 12}:00 PM` : `${hr}:00 AM`;
  };

  hourSlots.forEach(slotTime => {
    // 1st column: time cell
    const timeCell = document.createElement("div");
    timeCell.className = "time-col-cell";
    timeCell.textContent = formatHourLabel(slotTime);
    grid.appendChild(timeCell);

    // 7 columns for each day
    daysOfWeek.forEach(day => {
      const cell = document.createElement("div");
      cell.className = "grid-body-cell";
      cell.dataset.day = day.eng;
      cell.dataset.time = slotTime;

      // Click cell to schedule block directly
      cell.addEventListener("click", (e) => {
        // Prevent click trigger if calendar card block inside was clicked
        if (e.target.closest(".schedule-block")) return;

        document.getElementById("schedFormId").value = "";
        document.getElementById("schedFormTopic").value = "";
        document.getElementById("schedFormDay").value = day.eng;
        document.getElementById("schedFormTime").value = slotTime;
        document.getElementById("btnDeleteSchedule").style.display = "none";
        document.getElementById("scheduleModalTitle").textContent = "Schedule Study Session";
        openModal(document.getElementById("scheduleModal"));
      });

      // Filter events matching day and slot
      const matches = state.planner.filter(p => p.day === day.eng && p.time === slotTime);

      matches.forEach(item => {
        const block = document.createElement("div");
        block.className = "schedule-block";
        
        const subj = state.syllabus[item.subjectId];
        const hexColor = subj ? subj.color : '#64748b';
        block.style.setProperty("--block-color", hexColor);
        block.style.setProperty("--block-color-rgb", hexToRgb(hexColor));

        const title = document.createElement("span");
        title.className = "sched-title";
        title.textContent = subj ? subj.name : 'Study';

        const topicEl = document.createElement("span");
        topicEl.className = "sched-time";
        topicEl.textContent = item.topic;

        const del = document.createElement("div");
        del.className = "sched-delete";
        del.textContent = '×';

        block.appendChild(title);
        block.appendChild(topicEl);
        block.appendChild(del);

        // Click block to edit/delete
        block.addEventListener("click", (e) => {
          e.stopPropagation();
          
          if (e.target.classList.contains("sched-delete")) {
            // Delete directly
            state.planner = state.planner.filter(p => p.id !== item.id);
            saveState();
            renderPlanner();
          } else {
            // Open modal to edit
            document.getElementById("schedFormId").value = item.id;
            document.getElementById("schedFormSubject").value = item.subjectId;
            document.getElementById("schedFormTopic").value = item.topic;
            document.getElementById("schedFormDay").value = item.day;
            document.getElementById("schedFormTime").value = item.time;
            document.getElementById("btnDeleteSchedule").style.display = "block";
            document.getElementById("scheduleModalTitle").textContent = "Edit Scheduled Study Block";
            openModal(document.getElementById("scheduleModal"));
          }
        });

        cell.appendChild(block);
      });

      grid.appendChild(cell);
    });
  });
}

// 11. STUDY LOGS & 7-DAY BAR CHART GRAPH
function initLogsUI() {
  const form = document.getElementById("studyLogForm");
  const quickForm = document.getElementById("quickLogForm");
  const quickLogModal = document.getElementById("quickLogModal");
  const quickLogBtn = document.getElementById("quickLogBtn");
  const closeQuickBtn = document.getElementById("closeQuickLogModal");

  // Subject logging selectors
  const fillSelects = [
    document.getElementById("logFormSubject"),
    document.getElementById("quickLogSubject")
  ];
  
  fillSelects.forEach(select => {
    select.innerHTML = "";
    Object.values(state.syllabus).forEach(subj => {
      const opt = document.createElement("option");
      opt.value = subj.id;
      opt.textContent = `${subj.name} (${subj.tamilName})`;
      select.appendChild(opt);
    });
  });

  // Modal handlers
  quickLogBtn.addEventListener("click", () => {
    openModal(quickLogModal);
  });
  closeQuickBtn.addEventListener("click", () => {
    closeModal(quickLogModal);
  });

  // Main Page Study Log submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const subjectId = document.getElementById("logFormSubject").value;
    const duration = parseInt(document.getElementById("logFormDuration").value);
    const date = document.getElementById("logFormDate").value;

    addStudyLog(subjectId, duration, date);
    form.reset();
    document.getElementById('logFormDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('logFormDuration').value = "30";
  });

  // Quick Modal Study Log submission
  quickForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const subjectId = document.getElementById("quickLogSubject").value;
    const duration = parseInt(document.getElementById("quickLogDuration").value);
    const date = document.getElementById("quickLogDate").value;

    addStudyLog(subjectId, duration, date);
    quickForm.reset();
    document.getElementById('quickLogDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('quickLogDuration').value = "30";
    closeModal(quickLogModal);
  });

  renderLogs();
  renderChart();
}

function addStudyLog(subjectId, duration, date) {
  const newLog = {
    id: "log_" + Date.now(),
    subjectId,
    duration,
    date
  };
  state.logs.push(newLog);
  saveState();
  
  renderLogs();
  renderChart();
}

function deleteStudyLog(id) {
  state.logs = state.logs.filter(l => l.id !== id);
  saveState();
  renderLogs();
  renderChart();
}

function renderLogs() {
  const list = document.getElementById("recentLogsList");
  list.innerHTML = "";

  // Sort logs by date descending
  const sortedLogs = [...state.logs].sort((a,b) => new Date(b.date) - new Date(a.date));

  if (sortedLogs.length === 0) {
    list.innerHTML = `<div class="text-muted" style="padding:2rem; text-align:center;">No study logs found. Add one above! / கற்றல் பதிவுகள் இல்லை.</div>`;
    document.getElementById("totalDurationText").textContent = "Total: 0 hours";
    updateStreak(0);
    return;
  }

  let totalMinutes = 0;

  sortedLogs.forEach(log => {
    totalMinutes += log.duration;
    
    const item = document.createElement("div");
    item.className = "log-item";

    const subj = state.syllabus[log.subjectId];
    const color = subj ? subj.color : '#64748b';
    item.style.setProperty("--log-dot-color", color);

    item.innerHTML = `
      <div class="log-subj-indicator">
        <div class="log-color-dot"></div>
        <div class="log-text-wrap">
          <span class="log-subj-name">${subj ? subj.name : 'Unknown'}</span>
          <span class="log-date">${formatDateString(log.date)}</span>
        </div>
      </div>
      <div class="log-stats-right">
        <span class="log-duration">${log.duration} mins</span>
        <button class="log-delete-btn" data-id="${log.id}">
          <svg style="width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      </div>
    `;

    // Hook delete button
    item.querySelector(".log-delete-btn").addEventListener("click", () => {
      deleteStudyLog(log.id);
    });

    list.appendChild(item);
  });

  const totalHrs = (totalMinutes / 60).toFixed(1);
  document.getElementById("totalDurationText").textContent = `Total hours: ${totalHrs}h / மொத்தம்: ${totalHrs} மணி`;

  // Update streaks count
  calculateStreak();
}

// Calculate daily learning streaks
function calculateStreak() {
  if (state.logs.length === 0) {
    updateStreak(0);
    return;
  }

  // Get list of unique dates logged, sorted in descending order
  const uniqueDates = [...new Set(state.logs.map(l => l.date))].sort((a,b) => new Date(b) - new Date(a));
  
  const todayStr = new Date().toISOString().split('T')[0];
  const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  // If they haven't logged today or yesterday, streak is broken
  if (uniqueDates[0] !== todayStr && uniqueDates[0] !== yesterdayStr) {
    updateStreak(0);
    return;
  }

  let streak = 1;
  for (let i = 0; i < uniqueDates.length - 1; i++) {
    const current = new Date(uniqueDates[i]);
    const next = new Date(uniqueDates[i+1]);
    const diffTime = Math.abs(current - next);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streak++;
    } else if (diffDays > 1) {
      break; // Gap detected, stop counting
    }
  }

  updateStreak(streak);
}

function updateStreak(count) {
  document.getElementById("streakCountText").textContent = count;
}

// Draw the last 7 days study log chart
function renderChart() {
  const chartWrapper = document.getElementById("chartBarsWrapper");
  if (!chartWrapper) return;
  chartWrapper.innerHTML = "";

  // 1. Generate last 7 dates
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysOfWeekTamil = ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"];
  
  const last7Days = [];
  const today = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    last7Days.push({
      dateStr: d.toISOString().split('T')[0],
      dayName: daysOfWeek[d.getDay()],
      dayNameTamil: daysOfWeekTamil[d.getDay()]
    });
  }

  // 2. Sum minutes for each day
  let maxMinutes = 60; // minimum ceiling scale to prevent division by zero
  const dayMinutes = last7Days.map(day => {
    const mins = state.logs
      .filter(l => l.date === day.dateStr)
      .reduce((sum, current) => sum + current.duration, 0);
    
    if (mins > maxMinutes) maxMinutes = mins;
    return { ...day, mins };
  });

  // 3. Render Bar Columns
  dayMinutes.forEach(day => {
    const col = document.createElement("div");
    col.className = "chart-bar-col";

    const percentHeight = (day.mins / maxMinutes) * 100;
    const hoursVal = (day.mins / 60).toFixed(1);

    col.innerHTML = `
      <div class="chart-bar" style="height: ${percentHeight}%;"></div>
      <div class="chart-tooltip">${hoursVal}h logged</div>
      <span class="chart-x-label">${day.dayNameTamil}</span>
    `;

    chartWrapper.appendChild(col);
  });
}

// 12. BRAIN DUMP & DIGITAL POST-IT NOTES
function initNotesUI() {
  const modal = document.getElementById("noteModal");
  const closeBtn = document.getElementById("closeNoteModal");
  const form = document.getElementById("noteForm");
  
  document.getElementById("btnCreateNoteBtn").addEventListener("click", () => {
    document.getElementById("noteFormId").value = "";
    document.getElementById("noteFormContent").value = "";
    document.getElementById("noteModalTitle").textContent = "Add Quick Note / குறிப்பு சேர்";
    openModal(modal);
  });

  closeBtn.addEventListener("click", () => closeModal(modal));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("noteFormId").value;
    const content = document.getElementById("noteFormContent").value;
    const color = form.elements["noteColor"].value;
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    if (id) {
      // Edit
      const idx = state.notes.findIndex(n => n.id === id);
      if (idx !== -1) {
        state.notes[idx].content = content;
        state.notes[idx].color = color;
      }
    } else {
      // Add
      const newNote = {
        id: "note_" + Date.now(),
        content,
        color,
        date: dateStr
      };
      state.notes.push(newNote);
    }

    saveState();
    closeModal(modal);
    renderNotes();
  });

  renderNotes();
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  if (state.notes.length === 0) {
    container.innerHTML = `<div class="text-muted" style="padding:3rem 0; text-align:center; grid-column:1/-1;">Your Brain Dump is empty. Click "+ Add Note" to create quick reminders!</div>`;
    return;
  }

  state.notes.forEach(note => {
    const card = document.createElement("div");
    card.className = `note-card note-color-${note.color}`;

    const contentEl = document.createElement("div");
    contentEl.className = "note-content";
    contentEl.textContent = note.content;

    const footer = document.createElement("div");
    footer.className = "note-footer";
    footer.innerHTML = `
        <span>${note.date}</span>
        <div class="note-actions">
          <button class="note-action-btn note-edit-btn">
            <svg style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button class="note-action-btn note-del-btn">
            <svg style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
    `;

    card.appendChild(contentEl);
    card.appendChild(footer);

    // Hook actions
    card.querySelector(".note-edit-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      document.getElementById("noteFormId").value = note.id;
      document.getElementById("noteFormContent").value = note.content;
      document.getElementById("noteModalTitle").textContent = "Edit Note";
      
      // select radio button
      const radios = document.querySelectorAll("input[name='noteColor']");
      radios.forEach(r => {
        if (r.value === note.color) r.checked = true;
      });

      openModal(document.getElementById("noteModal"));
    });

    card.querySelector(".note-del-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      state.notes = state.notes.filter(n => n.id !== note.id);
      saveState();
      renderNotes();
    });

    container.appendChild(card);
  });
}

// 13. SETTINGS & HARD DATA RESET PANEL
function initSettingsUI() {
  // Populate current name & date values
  document.getElementById("settingsNameInput").value = state.name;
  document.getElementById("settingsExamDate").value = state.examDate;

  // Save Settings Button
  document.getElementById("btnSaveSettings").addEventListener("click", () => {
    const nextName = document.getElementById("settingsNameInput").value.trim();
    const nextDate = document.getElementById("settingsExamDate").value;

    if (!nextName) {
      alert("Name cannot be empty!");
      return;
    }

    state.name = nextName;
    state.examDate = nextDate;
    saveState();

    // Reload greeting headers & countdown settings
    setupCountdown();
    alert("Settings saved successfully! / அமைப்புகள் சேமிக்கப்பட்டன!");
  });

  // Hard Reset Button
  document.getElementById("btnResetAll").addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure you want to delete all data? This cannot be undone!\nஉங்கள் அனைத்து தகவல்களையும் முற்றிலுமாக அழிக்க வேண்டுமா?");
    if (confirmDelete) {
      localStorage.removeItem("ol_study_tracker_state");
      
      // Reset local state to original
      state.name = "Nuvetha";
      state.examDate = "2026-12-10";
      state.syllabus = JSON.parse(JSON.stringify(DEFAULT_SYLLABUS));
      state.logs = [];
      state.planner = [];
      state.notes = [];
      
      saveState();
      
      // Full refresh
      window.location.reload();
    }
  });
}

// 14. INTEGRATED POMODORO FOCUS ENGINE
function initPomodoro() {
  const display = document.getElementById("pomoDisplay");
  const statusText = document.getElementById("pomoStatusText");
  const startBtn = document.getElementById("btnPomoStart");
  const resetBtn = document.getElementById("btnPomoReset");
  const outerRing = document.getElementById("pomoOuterRing");

  startBtn.addEventListener("click", () => {
    if (state.pomo.isRunning) {
      // Pause
      pausePomodoro();
    } else {
      // Start
      startPomodoro();
    }
  });

  resetBtn.addEventListener("click", () => {
    resetPomodoro();
  });

  updatePomodoroDisplay();
}

function startPomodoro() {
  const startBtn = document.getElementById("btnPomoStart");
  const outerRing = document.getElementById("pomoOuterRing");
  
  state.pomo.isRunning = true;
  startBtn.textContent = "Pause / நிறுத்து";
  startBtn.style.setProperty("--pomo-accent", "var(--color-break)");
  outerRing.classList.add("ticking");

  state.pomo.intervalId = setInterval(() => {
    state.pomo.duration--;
    updatePomodoroDisplay();

    if (state.pomo.duration <= 0) {
      // Timer finished!
      playFocusChime();
      
      if (state.pomo.status === 'Focus Time') {
        // Log study time to databases!
        const autoLogMinutes = Math.round(state.pomo.originalDuration / 60);
        
        // Auto credit the active syllabus subject or default to "ICT"
        const activeSubj = activeSyllabusSubjectId || 'math';
        addStudyLog(activeSubj, autoLogMinutes, new Date().toISOString().split('T')[0]);
        
        alert(`Great job, Nuvetha! You finished a ${autoLogMinutes} min Focus session! Take a short break. / வாழ்த்துக்கள்!`);
        
        // Switch to Break
        state.pomo.status = 'Break Time';
        state.pomo.duration = 5 * 60; // 5 min break
        state.pomo.originalDuration = 5 * 60;
        outerRing.style.setProperty("--pomo-accent", "var(--color-ict)");
        outerRing.style.setProperty("--glow-pomo", "rgba(0, 230, 118, 0.3)");
      } else {
        alert("Break is over! Ready to focus again? / இடைவேளை முடிந்தது!");
        // Switch to Focus
        state.pomo.status = 'Focus Time';
        state.pomo.duration = 25 * 60; // 25 min focus
        state.pomo.originalDuration = 25 * 60;
        outerRing.style.setProperty("--pomo-accent", "var(--color-math)");
        outerRing.style.setProperty("--glow-pomo", "rgba(255, 42, 95, 0.3)");
      }

      pausePomodoro();
      updatePomodoroDisplay();
    }
  }, 1000);
}

function pausePomodoro() {
  const startBtn = document.getElementById("btnPomoStart");
  const outerRing = document.getElementById("pomoOuterRing");

  state.pomo.isRunning = false;
  clearInterval(state.pomo.intervalId);
  state.pomo.intervalId = null;

  startBtn.textContent = "Start / தொடங்கு";
  startBtn.style.setProperty("--pomo-accent", "var(--color-math)");
  outerRing.classList.remove("ticking");
}

function resetPomodoro() {
  pausePomodoro();
  state.pomo.status = 'Focus Time';
  state.pomo.duration = 25 * 60;
  state.pomo.originalDuration = 25 * 60;
  
  const outerRing = document.getElementById("pomoOuterRing");
  outerRing.style.setProperty("--pomo-accent", "var(--color-math)");
  outerRing.style.setProperty("--glow-pomo", "rgba(255, 42, 95, 0.3)");
  
  updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
  const display = document.getElementById("pomoDisplay");
  const statusText = document.getElementById("pomoStatusText");

  const mins = Math.floor(state.pomo.duration / 60);
  const secs = state.pomo.duration % 60;

  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  const labelText = state.pomo.status === 'Focus Time' 
    ? 'Focus / கவனம்' 
    : 'Break / இடைவேளை';
  statusText.textContent = labelText;
}

// Play synthesizer alert tone using Web Audio API (Offline & lightweight)
function playFocusChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    const playTone = (freq, startTime, duration) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      
      gainNode.gain.setValueAtTime(0.15, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    // Play a beautiful 3-tone motivating progression
    playTone(523.25, audioCtx.currentTime, 0.3); // C5
    playTone(659.25, audioCtx.currentTime + 0.15, 0.3); // E5
    playTone(783.99, audioCtx.currentTime + 0.3, 0.5); // G5
  } catch (e) {
    console.warn("Web Audio API not allowed or supported by browser policy", e);
  }
}

// 15. UTILITIES
function openModal(modalEl) {
  modalEl.classList.add("active");
}

function closeModal(modalEl) {
  modalEl.classList.remove("active");
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '138, 43, 226';
}

function formatDateString(dateStr) {
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return d.toLocaleDateString('en-US', options);
}
