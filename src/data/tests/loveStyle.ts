import { Test } from '../../types/test';

export const loveStyleTest: Test = {
  id: 'love-style',
  title: '연애 장면에서 나는 무엇을 먼저 고를까?',
  subtitle: '표현·현실 조건·자율성·꾸준함을 비교하는 연애 문답',
  description:
    '로맨틱형, 현실주의형, 자유주의형, 헌신형 중 연애 상황에서 자주 선택하는 반응 경향을 가볍게 살펴봅니다.',
  category: '관계 선택',
  categoryColor: 'rose',
  duration: '3~5분',
  tags: ['연애', '사랑', '관계', '선택'],
  thumbnail: '💕',
  popular: true,
  publishedAt: '2025-08-05',
  lastModified: '2026-07-27',
  questions: [
    {
      id: 1,
      question: '좋아하는 사람이 생겼을 때 나는?',
      options: [
        { id: 'a', text: '설레는 감정에 온종일 그 사람 생각만 한다', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 1 } },
        { id: 'b', text: '감정은 느끼지만 먼저 그 사람에 대해 더 알아보려 한다', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '좋아하지만 나의 일상과 공간은 지키고 싶다', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '상대가 행복할 수 있도록 내가 할 수 있는 것을 바로 생각한다', scores: { romantic: 1, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 2,
      question: '이상적인 데이트 방식은?',
      options: [
        { id: 'a', text: '분위기 있는 레스토랑이나 야경 명소에서 로맨틱한 시간', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 1 } },
        { id: 'b', text: '함께 장을 보고 집에서 요리하며 현실적인 케미 확인', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '각자 하고 싶은 것을 하다가 가끔 만나 자유롭게 즐김', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '상대가 하고 싶은 것을 함께 해주며 기쁨을 나누는 것', scores: { romantic: 0, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 3,
      question: '연인과 다툼이 생겼을 때 나는?',
      options: [
        { id: 'a', text: '화해 장면까지 상상하며 어서 풀리기를 바란다', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 0 } },
        { id: 'b', text: '각자 충분히 생각할 시간을 갖고 냉정하게 대화한다', scores: { romantic: 0, pragmatic: 3, independent: 1, devoted: 0 } },
        { id: 'c', text: '서로의 공간이 필요하다고 생각하고 일단 거리를 둔다', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '내가 먼저 사과하고 빨리 화해하고 싶다', scores: { romantic: 0, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 4,
      question: '연인이 먼 곳으로 여행을 가게 된다면?',
      options: [
        { id: 'a', text: '보고 싶어서 편지나 선물을 미리 준비해준다', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 1 } },
        { id: 'b', text: '서로 연락 주기와 방법을 미리 정해두고 안심한다', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '나도 그동안 내 시간을 즐기면 되니 크게 신경 쓰지 않는다', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '떠나는 날까지 함께 있어주고 매일 연락하며 기다린다', scores: { romantic: 1, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 5,
      question: '연인에게 가장 바라는 것은?',
      options: [
        { id: 'a', text: '깜짝 선물이나 특별한 이벤트처럼 로맨틱한 표현', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 0 } },
        { id: 'b', text: '안정적이고 믿을 수 있는 미래 계획과 신뢰', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '서로의 개인 시간과 취미를 존중해주는 것', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '내가 힘들 때 항상 곁에 있어주는 든든한 존재', scores: { romantic: 0, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 6,
      question: '연인과의 관계에서 가장 중요한 것은?',
      options: [
        { id: 'a', text: '설레임과 두근거림이 유지되는 감정의 생동감', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 0 } },
        { id: 'b', text: '서로에 대한 신뢰와 현실적인 안정감', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '각자의 자유와 독립성이 보장되는 관계', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '서로를 위해 아낌없이 헌신하는 진심', scores: { romantic: 1, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 7,
      question: '연인과 처음으로 함께 여행을 간다면?',
      options: [
        { id: 'a', text: '야경 명소, 분위기 좋은 숙소 등 로맨틱한 코스를 준비한다', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 0 } },
        { id: 'b', text: '예산과 일정을 꼼꼼히 짜서 알차고 효율적으로 다닌다', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '큰 계획 없이 즉흥적으로 자유롭게 돌아다니고 싶다', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '연인이 가고 싶어하는 곳 위주로 맞춰서 행복하게 해준다', scores: { romantic: 0, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 8,
      question: '연인이 바쁜 시기에 연락이 줄었을 때?',
      options: [
        { id: 'a', text: '보고 싶고 서운해서 감정이 흔들린다', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 1 } },
        { id: 'b', text: '이해는 하지만 최소한의 연락 규칙은 지켜줬으면 한다', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '각자 바쁠 때는 연락이 줄어드는 게 당연하다고 생각한다', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '연인이 편하게 집중할 수 있도록 내가 더 배려한다', scores: { romantic: 0, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 9,
      question: '연인과 함께 있을 때 나는?',
      options: [
        { id: 'a', text: '같은 공간에 있다는 것만으로도 충분히 행복하다', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 1 } },
        { id: 'b', text: '함께 목표나 계획을 공유하고 이야기할 때 행복하다', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '각자 할 일을 하면서도 함께 있는 느낌이 좋다', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '연인의 표정과 감정을 살피며 무엇이 필요한지 생각한다', scores: { romantic: 0, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
    {
      id: 10,
      question: '연인과 헤어질 뻔한 위기를 겪었을 때?',
      options: [
        { id: 'a', text: '없이는 못 살 것 같아서 감정적으로 무너진다', scores: { romantic: 3, pragmatic: 0, independent: 0, devoted: 1 } },
        { id: 'b', text: '이 관계가 지속 가능한지 냉정하게 판단해본다', scores: { romantic: 0, pragmatic: 3, independent: 0, devoted: 0 } },
        { id: 'c', text: '아프지만 각자의 길이 있다면 받아들일 수 있다', scores: { romantic: 0, pragmatic: 0, independent: 3, devoted: 0 } },
        { id: 'd', text: '내가 더 잘못한 것이 있지 않을까 자책하며 매달린다', scores: { romantic: 0, pragmatic: 0, independent: 0, devoted: 3 } },
      ],
    },
  ],
  results: {
    romantic: {
      id: 'romantic',
      title: '로맨틱형',
      subtitle: '표현과 설렘, 특별한 순간을 먼저 고려한 선택이 많이 모인 결과',
      emoji: '🌹',
      relatedTests: ['animal-personality', 'emotional-recovery', 'social-distance'],
    },
    pragmatic: {
      id: 'pragmatic',
      title: '현실주의형',
      subtitle: '생활 조건과 실행 가능한 계획을 먼저 고려한 선택이 많이 모인 결과',
      emoji: '🏡',
      relatedTests: ['stress-response', 'animal-personality', 'social-distance'],
    },
    independent: {
      id: 'independent',
      title: '자유주의형',
      subtitle: '각자의 시간과 선택권을 먼저 고려한 선택이 많이 모인 결과',
      emoji: '🦋',
      relatedTests: ['social-distance', 'emotional-recovery', 'animal-personality'],
    },
    devoted: {
      id: 'devoted',
      title: '헌신형',
      subtitle: '꾸준한 연락과 약속, 관계 돌봄을 먼저 고려한 선택이 많이 모인 결과',
      emoji: '💝',
      relatedTests: ['animal-personality', 'stress-response', 'emotional-recovery'],
    },
  },
  calculateResult: (scores) => {
    let maxKey = 'romantic';
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
