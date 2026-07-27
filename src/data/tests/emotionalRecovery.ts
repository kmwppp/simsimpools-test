import { Test } from '../../types/test';

export const emotionalRecoveryTest: Test = {
  id: 'emotional-recovery',
  title: '힘든 일 뒤 나는 무엇으로 흐름을 바꿀까?',
  subtitle: '지치거나 마음이 무거울 때 먼저 고르는 회복 활동',
  description:
    '힘들고 지쳤을 때 자주 선택하는 움직임, 혼자 쉬기, 대화, 표현 활동을 가볍게 살펴봅니다.',
  category: '회복 활동',
  categoryColor: 'emerald',
  duration: '3~4분',
  tags: ['감정', '회복', '관찰', '쉼'],
  thumbnail: '🌱',
  publishedAt: '2025-08-20',
  lastModified: '2026-07-27',
  questions: [
    {
      id: 1,
      question: '감정적으로 힘든 일이 있었을 때 가장 먼저 하고 싶은 것은?',
      options: [
        { id: 'a', text: '운동, 청소, 요리 등 몸을 움직이는 활동을 한다', scores: { active: 3, solitary: 0, social: 0, creative: 0 } },
        { id: 'b', text: '혼자 조용한 공간에서 생각을 정리한다', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '친한 사람에게 연락해서 털어놓고 싶다', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '그림, 글쓰기, 음악 등 창작 활동을 통해 표현하고 싶다', scores: { active: 0, solitary: 0, social: 0, creative: 3 } },
      ],
    },
    {
      id: 2,
      question: '일이 잘 안 풀리는 날, 나에게 가장 위로가 되는 것은?',
      options: [
        { id: 'a', text: '할 수 있는 무언가를 성취하거나 생산적인 일을 하는 것', scores: { active: 3, solitary: 0, social: 0, creative: 0 } },
        { id: 'b', text: '아무도 없는 공간에서 조용히 쉬며 혼자 있는 시간', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '좋아하는 사람과 밥을 먹거나 수다를 떠는 것', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '좋아하는 음악을 들으며 뭔가를 만들거나 기록하는 것', scores: { active: 0, solitary: 0, social: 0, creative: 3 } },
      ],
    },
    {
      id: 3,
      question: '감정적으로 완전히 지쳤을 때 나는?',
      options: [
        { id: 'a', text: '억지로라도 나가서 몸을 쓰면 오히려 기분이 나아진다', scores: { active: 3, solitary: 0, social: 0, creative: 0 } },
        { id: 'b', text: '아무것도 하지 않고 누워서 충분히 쉬어야 한다', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '혼자 있으면 더 우울해져서 누군가와 함께 있고 싶다', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '감정을 정리하는 무언가를 만들어내면 마음이 가벼워진다', scores: { active: 0, solitary: 0, social: 0, creative: 3 } },
      ],
    },
    {
      id: 4,
      question: '마음이 복잡할 때 나는 주로?',
      options: [
        { id: 'a', text: '산책이나 운동으로 생각을 비우고 몸을 쓴다', scores: { active: 3, solitary: 1, social: 0, creative: 0 } },
        { id: 'b', text: '조용히 누워 천장을 보거나 명상하며 생각을 정리한다', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '믿을 수 있는 사람과 이야기를 나누며 정리한다', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '일기를 쓰거나 음악을 들으며 감정을 표현한다', scores: { active: 0, solitary: 1, social: 0, creative: 3 } },
      ],
    },
    {
      id: 5,
      question: '힘든 감정이 빠르게 해소될 때는 언제인가요?',
      options: [
        { id: 'a', text: '뭔가 하나를 해냈을 때, 또는 몸을 많이 움직이고 난 후', scores: { active: 3, solitary: 0, social: 0, creative: 0 } },
        { id: 'b', text: '아무도 방해받지 않고 충분히 혼자 있고 난 후', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '친한 사람에게 모두 털어놓고 나서', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '감정을 글이나 그림 등으로 표현하고 난 후', scores: { active: 0, solitary: 0, social: 0, creative: 3 } },
      ],
    },
    {
      id: 6,
      question: '감정 회복을 위해 가장 자주 하는 것은?',
      options: [
        { id: 'a', text: '달리기, 등산, 수영, 청소 등 신체 활동', scores: { active: 3, solitary: 0, social: 0, creative: 0 } },
        { id: 'b', text: '혼자 카페에 앉아 있거나 조용한 곳에서 멍 때리기', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '친구와 밥 먹기, 전화 수다, 함께 시간 보내기', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '음악 듣기, 독서, 그림 그리기, 일기 쓰기', scores: { active: 0, solitary: 1, social: 0, creative: 3 } },
      ],
    },
    {
      id: 7,
      question: '슬프거나 화가 날 때, 혼자 있으면 어떻게 되나요?',
      options: [
        { id: 'a', text: '생각이 많아지기 때문에 몸을 쓰는 활동으로 전환하게 된다', scores: { active: 3, solitary: 0, social: 0, creative: 0 } },
        { id: 'b', text: '혼자 있는 것이 오히려 회복에 도움이 된다', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '혼자 있으면 더 힘들어져서 누군가가 필요하다', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '혼자 감정을 정리하고 표현하는 시간이 좋다', scores: { active: 0, solitary: 1, social: 0, creative: 3 } },
      ],
    },
    {
      id: 8,
      question: '완전히 기운을 차렸다는 느낌이 드는 순간은?',
      options: [
        { id: 'a', text: '땀을 흘리고 나서, 또는 뭔가를 정리하고 완성하고 나서', scores: { active: 3, solitary: 0, social: 0, creative: 0 } },
        { id: 'b', text: '충분히 쉬고 나서 마음이 고요해졌을 때', scores: { active: 0, solitary: 3, social: 0, creative: 0 } },
        { id: 'c', text: '친한 사람과 함께하고 나서 따뜻한 감정이 채워졌을 때', scores: { active: 0, solitary: 0, social: 3, creative: 0 } },
        { id: 'd', text: '감정이 담긴 무언가를 만들어내거나 표현하고 나서', scores: { active: 0, solitary: 0, social: 0, creative: 3 } },
      ],
    },
  ],
  results: {
    active: {
      id: 'active',
      title: '활동 회복형',
      subtitle: '힘든 일 뒤 몸을 움직이거나 할 일을 시작하는 활동을 자주 고른 응답',
      emoji: '🏃',
      relatedTests: ['stress-response', 'animal-personality', 'love-style'],
    },
    solitary: {
      id: 'solitary',
      title: '고독 회복형',
      subtitle: '힘든 일 뒤 자극을 줄이고 혼자 쉬거나 생각하는 활동을 자주 고른 응답',
      emoji: '🌿',
      relatedTests: ['animal-personality', 'social-distance', 'love-style'],
    },
    social: {
      id: 'social',
      title: '사교 회복형',
      subtitle: '힘든 일 뒤 누군가와 이야기하거나 함께하는 활동을 자주 고른 응답',
      emoji: '☀️',
      relatedTests: ['love-style', 'social-distance', 'stress-response'],
    },
    creative: {
      id: 'creative',
      title: '창작 회복형',
      subtitle: '힘든 일 뒤 글·음악·그림·만들기 같은 표현 활동을 자주 고른 응답',
      emoji: '🎨',
      relatedTests: ['animal-personality', 'social-distance', 'love-style'],
    },
  },
  calculateResult: (scores) => {
    let maxKey = 'solitary';
    let maxVal = -1;
    for (const [k, v] of Object.entries(scores)) {
      if (v > maxVal) {
        maxVal = v;
        maxKey = k;
      }
    }
    return maxKey;
  },
};
