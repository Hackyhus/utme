import React, { useState } from 'react';
import {
  Calculator,
  Keyboard,
  Maximize2,
  Minimize2,
  Grid,
  Smartphone,
  AlertCircle
} from 'lucide-react';
import { useExam } from '../context/ExamContext';

export const CandidateHeader: React.FC = () => {
  const {
    candidate,
    timeRemaining,
    targetYear,
    toggleCalculator,
    togglePalette,
    toggleKeyGuide,
    toggleVirtualKeypad,
    isVirtualKeypadOpen
  } = useExam();

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Format time remaining
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const isLowTime = timeRemaining <= 300; // < 5 mins
  const isWarningTime = timeRemaining <= 900 && !isLowTime; // < 15 mins

  return (
    <header className="bg-emerald-950 text-white shadow-md border-b border-emerald-600 select-none shrink-0 z-30">
      {/* Mobile Top Row & Desktop Unified Bar */}
      <div className="px-3 sm:px-4 lg:px-6 py-1.5 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
        {/* Left: Crest + Candidate Identity */}
        <div className="flex items-center space-x-2 sm:space-x-2.5 min-w-0">
          {/* JAMB crest emblem */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center p-0.5 shadow shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-800 fill-current">
              <circle cx="50" cy="50" r="45" fill="#047857" />
              <circle cx="50" cy="50" r="38" fill="#ffffff" />
              <path d="M50 18 L60 38 L82 42 L66 58 L70 80 L50 70 L30 80 L34 58 L18 42 L40 38 Z" fill="#047857" />
              <circle cx="50" cy="50" r="10" fill="#f59e0b" />
            </svg>
          </div>

          {/* Candidate passport avatar */}
          <div className="w-7 h-8 sm:w-8 sm:h-9 rounded border border-amber-300/80 overflow-hidden bg-slate-800 shrink-0 shadow-xs">
            <img
              src={candidate.passportUrl}
              alt="Candidate Passport"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Candidate details */}
          <div className="min-w-0 leading-tight">
            <div className="flex items-center space-x-1.5 sm:space-x-2 truncate">
              <span className="font-black text-xs sm:text-sm tracking-wide text-amber-300 uppercase truncate">
                {candidate.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 truncate">
                Seat: <strong className="text-white font-mono">{candidate.seatNumber}</strong>
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-emerald-300 truncate flex items-center space-x-1.5">
              <span className="font-semibold text-emerald-200">UTME CBT</span>
              {targetYear && targetYear !== 'random' && (
                <span className="bg-amber-400 text-slate-950 font-bold px-1 rounded text-[9px]">
                  {targetYear}
                </span>
              )}
              <span className="hidden xl:inline text-amber-300 font-medium">
                &bull; Made with ❤️ by <strong>hxncodes</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Quick Tools & Countdown Timer */}
        <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
          {/* Quick tool buttons (desktop inline, mobile icons) */}
          <div className="flex items-center space-x-1">
            <button
              onClick={toggleCalculator}
              className="flex items-center space-x-1 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border border-emerald-700 active:scale-95 shadow-xs min-h-[36px]"
              title="Open Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="hidden md:inline">Calculator</span>
            </button>

            <button
              onClick={togglePalette}
              className="lg:hidden flex items-center space-x-1 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border border-emerald-700 shadow-xs min-h-[36px]"
              title="Question Palette Matrix"
            >
              <Grid className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="text-[11px]">Grid</span>
            </button>

            <button
              onClick={toggleVirtualKeypad}
              className={`flex items-center space-x-1 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border shadow-xs min-h-[36px] ${
                isVirtualKeypadOpen
                  ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                  : 'bg-emerald-900 hover:bg-emerald-800 text-emerald-100 border-emerald-700'
              }`}
              title="Toggle Virtual 8-Key Pad"
            >
              <Smartphone className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Pad</span>
            </button>

            <button
              onClick={toggleKeyGuide}
              className="hidden sm:flex items-center space-x-1 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 px-2 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border border-emerald-700 active:scale-95 shadow-xs min-h-[36px]"
              title="8-Key Navigation Guide"
            >
              <Keyboard className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="hidden md:inline">Guide</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className="hidden sm:flex items-center space-x-1 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 px-1.5 sm:px-2 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border border-emerald-700 shadow-xs min-h-[36px]"
              title="Full-screen Exam Mode"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Digital Timer */}
          <div
            className={`flex items-center space-x-1 px-2.5 sm:px-3 py-1 rounded-lg border shadow-inner transition-all min-h-[36px] ${
              isLowTime
                ? 'bg-rose-950 border-rose-500 text-rose-200 animate-pulse'
                : isWarningTime
                ? 'bg-amber-950 border-amber-500 text-amber-200'
                : 'bg-slate-900 border-emerald-700 text-emerald-300'
            }`}
          >
            <div className="text-right">
              <span className="text-sm sm:text-base font-mono font-black tracking-wider leading-none">
                {formattedTime}
              </span>
            </div>
            {isLowTime && <AlertCircle className="w-3.5 h-3.5 text-rose-400 animate-bounce ml-0.5" />}
          </div>
        </div>
      </div>
    </header>
  );
};
