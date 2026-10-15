import React, { useState } from 'react';
import { Flag, Eye, EyeOff, BookOpen, ZoomIn, ZoomOut, Image as ImageIcon } from 'lucide-react';
import { useExam } from '../context/ExamContext';
import { ALL_SUBJECTS } from '../data/subjects';
import { RichText } from './RichText';

export const QuestionView: React.FC = () => {
  const {
    currentSubjectId,
    currentQuestionIndex,
    currentQuestion,
    questions,
    answers,
    flagged,
    mode,
    selectOption,
    toggleFlag
  } = useExam();

  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  const subQuestions = questions[currentSubjectId] || [];
  const currentAnswer = answers[currentSubjectId]?.[currentQuestionIndex];
  const isFlagged = flagged[currentSubjectId]?.[currentQuestionIndex];
  const subjectMeta = ALL_SUBJECTS[currentSubjectId];

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-slate-500 bg-white">
        Loading question...
      </div>
    );
  }

  const fontSizeClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    xlarge: 'text-lg sm:text-xl leading-relaxed'
  };

  // Strip any raw tags in topic
  const cleanTopic = currentQuestion.topic
    ? currentQuestion.topic.replace(/<[^>]*>?/gm, '').trim()
    : 'General';

  const optionsBlock = (
    <div className="space-y-2 sm:space-y-2.5">
      {currentQuestion.options.map((opt) => {
        const isSelected = currentAnswer === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => selectOption(opt.key)}
            className={`w-full text-left px-3 py-2 sm:py-2.5 sm:px-4 rounded-xl border-2 transition-all flex items-center space-x-3 cursor-pointer ${
              isSelected
                ? 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-500/30'
                : 'bg-white hover:bg-slate-100/90 border-slate-300 text-slate-800 hover:border-slate-400 shadow-2xs'
            }`}
          >
            {/* 8-Key button badge */}
            <span
              className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-black text-xs shrink-0 border transition-all ${
                isSelected
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                  : 'bg-slate-100 text-slate-700 border-slate-300 group-hover:bg-slate-200'
              }`}
            >
              {opt.key}
            </span>

            {/* Option text with RichText support for subscripts, exponents, and chemistry */}
            <div className="flex-1 min-w-0">
              <span className={`text-xs sm:text-sm leading-snug ${isSelected ? 'font-bold' : 'font-normal'}`}>
                <RichText content={opt.text} />
              </span>
            </div>

            {/* Radio selection circle */}
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-600'
                  : 'border-slate-400 bg-white'
              }`}
            >
              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden h-full">
      {/* Compact Question Metadata Toolbar */}
      <div className="bg-white border-b border-slate-200 px-3 sm:px-6 py-1.5 flex flex-wrap items-center justify-between gap-2 shadow-2xs shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          <span className="font-mono text-xs sm:text-sm font-black text-emerald-950 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
            Q {currentQuestionIndex + 1} OF {subQuestions.length}
          </span>
          <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded hidden sm:inline">
            {subjectMeta?.name}
          </span>
          {currentQuestion.year && (
            <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
              JAMB {currentQuestion.year}
            </span>
          )}
          {cleanTopic && cleanTopic !== 'General' && (
            <span className="hidden xl:inline text-xs text-slate-500 italic max-w-md truncate" title={cleanTopic}>
              Topic: {cleanTopic}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* Text size controls */}
          <div className="flex items-center space-x-0.5 bg-slate-100 p-0.5 rounded border border-slate-200 text-xs">
            <button
              onClick={() => setFontSize('normal')}
              className={`p-1 rounded cursor-pointer ${fontSize === 'normal' ? 'bg-white shadow-xs font-bold text-emerald-800' : 'text-slate-500 hover:text-slate-800'}`}
              title="Standard Font Size"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`p-1 rounded cursor-pointer ${fontSize === 'large' ? 'bg-white shadow-xs font-bold text-emerald-800' : 'text-slate-500 hover:text-slate-800'}`}
              title="Large Font Size"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Flag button */}
          <button
            onClick={toggleFlag}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-xs font-semibold transition cursor-pointer border ${
              isFlagged
                ? 'bg-amber-100 text-amber-900 border-amber-400'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
            title="Flag question to review later"
          >
            <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-600' : ''}`} />
            <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>

          {/* Practice mode instant explanation toggle */}
          {mode === 'practice' && currentQuestion.explanation && (
            <button
              onClick={() => setShowExplanation((prev) => !prev)}
              className="flex items-center space-x-1 px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-300 hover:bg-blue-100 transition cursor-pointer"
            >
              {showExplanation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showExplanation ? 'Hide' : 'Solution'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Question Viewport: Full Height Optimized */}
      <div className="flex-1 p-3 sm:p-5 lg:px-8 lg:py-4 overflow-y-auto">
        {currentQuestion.passage ? (
          /* Desktop Split View: Reading Passage (Left) + Question/Options (Right) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5 bg-white border border-slate-300 rounded-xl p-4 shadow-xs lg:sticky lg:top-0 max-h-[65vh] overflow-y-auto passage-select-text">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2 border-b border-slate-100 pb-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>{currentQuestion.passage.title || 'Reading Comprehension Passage'}</span>
              </div>
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {currentQuestion.passage.content}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {currentQuestion.instruction && (
                <div className="p-2.5 bg-amber-50 border-l-4 border-amber-500 rounded text-xs text-amber-900 font-medium">
                  <strong>Instruction:</strong> <RichText content={currentQuestion.instruction} />
                </div>
              )}

              <div className={`font-semibold text-slate-900 ${fontSizeClasses[fontSize]}`}>
                <RichText content={currentQuestion.question} />
              </div>

              {currentQuestion.image && (
                <div className="flex justify-center p-2 bg-white rounded-lg border border-slate-200">
                  <img
                    src={currentQuestion.image}
                    alt="Question Diagram"
                    onClick={() => setIsImageModalOpen(true)}
                    className="max-h-40 object-contain rounded cursor-zoom-in"
                  />
                </div>
              )}

              {optionsBlock}

              {mode === 'practice' && showExplanation && currentQuestion.explanation && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-950 shadow-xs">
                  <div className="font-bold text-emerald-800 mb-1">
                    Correct Option: <span className="font-mono bg-emerald-600 text-white px-1.5 py-0.2 rounded">{currentQuestion.correctOption}</span>
                  </div>
                  <div className="text-slate-700 whitespace-pre-line"><RichText content={currentQuestion.explanation} /></div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Standard Desktop Canvas: Streamlined to fit 100% in viewport */
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {currentQuestion.instruction && (
              <div className="p-2.5 bg-amber-50 border-l-4 border-amber-500 rounded text-xs text-amber-900 font-medium">
                <strong>Instruction:</strong> <RichText content={currentQuestion.instruction} />
              </div>
            )}

            <div className={`font-semibold text-slate-900 ${fontSizeClasses[fontSize]}`}>
              <RichText content={currentQuestion.question} />
            </div>

            {currentQuestion.image && (
              <div className="flex flex-col items-center p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <img
                  src={currentQuestion.image}
                  alt="Question Diagram"
                  onClick={() => setIsImageModalOpen(true)}
                  className="max-h-36 sm:max-h-44 object-contain rounded cursor-zoom-in hover:opacity-95 transition"
                  title="Click to zoom diagram"
                />
                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(true)}
                  className="mt-1 text-[11px] text-emerald-700 hover:text-emerald-900 font-semibold flex items-center space-x-1 cursor-pointer"
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>Click diagram to enlarge</span>
                </button>
              </div>
            )}

            {optionsBlock}

            {mode === 'practice' && showExplanation && currentQuestion.explanation && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs sm:text-sm text-emerald-950 shadow-xs">
                <div className="font-bold text-emerald-800 mb-1">
                  Correct Option: <span className="font-mono bg-emerald-600 text-white px-1.5 py-0.2 rounded">{currentQuestion.correctOption}</span>
                </div>
                <div className="text-slate-700 whitespace-pre-line"><RichText content={currentQuestion.explanation} /></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Diagram Zoom Modal */}
      {isImageModalOpen && currentQuestion.image && (
        <div
          onClick={() => setIsImageModalOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="bg-white p-4 rounded-2xl max-w-2xl max-h-[90vh] overflow-auto shadow-2xl border border-slate-300">
            <img src={currentQuestion.image} alt="Enlarged Diagram" className="w-full h-auto object-contain" />
            <div className="text-center text-xs text-slate-500 mt-2">Click anywhere to close</div>
          </div>
        </div>
      )}
    </div>
  );
};
