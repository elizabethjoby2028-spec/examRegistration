// Sample academic catalogue and mock database for College Exam Portal
// All dates, fees, and subject listings are for demonstration purposes only.

export const ACADEMIC_YEARS = [
  '2025-2026',
  '2024-2025',
  '2023-2024'
];

export const EXAM_SESSIONS = [
  'End-Semester Regular (Nov / Dec 2025)',
  'Arrear / Supplementary (Nov / Dec 2025)',
  'Special Improvement Examination (Jan 2026)'
];

export const COURSES = [
  {
    id: 'btech-cse',
    name: 'B.Tech - Computer Science & Engineering',
    code: 'CSE',
    totalSemesters: 8
  },
  {
    id: 'btech-ece',
    name: 'B.Tech - Electronics & Communication',
    code: 'ECE',
    totalSemesters: 8
  },
  {
    id: 'btech-ai-ds',
    name: 'B.Tech - Artificial Intelligence & Data Science',
    code: 'AIDS',
    totalSemesters: 8
  },
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    code: 'BCA',
    totalSemesters: 6
  },
  {
    id: 'mba',
    name: 'Master of Business Administration (MBA)',
    code: 'MBA',
    totalSemesters: 4
  }
];

export const SUBJECTS_DATABASE = {
  'btech-cse': {
    5: [
      { id: 'CS501', code: 'CS501', name: 'Design and Analysis of Algorithms', credits: 4, type: 'Theory', fee: 400 },
      { id: 'CS502', code: 'CS502', name: 'Database Management Systems', credits: 4, type: 'Theory', fee: 400 },
      { id: 'CS503', code: 'CS503', name: 'Computer Networks & Security', credits: 3, type: 'Theory', fee: 350 },
      { id: 'CS504', code: 'CS504', name: 'Web Technologies & Frameworks', credits: 3, type: 'Theory', fee: 350 },
      { id: 'CS505', code: 'CS505', name: 'Advanced Java Programming', credits: 3, type: 'Theory', fee: 350 },
      { id: 'CS511', code: 'CS511', name: 'Database Management Systems Lab', credits: 2, type: 'Practical', fee: 500 },
      { id: 'CS512', code: 'CS512', name: 'Algorithms Implementation Lab', credits: 2, type: 'Practical', fee: 500 },
      { id: 'CS513', code: 'CS513', name: 'Web Development Project Lab', credits: 2, type: 'Practical', fee: 500 }
    ],
    6: [
      { id: 'CS601', code: 'CS601', name: 'Compiler Design', credits: 4, type: 'Theory', fee: 400 },
      { id: 'CS602', code: 'CS602', name: 'Cloud Computing & Virtualization', credits: 3, type: 'Theory', fee: 350 },
      { id: 'CS603', code: 'CS603', name: 'Machine Learning Fundamentals', credits: 4, type: 'Theory', fee: 400 },
      { id: 'CS604', code: 'CS604', name: 'Software Engineering & Agile Methodologies', credits: 3, type: 'Theory', fee: 350 },
      { id: 'CS611', code: 'CS611', name: 'Machine Learning Lab', credits: 2, type: 'Practical', fee: 500 },
      { id: 'CS612', code: 'CS612', name: 'Cloud Infrastructure & DevOps Lab', credits: 2, type: 'Practical', fee: 500 }
    ]
  },
  'btech-ece': {
    5: [
      { id: 'EC501', code: 'EC501', name: 'Digital Signal Processing', credits: 4, type: 'Theory', fee: 400 },
      { id: 'EC502', code: 'EC502', name: 'Microprocessors and Microcontrollers', credits: 4, type: 'Theory', fee: 400 },
      { id: 'EC503', code: 'EC503', name: 'Electromagnetic Waves & Radiating Systems', credits: 3, type: 'Theory', fee: 350 },
      { id: 'EC504', code: 'EC504', name: 'Control Systems Engineering', credits: 3, type: 'Theory', fee: 350 },
      { id: 'EC511', code: 'EC511', name: 'DSP & Simulation Laboratory', credits: 2, type: 'Practical', fee: 500 },
      { id: 'EC512', code: 'EC512', name: 'Microcontroller Programming Lab', credits: 2, type: 'Practical', fee: 500 }
    ]
  },
  'btech-ai-ds': {
    5: [
      { id: 'AI501', code: 'AI501', name: 'Deep Learning & Neural Networks', credits: 4, type: 'Theory', fee: 400 },
      { id: 'AI502', code: 'AI502', name: 'Big Data Processing Systems', credits: 4, type: 'Theory', fee: 400 },
      { id: 'AI503', code: 'AI503', name: 'Natural Language Processing', credits: 3, type: 'Theory', fee: 350 },
      { id: 'AI504', code: 'AI504', name: 'Computer Vision Principles', credits: 3, type: 'Theory', fee: 350 },
      { id: 'AI511', code: 'AI511', name: 'Deep Learning Models Lab', credits: 2, type: 'Practical', fee: 500 },
      { id: 'AI512', code: 'AI512', name: 'Big Data Analytics Lab', credits: 2, type: 'Practical', fee: 500 }
    ]
  },
  'bca': {
    5: [
      { id: 'BCA501', code: 'BCA501', name: 'Internet of Things Applications', credits: 3, type: 'Theory', fee: 300 },
      { id: 'BCA502', code: 'BCA502', name: 'Data Mining and Warehousing', credits: 3, type: 'Theory', fee: 300 },
      { id: 'BCA503', code: 'BCA503', name: 'Python for Data Analysis', credits: 3, type: 'Theory', fee: 300 },
      { id: 'BCA511', code: 'BCA511', name: 'Python Computing Lab', credits: 2, type: 'Practical', fee: 450 },
      { id: 'BCA512', code: 'BCA512', name: 'Mini Project Lab', credits: 3, type: 'Practical', fee: 450 }
    ]
  },
  'mba': {
    3: [
      { id: 'MB301', code: 'MB301', name: 'Strategic Management', credits: 4, type: 'Theory', fee: 450 },
      { id: 'MB302', code: 'MB302', name: 'Financial Markets and Services', credits: 4, type: 'Theory', fee: 450 },
      { id: 'MB303', code: 'MB303', name: 'Digital Marketing Strategies', credits: 3, type: 'Theory', fee: 400 },
      { id: 'MB304', code: 'MB304', name: 'Supply Chain and Logistics Management', credits: 3, type: 'Theory', fee: 400 },
      { id: 'MB311', code: 'MB311', name: 'Business Analytics Simulation Lab', credits: 2, type: 'Practical', fee: 500 }
    ]
  }
};

