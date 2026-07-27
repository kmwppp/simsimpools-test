import { Test } from '../../types/test';

export const stressResponseTest: Test = {
  id: 'stress-response',
  title: '스트레스가 올라올 때 나는 어떻게 반응할까?',
  subtitle: '부담이 생긴 직후 먼저 고르는 대처 방식',
  description:
    '같은 스트레스를 받아도 사람마다 먼저 나오는 반응은 다릅니다. 내게 자주 나타나는 장면을 가볍게 살펴봅니다.',
  category: '반응 관찰',
  categoryColor: 'amber',
  duration: '3~4분',
  tags: ['스트레스', '반응', '감정', '관찰'],
  thumbnail: '🌊',
  isNew: true,
  publishedAt: '2025-08-10',
  lastModified: '2026-07-27',
  questions: [
    {
      id: 1,
      question: '극도로 스트레스를 받았을 때, 가장 먼저 나타나는 나의 모습은?',
      options: [
        { id: 'a', text: '화가 나거나 짜증이 폭발해서 주변 사람에게 표출한다', scores: { expressive: 3, suppressive: 0, avoidant: 0, solver: 0 } },
        { id: 'b', text: '겉으로는 멀쩡한 척하지만 속으로 참으며 혼자 앓는다', scores: { expressive: 0, suppressive: 3, avoidant: 0, solver: 0 } },
        { id: 'c', text: '스트레스 상황에서 도망치고 싶어서 딴짓을 하기 시작한다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '문제의 원인을 파악하고 어떻게 해결할지 생각부터 한다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
    {
      id: 2,
      question: '직장이나 학교에서 억울한 일이 생겼을 때?',
      options: [
        { id: 'a', text: '바로 그 자리에서 또는 그날 안에 의견을 표현한다', scores: { expressive: 3, suppressive: 0, avoidant: 0, solver: 1 } },
        { id: 'b', text: '속으로는 너무 힘들지만 말하지 못하고 집에서 혼자 울기도 한다', scores: { expressive: 0, suppressive: 3, avoidant: 0, solver: 0 } },
        { id: 'c', text: '그 상황을 떠올리기 싫어서 다른 것에 집중하거나 놀러 간다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '어떤 부분이 문제인지 정리하고 개선 방안을 생각한다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
    {
      id: 3,
      question: '오랜 기간 스트레스가 쌓이면 어떻게 되는 편인가요?',
      options: [
        { id: 'a', text: '감정이 터져 나와서 생각지도 못한 순간에 폭발한다', scores: { expressive: 3, suppressive: 1, avoidant: 0, solver: 0 } },
        { id: 'b', text: '몸이 아프거나 무기력감이 찾아오기 시작한다', scores: { expressive: 0, suppressive: 3, avoidant: 1, solver: 0 } },
        { id: 'c', text: '현실에서 점점 도망치고 싶어지고 무감각해진다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '조급해지거나 완벽하게 해결하려는 집착이 생긴다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
    {
      id: 4,
      question: '스트레스 해소로 가장 자주 하는 행동은?',
      options: [
        { id: 'a', text: '격렬하게 운동하거나 소리를 지르는 등 에너지를 발산한다', scores: { expressive: 3, suppressive: 0, avoidant: 0, solver: 0 } },
        { id: 'b', text: '혼자서 울거나 조용히 감정을 삭인다', scores: { expressive: 0, suppressive: 3, avoidant: 0, solver: 0 } },
        { id: 'c', text: '게임, 유튜브, 쇼핑 등 다른 것에 몰두해서 잊으려 한다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '문제를 정리하고 해결책을 찾는 데 집중한다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
    {
      id: 5,
      question: '친한 친구가 "요즘 힘들어 보인다"고 물어볼 때?',
      options: [
        { id: 'a', text: '그동안 쌓였던 것들을 한꺼번에 털어놓게 된다', scores: { expressive: 3, suppressive: 0, avoidant: 0, solver: 0 } },
        { id: 'b', text: '"괜찮아"라고 말하지만 사실 많이 힘들다', scores: { expressive: 0, suppressive: 3, avoidant: 0, solver: 0 } },
        { id: 'c', text: '화제를 돌리거나 가볍게 넘기려 한다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '상황을 간략히 설명하고 어떻게 해결할지 이야기를 나눈다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
    {
      id: 6,
      question: '중요한 마감이나 시험을 앞두고 스트레스를 받을 때?',
      options: [
        { id: 'a', text: '예민해져서 사소한 것에도 짜증이 나거나 날 선 반응이 나온다', scores: { expressive: 3, suppressive: 0, avoidant: 0, solver: 0 } },
        { id: 'b', text: '불안하지만 표현 못 하고 혼자 속으로 끙끙 앓는다', scores: { expressive: 0, suppressive: 3, avoidant: 0, solver: 0 } },
        { id: 'c', text: '오히려 준비를 미루고 딴것을 하면서 회피하게 된다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '할 일 목록을 만들고 체계적으로 하나씩 처리한다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
    {
      id: 7,
      question: '스트레스 해소 후 보통 어떤 감정을 느끼나요?',
      options: [
        { id: 'a', text: '시원하게 폭발하고 나면 개운하지만, 후회가 남기도 한다', scores: { expressive: 3, suppressive: 0, avoidant: 0, solver: 0 } },
        { id: 'b', text: '감정이 여전히 완전히 해소된 느낌이 들지 않는다', scores: { expressive: 0, suppressive: 3, avoidant: 1, solver: 0 } },
        { id: 'c', text: '잊고 즐기는 동안에는 좋지만 나중에 다시 밀려온다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '문제가 해결됐을 때 가장 속이 시원하다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
    {
      id: 8,
      question: '가장 힘들었을 때 주변 사람들의 반응은?',
      options: [
        { id: 'a', text: '"너 요즘 예민하다/무섭다"는 이야기를 들은 적 있다', scores: { expressive: 3, suppressive: 0, avoidant: 0, solver: 0 } },
        { id: 'b', text: '"힘든 줄 몰랐어, 왜 말 안 했어?"라는 이야기를 들은 적 있다', scores: { expressive: 0, suppressive: 3, avoidant: 0, solver: 0 } },
        { id: 'c', text: '"도대체 어디 있었어? 연락이 안 되더라"는 이야기를 들은 적 있다', scores: { expressive: 0, suppressive: 0, avoidant: 3, solver: 0 } },
        { id: 'd', text: '"항상 혼자 해결하려 한다, 우리한테 기대도 돼"라는 이야기를 들은 적 있다', scores: { expressive: 0, suppressive: 0, avoidant: 0, solver: 3 } },
      ],
    },
  ],
  results: {
    expressive: {
      id: 'expressive',
      title: '표출형',
      subtitle: '부담이 생겼을 때 감정을 말이나 행동으로 드러내는 선택이 많이 모인 결과',
      emoji: '🌋',
      relatedTests: ['animal-personality', 'love-style', 'emotional-recovery'],
    },
    suppressive: {
      id: 'suppressive',
      title: '억제형',
      subtitle: '부담이 생겼을 때 감정을 바로 드러내지 않고 할 일을 이어가는 선택이 많이 모인 결과',
      emoji: '🌑',
      relatedTests: ['emotional-recovery', 'social-distance', 'animal-personality'],
    },
    avoidant: {
      id: 'avoidant',
      title: '회피형',
      subtitle: '부담이 생겼을 때 잠시 다른 일로 옮기거나 거리를 두는 선택이 많이 모인 결과',
      emoji: '🌊',
      relatedTests: ['emotional-recovery', 'stress-response', 'social-distance'],
    },
    solver: {
      id: 'solver',
      title: '해결형',
      subtitle: '부담이 생겼을 때 원인을 정리하고 해결 행동을 시작하는 선택이 많이 모인 결과',
      emoji: '⚡',
      relatedTests: ['animal-personality', 'love-style', 'social-distance'],
    },
  },
  calculateResult: (scores) => {
    let maxKey = 'solver';
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
