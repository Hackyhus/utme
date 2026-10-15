import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { useExam } from '../context/ExamContext';
import { ALL_SUBJECTS } from '../data/subjects';

export const ActionBar: React.FC = () => {
  const {
    prevQuestion,
    nextQuestion,
    clearOption,
    openSubmitModal,
    currentQuestionIndex,
    currentSubjectIndex,
    currentSubjectId,
    selectedSubjects,
    questions,
    answers
  } = useExam();

  const subQuestions = questions[currentSubjectId] || [];
  const currentAnswer = answers[currentSubjectId]?.[currentQuestionIndex];

  // Subject and question boundary calculations
  const isFirstQuestionInSubject = currentQuestionIndex === 0;
  const isFirstSubject = currentSubjectIndex === 0;
  const isAbsoluteFirst = isFirstSubject && isFirstQuestionInSubject;

  const isLastQuestionInSubject = currentQuestionIndex === subQuestions.length - 1;
  const isLastSubject = currentSubjectIndex === selectedSubjects.length - 1;
  const isAbsoluteLast = isLastSubject && isLastQuestionInSubject;

  const nextSubjectId = !isLastSubject ? selectedSubjects[currentSubjectIndex + 1] : null;
  const nextSubjectMeta = nextSubjectId ? ALL_SUBJECTS[nextSubjectId] : null;

  const prevSubjectId = !isFirstSubject ? selectedSubjects[currentSubjectIndex - 1] : null;
  const prevSubjectMeta = prevSubjectId ? ALL_SUBJECTS[prevSubjectId] : null;

  return (
    <footer className="bg-white border-t border-slate-300 px-2.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-1.5 sm:gap-3 shadow-lg shrink-0 z-20 pb-safe">
      {/* Previous Button */}
      <button
        onClick={prevQuestion}
        disabled={isAbsoluteFirst}
        className={`flex items-center justify-center space-x-1 sm:space-x-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border font-bold text-xs sm:text-sm transition cursor-pointer active:scale-95 shadow-2xs min-h-[44px] shrink-0 ${
          isAbsoluteFirst
            ? 'opacity-35 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400'
            : isFirstQuestionInSubject
            ? 'bg-blue-50 border-blue-300 text-blue-900 hover:bg-blue-100'
            : 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100'
        }`}
        title={isFirstQuestionInSubject && prevSubjectMeta ? `Previous Subject: ${prevSubjectMeta.name}` : 'Previous Question (P)'}
      >
        <ChevronLeft className="w-4 h-4 sm:w-4 sm:h-4 shrink-0" />
        <span className="hidden sm:inline">
          {isFirstQuestionInSubject && prevSubjectMeta ? `Prev (${prevSubjectMeta.shortName || prevSubjectMeta.name})` : 'Previous'}
        </span>
        <span className="sm:hidden">
          {isFirstQuestionInSubject ? 'Prev Sub' : 'Prev'}
        </span>
        <kbd className="hidden md:inline-block px-1.5 py-0.2 text-[10px] bg-slate-200 text-slate-700 rounded font-mono font-bold">
          P
        </kbd>
      </button>

      {/* Clear Button */}
      <button
        onClick={clearOption}
        disabled={!currentAnswer}
        className="flex items-center justify-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-rose-50 hover:border-rose-300 text-slate-700 hover:text-rose-700 disabled:opacity-35 disabled:cursor-not-allowed font-semibold text-xs sm:text-sm transition cursor-pointer shadow-2xs active:scale-95 min-h-[44px] shrink-0"
        title="Clear selection for this question (R)"
      >
        <RotateCcw className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        <span>Clear</span>
        <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[10px] bg-slate-200 text-slate-700 rounded font-mono font-bold">
          R
        </kbd>
      </button>

      {/* Center credit: Visible on larger screens */}
      <div className="hidden lg:flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
        <span>Made with ❤️ by</span>
        <span className="font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          hxncodes
        </span>
      </div>

      {/* Right Action Cluster: Next Question + Submit Exam */}
      <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
        {/* Next Question / Next Subject Button */}
        <button
          onClick={nextQuestion}
          className={`flex items-center justify-center space-x-1 sm:space-x-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shadow-xs active:scale-95 min-h-[44px] border ${
            isLastQuestionInSubject && !isAbsoluteLast
              ? 'bg-amber-500 hover:bg-amber-600 border-amber-600 text-slate-950 animate-pulse font-black'
              : 'bg-emerald-600 hover:bg-emerald-700 border-emerald-700 text-white'
          }`}
          title={isLastQuestionInSubject && nextSubjectMeta ? `Proceed to ${nextSubjectMeta.name} (N)` : 'Next Question (N)'}
        >
          <span>
            {isLastQuestionInSubject && nextSubjectMeta ? (
              <>
                <span className="hidden sm:inline">Next: {nextSubjectMeta.shortName || nextSubjectMeta.name}</span>
                <span className="sm:hidden">Next Sub</span>
              </>
            ) : (
              'Next'
            )}
          </span>
          <kbd className="hidden md:inline-block px-1.5 py-0.2 text-[10px] bg-emerald-800 text-emerald-100 rounded font-mono font-bold">
            N
          </kbd>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </button>

        {/* Submit Exam Button */}
        <button
          onClick={openSubmitModal}
          className="flex items-center justify-center space-x-1 sm:space-x-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs sm:text-sm transition cursor-pointer shadow-xs border border-rose-800 active:scale-95 min-h-[44px]"
          title="Submit entire examination (S)"
        >
          <CheckCircle2 className="w-4 h-4 text-rose-200 shrink-0" />
          <span className="hidden sm:inline">Submit Exam</span>
          <span className="sm:hidden">Submit</span>
          <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[10px] bg-rose-900 text-rose-200 rounded font-mono font-bold">
            S
          </kbd>
        </button>
      </div>
    </footer>
  );
};
