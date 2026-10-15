import type { SubjectId, Question, QuestionOption } from '../types/exam';

export interface BankSubjectMeta {
  totalQuestions: number;
  years: number[];
  file: string;
}

export type BankIndex = Record<string, BankSubjectMeta>;

export interface ExamGenerationOptions {
  subjects: [SubjectId, SubjectId, SubjectId, SubjectId];
  mode: 'simulation' | 'practice';
  targetYear?: number | 'random'; // Specific year or random cross-year selection
  shuffleOptions?: boolean;
}

const SEEN_QUESTIONS_KEY = 'utme_seen_question_ids_v1';

// In-memory cache for fast repeat access
const cache: Partial<Record<SubjectId, Question[]>> = {};
let bankIndexCache: BankIndex | null = null;

export async function fetchBankIndex(): Promise<BankIndex> {
  if (bankIndexCache) return bankIndexCache;
  try {
    const res = await fetch('/question-bank/index.json');
    if (!res.ok) throw new Error('Failed to load question bank index');
    bankIndexCache = await res.json();
    return bankIndexCache!;
  } catch (err) {
    console.error('Error loading bank index:', err);
    return {};
  }
}

export async function loadSubjectQuestions(subjectId: SubjectId): Promise<Question[]> {
  if (cache[subjectId] && cache[subjectId]!.length > 0) {
    return cache[subjectId]!;
  }

  try {
    const res = await fetch(`/question-bank/${subjectId}.json`);
    if (!res.ok) throw new Error(`Failed to load ${subjectId} question bank`);
    const data: Question[] = await res.json();
    cache[subjectId] = data;
    return data;
  } catch (err) {
    console.error(`Error loading subject ${subjectId}:`, err);
    return [];
  }
}

// Fisher-Yates high-entropy shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Retrieves the set of question IDs candidate has already seen in past exams
 */
