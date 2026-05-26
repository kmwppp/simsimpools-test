import { animalPersonalityTest } from './tests/animalPersonality';
import { loveStyleTest } from './tests/loveStyle';
import { stressResponseTest } from './tests/stressResponse';
import { socialDistanceTest } from './tests/socialDistance';
import { emotionalRecoveryTest } from './tests/emotionalRecovery';
import type { Test, TestMeta } from '../types/test';

export const tests: Test[] = [
  animalPersonalityTest,
  loveStyleTest,
  stressResponseTest,
  socialDistanceTest,
  emotionalRecoveryTest,
];

export const testsMeta: TestMeta[] = tests.map(({ questions: _q, results: _r, calculateResult: _c, ...meta }) => meta);

export function getTestById(id: string): Test | undefined {
  return tests.find(t => t.id === id);
}

export function getTestMetaById(id: string): TestMeta | undefined {
  return testsMeta.find(t => t.id === id);
}

export function getPopularTests(): TestMeta[] {
  return testsMeta.filter(t => t.popular);
}
