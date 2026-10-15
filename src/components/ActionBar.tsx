import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { useExam } from '../context/ExamContext';

export const ActionBar: React.FC = () => {
  const {
    prevQuestion,
    nextQuestion,
    clearOption,
    openSubmitModal,
    currentQuestionIndex,
    currentSubjectId,
    questions,
    answers
  } = useExam();

  const subQuestions = questions[currentSubjectId] || [];
  const currentAnswer = answers[currentSubjectId]?.[currentQuestionIndex];
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === subQuestions.length - 1;

  return (
    <footer className="bg-white border-t border-slate-300 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 shadow-md shrink-0">
      {/* Navigation buttons: Previous, Clear, Next */}
      <div className="flex items-center space-x-1.5 sm:space-x-2.5">
        <button
          onClick={prevQuestion}
          disabled={isFirst}
          className="flex items-center space-x-1 sm:space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-slate-200 text-slate-700 rounded font-mono font-bold">
            P
          </kbd>
        </button>

        <button
          onClick={clearOption}
          disabled={!currentAnswer}
          className="flex items-center space-x-1 sm:space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-rose-50 hover:border-rose-300 text-slate-700 hover:text-rose-700 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs active:scale-95"
          title="Clear or reverse current selection (R)"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
          <span>Clear</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-slate-200 text-slate-700 rounded font-mono font-bold">
            R
          </kbd>
        </button>

        <button
          onClick={nextQuestion}
          disabled={isLast}
          className="flex items-center space-x-1 sm:space-x-1.5 px-4 sm:px-5 py-1.5 rounded-lg border border-emerald-600 bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs active:scale-95"
        >
          <span>Next</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-emerald-800 text-emerald-100 rounded font-mono font-bold">
            N
          </kbd>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Center credit */}
      <div className="hidden md:flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
        <span>Made with ❤️ by</span>
        <span className="font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          hxncodes
        </span>
      </div>

      {/* Submit button */}
      <div>
        <button
          onClick={openSubmitModal}
          className="flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs sm:text-sm transition cursor-pointer shadow-sm hover:shadow-md border border-rose-800 active:scale-95"
          title="Submit examination (S)"
        >
          <CheckCircle2 className="w-4 h-4 text-rose-200" />
          <span>Submit Exam</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-rose-900 text-rose-200 rounded font-mono font-bold">
            S
          </kbd>
        </button>
      </div>
    </footer>
  );
};
