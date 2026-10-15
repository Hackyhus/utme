import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowLeft, Filter, BookOpen } from 'lucide-react';
import { useExam } from '../context/ExamContext';
import { ALL_SUBJECTS } from '../data/subjects';
import { RichText } from './RichText';

export const ReviewMode: React.FC = () => {
  const {
    selectedSubjects,
    questions,
    answers,
    resetExam,
    finalResult
  } = useExam();

  const [activeSubjectIdx, setActiveSubjectIdx] = useState(0);
  const [filter, setFilter] = useState<'all' | 'wrong' | 'correct' | 'unanswered'>('all');

  const activeSubjectId = selectedSubjects[activeSubjectIdx];
  const subQuestions = questions[activeSubjectId] || [];
  const subAnswers = answers[activeSubjectId] || {};

  // Filter questions
  const filteredQuestions = subQuestions.filter((q, idx) => {
    const userChoice = subAnswers[idx];
    if (filter === 'all') return true;
    if (filter === 'wrong') return userChoice && userChoice !== q.correctOption;
    if (filter === 'correct') return userChoice === q.correctOption;
    if (filter === 'unanswered') return !userChoice;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Review Header */}
      <header className="bg-emerald-950 text-white px-4 sm:px-8 py-3 border-b-4 border-emerald-600 sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={resetExam}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 rounded-lg text-xs font-semibold cursor-pointer transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <div className="border-l border-emerald-700 pl-3">
              <h1 className="font-black text-xs sm:text-sm uppercase tracking-wide text-amber-300">
                Examination Review & Corrections Mode
              </h1>
              <p className="text-[11px] text-emerald-200">
                Overall Score: <strong>{finalResult?.totalScore || 0} / 400</strong>
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1 bg-emerald-900/90 p-1 rounded-xl border border-emerald-800 text-xs">
            <Filter className="w-3.5 h-3.5 text-emerald-400 ml-1 mr-0.5" />
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition ${
                filter === 'all' ? 'bg-amber-400 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              All ({subQuestions.length})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition ${
                filter === 'wrong' ? 'bg-red-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Wrong Only
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition ${
                filter === 'correct' ? 'bg-emerald-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Correct
            </button>
            <button
              onClick={() => setFilter('unanswered')}
              className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition ${
                filter === 'unanswered' ? 'bg-slate-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Skipped
            </button>
          </div>
        </div>
      </header>

      {/* Subject Tabs */}
      <div className="bg-slate-800 border-b border-slate-700 px-4 sm:px-8 pt-2">
        <div className="max-w-6xl mx-auto flex space-x-2 overflow-x-auto">
          {selectedSubjects.map((subId, idx) => {
            const isActive = activeSubjectIdx === idx;
            const meta = ALL_SUBJECTS[subId];
            return (
              <button
                key={subId}
                onClick={() => setActiveSubjectIdx(idx)}
                className={`px-4 py-2.5 rounded-t-lg font-bold text-xs sm:text-sm cursor-pointer transition whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-100 text-emerald-950 border-t-4 border-emerald-600'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white'
                }`}
              >
                {meta?.name || subId}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Review Question List */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-4 sm:p-6 space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-300 shadow-sm text-slate-500">
            No questions matching the selected filter ({filter}).
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const originalIndex = subQuestions.findIndex((sq) => sq.id === q.id);
            const userChoice = subAnswers[originalIndex];
            const isCorrect = userChoice === q.correctOption;
            const isUnanswered = !userChoice;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border-2 shadow-xs overflow-hidden transition-all ${
                  isCorrect
                    ? 'border-emerald-300 ring-1 ring-emerald-100'
                    : isUnanswered
                    ? 'border-slate-300'
                    : 'border-red-300 ring-1 ring-red-100'
                }`}
              >
                {/* Question item header */}
                <div
                  className={`px-5 py-3 flex items-center justify-between border-b text-xs font-bold ${
                    isCorrect
                      ? 'bg-emerald-50/80 text-emerald-900 border-emerald-200'
                      : isUnanswered
                      ? 'bg-slate-50 text-slate-700 border-slate-200'
                      : 'bg-red-50/80 text-red-900 border-red-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-sm font-black">
                      Question {originalIndex + 1}
                    </span>
                    {q.year && (
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-[11px]">
                        JAMB {q.year}
                      </span>
                    )}
                    {q.topic && (
                      <span className="hidden sm:inline text-slate-600 font-normal">
                        ({q.topic})
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {isCorrect ? (
                      <span className="flex items-center space-x-1 text-emerald-700 font-black">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>CORRECT (+1)</span>
                      </span>
                    ) : isUnanswered ? (
                      <span className="text-slate-500 font-bold">UNANSWERED (0)</span>
                    ) : (
                      <span className="flex items-center space-x-1 text-red-700 font-black">
                        <XCircle className="w-4 h-4" />
                        <span>INCORRECT (0)</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Question body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Reading Passage if any */}
                  {q.passage && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-700">
                      <div className="font-bold text-emerald-800 uppercase mb-1 flex items-center space-x-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{q.passage.title || 'Reading Passage'}</span>
                      </div>
                      <div className="whitespace-pre-line max-h-48 overflow-y-auto">{q.passage.content}</div>
                    </div>
                  )}

                  <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                    <RichText content={q.question} />
                  </div>

                  {q.image && (
                    <div className="flex justify-center p-2 bg-slate-50 rounded border">
                      <img src={q.image} alt="Question diagram" className="max-h-48 object-contain" />
                    </div>
                  )}

                  {/* Options */}
                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isCandidateChoice = userChoice === opt.key;
                      const isCorrectChoice = q.correctOption === opt.key;

                      let optClass = 'bg-slate-50 border-slate-200 text-slate-700';
                      if (isCorrectChoice) {
                        optClass = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                      } else if (isCandidateChoice && !isCorrect) {
                        optClass = 'bg-red-100 border-red-500 text-red-950 font-bold line-through';
                      }

                      return (
                        <div
                          key={opt.key}
                          className={`p-3 rounded-xl border flex items-start space-x-3 text-xs sm:text-sm ${optClass}`}
                        >
                          <span className="w-6 h-6 rounded flex items-center justify-center font-mono font-bold bg-white border border-slate-300 text-slate-800 shrink-0">
                            {opt.key}
                          </span>
                          <span className="flex-1 pt-0.5"><RichText content={opt.text} /></span>
                          {isCorrectChoice && (
                            <span className="text-[11px] text-emerald-800 font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-emerald-300 shrink-0">
                              Correct Answer
                            </span>
                          )}
                          {isCandidateChoice && !isCorrect && (
                            <span className="text-[11px] text-red-800 font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-red-300 shrink-0">
                              Your Answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Step-by-Step Explanation */}
                  {q.explanation && (
                    <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-950">
                      <div className="font-black text-blue-900 uppercase text-[11px] tracking-wider mb-1">
                        💡 Step-by-Step Solution & Explanation:
                      </div>
                      <div className="whitespace-pre-line leading-relaxed text-slate-800">
                        <RichText content={q.explanation} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
};
