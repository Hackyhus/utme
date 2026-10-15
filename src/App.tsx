import React, { useState } from 'react';
import { ExamProvider, useExam } from './context/ExamContext';
import { useEightKeyNavigation } from './hooks/useEightKeyNavigation';
import { CandidateHeader } from './components/CandidateHeader';
import { SubjectTabBar } from './components/SubjectTabBar';
import { QuestionView } from './components/QuestionView';
import { QuestionPalette } from './components/QuestionPalette';
import { ActionBar } from './components/ActionBar';
import { OnScreenCalculator } from './components/OnScreenCalculator';
import { SubmitConfirmModal } from './components/SubmitConfirmModal';
import { VirtualEightKeyPad } from './components/VirtualEightKeyPad';
import { EightKeyGuideModal } from './components/EightKeyGuideModal';
import { RegistrationModal } from './components/RegistrationModal';
import { ResultSlip } from './components/ResultSlip';
import { ReviewMode } from './components/ReviewMode';
import { RecordsView } from './components/RecordsView';
import { StudyHubView } from './components/StudyHubView';
import { Loader2 } from 'lucide-react';

type AppView = 'cbt' | 'records' | 'study';

const ExamScreen: React.FC = () => {
  const { status } = useExam();
  const [currentView, setCurrentView] = useState<AppView>('cbt');

  // Hook up global 8-key keyboard navigation engine
  useEightKeyNavigation();

  // Multi-page routing: Records View
  if (currentView === 'records') {
    return <RecordsView onBackToExam={() => setCurrentView('cbt')} />;
  }

  // Multi-page routing: Study Hub View (Under Development)
  if (currentView === 'study') {
    return <StudyHubView onBackToExam={() => setCurrentView('cbt')} />;
  }

  // CBT Exam Flow
  if (status === 'registration') {
    return (
      <RegistrationModal
        onOpenRecords={() => setCurrentView('records')}
        onOpenStudyHub={() => setCurrentView('study')}
      />
    );
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-12 h-12 text-emerald-400 animate-spin mb-4" />
        <h2 className="text-xl font-black uppercase tracking-wider text-amber-300">
          Generating Examination Paper...
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-md">
          Drawing questions from the 20-year official UTME Question Bank and configuring the 8-Key Navigation environment.
        </p>
      </div>
    );
  }

  if (status === 'submitted') {
    return <ResultSlip onOpenRecords={() => setCurrentView('records')} />;
  }

  if (status === 'review') {
    return <ReviewMode />;
  }

  // Active examination in-progress view (Locked fullscreen layout)
  return (
    <div className="flex flex-col h-screen h-[100dvh] w-screen overflow-hidden bg-slate-100 exam-select-none font-sans">
      {/* 1. Official Header (Streamlined Height) */}
      <CandidateHeader />

      {/* 2. Four-Subject Navigation Bar */}
      <SubjectTabBar />

      {/* 3. Main Center Workspace: Question Canvas + Question Palette */}
      <div className="flex-1 flex overflow-hidden relative">
        <QuestionView />
        <QuestionPalette />
      </div>

      {/* 4. Navigation Footer Actions */}
      <ActionBar />

      {/* Floating Modals and Tools */}
      <VirtualEightKeyPad />
      <OnScreenCalculator />
      <SubmitConfirmModal />
      <EightKeyGuideModal />
    </div>
  );
};

export function App() {
  return (
    <ExamProvider>
      <ExamScreen />
    </ExamProvider>
  );
}

export default App;
