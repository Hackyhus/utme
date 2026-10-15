import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import type {
  SubjectId,
  Question,
  CandidateProfile,
  ExamMode,
  FinalExamResult,
  SubjectResult
} from '../types/exam';
import { ALL_SUBJECTS } from '../data/subjects';
import { generateExamPaper } from '../services/questionBank';
import { saveExamRecord } from '../services/recordsStorage';

interface StartExamParams {
  candidate: CandidateProfile;
  subjects: [SubjectId, SubjectId, SubjectId, SubjectId];
  mode: ExamMode;
  targetYear?: number | 'random';
  durationMinutes?: number;
}

interface ExamContextType {
  // State
  candidate: CandidateProfile;
  mode: ExamMode;
  targetYear: number | 'random';
  selectedSubjects: [SubjectId, SubjectId, SubjectId, SubjectId];
  currentSubjectIndex: number;
  currentSubjectId: SubjectId;
  currentQuestionIndex: number;
  questions: Record<SubjectId, Question[]>;
  currentQuestion: Question | null;
  answers: Record<SubjectId, Record<number, 'A' | 'B' | 'C' | 'D' | null>>;
  flagged: Record<SubjectId, Record<number, boolean>>;
  timeRemaining: number;
  totalDuration: number;
  isTimerRunning: boolean;
  status: 'registration' | 'loading' | 'in-progress' | 'submitted' | 'review';
  isCalculatorOpen: boolean;
  isPaletteOpen: boolean;
  isSubmitModalOpen: boolean;
  isKeyGuideOpen: boolean;
  isVirtualKeypadOpen: boolean;
  finalResult: FinalExamResult | null;
  answeredCountTotal: number;
  unansweredCountTotal: number;
  totalQuestionsCount: number;

  // Actions
  startExam: (params: StartExamParams) => Promise<void>;
  selectOption: (key: 'A' | 'B' | 'C' | 'D') => void;
  clearOption: () => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  jumpToQuestion: (questionIndex: number, subjectIndex?: number) => void;
  switchSubject: (subjectIndex: number) => void;
  toggleFlag: () => void;
  openSubmitModal: () => void;
  closeSubmitModal: () => void;
  confirmSubmitExam: () => void;
  toggleCalculator: () => void;
  togglePalette: () => void;
  toggleKeyGuide: () => void;
  toggleVirtualKeypad: () => void;
  enterReviewMode: () => void;
  resetExam: () => void;
}

const defaultCandidate: CandidateProfile = {
  name: 'Jidderh',
  regNumber: '202684910283AB',
  seatNumber: 'LAB-A / 042',
  centerNumber: 'C-048201',
  passportUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
};

