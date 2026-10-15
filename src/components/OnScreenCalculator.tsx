import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Calculator, Move } from 'lucide-react';
import { useExam } from '../context/ExamContext';

export const OnScreenCalculator: React.FC = () => {
  const { isCalculatorOpen, toggleCalculator } = useExam();

  const [display, setDisplay] = useState<string>('0');
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [overwrite, setOverwrite] = useState<boolean>(false);
  const [history, setHistory] = useState<string>('');

  // Draggable position state
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0
  });

  const calcRef = useRef<HTMLDivElement | null>(null);

  // Precision formatter to eliminate 0.1 + 0.2 = 0.30000000000000004
  const formatResult = (val: number): string => {
    if (isNaN(val) || !isFinite(val)) return 'Error';
    const rounded = parseFloat(val.toFixed(8));
    return String(rounded);
  };

  const handleDigit = useCallback((digit: string) => {
    setDisplay((prev) => {
      if (overwrite || prev === '0' || prev === 'Error') {
        setOverwrite(false);
        return digit;
      }
      if (prev.length >= 14) return prev; // Avoid screen overflow
      return prev + digit;
    });
  }, [overwrite]);

  const handleDecimal = useCallback(() => {
    setDisplay((prev) => {
      if (overwrite || prev === 'Error') {
        setOverwrite(false);
        return '0.';
      }
      if (!prev.includes('.')) {
        return prev + '.';
      }
      return prev;
    });
  }, [overwrite]);

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b !== 0 ? a / b : NaN;
      default:
        return b;
    }
  };

  const handleOperator = useCallback((nextOp: string) => {
    const currentVal = parseFloat(display);

    // If operator is clicked and user just changed mind without entering new number
    if (operator && overwrite) {
      setOperator(nextOp);
      setHistory(`${prevValue} ${nextOp}`);
      return;
    }

    if (prevValue === null) {
      setPrevValue(currentVal);
      setOperator(nextOp);
      setHistory(`${currentVal} ${nextOp}`);
      setOverwrite(true);
    } else if (operator) {
      const res = calculate(prevValue, currentVal, operator);
      const formatted = formatResult(res);
      setPrevValue(res);
      setDisplay(formatted);
      setOperator(nextOp);
      setHistory(`${formatted} ${nextOp}`);
      setOverwrite(true);
    }
  }, [display, operator, overwrite, prevValue]);

  const handleEquals = useCallback(() => {
    if (operator && prevValue !== null) {
      const currentVal = parseFloat(display);
      const res = calculate(prevValue, currentVal, operator);
      const formatted = formatResult(res);
      setHistory(`${prevValue} ${operator} ${currentVal} =`);
      setDisplay(formatted);
      setPrevValue(null);
      setOperator(null);
      setOverwrite(true);
    }
  }, [display, operator, prevValue]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setOverwrite(false);
    setHistory('');
  }, []);

  const handleBackspace = useCallback(() => {
    setDisplay((prev) => {
      if (overwrite || prev === 'Error') {
        setOverwrite(false);
        return '0';
      }
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }
      return '0';
    });
  }, [overwrite]);

  const handleSquareRoot = useCallback(() => {
    const val = parseFloat(display);
    if (isNaN(val) || val < 0) {
      setDisplay('Error');
      setOverwrite(true);
    } else {
      const res = Math.sqrt(val);
      setDisplay(formatResult(res));
      setHistory(`√(${val})`);
      setOverwrite(true);
    }
  }, [display]);

  const handlePercentage = useCallback(() => {
    const val = parseFloat(display);
    if (!isNaN(val)) {
      const res = val / 100;
      setDisplay(formatResult(res));
      setOverwrite(true);
    }
  }, [display]);

  const handlePlusMinus = useCallback(() => {
    const val = parseFloat(display);
    if (!isNaN(val) && val !== 0) {
      setDisplay(formatResult(-val));
    }
  }, [display]);

  // Physical keyboard support for the calculator
  useEffect(() => {
    if (!isCalculatorOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in candidate input field
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      const key = e.key;

      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        handleDigit(key);
      } else if (key === '.') {
        e.preventDefault();
        e.stopPropagation();
        handleDecimal();
      } else if (key === '+') {
        e.preventDefault();
        e.stopPropagation();
        handleOperator('+');
      } else if (key === '-') {
        e.preventDefault();
        e.stopPropagation();
        handleOperator('-');
      } else if (key === '*' || key.toLowerCase() === 'x') {
        e.preventDefault();
        e.stopPropagation();
        handleOperator('×');
      } else if (key === '/') {
        e.preventDefault();
        e.stopPropagation();
        handleOperator('÷');
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        e.stopPropagation();
        handleEquals();
      } else if (key === 'Backspace') {
        e.preventDefault();
        e.stopPropagation();
        handleBackspace();
      } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        e.preventDefault();
        e.stopPropagation();
        handleClear();
      } else if (key === '%') {
        e.preventDefault();
        e.stopPropagation();
        handlePercentage();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [
    isCalculatorOpen,
    handleDigit,
    handleDecimal,
    handleOperator,
    handleEquals,
    handleBackspace,
    handleClear,
    handlePercentage
  ]);

  // Mouse / Touch Dragging Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y
    };
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - dragStartRef.current.startX;
      const deltaY = e.clientY - dragStartRef.current.startY;
      setPosition({
        x: dragStartRef.current.posX + deltaX,
        y: dragStartRef.current.posY + deltaY
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!isCalculatorOpen) return null;

  return (
    <div
      ref={calcRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      className="fixed bottom-20 right-4 sm:right-8 z-50 w-72 bg-slate-900 text-white rounded-xl shadow-2xl border-2 border-emerald-600 overflow-hidden select-none transition-shadow"
    >
      {/* Draggable Title bar */}
      <div
        onMouseDown={handleMouseDown}
        className="bg-emerald-950 px-3 py-2 flex items-center justify-between border-b border-emerald-800 cursor-move"
        title="Click and drag to move calculator"
      >
        <div className="flex items-center space-x-2 text-xs font-bold text-emerald-200">
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>JAMB CBT Calculator</span>
          <Move className="w-3 h-3 text-slate-400 opacity-60" />
        </div>
        <button
          onClick={toggleCalculator}
          className="p-1 text-slate-400 hover:text-white rounded cursor-pointer transition"
          title="Close Calculator"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Screen display */}
      <div className="p-3 bg-slate-950 text-right">
        <div className="text-[11px] text-emerald-400 font-mono h-4 truncate">
          {history || (prevValue !== null && operator ? `${prevValue} ${operator}` : '')}
        </div>
        <div className="text-2xl font-mono font-bold text-white tracking-wider truncate">
          {display}
        </div>
      </div>

      {/* Calculator Buttons Grid */}
      <div className="p-2 grid grid-cols-4 gap-1.5 bg-slate-900 text-sm font-semibold">
        <button
          type="button"
          onClick={handleClear}
          className="p-2 rounded bg-rose-900 hover:bg-rose-800 text-white cursor-pointer transition active:scale-95"
          title="Clear All (C)"
        >
          C
        </button>
        <button
          type="button"
          onClick={handleBackspace}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
          title="Backspace (⌫)"
        >
          ⌫
        </button>
        <button
          type="button"
          onClick={handlePercentage}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 cursor-pointer transition active:scale-95"
          title="Percentage (%)"
        >
          %
        </button>
        <button
          type="button"
          onClick={() => handleOperator('÷')}
          className={`p-2 rounded text-base cursor-pointer transition active:scale-95 ${
            operator === '÷' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-emerald-800 hover:bg-emerald-700 text-white'
          }`}
          title="Divide (÷)"
        >
          ÷
        </button>

        <button
          type="button"
          onClick={handleSquareRoot}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 cursor-pointer transition active:scale-95"
          title="Square Root (√)"
        >
          √
        </button>
        <button
          type="button"
          onClick={() => handleDigit('7')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          7
        </button>
        <button
          type="button"
          onClick={() => handleDigit('8')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          8
        </button>
        <button
          type="button"
          onClick={() => handleDigit('9')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          9
        </button>

        <button
          type="button"
          onClick={() => handleOperator('×')}
          className={`p-2 rounded text-base cursor-pointer transition active:scale-95 ${
            operator === '×' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-emerald-800 hover:bg-emerald-700 text-white'
          }`}
          title="Multiply (×)"
        >
          ×
        </button>
        <button
          type="button"
          onClick={() => handleDigit('4')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          4
        </button>
        <button
          type="button"
          onClick={() => handleDigit('5')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => handleDigit('6')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          6
        </button>

        <button
          type="button"
          onClick={() => handleOperator('-')}
          className={`p-2 rounded text-base cursor-pointer transition active:scale-95 ${
            operator === '-' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-emerald-800 hover:bg-emerald-700 text-white'
          }`}
          title="Subtract (-)"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => handleDigit('1')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => handleDigit('2')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          2
        </button>
        <button
          type="button"
          onClick={() => handleDigit('3')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          3
        </button>

        <button
          type="button"
          onClick={() => handleOperator('+')}
          className={`p-2 rounded text-base cursor-pointer transition active:scale-95 ${
            operator === '+' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-emerald-800 hover:bg-emerald-700 text-white'
          }`}
          title="Add (+)"
        >
          +
        </button>
        <button
          type="button"
          onClick={handlePlusMinus}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 cursor-pointer transition active:scale-95"
          title="Toggle Sign (±)"
        >
          ±
        </button>
        <button
          type="button"
          onClick={() => handleDigit('0')}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
        >
          0
        </button>
        <button
          type="button"
          onClick={handleDecimal}
          className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition active:scale-95"
          title="Decimal Point (.)"
        >
          .
        </button>

        <button
          type="button"
          onClick={handleEquals}
          className="col-span-4 p-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg cursor-pointer shadow-md mt-0.5 active:scale-98 transition"
          title="Equals (= / Enter)"
        >
          =
        </button>
      </div>

      <div className="bg-slate-950 px-3 py-1 text-[10px] text-slate-400 flex justify-between border-t border-slate-800">
        <span>Keyboard: 0-9, + - * / = Enter</span>
        <span>Esc to Clear</span>
      </div>
    </div>
  );
};
