import React, { useState, useEffect } from 'react';
import {
  Award,
  Layers,
  Play,
  Monitor,
  Maximize2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { useExam } from '../context/ExamContext';
import type { SubjectId, ExamMode } from '../types/exam';
import { ALL_SUBJECTS, SUBJECT_COMBINATIONS } from '../data/subjects';
import { fetchBankIndex, type BankIndex } from '../services/questionBank';

interface RegistrationModalProps {
  onOpenRecords?: () => void;
  onOpenStudyHub?: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  onOpenRecords,
  onOpenStudyHub
}) => {
  const { startExam, status } = useExam();

  const [name, setName] = useState('Jidderh');
  const [regNumber, setRegNumber] = useState('202684910283AB');
  const [seatNumber, setSeatNumber] = useState('LAB-A / 042');
  const [centerNumber] = useState('C-048201');
  const [passportUrl] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80');

  const [selectedComboId, setSelectedComboId] = useState('engineering');
  const [subjects, setSubjects] = useState<[SubjectId, SubjectId, SubjectId, SubjectId]>([
    'english',
    'mathematics',
    'physics',
    'chemistry'
  ]);

  const [mode, setMode] = useState<ExamMode>('simulation');
  const [targetYear, setTargetYear] = useState<number | 'random'>('random');
  const [durationMinutes] = useState<number>(120);

  const [bankIndex, setBankIndex] = useState<BankIndex>({});
  const [loadingIndex, setLoadingIndex] = useState(true);
  const [agreedToRules, setAgreedToRules] = useState(true);

  useEffect(() => {
    fetchBankIndex().then((idx) => {
      setBankIndex(idx);
      setLoadingIndex(false);
    });
  }, []);

  const handleComboChange = (comboId: string) => {
    setSelectedComboId(comboId);
    const found = SUBJECT_COMBINATIONS.find((c) => c.id === comboId);
    if (found) {
      setSubjects(found.subjects);
    }
  };

  const handleSubjectSlotChange = (index: number, newSubjectId: SubjectId) => {
    const updated = [...subjects] as [SubjectId, SubjectId, SubjectId, SubjectId];
    updated[index] = newSubjectId;
    setSubjects(updated);
    setSelectedComboId('custom');
  };

  const handleLaunch = () => {
    if (!agreedToRules) return;
    startExam({
      candidate: {
        name: name.trim().toUpperCase() || 'CANDIDATE',
        regNumber: regNumber.trim().toUpperCase() || '202600000000AB',
        seatNumber: seatNumber.trim() || 'SEAT-01',
        centerNumber: centerNumber.trim() || 'C-000000',
        passportUrl
      },
      subjects,
      mode,
      targetYear,
      durationMinutes: mode === 'simulation' ? 120 : durationMinutes
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  if (status !== 'registration') return null;

  const nonEnglishSubjects = Object.keys(ALL_SUBJECTS).filter((s) => s !== 'english') as SubjectId[];

  const availableYears = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017,
    2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009,
    2008, 2007, 2006, 2005, 2004
  ];

  let totalQuestionsInBank = 0;
  Object.values(bankIndex).forEach((b) => {
    totalQuestionsInBank += b.totalQuestions || 0;
  });

  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-800 flex flex-col font-sans select-none overflow-x-hidden">
      {/* 1. Official JAMB National CBT Portal Header */}
      <header className="bg-emerald-950 text-white border-b-4 border-emerald-600 px-4 lg:px-8 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3.5">
            {/* JAMB Emblem */}
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-1 shadow-md shrink-0 border border-amber-300">
              <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-800 fill-current">
                <circle cx="50" cy="50" r="45" fill="#047857" />
                <circle cx="50" cy="50" r="38" fill="#ffffff" />
                <path d="M50 18 L60 38 L82 42 L66 58 L70 80 L50 70 L30 80 L34 58 L18 42 L40 38 Z" fill="#047857" />
                <circle cx="50" cy="50" r="10" fill="#f59e0b" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                Federal Republic of Nigeria &bull; National e-Testing Portal
              </div>
              <h1 className="text-sm sm:text-lg lg:text-xl font-black uppercase tracking-wide text-white">
                Joint Admissions and Matriculation Board (JAMB)
              </h1>
              <div className="text-xs text-emerald-200">
                Unified Tertiary Matriculation Examination (UTME) &bull; Official CBT Simulator
              </div>
            </div>
          </div>

          {/* Right Header Status Badges */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden md:flex items-center space-x-2 bg-emerald-900/80 px-3 py-1.5 rounded-lg border border-emerald-700 text-xs text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                Bank: <strong>{loadingIndex ? '5,700+' : totalQuestionsInBank.toLocaleString()} Qs</strong> (2004–2024)
              </span>
            </div>

            {/* Multi-page Navigation Buttons */}
            {onOpenRecords && (
              <button
                type="button"
                onClick={onOpenRecords}
                className="flex items-center space-x-1.5 bg-emerald-900/90 hover:bg-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 border border-emerald-700 transition cursor-pointer shadow-xs"
                title="View your past test scores and history"
              >
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span>Past Records</span>
              </button>
            )}

            {onOpenStudyHub && (
              <button
                type="button"
                onClick={onOpenStudyHub}
                className="flex items-center space-x-1.5 bg-emerald-900/90 hover:bg-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-200 hover:text-white border border-emerald-700 transition cursor-pointer shadow-xs"
                title="View JAMB official syllabi, high-yield rules & AI Tutor preview"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Study Hub</span>
                <span className="bg-amber-400 text-slate-950 text-[9px] px-1 py-0.2 rounded font-black">DEV</span>
              </button>
            )}

            <button
              onClick={toggleFullscreen}
              className="flex items-center space-x-1.5 bg-emerald-800 hover:bg-emerald-700 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition border border-emerald-600 shadow-sm"
              title="Toggle Fullscreen Kiosk Mode (F11)"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Fullscreen Kiosk</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Desktop Content Workspace (Full Screen 2-Column Split) */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Candidate Profile & 8-Key Quick Reference (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Candidate Identity Card */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-emerald-900 px-4 py-2.5 text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Candidate Biometrics & Seat
              </span>
              <span className="text-[10px] font-mono bg-emerald-800 px-2 py-0.5 rounded text-emerald-200">
                VERIFIED
              </span>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-24 rounded-lg border-2 border-emerald-600 bg-slate-800 overflow-hidden shadow-sm shrink-0">
                  <img
                    src={passportUrl}
                    alt="Candidate Passport"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Candidate Name</div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs font-black uppercase text-slate-900 bg-slate-50 border border-slate-300 rounded p-1.5 focus:bg-white focus:border-emerald-600 outline-hidden"
                  />
                  <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Reg Number</div>
                  <input
                    type="text"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    className="w-full text-xs font-mono font-bold text-emerald-900 bg-slate-50 border border-slate-300 rounded p-1.5 focus:bg-white focus:border-emerald-600 outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Assigned Seat</span>
                  <input
                    type="text"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    className="w-full font-mono font-bold text-slate-800 bg-transparent outline-hidden"
                  />
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Center Code</span>
                  <span className="font-mono font-bold text-slate-800">{centerNumber}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 8-Key Muscle Memory Panel */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-4 space-y-3">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
              <Monitor className="w-4 h-4 text-emerald-700" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Official 8-Key System Cheatsheet
              </h2>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              JAMB CBT exams are designed to be operated using keyboard navigation:
            </p>

            <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300 font-bold text-emerald-900">
                <div className="text-base font-mono">A</div>
                <div className="text-[9px] uppercase font-normal text-emerald-700">Option A</div>
              </div>
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300 font-bold text-emerald-900">
                <div className="text-base font-mono">B</div>
                <div className="text-[9px] uppercase font-normal text-emerald-700">Option B</div>
              </div>
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300 font-bold text-emerald-900">
                <div className="text-base font-mono">C</div>
                <div className="text-[9px] uppercase font-normal text-emerald-700">Option C</div>
              </div>
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300 font-bold text-emerald-900">
                <div className="text-base font-mono">D</div>
                <div className="text-[9px] uppercase font-normal text-emerald-700">Option D</div>
              </div>

              <div className="p-2 rounded bg-slate-100 border border-slate-300 font-bold text-slate-800">
                <div className="text-base font-mono">P</div>
                <div className="text-[9px] uppercase font-normal text-slate-600">Previous</div>
              </div>
              <div className="p-2 rounded bg-amber-50 border border-amber-300 font-bold text-amber-900">
                <div className="text-base font-mono">R</div>
                <div className="text-[9px] uppercase font-normal text-amber-700">Reverse/Clear</div>
              </div>
              <div className="p-2 rounded bg-blue-50 border border-blue-300 font-bold text-blue-900">
                <div className="text-base font-mono">N</div>
                <div className="text-[9px] uppercase font-normal text-blue-700">Next</div>
              </div>
              <div className="p-2 rounded bg-red-50 border border-red-300 font-bold text-red-900">
                <div className="text-base font-mono">S</div>
                <div className="text-[9px] uppercase font-normal text-red-700">Submit</div>
              </div>
            </div>

            <div className="p-2 bg-slate-50 rounded text-[11px] text-slate-600 text-center border">
              Modal prompts: <kbd className="font-mono font-bold bg-white px-1 border rounded">Y</kbd> = Yes, Submit &bull; <kbd className="font-mono font-bold bg-white px-1 border rounded">N</kbd> = No, Cancel
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Examination Configuration & Launch Panel (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
            <h2 className="font-black text-xs sm:text-sm uppercase tracking-wide text-slate-800 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>Select UTME Subject Combination & Examination Parameters</span>
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              4 Subjects &bull; 180 Questions &bull; 400 Marks
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-6">
            {/* Step 1: Faculty Combination Presets */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                1. Standard Faculty Combos (Quick Select)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SUBJECT_COMBINATIONS.map((c) => {
                  const isSelected = selectedComboId === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleComboChange(c.id)}
                      className={`p-2.5 rounded-xl border-2 text-left transition cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs ring-1 ring-emerald-500'
                          : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{c.faculty}</div>
                      <div className="text-[10px] text-slate-500 truncate">{c.courses}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Active 4 Subject Slots */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                2. Your Registered 4 Subjects
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                {/* Slot 0: Use of English */}
                <div className="p-3 rounded-xl bg-emerald-50 border-2 border-emerald-400">
                  <div className="text-[10px] font-bold text-emerald-800 uppercase">Subject 1 (Compulsory)</div>
                  <div className="font-bold text-xs text-emerald-950 mt-1">Use of English</div>
                  <div className="text-[10px] text-emerald-700 font-mono mt-0.5">60 Questions</div>
                </div>

                {/* Slot 1 */}
                <div className="p-2.5 rounded-xl bg-slate-50 border-2 border-slate-200">
                  <label className="text-[10px] font-bold text-slate-500 uppercase block">Subject 2</label>
                  <select
                    value={subjects[1]}
                    onChange={(e) => handleSubjectSlotChange(1, e.target.value as SubjectId)}
                    className="w-full text-xs font-bold bg-white border border-slate-300 rounded p-1.5 mt-1 cursor-pointer"
                  >
                    {nonEnglishSubjects.map((s) => (
                      <option key={s} value={s}>{ALL_SUBJECTS[s].name}</option>
                    ))}
                  </select>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">40 Questions</div>
                </div>

                {/* Slot 2 */}
                <div className="p-2.5 rounded-xl bg-slate-50 border-2 border-slate-200">
                  <label className="text-[10px] font-bold text-slate-500 uppercase block">Subject 3</label>
                  <select
                    value={subjects[2]}
                    onChange={(e) => handleSubjectSlotChange(2, e.target.value as SubjectId)}
                    className="w-full text-xs font-bold bg-white border border-slate-300 rounded p-1.5 mt-1 cursor-pointer"
                  >
                    {nonEnglishSubjects.map((s) => (
                      <option key={s} value={s}>{ALL_SUBJECTS[s].name}</option>
                    ))}
                  </select>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">40 Questions</div>
                </div>

                {/* Slot 3 */}
                <div className="p-2.5 rounded-xl bg-slate-50 border-2 border-slate-200">
                  <label className="text-[10px] font-bold text-slate-500 uppercase block">Subject 4</label>
                  <select
                    value={subjects[3]}
                    onChange={(e) => handleSubjectSlotChange(3, e.target.value as SubjectId)}
                    className="w-full text-xs font-bold bg-white border border-slate-300 rounded p-1.5 mt-1 cursor-pointer"
                  >
                    {nonEnglishSubjects.map((s) => (
                      <option key={s} value={s}>{ALL_SUBJECTS[s].name}</option>
                    ))}
                  </select>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">40 Questions</div>
                </div>
              </div>
            </div>

            {/* Step 3: Exam Mode and Year Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>3. Examination Mode</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMode('simulation')}
                    className={`p-3 rounded-xl border-2 text-left cursor-pointer transition ${
                      mode === 'simulation'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Exam Simulation</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Strict 2 Hours &bull; Real CBT rules</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('practice')}
                    className={`p-3 rounded-xl border-2 text-left cursor-pointer transition ${
                      mode === 'practice'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Study & Practice</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Instant solutions & hints</div>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-emerald-700" />
                  <span>4. Question Bank Year</span>
                </label>
                <select
                  value={targetYear}
                  onChange={(e) => setTargetYear(e.target.value === 'random' ? 'random' : Number(e.target.value))}
                  className="w-full text-xs font-bold bg-slate-50 border-2 border-slate-300 rounded-xl p-3 cursor-pointer focus:border-emerald-600 outline-hidden"
                >
                  <option value="random">🌟 Full Standard Mock (Randomized across 2004–2024 Bank)</option>
                  {availableYears.map((y) => (
                    <option key={y} value={y}>📅 JAMB {y} Authentic Past Questions</option>
                  ))}
                </select>
                <div className="text-[11px] text-slate-500">
                  Select a specific year to solve that exact past question paper.
                </div>
              </div>
            </div>

            {/* Step 4: Examination Instructions & Agreement */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <label className="flex items-start space-x-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToRules}
                  onChange={(e) => setAgreedToRules(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-emerald-600 rounded cursor-pointer"
                />
                <span className="text-xs leading-relaxed">
                  I understand that physical calculators and mobile phones are prohibited. I will strictly use the on-screen calculator and the 8-key navigation shortcuts during this test session.
                </span>
              </label>
            </div>
          </div>

          {/* Action Launch Bar */}
          <div className="mt-auto p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-4 text-xs text-slate-600">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Timer: <strong>120 Minutes</strong></span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Total Questions: <strong>180</strong></span>
              </span>
            </div>

            <button
              onClick={handleLaunch}
              disabled={!agreedToRules}
              className="flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 disabled:opacity-50 text-white font-black text-sm sm:text-base cursor-pointer shadow-lg hover:shadow-xl transition active:scale-98"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>START EXAMINATION</span>
            </button>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="bg-slate-950 text-slate-400 py-3 px-4 text-center text-xs border-t border-slate-800">
        Joint Admissions and Matriculation Board &bull; National Computer-Based Testing Infrastructure &bull; Practice Edition 2026
      </footer>
    </div>
  );
};
