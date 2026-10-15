import type { SavedExamRecord, FinalExamResult, ExamMode } from '../types/exam';

const STORAGE_KEY = 'utme_candidate_records_v1';

export function getExamRecords(): SavedExamRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to load exam records:', err);
    return [];
  }
}

export function saveExamRecord(
  result: FinalExamResult,
  mode: ExamMode,
  targetYear?: number | 'random'
): SavedExamRecord {
  const record: SavedExamRecord = {
    ...result,
    id: `utme_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    mode,
    targetYear
  };

  try {
    const current = getExamRecords();
    const updated = [record, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save exam record:', err);
  }

  return record;
}

export function deleteExamRecord(id: string): void {
  try {
    const current = getExamRecords();
    const updated = current.filter((r) => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to delete exam record:', err);
  }
}

export function clearAllRecords(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear exam records:', err);
  }
}

export interface RecordsStatistics {
  totalExams: number;
  highestScore: number;
  averageScore: number;
  recentScore: number | null;
  subjectAverages: Record<string, { averageScore: number; totalAttempts: number }>;
}

export function getRecordsStatistics(): RecordsStatistics {
  const records = getExamRecords();
  if (records.length === 0) {
    return {
      totalExams: 0,
      highestScore: 0,
      averageScore: 0,
      recentScore: null,
      subjectAverages: {}
    };
  }

  const scores = records.map((r) => r.totalScore);
  const highestScore = Math.max(...scores);
  const averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const recentScore = records[0].totalScore;

  const subjectAverages: Record<string, { sum: number; count: number }> = {};
  records.forEach((r) => {
    r.subjectResults.forEach((sub) => {
      if (!subjectAverages[sub.subjectName]) {
        subjectAverages[sub.subjectName] = { sum: 0, count: 0 };
      }
      subjectAverages[sub.subjectName].sum += sub.scaledScore;
      subjectAverages[sub.subjectName].count += 1;
    });
  });

  const formattedSubjectAverages: Record<string, { averageScore: number; totalAttempts: number }> = {};
  Object.entries(subjectAverages).forEach(([name, data]) => {
    formattedSubjectAverages[name] = {
      averageScore: Math.round(data.sum / data.count),
      totalAttempts: data.count
    };
  });

  return {
    totalExams: records.length,
    highestScore,
    averageScore,
    recentScore,
    subjectAverages: formattedSubjectAverages
  };
}
