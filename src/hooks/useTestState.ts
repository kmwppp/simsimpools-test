import { useState, useCallback, useEffect, useRef } from 'react';
import {
  answerTestQuestion,
  createInitialTestState,
  normalizeTestState,
  restartTestState,
  startTestState,
  type CalculateResult,
  type TestState,
} from '../utils/testFlow';

const STORAGE_KEY = 'simsimpools_test';

export function useTestState(
  testId: string,
  questionCount: number,
  resultIds: string[],
  calculateResult: CalculateResult,
) {
  // SSR/프리렌더 HTML과 첫 클라이언트 렌더를 일치시킨 뒤 저장 상태를 복원한다.
  const [state, setState] = useState<TestState>(() => createInitialTestState(testId));
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`${STORAGE_KEY}_${testId}`);
      const next = normalizeTestState(raw ? JSON.parse(raw) : undefined, testId, questionCount, resultIds);
      stateRef.current = next;
      setState(next);
    } catch {
      const next = createInitialTestState(testId);
      stateRef.current = next;
      setState(next);
    }
  }, [questionCount, resultIds, testId]);

  const saveState = useCallback((next: TestState) => {
    stateRef.current = next;
    setState(next);
    try {
      localStorage.setItem(`${STORAGE_KEY}_${testId}`, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  }, [testId]);

  const startTest = useCallback(() => {
    saveState(startTestState(stateRef.current));
  }, [saveState]);

  const answerQuestion = useCallback((optionScores: Record<string, number>) => {
    const next = answerTestQuestion(stateRef.current, optionScores, questionCount, calculateResult);
    saveState(next);
    return next;
  }, [calculateResult, questionCount, saveState]);

  const resetTest = useCallback(() => {
    saveState(createInitialTestState(testId));
  }, [testId, saveState]);

  const restartTest = useCallback(() => {
    saveState(restartTestState(testId));
  }, [testId, saveState]);

  return { state, startTest, answerQuestion, resetTest, restartTest };
}
