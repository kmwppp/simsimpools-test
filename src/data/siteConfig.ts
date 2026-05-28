import { blogPosts } from './blog';
import { testsMeta } from './tests';

/** 사이트 전체 집계 — 포스트/테스트 추가 시 자동 갱신 */
export const ESSAY_COUNT = blogPosts.length;
export const TEST_COUNT = testsMeta.length;
