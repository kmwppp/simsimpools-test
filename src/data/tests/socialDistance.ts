import { Test } from '../../types/test';

export const socialDistanceTest: Test = {
  id: 'social-distance',
  title: '나의 인간관계 거리감 테스트',
  subtitle: '사람들과의 거리를 어떻게 조율하는지 알아보는 테스트',
  description:
    '사람마다 편안하게 느끼는 인간관계의 거리감이 다릅니다. 8가지 질문으로 알아보는 나만의 관계 거리 설정 방식을 확인해보세요.',
  category: '인간관계',
  categoryColor: 'teal',
  duration: '3~4분',
  questionCount: 8,
  tags: ['인간관계', '거리감', '소통', '성향'],
  thumbnail: '🌿',
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
      subtitle: '따뜻한 유대감으로 가까운 관계를 소중히 여기는 당신',
      emoji: '🤗',
      description: [
        '밀착 추구형인 당신은 사람들과 가깝게 연결되어 있을 때 가장 편안함을 느끼는 타입입니다. 따뜻한 관계와 깊은 유대감을 중요하게 여기며, 상대방과 많은 것을 나누는 것에서 진정한 관계의 의미를 찾습니다.',
        '당신은 사람을 좋아하고 그 안에서 에너지를 얻는 타입입니다. 새로운 사람을 만날 때도 빠르게 마음을 열고 친밀감을 형성할 수 있는 능력이 있습니다. 이런 따뜻함과 개방성은 많은 사람들에게 편안함을 줍니다.',
        '밀착 추구형은 관계가 단절되거나 멀어지는 것에 민감할 수 있으므로, 건강한 경계선을 유지하면서도 따뜻한 연결을 이어가는 균형이 중요합니다.',
      ],
      traits: [
        '타인과 가깝게 연결될수록 편안함을 느낌',
        '빠른 친밀감 형성 능력',
        '관계에서 많은 것을 나누고 싶어함',
        '연락 빈도와 함께하는 시간을 중요시함',
        '혼자보다 함께 있을 때 에너지를 얻음',
        '타인의 감정에 민감하고 공감 능력이 높음',
        '관계 단절이나 소외감에 민감하게 반응',
      ],
      strengths: [
        '따뜻한 에너지로 주변 사람들에게 편안함 제공',
        '깊은 공감 능력으로 진정성 있는 관계 형성',
        '사람들과 빠르게 친해지는 사교성',
        '관계를 소중히 여기고 유지하려는 노력',
        '공동체 의식이 강해 팀워크에 기여',
      ],
      weaknesses: [
        '관계가 멀어지면 불안감을 느낄 수 있음',
        '타인의 감정에 지나치게 영향받아 소진될 수 있음',
        '자신의 경계를 지키는 것이 어려울 수 있음',
        '관계에 대한 기대치가 높아 실망하기 쉬움',
      ],
      relationships:
        '밀착 추구형은 따뜻하고 표현이 풍부한 파트너와 잘 맞습니다. 관계에서 충분한 유대감과 연결감을 느낄 때 행복하며, 지나치게 독립적이거나 거리를 두는 파트너와는 외로움을 느낄 수 있습니다. 건강한 경계선과 자기 시간을 확보하는 것이 장기적인 관계 건강에 중요합니다.',
      stressPattern:
        '밀착 추구형은 관계에서 거절당하거나 소외되는 상황에서 가장 큰 스트레스를 받습니다. 연락이 줄거나 관계가 소원해진다고 느낄 때 불안해지는 경향이 있습니다.',
      recommendedActivities: [
        '그룹 활동이나 커뮤니티 참여',
        '감사와 애정을 표현하는 습관 만들기',
        '자신만을 위한 시간 확보하기',
        '경계선 설정 연습하기',
        '소중한 관계에 감사 편지 쓰기',
      ],
      selfGuide:
        '밀착 추구형인 당신의 따뜻함은 정말 소중한 자산입니다. 다만, 모든 관계가 같은 친밀도를 가질 수 없다는 것을 받아들이세요. 때로는 자신에게도 충분한 시간과 공간을 주는 것이 더 풍요로운 관계를 만드는 기반이 됩니다.',
      relatedTests: ['love-style', 'stress-response', 'emotional-recovery'],
      shareText: '나는 밀착 추구형! 따뜻한 유대감으로 가까운 관계를 소중히 여기는 타입이에요 🤗',
    },
    balanced: {
      id: 'balanced',
      title: '균형 유지형',
      subtitle: '가깝지도 멀지도 않은 편안한 거리를 찾는 당신',
      emoji: '⚖️',
      description: [
        '균형 유지형인 당신은 인간관계에서 너무 가깝지도, 너무 멀지도 않은 적절한 거리를 유지하는 것이 편안한 타입입니다. 친밀한 관계도 소중히 여기지만, 서로의 경계를 존중하는 것도 중요하게 생각합니다.',
        '당신은 관계에서 균형 감각이 뛰어납니다. 상황에 따라 적절히 가까워지고 거리를 두는 능력이 있으며, 다양한 유형의 사람들과 무난하게 지낼 수 있습니다.',
        '균형 유지형은 관계에서 안정감을 주는 존재입니다. 지나치게 의존하거나 지나치게 차갑지 않아 많은 사람들이 편안하게 다가오는 경향이 있습니다.',
      ],
      traits: [
        '가깝고도 먼 적당한 거리를 자연스럽게 유지',
        '서로의 경계를 존중하는 관계 방식',
        '친밀감과 독립성의 균형을 중요시함',
        '상황에 따라 유연하게 관계 거리를 조율',
        '다양한 유형의 사람들과 원만하게 지냄',
        '극단적인 밀착이나 단절을 불편해함',
        '안정적이고 지속 가능한 관계 추구',
      ],
      strengths: [
        '다양한 사람들과 원만하게 지내는 능력',
        '관계에서 안정감과 신뢰감 제공',
        '지나치지 않은 균형 잡힌 감정 표현',
        '유연하게 관계 거리를 조율하는 능력',
        '장기적으로 지속 가능한 관계 형성',
      ],
      weaknesses: [
        '너무 중립적이어서 특별한 인상을 남기기 어려울 수 있음',
        '감정적으로 깊이 연결되는 것이 어려울 수 있음',
        '원칙을 지키다 보면 유연하지 않아 보일 수 있음',
        '갈등 상황에서 명확한 입장 표명이 어렵기도 함',
      ],
      relationships:
        '균형 유지형은 대부분의 유형과 잘 어울리는 편입니다. 지나치게 의존적이거나 지나치게 거리를 두는 파트너와는 마찰이 생길 수 있지만, 서로의 차이를 인정하면 보완 관계가 됩니다. 가장 중요한 것은 파트너와 서로가 원하는 거리에 대해 솔직하게 이야기하는 것입니다.',
      stressPattern:
        '균형 유지형은 관계가 지나치게 한쪽으로 치우칠 때 — 너무 의존적이 되거나 너무 멀어질 때 — 스트레스를 받습니다. 균형이 깨질 때 불안감을 느끼며 원래 상태로 되돌아가려는 노력을 합니다.',
      recommendedActivities: [
        '다양한 사람들과 소통하는 활동',
        '명확한 자기 의견 표현 연습',
        '깊은 감정을 표현하는 글쓰기나 대화 연습',
        '관계 속에서 자신의 필요를 인식하기',
        '소수와 더 깊이 있는 관계 도전하기',
      ],
      selfGuide:
        '균형 유지형인 당신은 어디서든 편안한 분위기를 만드는 능력이 있습니다. 균형을 유지하는 것도 좋지만, 때로는 조금 더 가까이 다가가거나 솔직하게 감정을 표현하는 것이 관계를 더욱 풍요롭게 만들 수 있습니다.',
      relatedTests: ['love-style', 'animal-personality', 'stress-response'],
      shareText: '나는 균형 유지형! 가깝지도 멀지도 않은 편안한 거리를 찾는 타입이에요 ⚖️',
    },
    independent: {
      id: 'independent',
      title: '독립 선호형',
      subtitle: '명확한 경계선으로 나만의 공간을 소중히 여기는 당신',
      emoji: '🌙',
      description: [
        '독립 선호형인 당신은 인간관계에서 명확한 경계선과 개인 공간을 소중히 여기는 타입입니다. 소수와 깊이 있는 관계를 맺는 것을 선호하며, 대부분의 사람들과는 적당한 거리를 유지합니다.',
        '당신에게 진짜 친구는 손에 꼽힐 정도지만, 그 관계들은 매우 깊고 진합니다. 표면적인 관계보다 진정성 있는 소수의 관계를 더 가치 있게 여깁니다.',
        '독립 선호형은 혼자만의 시간이 충분히 있을 때 가장 편안하고 행복합니다. 과도한 사회적 상호작용은 에너지를 소진시키며, 혼자서 재충전하는 시간이 꼭 필요합니다.',
      ],
      traits: [
        '명확한 경계선과 개인 공간을 매우 중요시함',
        '소수와 깊이 있는 관계를 선호',
        '대부분의 사람들과 적당한 거리 유지',
        '혼자만의 시간에서 에너지를 충전',
        '과도한 사회적 상호작용을 피하는 경향',
        '진정성 있는 관계만을 선별하는 기준',
        '타인의 경계도 잘 존중하는 편',
      ],
      strengths: [
        '자신의 필요와 경계를 명확히 알고 지키는 능력',
        '깊고 진정성 있는 소수의 관계 유지',
        '독립적이어서 타인에게 부담을 주지 않음',
        '자기 자신과 잘 지내는 심리적 안정감',
        '타인의 경계를 자연스럽게 존중',
      ],
      weaknesses: [
        '새로운 사람과 친밀해지기 어렵고 시간이 오래 걸림',
        '오해받거나 차갑고 무관심한 사람으로 보일 수 있음',
        '사회적 고립으로 이어질 수 있는 위험',
        '도움이 필요할 때 요청하기 어려울 수 있음',
      ],
      relationships:
        '독립 선호형은 자신과 비슷하게 개인 공간을 소중히 여기는 파트너와 잘 맞습니다. 지나치게 의존적이거나 밀착을 원하는 파트너와는 갈등이 생기기 쉽습니다. 파트너에게 자신이 거리를 두는 것이 차가움이 아니라 충전의 방식임을 명확히 설명하는 것이 중요합니다.',
      stressPattern:
        '독립 선호형은 개인 공간이 침범당하거나 원하지 않는 사회적 관계에 강제로 끌려가는 상황에서 가장 큰 스트레스를 받습니다. 과도한 사회적 상호작용 후에는 반드시 혼자만의 회복 시간이 필요합니다.',
      recommendedActivities: [
        '혼자서 즐기는 취미 활동 (독서, 그림, 음악)',
        '자연 속에서 혼자 산책하거나 캠핑',
        '글쓰기나 일기로 자기 내면 탐색',
        '소수의 가까운 사람들과 의미 있는 시간 갖기',
        '새로운 사람과 천천히 연결되는 활동 도전하기',
      ],
      selfGuide:
        '독립 선호형인 당신의 경계선과 개인 공간은 존중받아야 합니다. 하지만 모든 관계를 차단하는 것은 장기적으로 외로움을 만들 수 있습니다. 신뢰할 수 있는 한두 명과 조금씩 마음을 여는 것이 심리적 건강을 유지하는 중요한 방법입니다.',
      relatedTests: ['emotional-recovery', 'animal-personality', 'love-style'],
      shareText: '나는 독립 선호형! 명확한 경계선으로 나만의 공간을 소중히 여기는 타입이에요 🌙',
    },
    adaptive: {
      id: 'adaptive',
      title: '상황 적응형',
      subtitle: '관계와 맥락에 따라 유연하게 거리를 조율하는 당신',
      emoji: '🌈',
      description: [
        '상황 적응형인 당신은 관계와 상황에 따라 유연하게 거리를 조율하는 능력이 뛰어난 타입입니다. 때로는 매우 가깝게, 때로는 적당한 거리를 유지하며, 상대방과 상황에 맞게 관계 방식을 조정합니다.',
        '당신은 다양한 유형의 사람들과 어울릴 수 있는 높은 사회적 유연성을 가지고 있습니다. 어떤 상황에서도 적응력이 뛰어나며, 관계에서 필요한 것이 무엇인지 빠르게 파악하는 능력이 있습니다.',
        '상황 적응형은 다양한 관계를 능숙하게 다루는 것처럼 보이지만, 때로는 자신이 진정으로 원하는 거리감이 무엇인지 명확히 알지 못해 혼란스러울 수 있습니다.',
      ],
      traits: [
        '상황과 상대방에 따라 유연하게 거리를 조율',
        '다양한 유형의 사람들과 어울리는 높은 적응력',
        '관계에서 필요한 것을 빠르게 파악하는 능력',
        '일관된 관계 방식보다 유연한 접근 선호',
        '사회적 상황 읽기 능력이 뛰어남',
        '때로는 자신의 진정한 관계 욕구가 불분명할 수 있음',
        '다양한 역할을 상황에 따라 수행할 수 있음',
      ],
      strengths: [
        '어떤 상황에서도 유연하게 적응하는 능력',
        '다양한 유형의 사람들과 잘 어울림',
        '관계에서 필요한 것을 빠르게 파악',
        '사회적 지능이 높아 갈등 중재 능력',
        '여러 종류의 관계를 능숙하게 유지',
      ],
      weaknesses: [
        '자신의 진정한 관계 욕구를 파악하기 어려울 수 있음',
        '상황에 따라 달라지는 모습이 일관성 없어 보일 수 있음',
        '타인에게 맞추다 보면 자신을 잃을 수 있음',
        '명확한 자기 경계선을 설정하는 것이 어려울 수 있음',
      ],
      relationships:
        '상황 적응형은 대부분의 유형과 잘 어울리는 편이지만, 자신이 진정으로 원하는 관계의 모습을 파악하는 것이 중요합니다. 파트너에게 자신의 진짜 모습과 욕구를 솔직하게 표현하는 연습이 더 깊은 관계를 만드는 열쇠입니다.',
      stressPattern:
        '상황 적응형은 자신이 진정으로 원하는 것과 타인에게 맞추고 있는 것 사이에서 괴리감을 느낄 때 스트레스를 받습니다. 자신의 필요를 뒤로 미루고 타인에게 맞추다 소진될 수 있습니다.',
      recommendedActivities: [
        '나의 진정한 관계 욕구 탐색하기',
        '혼자만의 시간에 자기 자신과 대화하기',
        '자기 경계선 설정 연습하기',
        '타인이 아닌 자신의 필요를 먼저 챙기는 연습',
        '일관된 자기 표현 방식 찾기',
      ],
      selfGuide:
        '상황 적응형인 당신의 유연성은 정말 큰 강점입니다. 하지만 모든 상황에 적응하다 보면 자신이 무엇을 원하는지 잊을 수 있습니다. 매일 잠깐이라도 "오늘 나는 어떤 관계를 원하는가?"를 스스로에게 물어보는 습관을 가져보세요.',
      relatedTests: ['animal-personality', 'love-style', 'emotional-recovery'],
      shareText: '나는 상황 적응형! 관계와 맥락에 따라 유연하게 거리를 조율하는 타입이에요 🌈',
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
