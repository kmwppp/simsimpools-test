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
}

export interface Test extends TestMeta {
  questions: TestQuestion[];
  results: Record<string, TestResult>;
  calculateResult: (scores: Record<string, number>) => string;
}
