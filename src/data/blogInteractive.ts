import type { BlogInteractive } from '../types/blog';

export const blogInteractiveById: Record<string, BlogInteractive> = {
  'vacation-before-tired': {
    title: '휴가를 숙제가 아니라 쉼으로 남기기',
    description: '다가오는 휴가 앞에서 마음이 더 복잡해지는 지점을 작게 나눠봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'vacation_pressure',
        label: '휴가를 제대로 보내야 한다는 압박',
        minLabel: '느슨하게 기대함',
        maxLabel: '이미 숙제 같음',
      },
      {
        type: 'checklist',
        id: 'vacation_loads',
        label: '휴가 전 나를 지치게 하는 것',
        items: [
          '떠나기 전에 끝내야 할 일을 계속 떠올린다',
          '쉬는 시간도 알차게 써야 할 것 같아 부담스럽다',
          '돌아온 뒤 쌓일 일을 미리 걱정하고 있다',
        ],
      },
      {
        type: 'memo',
        id: 'empty_vacation_space',
        label: '이번 휴가에서 일부러 비워둘 시간',
        placeholder: '예: 첫날 오후에는 아무 일정도 잡지 않기',
      },
    ],
  },
  'cancelled-plan-relief': {
    title: '약속 취소 뒤에 올라온 안도감 읽기',
    description: '그 사람이 싫은 건지, 오늘의 내가 쉬고 싶었던 건지 구분해봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'cancel_relief_source',
        label: '안도감에 가장 가까운 이유',
        options: ['준비하고 이동할 힘이 부족했다', '역할을 잠깐 내려놓고 싶었다', '그 관계가 반복적으로 부담스럽다', '갑자기 생긴 빈 시간이 반가웠다'],
      },
      {
        type: 'checklist',
        id: 'cancel_relief_clues',
        label: '취소된 약속 뒤에 확인할 신호',
        items: [
          '서운함보다 오늘 안 나가도 된다는 생각이 먼저 왔다',
          '비워진 시간을 다시 다른 일로 채우려 했다',
          '안도한 뒤 곧바로 미안함이나 죄책감이 따라왔다',
        ],
      },
      {
        type: 'sentence',
        id: 'next_plan_phrase',
        label: '다음 약속을 더 편하게 만드는 문장',
        options: [
          '다음엔 조금 짧게 만나도 괜찮을까?',
          '이번 주는 여유가 적어서 다음 주에 천천히 보자.',
          '오늘은 쉬고 싶었지만 너를 피하고 싶은 건 아니었어.',
        ],
      },
    ],
  },
  'sunday-evening-blues': {
    title: '일요일 저녁을 덜 무겁게 만드는 기록',
    description: '지금 떠오르는 월요일의 무게를 작게 나눠 적어보세요.',
    blocks: [
      {
        type: 'slider',
        id: 'sunday_weight',
        label: '지금 일요일 저녁의 마음 무게',
        minLabel: '아직 가벼움',
        maxLabel: '이미 월요일 같음',
      },
      {
        type: 'checklist',
        id: 'sunday_signs',
        label: '오늘 내게 가까운 장면',
        items: [
          '해가 기울자 갑자기 한 주 걱정이 몰려왔다',
          '주말을 제대로 쓰지 못했다는 아쉬움이 남았다',
          '잠들기 아까워 화면을 계속 넘기고 있다',
        ],
      },
      {
        type: 'memo',
        id: 'monday_anchor',
        label: '내일 아침을 덜 흐트러뜨릴 한 가지',
        placeholder: '예: 가방 먼저 챙기기, 아침에 들을 음악 정하기',
      },
    ],
  },
  'cant-ask-for-help': {
    title: '도움 요청을 한 문장으로 줄여보기',
    description: '부탁이 커지기 전에 아주 작은 말부터 연습해봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'asking_difficulty',
        label: '지금 도움을 청하는 일이 얼마나 어렵게 느껴지나요?',
        minLabel: '말할 수 있음',
        maxLabel: '입이 안 떨어짐',
      },
      {
        type: 'checklist',
        id: 'asking_patterns',
        label: '내가 자주 삼키는 순간',
        items: [
          '도와주겠다는 말을 듣고도 괜찮다고 답한다',
          '혼자 끝낸 뒤 아무도 몰라준 것 같아 서운하다',
          '부탁하기 전에 상대가 부담스러워할 장면부터 떠올린다',
        ],
      },
      {
        type: 'memo',
        id: 'small_ask',
        label: '이번 주에 꺼내볼 작은 부탁',
        placeholder: '예: 이 파일 한 번만 같이 봐줄래?',
      },
    ],
  },
  'comparison-feeling-behind': {
    title: '비교가 가리키는 방향 찾기',
    description: '나를 깎는 비교가 아니라, 내가 바라는 쪽을 알려주는 단서로 바꿔봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'comparison_trigger',
        label: '최근 마음이 가장 내려앉았던 소식',
        options: ['새로운 시작을 알리는 글', '성과를 정리한 사진', '관계가 좋아 보이는 장면', '여유로운 일상 기록'],
      },
      {
        type: 'checklist',
        id: 'comparison_checks',
        label: '비교가 커질 때 확인할 것',
        items: [
          '나는 상대의 결과와 내 과정을 나란히 놓고 있었다',
          '가까운 사람의 변화라서 더 크게 느껴졌다',
          '그 소식 안에 내가 미뤄둔 바람이 숨어 있었다',
        ],
      },
      {
        type: 'memo',
        id: 'my_small_motion',
        label: '요즘 내가 안 보이는 곳에서 움직인 증거',
        placeholder: '예: 지난달보다 덜 미루고 있는 일 하나',
      },
    ],
  },
  'cant-say-thank-you': {
    title: '늦은 고마움을 다시 건네기',
    description: '입안에서 맴돌던 고마움을 짧은 문장으로 꺼내봅니다.',
    blocks: [
      {
        type: 'sentence',
        id: 'thanks_sentence',
        label: '가장 자연스럽게 느껴지는 고마움 문장',
        options: [
          '그때 바로 말 못 했는데, 정말 고마웠어.',
          '네가 슬쩍 챙겨준 거 나도 알고 있었어.',
          '별말 안 했지만 그 순간 꽤 든든했어.',
        ],
      },
      {
        type: 'checklist',
        id: 'thanks_blocks',
        label: '고맙다는 말을 삼키게 되는 이유',
        items: [
          '가까운 사람에게 새삼스럽게 말하는 게 어색하다',
          '마음이 클수록 한마디가 더 무겁게 느껴진다',
          '말 대신 다음 행동으로 갚으면 된다고 생각한다',
        ],
      },
      {
        type: 'memo',
        id: 'thanks_person',
        label: '오늘 떠오르는 사람과 고마웠던 장면',
        placeholder: '예: 어제 내 말 끊지 않고 들어준 친구',
      },
    ],
  },
  'reply-delay-emotions': {
    title: '답장을 미루는 마음 분리하기',
    description: '상대가 싫은 건지, 내 에너지가 빈 건지 먼저 구분해봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'reply_energy',
        label: '지금 대화를 이어갈 에너지',
        minLabel: '조금 남아 있음',
        maxLabel: '거의 비어 있음',
      },
      {
        type: 'checklist',
        id: 'reply_reasons',
        label: '답장이 늦어지는 실제 이유',
        items: [
          '짧게 보내면 차갑게 보일까 봐 문장을 고친다',
          '읽음 표시가 뜨는 순간 바로 답해야 할 것 같다',
          '내 기분이 복잡해서 평범한 안부도 무겁게 느껴진다',
        ],
      },
      {
        type: 'sentence',
        id: 'reply_buffer',
        label: '부담을 줄이는 완충 문장',
        options: [
          '지금 조금 정신없어서 이따 제대로 답할게.',
          '메시지는 봤어. 답이 늦어져도 마음 없는 건 아니야.',
          '오늘은 말이 느린 날이라 조금만 기다려줘.',
        ],
      },
    ],
  },
  'pretending-okay-fatigue': {
    title: '괜찮은 척 뒤에 남은 감정 확인',
    description: '그 자리에서 넘긴 감정이 집에 와서 어떤 모습으로 도착했는지 살펴봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'pretend_tension',
        label: '오늘 표정과 말투를 조절하느라 쓴 힘',
        minLabel: '거의 안 씀',
        maxLabel: '계속 긴장함',
      },
      {
        type: 'checklist',
        id: 'pretend_after',
        label: '괜찮은 척하고 난 뒤 찾아온 신호',
        items: [
          '집에 오자마자 갑자기 힘이 빠졌다',
          '그 자리에서는 웃었는데 뒤늦게 말이 떠올랐다',
          '특정 사람 앞에서만 감정을 자꾸 보류한다',
        ],
      },
      {
        type: 'memo',
        id: 'unspoken_feeling',
        label: '그때 사실 하고 싶었던 말',
        placeholder: '예: 그 말은 조금 서운했어',
      },
    ],
  },
  'people-tired-alone-empty': {
    title: '혼자 있고 싶은 마음의 모양 보기',
    description: '사람이 싫은 날인지, 회복할 공간이 필요한 날인지 나눠봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'alone_need',
        label: '오늘 더 가까운 쪽',
        options: ['사람이 싫다기보다 말할 힘이 없다', '혼자 있어도 묘하게 허전하다', '약속 전부터 몸이 무겁다', '연락 없는 시간이 오히려 편하다'],
      },
      {
        type: 'checklist',
        id: 'alone_signals',
        label: '오늘 내 사회적 배터리 신호',
        items: [
          '좋아하는 사람의 연락도 열기까지 시간이 걸렸다',
          '만나면 즐거울 걸 알지만 준비 과정이 버겁다',
          '혼자가 된 뒤에도 마음이 바로 편해지진 않았다',
        ],
      },
      {
        type: 'memo',
        id: 'soft_boundary',
        label: '상대를 밀어내지 않고 쉬고 싶다고 말하는 문장',
        placeholder: '예: 오늘은 조용히 쉬고 내일 답해도 될까?',
      },
    ],
  },
  'sensitive-day': {
    title: '예민한 날의 자극 지도',
    description: '별일 없어 보이는 날에도 마음을 건드린 작은 자극을 표시해봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'sensitivity_level',
        label: '오늘 자극이 걸리는 정도',
        minLabel: '무난함',
        maxLabel: '작은 것도 걸림',
      },
      {
        type: 'checklist',
        id: 'sensitive_triggers',
        label: '오늘 크게 느껴진 작은 것',
        items: [
          '평소엔 넘기던 말투가 오래 남았다',
          '소리나 빛처럼 사소한 감각이 거슬렸다',
          '이유를 설명하기 어려운데 마음이 계속 날카로웠다',
        ],
      },
      {
        type: 'memo',
        id: 'lower_stimulation',
        label: '오늘 자극을 한 단계 낮추는 방법',
        placeholder: '예: 알림 끄기, 조명 낮추기, 10분 걷기',
      },
    ],
  },
  'contact-fatigue': {
    title: '연락이 버거운 날의 거리 조절',
    description: '관계를 끊는 게 아니라 잠깐 숨을 고르는 방식을 찾아봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'contact_capacity',
        label: '오늘 연락을 받을 수 있는 여유',
        minLabel: '답할 수 있음',
        maxLabel: '알림도 무거움',
      },
      {
        type: 'checklist',
        id: 'contact_weight',
        label: '연락이 버겁게 느껴진 이유',
        items: [
          '답하면 대화가 길어질 것 같아 열지 않았다',
          '좋아하는 사람이라 더 잘 답해야 할 것 같았다',
          '혼자 있는 시간을 방해받는 느낌이 들었다',
        ],
      },
      {
        type: 'sentence',
        id: 'contact_phrase',
        label: '관계를 해치지 않는 거리 문장',
        options: [
          '오늘은 조금 쉬고 내일 천천히 답할게.',
          '연락이 싫은 건 아니고 지금 말할 힘이 적어.',
          '잠깐 혼자 있다가 다시 이야기하고 싶어.',
        ],
      },
    ],
  },
  'emotional-recovery-types': {
    title: '내 회복 방식 고르기',
    description: '지금 마음이 가장 편해지는 회복 경로를 찾아봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'recovery_route',
        label: '오늘 가장 필요한 회복',
        options: ['말로 꺼내기', '조용히 있기', '공간 정리하기', '몸을 편하게 하기'],
      },
      {
        type: 'checklist',
        id: 'recovery_clues',
        label: '최근 나아졌던 순간의 단서',
        items: [
          '누군가에게 말하고 나서 생각이 정리됐다',
          '혼자 있는 시간이 생기자 숨이 조금 트였다',
          '몸이 따뜻해지자 마음도 덜 긴장했다',
        ],
      },
      {
        type: 'memo',
        id: 'recovery_plan',
        label: '오늘 15분 안에 할 수 있는 회복 행동',
        placeholder: '예: 따뜻한 물 마시기, 짧게 산책하기',
      },
    ],
  },
  'people-pleasing-signs': {
    title: '착한 척이 아니라 너무 맞춰주는 순간',
    description: '내 마음보다 분위기를 먼저 살핀 장면을 조용히 확인합니다.',
    blocks: [
      {
        type: 'slider',
        id: 'pleasing_pressure',
        label: '상대를 실망시키기 싫어서 쓴 힘',
        minLabel: '내 마음도 말함',
        maxLabel: '거의 다 맞춤',
      },
      {
        type: 'checklist',
        id: 'pleasing_habits',
        label: '내가 자주 하는 맞춤 행동',
        items: [
          '괜찮지 않은데 괜찮다고 먼저 답한다',
          '거절보다 상대가 서운해할 장면이 더 무섭다',
          '상대 기분이 안 좋으면 내 탓부터 떠올린다',
        ],
      },
      {
        type: 'memo',
        id: 'honest_no',
        label: '이번에 연습해볼 짧은 거절 문장',
        placeholder: '예: 이번 주에는 어렵겠어',
      },
    ],
  },
  'communication-mistakes': {
    title: '꼬인 대화를 다시 번역하기',
    description: '의도와 들린 말 사이에 생긴 간격을 한 번 나눠봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'talk_pattern',
        label: '최근 대화가 꼬인 지점',
        options: ['해결책이 너무 빨리 나왔다', '상대 의도를 단정했다', '피곤한 시간에 꺼냈다', '사과 뒤에 설명이 길어졌다'],
      },
      {
        type: 'checklist',
        id: 'talk_repair',
        label: '다음 대화 전에 확인할 것',
        items: [
          '지금 상대가 원하는 건 공감인지 방향인지 물어본다',
          '사실과 내 느낌을 한 문장 안에서 구분한다',
          '이기려는 대화인지 이해하려는 대화인지 확인한다',
        ],
      },
      {
        type: 'sentence',
        id: 'talk_bridge',
        label: '다시 이어붙이는 문장',
        options: [
          '내가 하려던 말은 비난이 아니라 설명이었어.',
          '방금은 해결보다 먼저 들어줬으면 했어.',
          '말이 세게 들렸다면 다시 천천히 말해볼게.',
        ],
      },
    ],
  },
  'small-self-care-routine': {
    title: '오늘 가능한 자기돌봄만 남기기',
    description: '거창한 루틴 말고 오늘 실제로 할 수 있는 작은 손잡이를 고릅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'care_time',
        label: '오늘 챙기기 쉬운 시간대',
        options: ['아침에 물 한 컵', '점심 첫 세 숟가락 천천히', '퇴근 후 옷 갈아입기', '잠들기 전 해낸 일 하나 찾기'],
      },
      {
        type: 'checklist',
        id: 'care_obstacles',
        label: '자기돌봄이 숙제처럼 느껴지는 이유',
        items: [
          '해야 할 루틴을 너무 크게 잡았다',
          '쉬는 시간에도 계속 메시지를 확인했다',
          '하루 끝에 못한 일만 먼저 떠올렸다',
        ],
      },
      {
        type: 'memo',
        id: 'tiny_care',
        label: '오늘 실패하기 어려운 돌봄 하나',
        placeholder: '예: 컵 씻어두기, 양말 갈아신기',
      },
    ],
  },
  'relationship-red-flags': {
    title: '작게 불편했던 신호를 놓치지 않기',
    description: '큰 사건이 되기 전 반복되는 불편함을 표시해봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'red_flag_tension',
        label: '그 관계에서 내가 긴장하는 정도',
        minLabel: '편안함',
        maxLabel: '계속 눈치 봄',
      },
      {
        type: 'checklist',
        id: 'red_flag_clues',
        label: '반복되면 살펴봐야 할 장면',
        items: [
          '내 감정을 과하다고 넘기는 반응이 있었다',
          '사과는 빠른데 같은 상처가 다시 반복됐다',
          '내 주변 사람들을 만나는 일이 은근히 불편해졌다',
        ],
      },
      {
        type: 'memo',
        id: 'boundary_line',
        label: '다음에 지키고 싶은 내 기준',
        placeholder: '예: 내 친구를 깎아내리는 말은 넘기지 않기',
      },
    ],
  },
  'introvert-strengths': {
    title: '혼자 있고 싶은 마음을 해석하기',
    description: '즐거웠는데도 지친 뒤에 필요한 회복 방식을 고릅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'after_social_drain',
        label: '만남 뒤 혼자 있고 싶은 정도',
        minLabel: '아직 여유 있음',
        maxLabel: '완전 방전됨',
      },
      {
        type: 'checklist',
        id: 'introvert_strengths',
        label: '내 조용한 강점으로 남은 것',
        items: [
          '상대 말을 끊지 않고 오래 들어줬다',
          '분위기를 살피느라 말보다 관찰을 많이 했다',
          '깊게 생각해야 할 문제를 혼자 정리하고 싶었다',
        ],
      },
      {
        type: 'memo',
        id: 'quiet_recharge',
        label: '오늘 나를 다시 채워줄 조용한 시간',
        placeholder: '예: 30분 산책, 불 끄고 음악 듣기',
      },
    ],
  },
  'emotional-drain-patterns': {
    title: '감정 에너지가 새는 자리 찾기',
    description: '몸보다 마음이 먼저 지친 날의 패턴을 적어봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'drain_level',
        label: '오늘 마음의 배터리 소모',
        minLabel: '조금 닳음',
        maxLabel: '거의 방전',
      },
      {
        type: 'checklist',
        id: 'drain_sources',
        label: '에너지가 많이 쓰인 관계 장면',
        items: [
          '상대 이야기를 오래 받쳐주느라 내 말은 줄었다',
          '반복되는 불평을 듣고 나서 몸까지 무거워졌다',
          '갈등을 피하려고 내 감정을 숨긴 시간이 길었다',
        ],
      },
      {
        type: 'memo',
        id: 'restore_boundary',
        label: '다음 만남에서 줄이고 싶은 역할',
        placeholder: '예: 계속 달래주는 사람 역할',
      },
    ],
  },
  'mbti-relationships': {
    title: '유형보다 먼저 있던 서운함 적기',
    description: '이름 붙이기 전에 실제로 엇갈렸던 장면을 돌아봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'relationship_gap',
        label: '가장 자주 막히는 관계 장면',
        options: ['연락 빈도', '위로 방식', '여행 계획', '서운함을 말하는 타이밍'],
      },
      {
        type: 'checklist',
        id: 'relationship_gaps',
        label: '반복해서 쌓인 어긋남',
        items: [
          '나는 충분히 챙겼다고 생각했는데 상대는 서운해했다',
          '도와주려고 한 말이 차갑게 들린 적이 있다',
          '같이 있는 시간이 회복인지 소모인지 서로 달랐다',
        ],
      },
      {
        type: 'memo',
        id: 'unlabeled_feeling',
        label: '유형 이름보다 먼저 꺼내야 할 감정',
        placeholder: '예: 나는 그때 무시당한 느낌이었어',
      },
    ],
  },
  'solitude-recovery': {
    title: '건강한 혼자 시간을 설계하기',
    description: '외로움이 아니라 회복으로 느껴지는 고독의 조건을 찾습니다.',
    blocks: [
      {
        type: 'slider',
        id: 'solitude_need',
        label: '지금 혼자 있을 시간이 필요한 정도',
        minLabel: '함께 있어도 괜찮음',
        maxLabel: '혼자여야 숨이 트임',
      },
      {
        type: 'checklist',
        id: 'solitude_quality',
        label: '회복이 되는 혼자 시간의 조건',
        items: [
          '알림 없이 생각이 따라올 시간이 있다',
          '혼자 있고 난 뒤 사람을 다시 만날 힘이 생긴다',
          '도피가 아니라 정리되는 느낌이 남는다',
        ],
      },
      {
        type: 'memo',
        id: 'solitude_slot',
        label: '이번 주에 비워둘 혼자 시간',
        placeholder: '예: 토요일 오전 40분 산책',
      },
    ],
  },
  'stress-types': {
    title: '스트레스가 빠져나가는 길 고르기',
    description: '내가 실제로 가벼워지는 해소 방식을 확인합니다.',
    blocks: [
      {
        type: 'choice',
        id: 'stress_release',
        label: '오늘 가장 맞을 것 같은 해소 방식',
        options: ['몸 움직이기', '믿는 사람에게 털어놓기', '혼자 조용히 있기', '무언가 만들기'],
      },
      {
        type: 'checklist',
        id: 'stress_signs',
        label: '스트레스가 올라올 때 내 반응',
        items: [
          '가만히 생각할수록 더 답답해진다',
          '혼자 있으면 같은 생각이 계속 돈다',
          '감정을 표현할 무언가가 필요해진다',
        ],
      },
      {
        type: 'memo',
        id: 'stress_exit',
        label: '오늘 스트레스를 밖으로 빼낼 행동',
        placeholder: '예: 15분 빠르게 걷기, 메모장에 쏟아내기',
      },
    ],
  },
  perfectionism: {
    title: '완벽주의가 나를 돕는지 묶는지 보기',
    description: '잘하고 싶은 마음이 멈춤으로 바뀌는 지점을 찾아봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'perfection_pressure',
        label: '지금 완벽해야 한다는 압박',
        minLabel: '기준이 도움 됨',
        maxLabel: '시작을 막음',
      },
      {
        type: 'checklist',
        id: 'perfection_loops',
        label: '완벽주의가 묶어두는 장면',
        items: [
          '작은 흠이 보여서 끝낸 일을 다시 붙잡는다',
          '부족하게 보일까 봐 공유 자체를 미룬다',
          '실수한 장면을 며칠 동안 반복해서 떠올린다',
        ],
      },
      {
        type: 'memo',
        id: 'good_enough_line',
        label: '이번 일의 충분히 괜찮은 기준',
        placeholder: '예: 초안은 70%만 되어도 보내기',
      },
    ],
  },
  'high-empathy': {
    title: '공감 뒤에 내 마음을 따로 세우기',
    description: '상대 감정과 내 감정이 섞이는 순간을 구분해봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'empathy_absorption',
        label: '오늘 남의 감정을 흡수한 정도',
        minLabel: '구분됨',
        maxLabel: '내 일처럼 남음',
      },
      {
        type: 'checklist',
        id: 'empathy_costs',
        label: '공감이 피로로 바뀐 신호',
        items: [
          '상대 표정 변화가 하루 종일 마음에 남았다',
          '위로하고 나서 내가 더 가라앉았다',
          '내가 원하는 것보다 상대 기분을 먼저 살폈다',
        ],
      },
      {
        type: 'memo',
        id: 'my_feeling_only',
        label: '상대 감정을 덜어낸 뒤 남는 내 감정',
        placeholder: '예: 걱정보다는 피로가 더 컸다',
      },
    ],
  },
  'attachment-styles': {
    title: '연애에서 반복되는 반응 찾기',
    description: '상대의 행동보다 먼저 작동하는 내 불안을 살펴봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'love_reaction',
        label: '가까운 관계에서 자주 나오는 반응',
        options: ['확인받고 싶어진다', '가까워질수록 숨이 막힌다', '괜찮다가도 갑자기 불안해진다', '다툼 뒤에도 회복 가능하다고 느낀다'],
      },
      {
        type: 'checklist',
        id: 'love_patterns',
        label: '반복되는 연애 장면',
        items: [
          '답장이 늦으면 다른 일에 집중하기 어렵다',
          '상대가 다가오면 고맙기보다 부담이 먼저 온다',
          '붙잡고 싶으면서 동시에 거리를 두고 싶다',
        ],
      },
      {
        type: 'memo',
        id: 'love_signal',
        label: '내가 불안해지는 정확한 신호',
        placeholder: '예: 약속을 미루자는 말을 들을 때',
      },
    ],
  },
  'boundaries-setting': {
    title: '내 경계선을 문장으로 만들기',
    description: '차갑게 밀어내지 않으면서도 나를 지키는 말을 찾아봅니다.',
    blocks: [
      {
        type: 'slider',
        id: 'boundary_guilt',
        label: '거절 뒤에 남는 불편함',
        minLabel: '괜찮음',
        maxLabel: '내가 나쁜 것 같음',
      },
      {
        type: 'checklist',
        id: 'boundary_needs',
        label: '경계선이 필요한 순간',
        items: [
          '한 번만이라고 넘긴 부탁이 계속 반복된다',
          '상대는 괜찮은 줄 알고 나는 속으로 지친다',
          '설명을 길게 해야만 거절할 수 있을 것 같다',
        ],
      },
      {
        type: 'sentence',
        id: 'boundary_sentence',
        label: '이번에 써볼 경계 문장',
        options: [
          '이번에는 어렵지만 다음에 가능하면 말할게.',
          '그 방식은 나에게 조금 부담스러워.',
          '지금은 쉬는 시간이 필요해서 여기까지만 할게.',
        ],
      },
    ],
  },
  'anger-recovery': {
    title: '화난 뒤 관계를 다시 놓는 순서',
    description: '사과보다 먼저 필요한 진정과 인정의 단계를 확인합니다.',
    blocks: [
      {
        type: 'slider',
        id: 'anger_heat',
        label: '아직 몸에 남아 있는 화의 온도',
        minLabel: '가라앉음',
        maxLabel: '아직 뜨거움',
      },
      {
        type: 'checklist',
        id: 'anger_repair',
        label: '회복 대화 전에 확인할 것',
        items: [
          '내가 한 말을 구체적으로 인정할 수 있다',
          '상대가 바로 괜찮아지지 않아도 기다릴 수 있다',
          '같은 폭발을 부르는 방아쇠를 하나 알고 있다',
        ],
      },
      {
        type: 'memo',
        id: 'repair_apology',
        label: '변명 없이 시작하는 첫 문장',
        placeholder: '예: 아까 내가 큰소리로 말한 건 미안해',
      },
    ],
  },
  'intuitive-vs-sensing': {
    title: '엇갈린 대화를 다시 맞춰보기',
    description: '의미를 먼저 보는 사람과 사실을 먼저 보는 사람 사이의 간격을 좁혀봅니다.',
    blocks: [
      {
        type: 'choice',
        id: 'first_focus',
        label: '나는 대화에서 먼저 궁금한 것',
        options: ['그 말이 가진 분위기', '실제로 일어난 순서', '앞으로 이어질 가능성', '지금 당장 정해야 할 것'],
      },
      {
        type: 'checklist',
        id: 'different_focus',
        label: '서로 다른 곳을 봐서 생긴 장면',
        items: [
          '상대가 결론부터 묻자 내 이야기가 잘린 느낌이 들었다',
          '나는 세부가 궁금했는데 상대는 분위기만 말하고 있었다',
          '여행 계획을 두고 한쪽은 숙제처럼, 한쪽은 불안처럼 느꼈다',
        ],
      },
      {
        type: 'sentence',
        id: 'translation_sentence',
        label: '다음 대화에서 써볼 번역 문장',
        options: [
          '나는 지금 느낌을 설명하는 중이라 결론이 조금 늦어.',
          '나는 사실관계를 알아야 마음이 편해서 물어본 거야.',
          '우리 지금 서로 먼저 보는 지점이 다른 것 같아.',
        ],
      },
    ],
  },
  'self-efficacy-habits': {
    title: '될 것 같다는 감각을 작게 되찾기',
    description: '큰 자신감보다 오늘 지킬 수 있는 작은 약속을 남깁니다.',
    blocks: [
      {
        type: 'slider',
        id: 'can_do_feeling',
        label: '지금 해볼 수 있을 것 같은 감각',
        minLabel: '조금 있음',
        maxLabel: '거의 사라짐',
      },
      {
        type: 'checklist',
        id: 'efficacy_blocks',
        label: '시도를 막는 마음의 말',
        items: [
          '처음부터 잘해야 시작할 수 있을 것 같다',
          '한 번 안 된 일을 곧 내 능력 전체로 느낀다',
          '몸이 지쳐서 도전할 마음까지 작아졌다',
        ],
      },
      {
        type: 'memo',
        id: 'tiny_success',
        label: '오늘 쌓을 아주 작은 성공',
        placeholder: '예: 파일 열기만 하기, 5줄 쓰기',
      },
    ],
  },
  'mindfulness-habits': {
    title: '지금으로 돌아오는 작은 감각',
    description: '생각이 멀리 가 있을 때 몸과 마음을 현재로 데려옵니다.',
    blocks: [
      {
        type: 'choice',
        id: 'mindful_anchor',
        label: '지금 붙잡기 쉬운 감각',
        options: ['숨이 들어오고 나가는 느낌', '발바닥이 닿는 감각', '손에 닿는 온도', '첫 숟가락의 맛'],
      },
      {
        type: 'checklist',
        id: 'mindful_signs',
        label: '마음이 현재를 벗어난 신호',
        items: [
          '과거 장면을 반복해서 다시 보고 있다',
          '아직 오지 않은 일을 미리 겪고 있다',
          '감정을 없애려 할수록 더 커지는 느낌이 든다',
        ],
      },
      {
        type: 'memo',
        id: 'emotion_name',
        label: '지금 감정에 붙일 이름',
        placeholder: '예: 불안, 서운함, 조급함, 피로',
      },
    ],
  },
};
