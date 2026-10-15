import { useEffect } from 'react';
import { useExam } from '../context/ExamContext';

export function useEightKeyNavigation() {
  const {
    status,
    isSubmitModalOpen,
    selectOption,
    clearOption,
    nextQuestion,
    prevQuestion,
    openSubmitModal,
    closeSubmitModal,
    confirmSubmitExam
  } = useExam();

  useEffect(() => {
    // Only active during actual examination
    if (status !== 'in-progress') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently inside an input field
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      const key = e.key.toUpperCase();

      // Modal specific keys
      if (isSubmitModalOpen) {
        if (key === 'Y' || key === 'ENTER') {
          e.preventDefault();
          confirmSubmitExam();
        } else if (key === 'N' || key === 'ESCAPE') {
          e.preventDefault();
          closeSubmitModal();
        }
        return;
      }

      // 8-Key System during test
      switch (key) {
        case 'A':
          e.preventDefault();
          selectOption('A');
          break;
        case 'B':
          e.preventDefault();
          selectOption('B');
          break;
        case 'C':
          e.preventDefault();
          selectOption('C');
          break;
        case 'D':
          e.preventDefault();
          selectOption('D');
          break;
        case 'N':
          e.preventDefault();
          nextQuestion();
          break;
        case 'P':
          e.preventDefault();
          prevQuestion();
          break;
        case 'R':
          e.preventDefault();
          clearOption();
          break;
        case 'S':
          e.preventDefault();
          openSubmitModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    status,
    isSubmitModalOpen,
    selectOption,
    clearOption,
    nextQuestion,
    prevQuestion,
    openSubmitModal,
    closeSubmitModal,
    confirmSubmitExam
  ]);
}
