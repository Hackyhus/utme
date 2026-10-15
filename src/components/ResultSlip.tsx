import { Award, Printer, RotateCcw, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { useExam } from '../context/ExamContext';

import type { FinalExamResult } from '../types/exam';

interface ResultSlipProps {
  initialResult?: FinalExamResult | null;
  onOpenRecords?: () => void;
}

export const ResultSlip: React.FC<ResultSlipProps> = ({ initialResult, onOpenRecords }) => {
  const { finalResult: contextResult, enterReviewMode, resetExam } = useExam();

  const activeResult = initialResult || contextResult;
  if (!activeResult) return null;

  const { candidate, totalScore, subjectResults, timeSpentSeconds, examDate, performanceGrade } = activeResult;

  const minutesSpent = Math.floor(timeSpentSeconds / 60);
  const secondsSpent = timeSpentSeconds % 60;

  const handlePrint = () => {
    window.print();
  };

  const gradeColors = {
    EXCELLENT: 'bg-emerald-100 text-emerald-800 border-emerald-400',
    'VERY GOOD': 'bg-blue-100 text-blue-800 border-blue-400',
    GOOD: 'bg-indigo-100 text-indigo-800 border-indigo-400',
    AVERAGE: 'bg-amber-100 text-amber-800 border-amber-400',
    'NEEDS IMPROVEMENT': 'bg-red-100 text-red-800 border-red-400'
  };

  return (
    <div className="min-h-screen bg-slate-200 py-6 px-3 sm:px-6 flex flex-col items-center justify-center animate-fadeIn">
      {/* Top action buttons (hidden when printing) */}
      <div className="w-full max-w-3xl mb-4 flex flex-wrap items-center justify-between gap-2 print:hidden">
        <button
          onClick={resetExam}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm cursor-pointer shadow-xs transition"
        >
          <RotateCcw className="w-4 h-4 text-slate-500" />
          <span>New Examination</span>
        </button>

        <div className="flex items-center space-x-2">
          {onOpenRecords && (
            <button
              onClick={onOpenRecords}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Past Records</span>
            </button>
          )}

          <button
            onClick={enterReviewMode}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-sm transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>Review Solutions</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-sm transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print Result Slip</span>
          </button>
        </div>
      </div>

      {/* Official JAMB Result Slip Paper */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-300 overflow-hidden print:shadow-none print:border-none print:max-w-full">
        {/* Slip Green Header */}
        <div className="bg-emerald-950 text-white p-6 border-b-4 border-emerald-600 text-center relative">
          <div className="flex flex-col items-center">
            {/* JAMB Coat of Arms Emblem */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-md mb-2">
              <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-800 fill-current">
                <circle cx="50" cy="50" r="45" fill="#047857" />
                <circle cx="50" cy="50" r="38" fill="#ffffff" />
                <path d="M50 18 L60 38 L82 42 L66 58 L70 80 L50 70 L30 80 L34 58 L18 42 L40 38 Z" fill="#047857" />
                <circle cx="50" cy="50" r="10" fill="#f59e0b" />
              </svg>
            </div>
            <h1 className="text-sm sm:text-lg font-black tracking-wider text-amber-300 uppercase">
              Joint Admissions and Matriculation Board
            </h1>
            <h2 className="text-xs sm:text-sm font-bold text-emerald-100 uppercase tracking-wide mt-0.5">
              Unified Tertiary Matriculation Examination (UTME)
            </h2>
            <div className="mt-1 text-[11px] bg-emerald-900/80 text-amber-200 px-3 py-0.5 rounded-full font-mono">
              OFFICIAL e-TESTING CANDIDATE RESULT SLIP
            </div>
          </div>
        </div>

        {/* Candidate particulars */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
            <div className="w-24 h-28 rounded-lg border-2 border-slate-300 bg-slate-800 overflow-hidden shadow-xs shrink-0">
              <img
                src={candidate.passportUrl}
                alt="Candidate Passport"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs w-full">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Candidate Name</span>
                <span className="font-black text-sm text-slate-800 uppercase">{candidate.name}</span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Registration Number</span>
                <span className="font-mono font-bold text-sm text-slate-800">{candidate.regNumber}</span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Seat / Center</span>
                <span className="font-bold text-slate-700">{candidate.seatNumber} ({candidate.centerNumber})</span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Date of Examination</span>
                <span className="font-bold text-slate-700">{examDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aggregate Score Card */}
        <div className="p-6 bg-gradient-to-br from-emerald-50 to-white text-center border-b border-slate-200">
          <div className="text-xs uppercase font-bold tracking-widest text-emerald-900 mb-1">
            UTME Aggregate Score
          </div>
          <div className="inline-flex items-baseline space-x-2">
            <span className="text-5xl sm:text-6xl font-black font-mono text-emerald-900 tracking-tight">
              {totalScore}
            </span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-slate-400">
              / 400
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${gradeColors[performanceGrade]}`}>
              {performanceGrade}
            </span>
            <span className="text-xs text-slate-500 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Time Used: {minutesSpent}m {secondsSpent}s</span>
            </span>
          </div>
        </div>

        {/* Subject-by-Subject Score Breakdown Table */}
        <div className="p-5 sm:p-6">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-3 flex items-center space-x-2">
            <Award className="w-4 h-4 text-emerald-700" />
            <span>Subject Performance Breakdown</span>
          </h3>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4">Subject</th>
                  <th className="py-2.5 px-4 text-center">Questions</th>
                  <th className="py-2.5 px-4 text-center">Attempted</th>
                  <th className="py-2.5 px-4 text-center">Correct</th>
                  <th className="py-2.5 px-4 text-right">Scaled Score (/100)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {subjectResults.map((sub) => (
                  <tr key={sub.subjectId} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-800">{sub.subjectName}</td>
                    <td className="py-3 px-4 text-center text-slate-600 font-mono">{sub.totalQuestions}</td>
                    <td className="py-3 px-4 text-center text-slate-600 font-mono">{sub.attemptedQuestions}</td>
                    <td className="py-3 px-4 text-center text-emerald-700 font-mono font-bold">{sub.correctCount}</td>
                    <td className="py-3 px-4 text-right font-mono font-black text-slate-900 text-sm sm:text-base">
                      {sub.scaledScore}
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-emerald-50/80 font-black text-emerald-950 border-t-2 border-emerald-300">
                  <td className="py-3 px-4 uppercase tracking-wider">Total Aggregate</td>
                  <td className="py-3 px-4 text-center font-mono">180</td>
                  <td className="py-3 px-4 text-center font-mono">
                    {subjectResults.reduce((acc, s) => acc + s.attemptedQuestions, 0)}
                  </td>
                  <td className="py-3 px-4 text-center font-mono text-emerald-800">
                    {subjectResults.reduce((acc, s) => acc + s.correctCount, 0)}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-lg text-emerald-950">
                    {totalScore}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security watermark footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 text-center text-[10px] text-slate-500 font-mono">
          JAMB CBT SIMULATOR VERIFICATION HASH: {candidate.regNumber}-{Date.now().toString(36).toUpperCase()} &bull; 100% REPLICA
        </div>
      </div>
    </div>
  );
};
