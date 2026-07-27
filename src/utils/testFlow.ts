export const TEST_STATE_VERSION = 2;

export interface TestState {
  version: number;
  testId: string;
  started: boolean;
  currentQuestion: number;
  scores: Record<string, number>;
  answers: number[];
  completed: boolean;
  resultId?: string;
}

export type CalculateResult = (scores: Record<string, number>) => string;

export function createInitialTestState(testId: string): TestState {
  return {
    version: TEST_STATE_VERSION,
    testId,
    started: false,
    currentQuestion: 0,
    scores: {},
    answers: [],
    completed: false,
  };
}

export function startTestState(state: TestState): TestState {
  if (state.completed) return state;
  return { ...state, started: true };
}

export function restartTestState(testId: string): TestState {
  return { ...createInitialTestState(testId), started: true };
}

export function completeTestState(
  state: TestState,
  scores: Record<string, number>,
  questionCount: number,
  calculateResult: CalculateResult,
): TestState {
  return {
    ...state,
    currentQuestion: questionCount,
    scores,
    completed: true,
    resultId: calculateResult(scores),
  };
}

export function answerTestQuestion(
  state: TestState,
  optionScores: Record<string, number>,
  questionCount: number,
  calculateResult: CalculateResult,
): TestState {
  if (!state.started || state.completed || state.currentQuestion >= questionCount) {
    return state;
  }

  const scores = { ...state.scores };
  for (const [key, value] of Object.entries(optionScores)) {
    scores[key] = (scores[key] ?? 0) + value;
  }

  const currentQuestion = state.currentQuestion + 1;
  const completed = currentQuestion === questionCount;

  const next = {
    ...state,
    currentQuestion,
    scores,
    answers: [...state.answers, state.currentQuestion],
    completed: false,
    resultId: undefined,
  };

  return completed ? completeTestState(next, scores, questionCount, calculateResult) : next;
}

export function normalizeTestState(
  value: unknown,
  testId: string,
  questionCount: number,
  resultIds: string[],
): TestState {
  const initial = createInitialTestState(testId);
  if (!value || typeof value !== 'object') return initial;

  const state = value as Partial<TestState>;
  if (state.version !== TEST_STATE_VERSION || state.testId !== testId) return initial;
  if (typeof state.started !== 'boolean' || typeof state.completed !== 'boolean') return initial;
  if (!Number.isInteger(state.currentQuestion) || state.currentQuestion! < 0) return initial;
  if (!Array.isArray(state.answers) || !state.answers.every(Number.isInteger)) return initial;
  if (!state.scores || typeof state.scores !== 'object' || Array.isArray(state.scores)) return initial;

  const scoreEntries = Object.entries(state.scores);
  if (scoreEntries.some(([key, value]) =>
    !resultIds.includes(key) || typeof value !== 'number' || !Number.isFinite(value),
  )) return initial;
  if (state.answers.some((answer, index) => answer !== index)) return initial;
  const scores = Object.fromEntries(scoreEntries) as Record<string, number>;

  if (!state.started) return initial;

  if (state.completed) {
    if (
      state.currentQuestion !== questionCount ||
      state.answers.length !== questionCount ||
      !state.resultId ||
      !resultIds.includes(state.resultId)
    ) {
      return initial;
    }
    return {
      ...initial,
      started: true,
      completed: true,
      currentQuestion: questionCount,
      scores,
      answers: [...state.answers],
      resultId: state.resultId,
    };
  }

  if (state.currentQuestion! >= questionCount || state.answers.length !== state.currentQuestion) {
    return initial;
  }

  return {
    ...initial,
    started: true,
    currentQuestion: state.currentQuestion!,
    scores,
    answers: [...state.answers],
  };
}
