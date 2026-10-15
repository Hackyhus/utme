import React from 'react';
import { X } from 'lucide-react';
import { useExam } from '../context/ExamContext';

export const VirtualEightKeyPad: React.FC = () => {
  const {
    isVirtualKeypadOpen,
    toggleVirtualKeypad,
    selectOption,
    clearOption,
    nextQuestion,
    prevQuestion,
    openSubmitModal
  } = useExam();

  if (!isVirtualKeypadOpen) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-3 sm:px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-emerald-500 flex items-center space-x-2 sm:space-x-3 max-w-[95vw] overflow-x-auto animate-slideUp">
      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 hidden sm:block border-r border-slate-700 pr-2">
        8-Key Pad
      </div>

      {/* Options Keys A, B, C, D */}
      <div className="flex items-center space-x-1 sm:space-x-1.5">
        {(['A', 'B', 'C', 'D'] as const).map((key) => (
          <button
            key={key}
            onClick={() => selectOption(key)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 active:bg-emerald-700 text-white font-mono font-black text-sm sm:text-base border border-slate-700 active:scale-95 transition cursor-pointer flex items-center justify-center shadow-xs"
          >
            {key}
          </button>
        ))}
      </div>

      <div className="h-6 w-px bg-slate-700" />

      {/* Navigation Keys P, R, N, S */}
      <div className="flex items-center space-x-1 sm:space-x-1.5">
        <button
          onClick={prevQuestion}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-blue-600 active:bg-blue-700 text-white font-mono font-bold text-xs sm:text-sm border border-slate-700 active:scale-95 transition cursor-pointer flex flex-col items-center justify-center shadow-xs"
          title="Previous (P)"
        >
          <span>P</span>
          <span className="text-[8px] text-slate-400">Prev</span>
        </button>

        <button
          onClick={clearOption}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-amber-600 active:bg-amber-700 text-white font-mono font-bold text-xs sm:text-sm border border-slate-700 active:scale-95 transition cursor-pointer flex flex-col items-center justify-center shadow-xs"
          title="Reverse / Clear (R)"
        >
          <span>R</span>
          <span className="text-[8px] text-slate-400">Clear</span>
        </button>

        <button
          onClick={nextQuestion}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-mono font-bold text-xs sm:text-sm border border-emerald-600 active:scale-95 transition cursor-pointer flex flex-col items-center justify-center shadow-xs"
          title="Next (N)"
        >
          <span>N</span>
          <span className="text-[8px] text-emerald-200">Next</span>
        </button>

        <button
          onClick={openSubmitModal}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-mono font-bold text-xs sm:text-sm border border-red-600 active:scale-95 transition cursor-pointer flex flex-col items-center justify-center shadow-xs"
          title="Submit (S)"
        >
          <span>S</span>
          <span className="text-[8px] text-red-200">End</span>
        </button>
      </div>

      <button
        onClick={toggleVirtualKeypad}
        className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
        title="Hide Virtual 8-Key Pad"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
