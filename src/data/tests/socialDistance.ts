import { Test } from '../../types/test';

export const socialDistanceTest: Test = {
  id: 'social-distance',
  title: '인간관계에서 나는 어느 거리를 고를까?',
  subtitle: '연락과 함께하는 시간, 혼자 있는 여백을 살펴보는 문답',
  description:
    '사람마다 편안하게 느끼는 인간관계의 거리감이 다릅니다. 나에게 가까운 관계 거리 설정 방식을 가볍게 살펴봅니다.',
  category: '인간관계',
  categoryColor: 'teal',
  duration: '3~4분',
  tags: ['인간관계', '거리감', '소통', '선택'],
  thumbnail: '🌿',
  publishedAt: '2025-08-15',
  lastModified: '2026-07-27',
  questions: [
    {
      id: 1,
      question: '처음 만난 사람과 대화할 때 나는?',
      options: [
        { id: 'a', text: '처음부터 편하게 개인적인 이야기도 나눌 수 있다', scores: { close: 3, balanced: 0, independent: 0, adaptive: 1 } },
        { id: 'b', text: '어느 정도 알게 된 후에 조금씩 개인적인 이야기를 한다', scores: { close: 0, balanced: 3, independent: 0, adaptive: 1 } },
        { id: 'c', text: '가능하면 개인적인 이야기는 잘 하지 않는다', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '상대방의 분위기에 따라 다르게 대화를 이끈다', scores: { close: 0, balanced: 1, independent: 0, adaptive: 3 } },
      ],
    },
    {
      id: 2,
      question: '친구가 갑자기 집에 놀러오고 싶다고 할 때?',
      options: [
        { id: 'a', text: '언제든지 환영! 같이 있으면 신나고 좋다', scores: { close: 3, balanced: 0, independent: 0, adaptive: 0 } },
        { id: 'b', text: '미리 말해줬다면 괜찮지만 갑작스러우면 조금 당황한다', scores: { close: 0, balanced: 3, independent: 1, adaptive: 0 } },
        { id: 'c', text: '내 공간에 누군가 오는 것 자체가 편하지 않다', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '그날의 내 컨디션과 상황에 따라 다르다', scores: { close: 0, balanced: 0, independent: 0, adaptive: 3 } },
      ],
    },
    {
      id: 3,
      question: '친한 친구나 파트너에게 바라는 연락 빈도는?',
      options: [
        { id: 'a', text: '매일 안부를 나눠야 가까운 느낌이 든다', scores: { close: 3, balanced: 0, independent: 0, adaptive: 0 } },
        { id: 'b', text: '정해진 주기는 없지만 적당히 자주 연락하면 좋다', scores: { close: 0, balanced: 3, independent: 0, adaptive: 1 } },
        { id: 'c', text: '연락 빈도보다 만날 때 깊이 있게 연결되는 것이 더 중요하다', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '상황에 따라 다르며 특별한 규칙이 없어도 괜찮다', scores: { close: 0, balanced: 1, independent: 0, adaptive: 3 } },
      ],
    },
    {
      id: 4,
      question: '직장이나 학교에서 동료들과의 관계에서 나는?',
      options: [
        { id: 'a', text: '동료들과도 친밀하게 지내며 개인적인 이야기도 나눈다', scores: { close: 3, balanced: 1, independent: 0, adaptive: 0 } },
        { id: 'b', text: '업무적으로 사이좋게 지내되 적당한 선을 유지한다', scores: { close: 0, balanced: 3, independent: 1, adaptive: 0 } },
        { id: 'c', text: '업무 외 개인적인 관계는 불필요하다고 생각한다', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '상대방에 따라 친하게 지내기도 하고 거리를 두기도 한다', scores: { close: 0, balanced: 0, independent: 0, adaptive: 3 } },
      ],
    },
    {
      id: 5,
      question: '오랫동안 보지 못했던 친구를 만났을 때?',
      options: [
        { id: 'a', text: '예전처럼 금방 가까워지고 오랫동안 이야기를 나눈다', scores: { close: 3, balanced: 1, independent: 0, adaptive: 0 } },
        { id: 'b', text: '반갑지만 오랜만이라 약간의 어색함이 있다', scores: { close: 0, balanced: 3, independent: 0, adaptive: 1 } },
        { id: 'c', text: '공백이 있으면 다시 친해지기가 쉽지 않게 느껴진다', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '상대방의 반응에 따라 내 반응도 달라진다', scores: { close: 0, balanced: 0, independent: 0, adaptive: 3 } },
      ],
    },
    {
      id: 6,
      question: '누군가 내 고민을 물어봤을 때?',
      options: [
        { id: 'a', text: '친하다면 솔직하게 다 털어놓을 수 있다', scores: { close: 3, balanced: 1, independent: 0, adaptive: 0 } },
        { id: 'b', text: '어느 정도 신뢰가 있다면 조금씩 이야기한다', scores: { close: 0, balanced: 3, independent: 0, adaptive: 1 } },
        { id: 'c', text: '고민은 웬만하면 혼자 해결하려 하고 잘 이야기하지 않는다', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '상대방이 얼마나 진심으로 물어보느냐에 따라 다르다', scores: { close: 0, balanced: 0, independent: 0, adaptive: 3 } },
      ],
    },
    {
      id: 7,
      question: '나의 인간관계 스타일을 가장 잘 나타내는 것은?',
      options: [
        { id: 'a', text: '많은 사람들과 두루 친하게 지내는 편', scores: { close: 3, balanced: 0, independent: 0, adaptive: 1 } },
        { id: 'b', text: '몇몇과 깊이 있게 지내며 적당한 선을 유지하는 편', scores: { close: 0, balanced: 3, independent: 1, adaptive: 0 } },
        { id: 'c', text: '소수와만 아주 친하게 지내고 나머지는 거리를 두는 편', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '상황과 사람에 따라 관계 스타일이 달라지는 편', scores: { close: 0, balanced: 0, independent: 0, adaptive: 3 } },
      ],
    },
    {
      id: 8,
      question: '관계에서 가장 불편한 상황은?',
      options: [
        { id: 'a', text: '사람들이 나를 멀리하거나 소외시키는 것', scores: { close: 3, balanced: 0, independent: 0, adaptive: 0 } },
        { id: 'b', text: '기대 이상으로 지나치게 가까워지려 하거나 멀어지는 것', scores: { close: 0, balanced: 3, independent: 0, adaptive: 0 } },
        { id: 'c', text: '원하지 않는데 지나치게 친밀해지려는 것', scores: { close: 0, balanced: 0, independent: 3, adaptive: 0 } },
        { id: 'd', text: '상대방이 나의 유연한 관계 방식을 이해하지 못하는 것', scores: { close: 0, balanced: 0, independent: 0, adaptive: 3 } },
      ],
    },
  ],
  results: {
    close: {
      id: 'close',
      title: '밀착 추구형',
      subtitle: '자주 연락하고 함께하는 시간을 늘리는 선택이 많이 모인 결과',
      emoji: '🤗',
      relatedTests: ['love-style', 'stress-response', 'emotional-recovery'],
    },
    balanced: {
      id: 'balanced',
      title: '균형 유지형',
      subtitle: '함께하는 시간과 혼자 있는 여백을 번갈아 고려한 선택이 많이 모인 결과',
      emoji: '⚖️',
      relatedTests: ['love-style', 'animal-personality', 'stress-response'],
    },
    independent: {
      id: 'independent',
      title: '독립 선호형',
      subtitle: '연락 간격과 혼자 쓸 시간을 넉넉히 두는 선택이 많이 모인 결과',
      emoji: '🌙',
      relatedTests: ['emotional-recovery', 'animal-personality', 'love-style'],
    },
    adaptive: {
      id: 'adaptive',
      title: '상황 적응형',
      subtitle: '상대와 상황에 따라 연락과 거리의 정도를 바꾸는 선택이 많이 모인 결과',
      emoji: '🌈',
      relatedTests: ['animal-personality', 'love-style', 'emotional-recovery'],
    },
  },
  calculateResult: (scores) => {
    let maxKey = 'balanced';
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
