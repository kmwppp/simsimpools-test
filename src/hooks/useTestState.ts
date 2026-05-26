import { useState, useCallback } from 'react';

const STORAGE_KEY = 'simsimpools_test';

export interface TestState {
  testId: string;
  currentQuestion: number;
  scores: Record<string, number>;
  answers: number[];
  completed: boolean;
  resultId?: string;
}

function initState(testId: string): TestState {
  return {
    testId,
    currentQuestion: 0,
    scores: {},
    answers: [],
    completed: false,
  };
}

export function useTestState(testId: string) {
  const [state, setState] = useState<TestState>(() => {
    try {
      const raw = localStorage.getItem(`${STORAGE_KEY}_${testId}`);
      if (raw) return JSON.parse(raw) as TestState;
    } catch {
      // ignore parse errors
    }
    return initState(testId);
  });

  const saveState = useCallback((next: TestState) => {
    setState(next);
    try {
      localStorage.setItem(`${STORAGE_KEY}_${testId}`, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  }, [testId]);

  const answerQuestion = useCallback(
    (optionScores: Record<string, number>) => {
      setState(prev => {
        const newScores = { ...prev.scores };
        for (const [k, v] of Object.entries(optionScores)) {
          newScores[k] = (newScores[k] ?? 0) + v;
        }
        const next: TestState = {
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          scores: newScores,
          answers: [...prev.answers, prev.currentQuestion],
        };
        try {
          localStorage.setItem(`${STORAGE_KEY}_${testId}`, JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    [testId],
  );

  const completeTest = useCallback(
    (resultId: string) => {
      setState(prev => {
        const next: TestState = { ...prev, completed: true, resultId };
        try {
          localStorage.setItem(`${STORAGE_KEY}_${testId}`, JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    [testId],
  );

  const resetTest = useCallback(() => {
    const next = initState(testId);
    saveState(next);
  }, [testId, saveState]);

  return { state, answerQuestion, completeTest, resetTest };
}