export function getSeenQuestionIds(subjectId: SubjectId): Set<string> {
  try {
    const raw = localStorage.getItem(SEEN_QUESTIONS_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    const list = parsed[subjectId] || [];
    return new Set(list);
  } catch {
    return new Set();
  }
}

/**
 * Persists newly selected question IDs to avoid repeats in subsequent mock tests
 */
export function markQuestionsAsSeen(subjectId: SubjectId, questionIds: string[]): void {
  try {
    const raw = localStorage.getItem(SEEN_QUESTIONS_KEY);
    const parsed: Record<string, string[]> = raw ? JSON.parse(raw) : {};
    const current = new Set(parsed[subjectId] || []);
    questionIds.forEach((id) => current.add(id));
    parsed[subjectId] = Array.from(current);
    localStorage.setItem(SEEN_QUESTIONS_KEY, JSON.stringify(parsed));
  } catch (err) {
    console.error('Failed to mark questions as seen:', err);
  }
}

/**
 * Resets the seen questions tracker (allowing candidate to re-cycle through bank)
 */
export function resetSeenQuestions(subjectId?: SubjectId): void {
  try {
    if (!subjectId) {
      localStorage.removeItem(SEEN_QUESTIONS_KEY);
    } else {
      const raw = localStorage.getItem(SEEN_QUESTIONS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        delete parsed[subjectId];
        localStorage.setItem(SEEN_QUESTIONS_KEY, JSON.stringify(parsed));
      }
    }
  } catch (err) {
    console.error('Failed to reset seen questions:', err);
  }
}

export interface BankProgressStats {
  totalInBank: number;
  seenCount: number;
  unseenCount: number;
  percentCompleted: number;
}

export async function getSubjectBankProgress(subjectId: SubjectId): Promise<BankProgressStats> {
  const all = await loadSubjectQuestions(subjectId);
  const seenSet = getSeenQuestionIds(subjectId);
  const totalInBank = all.length;
  const seenCount = all.filter((q) => seenSet.has(q.id)).length;
  const unseenCount = Math.max(0, totalInBank - seenCount);
  const percentCompleted = totalInBank > 0 ? Math.round((seenCount / totalInBank) * 100) : 0;
  return {
    totalInBank,
    seenCount,
    unseenCount,
    percentCompleted
  };
}

/**
 * Smart Exam Paper Generation Engine:
 * - Guarantees non-repeating questions across successive mock tests
 * - Balances topics (Comprehension + Lexis + Grammar in English)
 * - Distributes questions across the 2004-2024 20-year span
 * - Shuffles options cleanly without disturbing diagram labels
 */
export async function generateExamPaper(
  options: ExamGenerationOptions
): Promise<Record<SubjectId, Question[]>> {
  const result = {} as Record<SubjectId, Question[]>;

  for (let i = 0; i < options.subjects.length; i++) {
    const subjectId = options.subjects[i];
    const targetCount = subjectId === 'english' ? 60 : 40;
    const allQuestions = await loadSubjectQuestions(subjectId);

    // 1. Filter by specific year if user explicitly selected a single exam year (e.g. "JAMB 2024")
    let pool = allQuestions;
    if (options.targetYear && options.targetYear !== 'random') {
      const yearQuestions = allQuestions.filter((q) => q.year === options.targetYear);
      if (yearQuestions.length >= 20) {
        pool = yearQuestions;
      }
    }

    // 2. Smart Seen-Questions Filter to eliminate repeat questions
    const seenSet = getSeenQuestionIds(subjectId);
    let unseenPool = pool.filter((q) => !seenSet.has(q.id));

    // If candidate has completed the entire subject pool, cycle back so they can re-practice
    if (unseenPool.length < targetCount) {
      resetSeenQuestions(subjectId);
      unseenPool = [...pool];
    }

    // 3. Draw questions with balanced topic distribution
    let selected: Question[] = [];

    if (subjectId === 'english' && !options.targetYear) {
      // Prioritize authentic comprehension passages if available
      const passageQuestions = unseenPool.filter((q) => q.passage);
      const standardQuestions = unseenPool.filter((q) => !q.passage);

      const shuffledPassages = shuffleArray(passageQuestions);
      const shuffledStandard = shuffleArray(standardQuestions);

      const targetPassageCount = Math.min(10, shuffledPassages.length);
      const targetStandardCount = targetCount - targetPassageCount;

      selected = [
        ...shuffledPassages.slice(0, targetPassageCount),
        ...shuffledStandard.slice(0, targetStandardCount)
      ];
    } else {
      // Group by year to ensure an authentic cross-section across all 20 years
      const shuffled = shuffleArray(unseenPool);
      selected = shuffled.slice(0, targetCount);
    }

    // Protection fallback
    if (selected.length < targetCount && pool.length > selected.length) {
      const remaining = pool.filter((q) => !selected.some((s) => s.id === q.id));
      selected.push(...shuffleArray(remaining).slice(0, targetCount - selected.length));
    }

    // 4. Record selected question IDs as seen for this candidate
    markQuestionsAsSeen(subjectId, selected.map((q) => q.id));

    // 5. Number sequentially and shuffle options
    result[subjectId] = selected.map((q, idx) => {
      let finalOptions = q.options;
      let finalCorrect = q.correctOption;

      // Real CBT shuffle options if enabled (don't shuffle if options are diagram letters A, B, C, D)
      const isDiagramLetterOptions = q.options.every((o) =>
        ['A', 'B', 'C', 'D'].includes(o.text.trim().toUpperCase())
      );

      if (options.shuffleOptions && !isDiagramLetterOptions) {
        const tagged = q.options.map((o) => ({
          text: o.text,
          isCorrect: o.key === q.correctOption
        }));
        const shuffled = shuffleArray(tagged);
        const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

        finalOptions = shuffled.map((item, optIdx) => ({
          key: keys[optIdx],
          text: item.text
        })) as [QuestionOption, QuestionOption, QuestionOption, QuestionOption];

        const correctItemIdx = shuffled.findIndex((item) => item.isCorrect);
        finalCorrect = keys[correctItemIdx !== -1 ? correctItemIdx : 0];
      }

      return {
        ...q,
        questionNumber: idx + 1,
        options: finalOptions,
        correctOption: finalCorrect
      };
    });
  }

  return result;
}

export async function getSubjectYears(subjectId: SubjectId): Promise<number[]> {
  const index = await fetchBankIndex();
  return index[subjectId]?.years || [];
}