// Fallback generic subjects if custom combination chosen
export const getSubjectsForCourseAndSemester = (courseId, semester) => {
  if (SUBJECTS_DATABASE[courseId] && SUBJECTS_DATABASE[courseId][semester]) {
    return SUBJECTS_DATABASE[courseId][semester];
  }
  
  // Dynamic generation for unlisted semesters
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const prefix = course.code;
  const semNum = semester || 1;
  return [
    { id: `${prefix}${semNum}01`, code: `${prefix}${semNum}01`, name: `Advanced ${course.name.split('-')[1]?.trim() || course.name} Theory I`, credits: 4, type: 'Theory', fee: 400 },
    { id: `${prefix}${semNum}02`, code: `${prefix}${semNum}02`, name: `Applied Core Systems & Architecture II`, credits: 4, type: 'Theory', fee: 400 },
    { id: `${prefix}${semNum}03`, code: `${prefix}${semNum}03`, name: `Specialization Elective Module A`, credits: 3, type: 'Theory', fee: 350 },
    { id: `${prefix}${semNum}04`, code: `${prefix}${semNum}04`, name: `Professional Ethics and Management`, credits: 3, type: 'Theory', fee: 300 },
    { id: `${prefix}${semNum}11`, code: `${prefix}${semNum}11`, name: `Specialized Practical Laboratory I`, credits: 2, type: 'Practical', fee: 500 },
    { id: `${prefix}${semNum}12`, code: `${prefix}${semNum}12`, name: `Technical Seminar & Project Lab`, credits: 2, type: 'Practical', fee: 500 }
  ];
};

export const FEE_CONSTANTS = {
  marksheetFee: 150,
  processingFee: 100
};
