import type { SubjectId, SubjectMeta } from '../types/exam';

export const ALL_SUBJECTS: Record<SubjectId, SubjectMeta> = {
  english: {
    id: 'english',
    name: 'Use of English',
    shortName: 'English',
    defaultQuestionCount: 60,
    category: 'compulsory',
    icon: 'BookOpen',
  },
  mathematics: {
    id: 'mathematics',
    name: 'Mathematics',
    shortName: 'Maths',
    defaultQuestionCount: 40,
    category: 'sciences',
    icon: 'Calculator',
  },
  physics: {
    id: 'physics',
    name: 'Physics',
    shortName: 'Physics',
    defaultQuestionCount: 40,
    category: 'sciences',
    icon: 'Zap',
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chemistry',
    defaultQuestionCount: 40,
    category: 'sciences',
    icon: 'FlaskConical',
  },
  biology: {
    id: 'biology',
    name: 'Biology',
    shortName: 'Biology',
    defaultQuestionCount: 40,
    category: 'sciences',
    icon: 'Dna',
  },
  economics: {
    id: 'economics',
    name: 'Economics',
    shortName: 'Economics',
    defaultQuestionCount: 40,
    category: 'commercial',
    icon: 'TrendingUp',
  },
  government: {
    id: 'government',
    name: 'Government',
    shortName: 'Govt',
    defaultQuestionCount: 40,
    category: 'arts',
    icon: 'Landmark',
  },
  literature: {
    id: 'literature',
    name: 'Literature in English',
    shortName: 'Literature',
    defaultQuestionCount: 40,
    category: 'arts',
    icon: 'ScrollText',
  },
};

export interface SubjectComboPreset {
  id: string;
  faculty: string;
  courses: string;
  subjects: [SubjectId, SubjectId, SubjectId, SubjectId];
}

export const SUBJECT_COMBINATIONS: SubjectComboPreset[] = [
  {
    id: 'engineering',
    faculty: 'Engineering & Tech',
    courses: 'Mechanical, Electrical, Civil, Software & Computer Eng.',
    subjects: ['english', 'mathematics', 'physics', 'chemistry'],
  },
  {
    id: 'medical',
    faculty: 'Medicine & Health Sciences',
    courses: 'Medicine & Surgery, Nursing, Pharmacy, Dentistry',
    subjects: ['english', 'biology', 'physics', 'chemistry'],
  },
  {
    id: 'physical_sciences',
    faculty: 'Physical & Computer Science',
    courses: 'Computer Science, Data Science, Cyber Security, Physics',
    subjects: ['english', 'mathematics', 'physics', 'chemistry'],
  },
  {
    id: 'social_sciences',
    faculty: 'Social Sciences & Management',
    courses: 'Economics, Accounting, Business Admin, Banking & Finance',
    subjects: ['english', 'mathematics', 'economics', 'government'],
  },
  {
    id: 'law',
    faculty: 'Law & Legal Studies',
    courses: 'Common Law, Civil Law, International Relations',
    subjects: ['english', 'literature', 'government', 'economics'],
  },
  {
    id: 'biological_sciences',
    faculty: 'Biological Sciences & Agric',
    courses: 'Microbiology, Biochemistry, Agricultural Science',
    subjects: ['english', 'biology', 'chemistry', 'physics'],
  },
];
