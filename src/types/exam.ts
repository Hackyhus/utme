export type SubjectId =
  | 'english'
  | 'mathematics'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'economics'
  | 'government'
  | 'literature';

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  shortName: string;
  defaultQuestionCount: number;
  category: 'compulsory' | 'sciences' | 'commercial' | 'arts';
  icon: string;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface ReadingPassage {
  id: string;
  title?: string;
  content: string;
}

export interface Question {
  id: string;
  subjectId: SubjectId;
  questionNumber: number; // 1-based index within subject
  instruction?: string;
  passage?: ReadingPassage;
  question: string;
  image?: string; // Diagram or illustration URL
  diagramSvg?: string; // Optional SVG code for scientific or geometric figures
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  topic: string;
  year?: number;
}

export interface CandidateProfile {
  name: string;
  regNumber: string;
  seatNumber: string;
  centerNumber: string;
  passportUrl: string;
}

export type ExamMode = 'simulation' | 'practice';

export interface ExamSessionState {
  candidate: CandidateProfile;
  mode: ExamMode;
  selectedSubjectIds: [SubjectId, SubjectId, SubjectId, SubjectId];
  currentSubjectIndex: number; // 0..3
  currentQuestionIndices: Record<SubjectId, number>; // current question index (0-based) per subject
  answers: Record<SubjectId, Record<number, 'A' | 'B' | 'C' | 'D' | null>>;
  flagged: Record<SubjectId, Record<number, boolean>>;
  timeRemainingSeconds: number; // 7200 for 2 hours
  isTimerRunning: boolean;
  status: 'registration' | 'in-progress' | 'submitted' | 'review';
  isCalculatorOpen: boolean;
  isPaletteOpen: boolean; // For mobile sheet
  isSubmitModalOpen: boolean;
  isVirtualKeypadOpen: boolean;
  startedAt?: number;
  submittedAt?: number;
}

export interface SubjectResult {
  subjectId: SubjectId;
  subjectName: string;
  totalQuestions: number;
  attemptedQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  scaledScore: number; // Out of 100
  accuracyPercent: number;
}

export interface FinalExamResult {
  candidate: CandidateProfile;
  totalScore: number; // Out of 400
  percentage: number;
  subjectResults: SubjectResult[];
  timeSpentSeconds: number;
  examDate: string;
  performanceGrade: 'EXCELLENT' | 'VERY GOOD' | 'GOOD' | 'AVERAGE' | 'NEEDS IMPROVEMENT';
}

export interface SavedExamRecord extends FinalExamResult {
  id: string;
  timestamp: number;
  mode: ExamMode;
  targetYear?: number | 'random';
}

