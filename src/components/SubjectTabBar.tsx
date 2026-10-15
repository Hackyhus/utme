import React from 'react';
import { useExam } from '../context/ExamContext';
import { ALL_SUBJECTS } from '../data/subjects';

export const SubjectTabBar: React.FC = () => {
  const {
    selectedSubjects,
    currentSubjectIndex,
    switchSubject,
    questions,
    answers
  } = useExam();

  return (
    <nav className="bg-slate-900 border-b border-slate-700/80 px-2 sm:px-4 pt-1 flex items-center overflow-x-auto scrollbar-none shrink-0 z-20">
      <div className="flex space-x-1 sm:space-x-1.5 min-w-max pb-1">
        {selectedSubjects.map((subId, idx) => {
          const isActive = currentSubjectIndex === idx;
          const subMeta = ALL_SUBJECTS[subId];
          const subQuestions = questions[subId] || [];
          const subAnswers = answers[subId] || {};

          let answeredCount = 0;
          subQuestions.forEach((_, qIdx) => {
            if (subAnswers[qIdx]) answeredCount++;
          });

          const totalCount = subQuestions.length;

          return (
            <button
              key={subId}
              onClick={() => switchSubject(idx)}
              className={`group relative flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-t-lg font-bold text-xs transition-all cursor-pointer min-h-[40px] ${
                isActive
                  ? 'bg-slate-100 text-emerald-950 shadow-xs border-t-2 border-emerald-600 font-black'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-t-2 border-transparent'
              }`}
            >
              <span>{subMeta?.shortName || subMeta?.name || subId}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-medium ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-900 text-slate-400 group-hover:bg-slate-800'
                }`}
              >
                {answeredCount}/{totalCount}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
