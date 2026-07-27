import { Test } from '../../types/test';

export const animalPersonalityTest: Test = {
  id: 'animal-personality',
  title: '내 반응은 어떤 동물과 닮았을까?',
  subtitle: '일상에서 자주 나오는 반응을 동물 이미지로 가볍게 떠올려보기',
  description:
    '고양이, 강아지, 여우, 올빼미 중 내가 자주 보이는 반응과 가까운 이미지를 가볍게 살펴봅니다.',
  category: '반응 관찰',
  categoryColor: 'violet',
  duration: '3~5분',
  tags: ['반응', '관계', '에너지', '관찰'],
  thumbnail: '🦊',
  popular: true,
  publishedAt: '2025-08-01',
  lastModified: '2026-07-27',
  questions: [
    {
      id: 1,
      question: '지친 하루를 마치고 집에 돌아왔을 때, 가장 먼저 하고 싶은 것은?',
      options: [
        { id: 'a', text: '조용히 혼자서 책을 읽거나 좋아하는 영상을 보며 쉰다', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '친구나 가족에게 연락해서 오늘 있었던 이야기를 나누고 싶다', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '관심 있던 새로운 취미나 콘텐츠를 탐색해본다', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '내일 계획을 세우거나 할 일 목록을 정리한다', scores: { cat: 0, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 2,
      question: '처음 보는 사람들이 많은 자리에 가게 되었을 때 나는?',
      options: [
        { id: 'a', text: '구석에서 조용히 관찰하며 천천히 적응한다', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '적극적으로 먼저 말을 걸며 새 친구를 사귀고 싶다', scores: { cat: 0, dog: 3, fox: 1, owl: 0 } },
        { id: 'c', text: '상황을 재빠르게 파악하고 핵심 인물에게 접근한다', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '미리 참석자 정보를 파악해두고 계획적으로 행동한다', scores: { cat: 0, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 3,
      question: '친구들 사이에서 나의 역할은 주로?',
      options: [
        { id: 'a', text: '말수는 적지만 조용히 들어주는 든든한 존재', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '분위기를 밝히고 모두에게 에너지를 나눠주는 역할', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '재치 있는 아이디어와 해결책을 제시하는 역할', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '정확한 정보와 현명한 조언을 해주는 역할', scores: { cat: 0, dog: 0, fox: 1, owl: 3 } },
      ],
    },
    {
      id: 4,
      question: '중요한 결정을 내려야 할 때 나는 주로?',
      options: [
        { id: 'a', text: '내 직관과 느낌을 가장 먼저 따른다', scores: { cat: 3, dog: 1, fox: 0, owl: 0 } },
        { id: 'b', text: '주변 사람들의 의견을 폭넓게 듣고 결정한다', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '다양한 가능성을 빠르게 분석해 최선을 선택한다', scores: { cat: 0, dog: 0, fox: 3, owl: 1 } },
        { id: 'd', text: '데이터와 논리적 근거를 충분히 검토한 뒤 결정한다', scores: { cat: 0, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 5,
      question: '갈등 상황이 생겼을 때 나는?',
      options: [
        { id: 'a', text: '일단 거리를 두고 혼자서 생각할 시간이 필요하다', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '바로 이야기를 나눠서 감정을 풀고 해결하고 싶다', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '상황을 파악하고 가장 유리한 방식으로 대처한다', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '객관적인 사실과 논리로 차분하게 정리하려 한다', scores: { cat: 1, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 6,
      question: '나에게 이상적인 주말은?',
      options: [
        { id: 'a', text: '집에서 나만의 시간을 보내며 완전히 충전하는 것', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '친구들과 신나는 활동을 하거나 새로운 곳을 함께 가는 것', scores: { cat: 0, dog: 3, fox: 1, owl: 0 } },
        { id: 'c', text: '새로운 장소나 경험을 탐험하고 자극을 받는 것', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '배우고 싶은 것을 공부하거나 독서와 학습에 집중하는 것', scores: { cat: 1, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 7,
      question: '타인에게 칭찬을 받았을 때 나의 반응은?',
      options: [
        { id: 'a', text: '쑥스럽고 어색해서 어떻게 반응해야 할지 모른다', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '기분이 너무 좋아서 에너지가 넘치고 더 잘하고 싶어진다', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '담담하게 받아들이되 더 잘할 방법을 이미 생각하고 있다', scores: { cat: 0, dog: 0, fox: 3, owl: 1 } },
        { id: 'd', text: '감사히 받아들이고, 이유를 분석해 다음에 활용한다', scores: { cat: 0, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 8,
      question: '나에게 가장 불편한 상황은?',
      options: [
        { id: 'a', text: '개인 공간이나 사생활이 침범당할 때', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '혼자 남겨지거나 무리에서 소외당할 때', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '나의 능력이나 가능성이 제한받을 때', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '비논리적인 상황이나 무질서한 환경에 처할 때', scores: { cat: 0, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 9,
      question: '새로운 프로젝트나 아이디어를 접했을 때 나는?',
      options: [
        { id: 'a', text: '천천히 내 방식대로 충분히 이해하면서 접근한다', scores: { cat: 3, dog: 0, fox: 0, owl: 1 } },
        { id: 'b', text: '팀원들과 함께 신나게 시작하고 싶어 바로 공유한다', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '어떻게 활용할 수 있을지 빠르게 구상하고 행동한다', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '전체적인 계획과 구조를 먼저 철저히 세운다', scores: { cat: 0, dog: 0, fox: 0, owl: 3 } },
      ],
    },
    {
      id: 10,
      question: '내가 가장 자랑스럽게 여기는 나의 특징은?',
      options: [
        { id: 'a', text: '독립적이고 자신만의 확실한 세계와 취향이 있는 것', scores: { cat: 3, dog: 0, fox: 0, owl: 0 } },
        { id: 'b', text: '따뜻하고 어디서든 사람들과 잘 어울리는 것', scores: { cat: 0, dog: 3, fox: 0, owl: 0 } },
        { id: 'c', text: '영리하고 유연하게 상황에 대처하는 능력', scores: { cat: 0, dog: 0, fox: 3, owl: 0 } },
        { id: 'd', text: '분석적이고 체계적으로 깊이 생각하는 것', scores: { cat: 0, dog: 0, fox: 0, owl: 3 } },
      ],
    },
  ],
  results: {
    cat: {
      id: 'cat',
      title: '고양이형',
      subtitle: '혼자 쉬기·천천히 관찰하기·자기 공간을 자주 고른 응답',
      emoji: '🐱',
      relatedTests: ['love-style', 'emotional-recovery', 'social-distance'],
    },
    dog: {
      id: 'dog',
      title: '강아지형',
      subtitle: '사람과 이야기하기·함께 활동하기·바로 표현하기를 자주 고른 응답',
      emoji: '🐶',
      relatedTests: ['love-style', 'social-distance', 'stress-response'],
    },
    fox: {
      id: 'fox',
      title: '여우형',
      subtitle: '새로운 가능성 탐색·빠른 판단·대안 찾기를 자주 고른 응답',
      emoji: '🦊',
      relatedTests: ['stress-response', 'social-distance', 'love-style'],
    },
    owl: {
      id: 'owl',
      title: '올빼미형',
      subtitle: '정보 확인·계획 세우기·차분한 정리를 자주 고른 응답',
      emoji: '🦉',
      relatedTests: ['stress-response', 'love-style', 'emotional-recovery'],
    },
  },
  calculateResult: (scores) => {
    let maxKey = 'cat';
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
