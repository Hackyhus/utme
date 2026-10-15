import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useExam } from '../context/ExamContext';
import { ALL_SUBJECTS } from '../data/subjects';

export const SubmitConfirmModal: React.FC = () => {
  const {
    isSubmitModalOpen,
    closeSubmitModal,
    confirmSubmitExam,
    selectedSubjects,
    questions,
    answers,
    answeredCountTotal,
    unansweredCountTotal,
    totalQuestionsCount
  } = useExam();

  if (!isSubmitModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-4 border-amber-500 animate-scaleUp">
        {/* Warning Header */}
        <div className="bg-amber-500 text-slate-950 p-4 sm:p-5 flex items-center space-x-3">
          <div className="p-2 rounded-full bg-amber-400">
            <AlertTriangle className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black tracking-wide uppercase">
              Confirm Examination Submission
            </h2>
            <p className="text-xs text-amber-950 font-medium">
              You are about to conclude your examination session.
            </p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Please review your completion status before confirming. Once submitted, you cannot resume or alter your responses.
          </p>

          {/* High-level summary badges */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
            <div className="p-2 bg-white rounded-lg border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-500">Total Qs</div>
              <div className="text-lg font-mono font-bold text-slate-800">{totalQuestionsCount}</div>
            </div>
            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="text-[10px] uppercase font-bold text-emerald-700">Answered</div>
              <div className="text-lg font-mono font-bold text-emerald-800">{answeredCountTotal}</div>
            </div>
            <div className="p-2 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-[10px] uppercase font-bold text-amber-800">Unanswered</div>
              <div className="text-lg font-mono font-bold text-amber-900">{unansweredCountTotal}</div>
            </div>
          </div>

          {/* Subject breakdown list */}
          <div className="border border-slate-200 rounded-lg divide-y divide-slate-100 text-xs">
            {selectedSubjects.map((subId) => {
              const subMeta = ALL_SUBJECTS[subId];
              const subQs = questions[subId] || [];
              const subAns = answers[subId] || {};
              let subAnswered = 0;
              subQs.forEach((_, idx) => {
                if (subAns[idx]) subAnswered++;
              });
              const subTotal = subQs.length;
              const isComplete = subAnswered === subTotal;

              return (
                <div key={subId} className="p-2.5 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{subMeta?.name || subId}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-slate-600">
                      <strong>{subAnswered}</strong> / {subTotal}
                    </span>
                    {isComplete ? (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Complete
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        {subTotal - subAnswered} Left
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-600 text-center font-medium">
            Keyboard shortcuts: Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono font-bold">Y</kbd> to Confirm or <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono font-bold">N</kbd> to Return.
          </div>
        </div>

        {/* Modal footer buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-3">
          <button
            onClick={closeSubmitModal}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm cursor-pointer transition shadow-xs"
          >
            <XCircle className="w-4 h-4 text-slate-500" />
            <span>No, Return to Exam (N)</span>
          </button>

          <button
            onClick={confirmSubmitExam}
            className="flex items-center space-x-1.5 px-5 py-2.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm cursor-pointer transition shadow-md hover:shadow-lg border border-red-800"
          >
            <CheckCircle className="w-4 h-4 text-red-200" />
            <span>Yes, Submit Examination (Y)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
