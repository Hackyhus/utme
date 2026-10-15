import React, { useState, useEffect } from 'react';
import {
  Award,
  TrendingUp,
  Clock,
  Trash2,
  Eye,
  ArrowLeft,
  BookOpen,
  Calendar,
  AlertCircle
} from 'lucide-react';
import type { SavedExamRecord } from '../types/exam';
import {
  getExamRecords,
  deleteExamRecord,
  clearAllRecords,
  getRecordsStatistics
} from '../services/recordsStorage';
import { ResultSlip } from './ResultSlip';

interface RecordsViewProps {
  onBackToExam: () => void;
}

export const RecordsView: React.FC<RecordsViewProps> = ({ onBackToExam }) => {
  const [records, setRecords] = useState<SavedExamRecord[]>([]);
  const [stats, setStats] = useState(getRecordsStatistics());
  const [selectedRecordForSlip, setSelectedRecordForSlip] = useState<SavedExamRecord | null>(null);

  const refreshRecords = () => {
    const list = getExamRecords();
    setRecords(list);
    setStats(getRecordsStatistics());
  };

  useEffect(() => {
    refreshRecords();
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this exam record?')) {
      deleteExamRecord(id);
      refreshRecords();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL past exam records? This cannot be undone.')) {
      clearAllRecords();
      refreshRecords();
    }
  };

  if (selectedRecordForSlip) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col">
        <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSelectedRecordForSlip(null)}
            className="flex items-center space-x-2 text-sm text-emerald-400 hover:text-white font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Records History</span>
          </button>
          <span className="text-xs text-slate-400">Viewing Archived Exam Record</span>
        </div>
        <ResultSlip initialResult={selectedRecordForSlip} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800 font-sans">
      {/* Top Header */}
      <header className="bg-emerald-950 text-white border-b-4 border-emerald-600 px-4 sm:px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBackToExam}
              className="p-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white cursor-pointer transition border border-emerald-700"
              title="Return to CBT Portal"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-amber-300 tracking-wide uppercase">
                Candidate Exam Records & History
              </h1>
              <p className="text-xs text-emerald-200">
                Performance tracking & UTME mock progression for <strong className="text-white">Jidderh</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {records.length > 0 && (
              <button
                onClick={handleClearAll}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-800 transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear History</span>
              </button>
            )}
            <button
              onClick={onBackToExam}
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition cursor-pointer shadow-md"
            >
              Start New CBT Mock
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3">
            <div className="p-3 bg-emerald-100 rounded-lg text-emerald-800">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Highest Score</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-950 font-mono">
                {stats.highestScore} <span className="text-xs font-normal text-slate-400">/ 400</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-800">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Average Score</div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                {stats.averageScore} <span className="text-xs font-normal text-slate-400">/ 400</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3">
            <div className="p-3 bg-amber-100 rounded-lg text-amber-800">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Total Tests Taken</div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                {stats.totalExams}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-800">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Most Recent Score</div>
              <div className="text-xl sm:text-2xl font-black text-purple-950 font-mono">
                {stats.recentScore !== null ? stats.recentScore : '--'}{' '}
                <span className="text-xs font-normal text-slate-400">/ 400</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Mastery Breakdown */}
        {Object.keys(stats.subjectAverages).length > 0 && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
              Subject Mastery Average
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(stats.subjectAverages).map(([subjectName, data]) => (
                <div key={subjectName} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs font-semibold text-slate-700 truncate">{subjectName}</div>
                  <div className="text-lg font-black text-emerald-800 font-mono mt-0.5">
                    {data.averageScore}%
                  </div>
                  <div className="text-[10px] text-slate-400">{data.totalAttempts} mock attempts</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="font-black text-slate-900 text-sm sm:text-base uppercase tracking-wide">
              Completed Mock Examinations ({records.length})
            </h2>
          </div>

          {records.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">No Exam Records Yet</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                Once you complete your first UTME CBT simulation test, your score breakdown, time spent, and result slip will be archived here.
              </p>
              <button
                onClick={onBackToExam}
                className="mt-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition cursor-pointer shadow-sm"
              >
                Launch Your First Exam
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Candidate</th>
                    <th className="px-4 py-3">Subjects</th>
                    <th className="px-4 py-3">Mode & Paper</th>
                    <th className="px-4 py-3 text-center">Score (/400)</th>
                    <th className="px-4 py-3 text-center">Percentage</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {records.map((rec) => {
                    const score = rec.totalScore;
                    let badgeClass = 'bg-slate-100 text-slate-800 border-slate-300';
                    if (score >= 280) badgeClass = 'bg-emerald-100 text-emerald-900 border-emerald-400';
                    else if (score >= 230) badgeClass = 'bg-blue-100 text-blue-900 border-blue-400';
                    else if (score >= 180) badgeClass = 'bg-amber-100 text-amber-900 border-amber-400';
                    else badgeClass = 'bg-rose-100 text-rose-900 border-rose-400';

                    return (
                      <tr key={rec.id} className="hover:bg-slate-50 transition">
                        <td className="px-4 py-3.5 whitespace-nowrap text-slate-600">
                          <div className="flex items-center space-x-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{rec.examDate}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                          {rec.candidate.name}
                        </td>
                        <td className="px-4 py-3.5 text-slate-700">
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {rec.subjectResults.map((s) => (
                              <span
                                key={s.subjectId}
                                className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] text-slate-700 border border-slate-200 font-mono"
                              >
                                {s.subjectName.split(' ')[0]}: {s.scaledScore}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span className="text-xs font-semibold capitalize text-slate-700">
                            {rec.mode === 'simulation' ? 'Timed Exam' : 'Practice'}
                          </span>
                          <span className="ml-1 text-[11px] text-slate-400">
                            ({rec.targetYear && rec.targetYear !== 'random' ? `${rec.targetYear}` : 'Random Pool'})
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-center whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full font-mono font-black text-xs border ${badgeClass}`}>
                            {rec.totalScore}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-center font-bold text-slate-800 whitespace-nowrap">
                          {rec.percentage}%
                        </td>
                        <td className="px-4 py-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => setSelectedRecordForSlip(rec)}
                              className="flex items-center space-x-1 px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300 transition cursor-pointer"
                              title="View Result Slip"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Slip</span>
                            </button>
                            <button
                              onClick={() => handleDelete(rec.id)}
                              className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