const defaultSubjects: [SubjectId, SubjectId, SubjectId, SubjectId] = [
  'english',
  'mathematics',
  'physics',
  'chemistry'
];

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [candidate, setCandidate] = useState<CandidateProfile>(defaultCandidate);
  const [mode, setMode] = useState<ExamMode>('simulation');
  const [targetYear, setTargetYear] = useState<number | 'random'>('random');
  const [selectedSubjects, setSelectedSubjects] = useState<[SubjectId, SubjectId, SubjectId, SubjectId]>(defaultSubjects);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<Record<SubjectId, Question[]>>({} as Record<SubjectId, Question[]>);
  const [answers, setAnswers] = useState<Record<SubjectId, Record<number, 'A' | 'B' | 'C' | 'D' | null>>>({
    english: {},
    mathematics: {},
    physics: {},
    chemistry: {},
    biology: {},
    economics: {},
    government: {},
    literature: {}
  });
  const [flagged, setFlagged] = useState<Record<SubjectId, Record<number, boolean>>>({
    english: {},
    mathematics: {},
    physics: {},
    chemistry: {},
    biology: {},
    economics: {},
    government: {},
    literature: {}
  });
  const [timeRemaining, setTimeRemaining] = useState<number>(7200); // 2 hours
  const [totalDuration, setTotalDuration] = useState<number>(7200);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [status, setStatus] = useState<'registration' | 'loading' | 'in-progress' | 'submitted' | 'review'>('registration');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isKeyGuideOpen, setIsKeyGuideOpen] = useState<boolean>(false);
  const [isVirtualKeypadOpen, setIsVirtualKeypadOpen] = useState<boolean>(false);
  const [finalResult, setFinalResult] = useState<FinalExamResult | null>(null);

  const currentSubjectId = selectedSubjects[currentSubjectIndex];
  const currentSubjectQuestions = questions[currentSubjectId] || [];
  const currentQuestion = currentSubjectQuestions[currentQuestionIndex] || null;

  // Sound feedback ref
  const audioContextRef = useRef<AudioContext | null>(null);

  const playClickSound = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio autoplay policy fallback
    }
  }, []);

  // Compute total counts
  let answeredCountTotal = 0;
  let totalQuestionsCount = 0;

  selectedSubjects.forEach((subId) => {
    const subQs = questions[subId] || [];
    totalQuestionsCount += subQs.length;
    const subAnswers = answers[subId] || {};
    subQs.forEach((_, idx) => {
      if (subAnswers[idx]) answeredCountTotal++;
    });
  });

  const unansweredCountTotal = Math.max(0, totalQuestionsCount - answeredCountTotal);

  // Compute Final Result
  const calculateResult = useCallback((): FinalExamResult => {
    let grandTotalRaw = 0;
    const subjectResults: SubjectResult[] = [];

    selectedSubjects.forEach((subId) => {
      const subQs = questions[subId] || [];
      const subAns = answers[subId] || {};
      let correct = 0;
      let wrong = 0;
      let attempted = 0;

      subQs.forEach((q, idx) => {
        const candidateChoice = subAns[idx];
        if (candidateChoice) {
          attempted++;
          if (candidateChoice === q.correctOption) {
            correct++;
          } else {
            wrong++;
          }
        }
      });

      const totalQs = subQs.length || 1;
      const scaledScore = Math.round((correct / totalQs) * 100);
      grandTotalRaw += scaledScore;

      subjectResults.push({
        subjectId: subId,
        subjectName: ALL_SUBJECTS[subId]?.name || subId,
        totalQuestions: totalQs,
        attemptedQuestions: attempted,
        correctCount: correct,
        wrongCount: wrong,
        unansweredCount: totalQs - attempted,
        scaledScore,
        accuracyPercent: attempted > 0 ? Math.round((correct / attempted) * 100) : 0
      });
    });

    let performanceGrade: 'EXCELLENT' | 'VERY GOOD' | 'GOOD' | 'AVERAGE' | 'NEEDS IMPROVEMENT' = 'AVERAGE';
    if (grandTotalRaw >= 300) performanceGrade = 'EXCELLENT';
    else if (grandTotalRaw >= 250) performanceGrade = 'VERY GOOD';
    else if (grandTotalRaw >= 200) performanceGrade = 'GOOD';
    else if (grandTotalRaw >= 160) performanceGrade = 'AVERAGE';
    else performanceGrade = 'NEEDS IMPROVEMENT';

    return {
      candidate,
      totalScore: grandTotalRaw,
      percentage: Math.round((grandTotalRaw / 400) * 100),
      subjectResults,
      timeSpentSeconds: totalDuration - timeRemaining,
      examDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      performanceGrade
    };
  }, [selectedSubjects, questions, answers, candidate, totalDuration, timeRemaining]);

  // Wall-clock refs for jitter-free countdown
  const endTimeRef = useRef<number>(0);
  const submitRef = useRef<() => void>(() => {});

  // Submit action
  const confirmSubmitExam = useCallback(() => {
    setIsTimerRunning(false);
    setIsSubmitModalOpen(false);
    const result = calculateResult();
    setFinalResult(result);
    setStatus('submitted');

    // Save exam record to local persistence
    try {
      saveExamRecord(result, mode, targetYear);
    } catch (e) {
      console.error('Error saving exam record:', e);
    }

    // Trigger celebratory confetti if score is above cutoff
    if (result.totalScore >= 200) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [calculateResult, mode, targetYear]);

  // Keep submit ref synced
  useEffect(() => {
    submitRef.current = confirmSubmitExam;
  }, [confirmSubmitExam]);

  // Rock-solid Wall-Clock Timer countdown hook
  useEffect(() => {
    if (!isTimerRunning || status !== 'in-progress') return;

    const checkInterval = setInterval(() => {
      const now = Date.now();
      const remainingSec = Math.max(0, Math.round((endTimeRef.current - now) / 1000));
      setTimeRemaining(remainingSec);

      if (remainingSec <= 0) {
        clearInterval(checkInterval);
        submitRef.current();
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, [isTimerRunning, status]);

  // Start exam
  const startExam = async (params: StartExamParams) => {
    setStatus('loading');
    setCandidate(params.candidate);
    setSelectedSubjects(params.subjects);
    setMode(params.mode);
    setTargetYear(params.targetYear || 'random');

    const durationSec = (params.durationMinutes || 120) * 60;
    setTimeRemaining(durationSec);
    setTotalDuration(durationSec);

    // Initialize clean answers and flagged
    const emptyAnswers = {} as Record<SubjectId, Record<number, 'A' | 'B' | 'C' | 'D' | null>>;
    const emptyFlagged = {} as Record<SubjectId, Record<number, boolean>>;
    params.subjects.forEach((s) => {
      emptyAnswers[s] = {};
      emptyFlagged[s] = {};
    });
    setAnswers(emptyAnswers);
    setFlagged(emptyFlagged);

    // Load from Question Bank
    const generated = await generateExamPaper({
      subjects: params.subjects,
      mode: params.mode,
      targetYear: params.targetYear,
      shuffleOptions: params.mode === 'simulation'
    });

    setQuestions(generated);
    setCurrentSubjectIndex(0);
    setCurrentQuestionIndex(0);
    endTimeRef.current = Date.now() + durationSec * 1000;
    setStatus('in-progress');
    setIsTimerRunning(true);
  };

  // Answering controls (8-Key and Mouse)
  const selectOption = useCallback(
    (key: 'A' | 'B' | 'C' | 'D') => {
      playClickSound();
      setAnswers((prev) => ({
        ...prev,
        [currentSubjectId]: {
          ...prev[currentSubjectId],
          [currentQuestionIndex]: key
        }
      }));
    },
    [currentSubjectId, currentQuestionIndex, playClickSound]
  );

  const clearOption = useCallback(() => {
    playClickSound();
    setAnswers((prev) => ({
      ...prev,
      [currentSubjectId]: {
        ...prev[currentSubjectId],
        [currentQuestionIndex]: null
      }
    }));
  }, [currentSubjectId, currentQuestionIndex, playClickSound]);

  const nextQuestion = useCallback(() => {
    playClickSound();
    const maxQs = questions[currentSubjectId]?.length || 40;
    if (currentQuestionIndex < maxQs - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentSubjectIndex < selectedSubjects.length - 1) {
      // Auto move to next subject if at end of current subject
      setCurrentSubjectIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
    }
  }, [currentSubjectId, currentQuestionIndex, currentSubjectIndex, questions, selectedSubjects.length, playClickSound]);

  const prevQuestion = useCallback(() => {
    playClickSound();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (currentSubjectIndex > 0) {
      // Move to previous subject
      const prevSubIdx = currentSubjectIndex - 1;
      const prevSubId = selectedSubjects[prevSubIdx];
      const prevSubQsCount = questions[prevSubId]?.length || 40;
      setCurrentSubjectIndex(prevSubIdx);
      setCurrentQuestionIndex(prevSubQsCount - 1);
    }
  }, [currentQuestionIndex, currentSubjectIndex, selectedSubjects, questions, playClickSound]);

  const jumpToQuestion = useCallback((qIndex: number, subjectIdx?: number) => {
    if (subjectIdx !== undefined) {
      setCurrentSubjectIndex(subjectIdx);
    }
    setCurrentQuestionIndex(qIndex);
    setIsPaletteOpen(false); // Close mobile drawer if open
  }, []);

  const switchSubject = useCallback((subjectIndex: number) => {
    setCurrentSubjectIndex(subjectIndex);
    setCurrentQuestionIndex(0);
  }, []);

  const toggleFlag = useCallback(() => {
    setFlagged((prev) => ({
      ...prev,
      [currentSubjectId]: {
        ...prev[currentSubjectId],
        [currentQuestionIndex]: !prev[currentSubjectId]?.[currentQuestionIndex]
      }
    }));
  }, [currentSubjectId, currentQuestionIndex]);

  const openSubmitModal = useCallback(() => setIsSubmitModalOpen(true), []);
  const closeSubmitModal = useCallback(() => setIsSubmitModalOpen(false), []);
  const toggleCalculator = useCallback(() => setIsCalculatorOpen((p) => !p), []);
  const togglePalette = useCallback(() => setIsPaletteOpen((p) => !p), []);
  const toggleKeyGuide = useCallback(() => setIsKeyGuideOpen((p) => !p), []);
  const toggleVirtualKeypad = useCallback(() => setIsVirtualKeypadOpen((p) => !p), []);
  const enterReviewMode = useCallback(() => setStatus('review'), []);
  const resetExam = useCallback(() => {
    setStatus('registration');
    setFinalResult(null);
    setIsSubmitModalOpen(false);
    setIsCalculatorOpen(false);
  }, []);

  return (
    <ExamContext.Provider
      value={{
        candidate,
        mode,
        targetYear,
        selectedSubjects,
        currentSubjectIndex,
        currentSubjectId,
        currentQuestionIndex,
        questions,
        currentQuestion,
        answers,
        flagged,
        timeRemaining,
        totalDuration,
        isTimerRunning,
        status,
        isCalculatorOpen,
        isPaletteOpen,
        isSubmitModalOpen,
        isKeyGuideOpen,
        isVirtualKeypadOpen,
        finalResult,
        answeredCountTotal,
        unansweredCountTotal,
        totalQuestionsCount,
        startExam,
        selectOption,
        clearOption,
        nextQuestion,
        prevQuestion,
        jumpToQuestion,
        switchSubject,
        toggleFlag,
        openSubmitModal,
        closeSubmitModal,
        confirmSubmitExam,
        toggleCalculator,
        togglePalette,
        toggleKeyGuide,
        toggleVirtualKeypad,
        enterReviewMode,
        resetExam
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
}
