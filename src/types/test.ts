export interface TestOption {
  id: string;
  text: string;
  scores: Record<string, number>;
}

export interface TestQuestion {
  id: number;
  question: string;
  options: TestOption[];
}

export interface TestResult {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  description: string[];
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  relationships: string;
  stressPattern: string;
  recommendedActivities: string[];
  selfGuide: string;
  relatedTests: string[];
  shareText: string;
}

export interface TestAuthor {
  name: string;
  role: string;
  bio: string;
}

export interface TestMeta {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  categoryColor: string;
  duration: string;
  questionCount: number;
  tags: string[];
  thumbnail: string;
  popular?: boolean;
  isNew?: boolean;
  /** 작성자 정보 */
  author?: TestAuthor;
  /** 최초 게시일 (YYYY-MM-DD) */
  publishedAt?: string;
  /** 마지막 수정일 (YYYY-MM-DD) */
  lastModified?: string;
  /** 데이터 출처 */
  references?: string[];
}

export interface Test extends TestMeta {
  questions: TestQuestion[];
  results: Record<string, TestResult>;
  calculateResult: (scores: Record<string, number>) => string;
}
