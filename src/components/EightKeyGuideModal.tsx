import React from 'react';
import { X, Keyboard, CheckCircle2 } from 'lucide-react';
import { useExam } from '../context/ExamContext';

export const EightKeyGuideModal: React.FC = () => {
  const { isKeyGuideOpen, toggleKeyGuide } = useExam();

  if (!isKeyGuideOpen) return null;

  const keys = [
    { key: 'A', name: 'Option A', desc: 'Selects option A as your answer', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' },
    { key: 'B', name: 'Option B', desc: 'Selects option B as your answer', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' },
    { key: 'C', name: 'Option C', desc: 'Selects option C as your answer', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' },
    { key: 'D', name: 'Option D', desc: 'Selects option D as your answer', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' },
    { key: 'N', name: 'Next', desc: 'Moves forward to the next question', color: 'bg-blue-100 text-blue-900 border-blue-400' },
    { key: 'P', name: 'Previous', desc: 'Goes back to the previous question', color: 'bg-slate-100 text-slate-900 border-slate-400' },
    { key: 'R', name: 'Reverse / Clear', desc: 'Deselects or clears your selected option', color: 'bg-amber-100 text-amber-900 border-amber-400' },
    { key: 'S', name: 'Submit', desc: 'Submits your examination (with confirmation)', color: 'bg-red-100 text-red-900 border-red-400' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-slate-300 animate-scaleUp">
        {/* Header */}
        <div className="bg-emerald-950 text-white p-4 flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center space-x-2.5">
            <Keyboard className="w-5 h-5 text-amber-400" />
            <h2 className="font-bold text-sm sm:text-base tracking-wide">
              Official JAMB 8-Key System Guide
            </h2>
          </div>
          <button
            onClick={toggleKeyGuide}
            className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            JAMB introduced the <strong>8-Key Navigation System</strong> so candidates can complete the entire examination without having to rely on a computer mouse.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {keys.map((k) => (
              <div
                key={k.key}
                className={`p-3 rounded-xl border flex items-start space-x-3 ${k.color}`}
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-300 font-mono font-black text-lg flex items-center justify-center shrink-0 shadow-xs">
                  {k.key}
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-wide">{k.name}</div>
                  <div className="text-[11px] opacity-80 leading-snug">{k.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-950 space-y-1">
            <div className="font-bold flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4 text-amber-700" />
              <span>Modal Dialog Confirmation Keys:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              When you press <strong>S</strong> to submit, a confirmation prompt appears. Press <kbd className="px-1.5 py-0.5 bg-white border rounded font-mono font-bold">Y</kbd> to confirm or <kbd className="px-1.5 py-0.5 bg-white border rounded font-mono font-bold">N</kbd> to return.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={toggleKeyGuide}
            className="px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs cursor-pointer shadow transition"
          >
            Got It, Continue
          </button>
        </div>
      </div>
    </div>
  );
};
