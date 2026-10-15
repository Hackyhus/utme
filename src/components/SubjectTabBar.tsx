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
    <nav className="bg-slate-850 border-b border-slate-700/80 px-2 sm:px-4 pt-1 flex items-center overflow-x-auto scrollbar-none shrink-0 bg-slate-900">
      <div className="flex space-x-1 sm:space-x-1.5 min-w-max pb-0.5">
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
              className={`group relative flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 rounded-t-md font-semibold text-xs sm:text-xs transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-100 text-emerald-950 shadow-xs border-t-2 border-emerald-600'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border-t-2 border-transparent'
              }`}
            >
              <span>{subMeta?.name || subId}</span>
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
