import { Test } from '../../types/test';

export const loveStyleTest: Test = {
  id: 'love-style',
  title: '나의 연애 성향은?',
  subtitle: '연애할 때 드러나는 나만의 사랑 방식 테스트',
  description:
    '로맨틱형, 현실주의형, 자유주의형, 헌신형 중 당신의 연애 스타일은 무엇인가요? 10가지 질문으로 알아보는 나만의 사랑 방식 테스트입니다.',
  category: '연애 성향',
  categoryColor: 'rose',
  duration: '3~5분',
  questionCount: 10,
  tags: ['연애', '사랑', '관계', '성향'],
  thumbnail: '💕',
  popular: true,
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
      subtitle: '사랑의 설레임과 감동을 소중히 여기는 당신',
      emoji: '🌹',
      description: [
        '로맨틱형인 당신은 사랑에 있어서 감정과 설레임을 가장 중요하게 여기는 사람입니다. 연인과의 모든 순간이 특별하게 느껴지길 원하고, 작은 이벤트와 깜짝 선물로 사랑을 표현하는 것을 즐깁니다. 드라마나 영화 속 로맨스처럼 감동적인 순간들을 실제 관계에서도 기대하는 경향이 있습니다.',
        '당신은 연인에게 감정적으로 깊이 빠져드는 타입으로, 사랑할 때는 온 마음을 다해 헌신합니다. 상대방을 행복하게 해주고 싶은 마음이 크며, 자신도 그만큼의 감동과 설레임을 받고 싶어합니다. 사랑이 식었다고 느껴지는 순간이나 일상적이고 무감각한 관계가 이어질 때 가장 힘들어합니다.',
        '로맨틱형은 관계의 시작과 초반에 가장 빛나는 에너지를 발휘합니다. 새로운 만남의 설레임과 첫 번째 함께하는 모든 것들을 소중하게 기억하며, 이 감정을 오래 유지하고 싶어합니다.',
      ],
      traits: [
        '감정적이고 표현력이 풍부한 사랑 방식',
        '이벤트와 선물로 사랑을 표현하는 것을 즐김',
        '연인과의 모든 순간을 특별하게 만들고 싶어함',
        '관계에서 설레임과 두근거림을 중요시함',
        '감정 기복이 크고 사랑에 깊이 몰입하는 경향',
        '낭만적인 장소와 분위기에 민감함',
        '연인의 반응과 감정 표현에 크게 영향받음',
      ],
      strengths: [
        '파트너를 감동시키는 세심한 배려와 표현력',
        '관계에 활력과 설레임을 지속적으로 불어넣음',
        '풍부한 감수성으로 상대의 감정을 잘 공감',
        '사랑에 솔직하고 투명한 감정 표현',
        '특별한 날과 기념일을 소중히 여기는 세심함',
      ],
      weaknesses: [
        '현실적인 면을 간과하고 감정에만 의존할 수 있음',
        '설레임이 식으면 관계 자체에 회의감을 느낄 수 있음',
        '기대치가 높아 실망하거나 상처받기 쉬움',
        '감정 기복이 커서 관계가 불안정해질 수 있음',
      ],
      relationships:
        '로맨틱형은 감정적으로 교감이 잘 되고, 함께 있을 때 특별한 감정을 느끼게 해주는 파트너와 잘 맞습니다. 상대방도 감정 표현에 적극적이고 이벤트를 즐기는 타입이라면 더욱 행복한 관계가 될 수 있습니다. 반면 감정 표현이 서툰 파트너와는 오해가 생기기 쉽습니다. 설레임이 유지되는 관계를 원하지만, 장기 관계에서는 안정감과 신뢰도 중요하다는 것을 받아들이는 것이 관계 발전의 열쇠입니다.',
      stressPattern:
        '로맨틱형은 연인과의 감정적 교감이 줄어들거나 관계가 식었다고 느낄 때 가장 큰 스트레스와 불안을 경험합니다. 상대방의 사소한 행동 하나에도 크게 영향을 받을 수 있으며, 감정적으로 불안정한 시기에는 확인 행동이 늘어날 수 있습니다.',
      recommendedActivities: [
        '감성적인 영화나 로맨스 소설 감상',
        '함께할 특별한 이벤트 기획하기',
        '사진이나 일기로 소중한 순간 기록하기',
        '감정 일기 쓰기로 자신의 감정 이해하기',
        '파트너와 함께하는 새로운 경험 도전하기',
      ],
      selfGuide:
        '로맨틱형인 당신은 사랑에 있어서 정말 따뜻하고 아름다운 감수성을 가지고 있습니다. 다만, 관계는 설레임만으로 이루어지지 않는다는 것을 기억하세요. 일상의 소소한 안정감과 신뢰도 사랑의 중요한 부분입니다. 상대방에게 기대하는 것이 있다면 솔직하게 이야기하고, 내 기준만큼 상대도 노력하고 있다는 것을 인정해주세요.',
      relatedTests: ['animal-personality', 'emotional-recovery', 'social-distance'],
      shareText: '나는 로맨틱형! 설레임과 감동을 소중히 여기는 연애 스타일이에요 🌹',
    },
    pragmatic: {
      id: 'pragmatic',
      title: '현실주의형',
      subtitle: '안정과 신뢰를 기반으로 사랑을 쌓아가는 당신',
      emoji: '🏡',
      description: [
        '현실주의형인 당신은 사랑에 있어서 감정보다 신뢰와 안정을 더 중요하게 여기는 사람입니다. 화려한 이벤트보다 일상에서의 배려와 현실적인 미래를 함께 설계하는 것에서 더 깊은 사랑을 느낍니다. 관계를 선택할 때도 설레임뿐만 아니라 함께 살아갈 수 있는 사람인지를 중요하게 생각합니다.',
        '당신은 관계에서 명확한 의사소통과 합리적인 문제 해결을 선호합니다. 감정에 휩쓸리기보다는 이성적으로 상황을 파악하고 해결책을 찾는 것이 자연스럽습니다. 파트너와 함께 현실적인 목표를 세우고 나아갈 때 가장 큰 행복을 느낍니다.',
        '현실주의형은 장기적인 관계에서 특히 강점을 발휘합니다. 처음의 설레임이 지나도 꾸준히 관계를 가꾸고 유지하는 능력이 뛰어나며, 파트너에게 든든하고 믿을 수 있는 존재가 됩니다.',
      ],
      traits: [
        '감정보다 신뢰와 안정을 우선하는 관계관',
        '현실적인 미래 계획과 방향성을 중요시함',
        '감정적 판단보다 이성적 판단을 선호',
        '일상의 작은 배려로 사랑을 표현하는 방식',
        '명확한 소통과 합리적 문제 해결 선호',
        '장기 관계에서 꾸준하고 안정적인 모습',
        '파트너의 현실적 능력과 책임감을 중시함',
      ],
      strengths: [
        '장기 관계에서 안정적이고 신뢰할 수 있는 파트너',
        '현실적인 문제를 냉정하게 해결하는 능력',
        '감정에 휩쓸리지 않는 균형 잡힌 판단력',
        '꾸준한 배려로 관계를 지속적으로 가꿈',
        '파트너와 함께 성장하는 방향으로 관계를 이끎',
      ],
      weaknesses: [
        '지나치게 현실적이어서 감정 표현이 부족할 수 있음',
        '로맨틱한 이벤트나 자발적 표현이 부족해 보일 수 있음',
        '완벽한 조건을 따지다 좋은 인연을 놓칠 수 있음',
        '감정보다 이성을 앞세워 파트너가 차갑다고 느낄 수 있음',
      ],
      relationships:
        '현실주의형은 가치관이 비슷하고 미래에 대한 방향성이 맞는 파트너와 가장 잘 맞습니다. 같은 목표를 공유하고, 함께 문제를 해결해나가는 관계에서 깊은 유대감을 형성합니다. 지나치게 감정적이거나 즉흥적인 파트너와는 마찰이 생길 수 있지만, 서로를 이해하려는 노력이 있다면 보완 관계가 될 수 있습니다.',
      stressPattern:
        '현실주의형은 관계에서 예측 불가능한 상황이나 파트너의 비논리적인 행동에 스트레스를 받습니다. 감정적인 갈등보다는 현실적인 문제가 해결되지 않을 때 관계에 회의감을 느끼는 편입니다.',
      recommendedActivities: [
        '파트너와 함께 미래 계획 세우기',
        '공통 목표 달성을 위한 취미 공유',
        '재정 계획이나 생활 목표 함께 정리하기',
        '요리, 운동 등 일상적 활동 공유하기',
        '서로의 감정을 표현하는 연습하기',
      ],
      selfGuide:
        '현실주의형인 당신은 관계에서 정말 믿음직스럽고 든든한 존재입니다. 다만, 때로는 머리보다 마음이 이끄는 대로 감정을 표현해보세요. 파트너는 당신의 합리적인 판단력을 신뢰하면서도, 감정적인 연결과 표현을 원할 수 있습니다. 작은 감동이 쌓여 큰 사랑이 된다는 것을 기억하세요.',
      relatedTests: ['stress-response', 'animal-personality', 'social-distance'],
      shareText: '나는 현실주의형! 안정과 신뢰를 기반으로 사랑을 쌓는 타입이에요 🏡',
    },
    independent: {
      id: 'independent',
      title: '자유주의형',
      subtitle: '나답게 사랑하며 자신을 잃지 않는 당신',
      emoji: '🦋',
      description: [
        '자유주의형인 당신은 사랑하면서도 자신의 개성과 자유를 잃지 않는 것이 매우 중요한 사람입니다. 연인과 함께하는 시간도 소중하지만, 혼자만의 시간과 개인적인 공간도 그만큼 중요하게 여깁니다. 관계 속에서 자신을 온전히 유지하면서 사랑할 수 있을 때 가장 행복합니다.',
        '당신은 집착이나 의존하는 관계를 불편해하며, 파트너도 자신의 삶을 충실히 사는 사람을 선호합니다. 서로가 각자의 삶을 존중하면서 만날 때 더욱 풍요로운 관계가 된다고 믿습니다.',
        '자유주의형은 처음 관계에서 거리감이 느껴질 수 있지만, 신뢰가 쌓이면 깊고 성숙한 사랑을 나눌 수 있습니다. 서로를 위한 공간을 존중하는 관계에서 오히려 더 오래 지속되는 사랑을 경험합니다.',
      ],
      traits: [
        '개인 공간과 자유를 사랑만큼 중요시함',
        '독립적이고 자립적인 생활 방식 추구',
        '집착이나 과도한 의존을 불편해함',
        '파트너도 독립적인 삶을 갖길 원함',
        '자신의 취미와 사회생활을 포기하지 않음',
        '즉흥적이고 자유로운 만남을 선호하기도 함',
        '관계 초기에 감정을 천천히 여는 경향',
      ],
      strengths: [
        '독립적이어서 파트너에게 부담을 주지 않음',
        '자신의 삶이 충실해서 관계에도 여유가 있음',
        '서로의 공간을 존중하는 성숙한 관계 형성',
        '집착하지 않아 관계에서 신뢰감을 줌',
        '개인적 성장과 관계를 균형 있게 유지',
      ],
      weaknesses: [
        '감정 표현이 부족해 파트너가 외로움을 느낄 수 있음',
        '필요 이상의 거리감이 오해를 만들 수 있음',
        '친밀감을 쌓는 데 시간이 오래 걸림',
        '헌신이 부족해 보여 파트너의 불안을 유발할 수 있음',
      ],
      relationships:
        '자유주의형은 서로의 독립성을 존중하는 파트너와 가장 잘 맞습니다. 너무 의존적이거나 많은 시간을 요구하는 파트너와는 갈등이 생기기 쉽습니다. 장기 관계에서 신뢰가 쌓이면 깊은 유대감을 형성할 수 있지만, 파트너에게 충분한 관심과 감정 표현을 해주는 것이 중요합니다.',
      stressPattern:
        '자유주의형은 관계에서 개인 공간이 침범당하거나 과도한 의존과 집착을 받을 때 가장 큰 스트레스를 받습니다. 통제적이거나 구속감을 주는 관계에서 빠르게 도망치고 싶어질 수 있습니다.',
      recommendedActivities: [
        '자신의 취미와 관심사 계속 발전시키기',
        '혼자서도 즐길 수 있는 활동 찾기',
        '파트너와 함께하는 독립적인 여행 계획',
        '각자의 친구 관계와 사회생활 유지하기',
        '파트너와 감정 소통 방법 함께 찾기',
      ],
      selfGuide:
        '자유주의형인 당신의 독립적인 모습은 매력적이지만, 파트너는 때로 당신과의 감정적 연결을 갈망합니다. 자신의 자유를 지키면서도, 파트너에게 충분한 관심과 사랑을 표현하는 균형을 찾아보세요. 진정한 자유는 혼자 있을 때가 아니라 함께하면서도 자신을 잃지 않는 것임을 기억하세요.',
      relatedTests: ['social-distance', 'emotional-recovery', 'animal-personality'],
      shareText: '나는 자유주의형! 나답게 사랑하며 자신을 잃지 않는 타입이에요 🦋',
    },
    devoted: {
      id: 'devoted',
      title: '헌신형',
      subtitle: '온 마음을 다해 상대를 위하는 사랑의 달인',
      emoji: '💝',
      description: [
        '헌신형인 당신은 사랑하는 사람을 위해 아낌없이 주고 헌신하는 것을 자연스럽게 느끼는 사람입니다. 파트너의 행복이 곧 나의 행복이라는 마음으로, 상대방이 필요로 하는 것을 미리 챙기고 어떤 상황에서도 곁에 있어주는 것을 가장 중요하게 생각합니다.',
        '당신의 사랑은 말보다는 행동으로 나타납니다. 힘들 때 가장 먼저 나타나는 사람, 작은 것도 기억하고 챙겨주는 세심함, 파트너의 꿈과 목표를 진심으로 응원해주는 든든한 지원군이 바로 헌신형의 모습입니다.',
        '헌신형은 관계에서 깊고 안정적인 사랑을 만들어냅니다. 하지만 지나친 헌신이 자신을 잃게 만들거나 파트너에게 부담이 될 수 있다는 점을 인식하는 것이 중요합니다.',
      ],
      traits: [
        '파트너를 위해 아낌없이 헌신하는 사랑 방식',
        '상대의 필요를 미리 파악하고 챙겨주는 세심함',
        '어떤 상황에서도 파트너 곁에 있어주는 충실함',
        '파트너의 행복을 나의 행복보다 우선시함',
        '관계에서 희생을 두려워하지 않는 태도',
        '파트너의 작은 것도 기억하는 뛰어난 관심',
        '자신보다 관계를 우선하는 경향',
      ],
      strengths: [
        '파트너가 어떤 상황에서도 믿고 의지할 수 있음',
        '작은 것도 세심하게 챙기는 뛰어난 배려심',
        '관계에서 오랜 신뢰와 유대감을 쌓는 능력',
        '파트너의 성장과 목표를 진심으로 지지함',
        '갈등 상황에서도 관계를 지키려는 강한 의지',
      ],
      weaknesses: [
        '자신을 희생하다 보면 감정적으로 소진될 수 있음',
        '상대방이 같은 헌신을 돌려주지 않으면 상처받기 쉬움',
        '자신의 필요와 욕구를 뒤로 미루는 경향',
        '지나친 헌신이 파트너에게 부담이 될 수 있음',
      ],
      relationships:
        '헌신형은 자신의 사랑을 충분히 인정하고 감사해하는 파트너와 잘 맞습니다. 서로 헌신하는 관계에서 가장 큰 행복을 느끼며, 상대방이 자신의 노력을 당연하게 여기면 깊은 상처를 받을 수 있습니다. 자신의 가치를 잃지 않으면서 사랑하는 연습이 필요합니다.',
      stressPattern:
        '헌신형은 자신이 최선을 다했음에도 파트너로부터 충분한 인정이나 사랑을 받지 못한다고 느낄 때 가장 큰 상처와 스트레스를 받습니다. 모든 것을 다 주고 나서 혼자 남겨진 것 같은 공허함이 주요 스트레스 원인입니다.',
      recommendedActivities: [
        '자신을 위한 시간을 의식적으로 확보하기',
        '자기 자신에게 집중하는 취미 갖기',
        '건강한 경계선 설정 연습하기',
        '감정 일기로 나의 필요 파악하기',
        '파트너와 서로의 욕구 솔직하게 나누기',
      ],
      selfGuide:
        '헌신형인 당신은 정말 따뜻하고 소중한 사람입니다. 하지만 사랑은 일방통행이 되어서는 안 됩니다. 상대방을 사랑하는 것만큼 자신도 사랑받을 자격이 있다는 것을 기억하세요. 건강한 관계는 둘 다 서로를 소중히 여길 때 만들어집니다. 자신의 필요와 감정도 중요하다는 것을 잊지 마세요.',
      relatedTests: ['animal-personality', 'stress-response', 'emotional-recovery'],
      shareText: '나는 헌신형! 온 마음을 다해 상대를 위하는 사랑의 달인이에요 💝',
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
