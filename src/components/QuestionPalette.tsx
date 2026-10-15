import React from 'react';
import { X } from 'lucide-react';
import { useExam } from '../context/ExamContext';
import { ALL_SUBJECTS } from '../data/subjects';

export const QuestionPalette: React.FC = () => {
  const {
    currentSubjectId,
    currentQuestionIndex,
    questions,
    answers,
    flagged,
    jumpToQuestion,
    isPaletteOpen,
    togglePalette
  } = useExam();

  const subQuestions = questions[currentSubjectId] || [];
  const subAnswers = answers[currentSubjectId] || {};
  const subFlagged = flagged[currentSubjectId] || {};

  let answeredCount = 0;
  let flaggedCount = 0;

  subQuestions.forEach((_, idx) => {
    if (subAnswers[idx]) answeredCount++;
    if (subFlagged[idx]) flaggedCount++;
  });

  const unansweredCount = subQuestions.length - answeredCount;
  const subjectMeta = ALL_SUBJECTS[currentSubjectId];

  const content = (
    <div className="flex flex-col h-full bg-white border-l border-slate-200 shadow-sm w-full lg:w-80">
      {/* Palette Header */}
      <div className="p-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">
            Question Palette
          </h3>
          <p className="text-[11px] text-slate-500">
            {subjectMeta?.name} ({subQuestions.length} Qs)
          </p>
        </div>

        {/* Mobile close button */}
        <button
          onClick={togglePalette}
          className="lg:hidden p-1 text-slate-500 hover:text-slate-800 rounded cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Grid of question buttons */}
      <div className="flex-1 p-3 overflow-y-auto">
        <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-6 gap-1.5">
          {subQuestions.map((_, idx) => {
            const isCurrent = currentQuestionIndex === idx;
            const isAnswered = !!subAnswers[idx];
            const isItemFlagged = !!subFlagged[idx];

            let buttonClass = 'bg-white text-slate-700 border-slate-300 hover:border-slate-400';
            if (isCurrent) {
              buttonClass = 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-400';
            } else if (isAnswered) {
              buttonClass = 'bg-emerald-600 text-white border-emerald-700 font-semibold';
            }

            return (
              <button
                key={idx}
                onClick={() => jumpToQuestion(idx)}
                className={`relative h-9 rounded text-xs font-mono font-medium border flex items-center justify-center transition-all cursor-pointer ${buttonClass}`}
                title={`Question ${idx + 1}${isAnswered ? ' (Answered: ' + subAnswers[idx] + ')' : ' (Unanswered)'}`}
              >
                <span>{idx + 1}</span>

                {/* Flag marker */}
                {isItemFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Status Legend */}
      <div className="p-3 border-t border-slate-200 bg-slate-50 text-[11px] space-y-2">
        <div className="font-semibold text-slate-700 uppercase tracking-wider text-[10px]">
          Summary Status
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white text-[9px] flex items-center justify-center font-bold">✓</span>
            <span className="text-slate-600">Answered: <strong>{answeredCount}</strong></span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-white border border-slate-400"></span>
            <span className="text-slate-600">Unanswered: <strong>{unansweredCount}</strong></span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-blue-600 text-white text-[9px] flex items-center justify-center font-bold">•</span>
            <span className="text-slate-600">Current</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-amber-500"></span>
            <span className="text-slate-600">Flagged: <strong>{flaggedCount}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop static sidebar */}
      <aside className="hidden lg:block h-full">
        {content}
      </aside>

      {/* Mobile drawer overlay */}
      {isPaletteOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="w-4/5 max-w-sm h-full bg-white shadow-2xl animate-slideLeft">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
