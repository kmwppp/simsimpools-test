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
    title: '오늘 받을 연락의 범위 정하기',
    description: '채널·시간·긴급도를 나눠 오늘 열 창의 수를 정합니다.',
    blocks: [
      {
        type: 'choice',
        id: 'contact_channel_priority',
        label: '오늘 먼저 확인할 연락 범위',
        options: ['긴급한 업무 확인만', '가족 일정 질문까지', '가까운 한 사람의 안부까지', '개인 연락은 내일 확인'],
      },
      {
        type: 'checklist',
        id: 'contact_scope_checks',
        label: '연락별로 확인할 조건',
        items: [
          '오늘 안에 답해야 하는 구체적인 질문이 있다',
          '짧은 확인인지 긴 대화인지 구분했다',
          '답할 시각을 상대에게 알릴 수 있다',
        ],
      },
      {
        type: 'sentence',
        id: 'contact_availability_phrase',
        label: '연락 가능 범위를 알리는 문장',
        options: [
          '메시지 확인했어. 내일 점심에 다시 답할게.',
          '오늘은 일정 질문까지만 보고, 긴 이야기는 주말에 할게.',
          '급한 일은 전화로 알려줘. 개인 메시지는 내일 볼게.',
        ],
      },
    ],
  },
  'emotional-recovery-types': {
    title: '15분 전후 변화를 비교하기',
    description: '활동 하나를 해보고 몸·생각·다음 행동의 차이를 기록합니다.',
    blocks: [
      {
        type: 'choice',
        id: 'recovery_experiment_action',
        label: '15분 동안 해볼 활동',
        options: ['짧게 걷기', '한 사람에게 사실만 말하기', '조용히 혼자 있기', '책상 한 구역 정리하기'],
      },
      {
        type: 'checklist',
        id: 'recovery_before_after',
        label: '전후에 같은 기준으로 볼 항목',
        items: [
          '몸의 긴장이 달라졌는지',
          '같은 생각의 반복이 달라졌는지',
          '다음 행동을 시작하기 쉬워졌는지',
        ],
      },
      {
        type: 'memo',
        id: 'recovery_experiment_note',
        label: '끝난 뒤 실제로 달라진 점',
        placeholder: '예: 긴장은 그대로, 설거지를 시작하기는 쉬워짐',
      },
    ],
  },
  'people-pleasing-signs': {
    title: '자동 동의 전에 시간을 벌기',
    description: '상대 표정보다 내 일정과 비용을 먼저 확인할 틈을 만듭니다.',
    blocks: [
      {
        type: 'choice',
        id: 'decision_delay_window',
        label: '답하기 전에 확보할 시간',
        options: ['10분 뒤 답하기', '점심 뒤 답하기', '오늘 퇴근 전 답하기', '내일 일정 확인 뒤 답하기'],
      },
      {
        type: 'checklist',
        id: 'agreement_cost_checks',
        label: '동의 전에 확인할 실제 비용',
        items: [
          '필요한 시간과 마감이 겹치지 않는다',
          '쉬거나 이미 약속한 시간을 잃지 않는다',
          '동의 뒤 상대를 원망할 것 같지 않다',
        ],
      },
      {
        type: 'sentence',
        id: 'decision_delay_phrase',
        label: '바로 답하지 않는 문장',
        options: ['일정 확인하고 오후 세 시까지 답할게.', '지금 정하기 어려워서 잠깐 생각해볼게.', '내일 계획을 본 뒤 가능한 범위를 알려줄게.'],
      },
    ],
  },
  'communication-mistakes': {
    title: '대화가 갈라진 첫 문장 찾기',
    description: '최근 대화 한 건을 사실·해석·빠진 요청으로 나눕니다.',
    blocks: [
      {
        type: 'choice',
        id: 'conversation_first_split',
        label: '사실이 해석으로 바뀐 첫 지점',
        options: ['행동에서 의도로 넘어간 문장', '한 사건에서 늘·항상으로 넓어진 문장', '느낌을 사실처럼 말한 문장', '요청 없이 비난으로 끝난 문장'],
      },
      {
        type: 'checklist',
        id: 'conversation_fact_checks',
        label: '확인 가능한 사실에 포함할 것',
        items: [
          '언제 어디서 있었는지',
          '실제로 들은 말이나 본 행동이 무엇인지',
          '그때 내가 요청한 행동이 있었는지',
        ],
      },
      {
        type: 'sentence',
        id: 'conversation_request_bridge',
        label: '사실 뒤에 붙일 구체적인 요청',
        options: [
          '다음에는 늦을 걸 알게 된 시점에 알려줄 수 있을까?',
          '내가 말을 끝낸 뒤에 의견을 말해줄 수 있을까?',
          '이 이야기는 내일 저녁에 다시 이어가도 될까?',
        ],
      },
    ],
  },
  'small-self-care-routine': {
    title: '30초 돌봄을 기존 행동에 붙이기',
    description: '새 일정 대신 이미 반복되는 행동을 시작 고리로 씁니다.',
    blocks: [
      {
        type: 'choice',
        id: 'care_existing_anchor',
        label: '거의 매일 하는 시작 고리',
        options: ['양치를 마친 직후', '점심 식판을 반납한 직후', '퇴근 카드 태그 직후', '저녁 현관문을 닫은 직후'],
      },
      {
        type: 'checklist',
        id: 'care_thirty_second_checks',
        label: '붙일 행동의 조건',
        items: [
          '준비 없이 30초 안에 시작할 수 있다',
          '했는지 안 했는지 바로 알 수 있다',
          '기존 행동이 실제 일정에서 자주 반복된다',
        ],
      },
      {
        type: 'memo',
        id: 'care_anchor_sentence',
        label: '기존 행동과 30초 행동을 잇는 문장',
        placeholder: '예: 점심 식판을 반납하면 물을 세 모금 마신다',
      },
    ],
  },
  'relationship-red-flags': {
    title: '기준을 말한 뒤의 행동 기록하기',
    description: '한 번의 실수와 반복되는 침해를 장면별로 비교합니다.',
    blocks: [
      {
        type: 'choice',
        id: 'boundary_event_stage',
        label: '지금 기록할 장면의 단계',
        options: ['처음 있었던 행동', '같은 행동의 반복', '기준을 말한 직후', '기준을 말한 뒤의 다음 행동'],
      },
      {
        type: 'checklist',
        id: 'boundary_event_facts',
        label: '평가 없이 적을 사실',
        items: [
          '날짜와 장소를 적었다',
          '실제로 들은 말이나 본 행동을 적었다',
          '내가 말한 기준과 상대의 다음 행동을 적었다',
        ],
      },
      {
        type: 'memo',
        id: 'boundary_followup_record',
        label: '기준과 그 뒤의 행동 세 줄 기록',
        placeholder: '예: 외모 농담을 멈춰달라고 말함 / 다음 모임에서는 하지 않음',
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
    title: '만남에서 맡은 역할과 시간 확인하기',
    description: '사람 평가 대신 듣기·달래기·분위기 관리의 비중을 적습니다.',
    blocks: [
      {
        type: 'choice',
        id: 'meeting_role',
        label: '오늘 가장 오래 맡은 역할',
        options: ['상대 이야기 듣기', '기분 달래기', '침묵 때 화제 만들기', '일정·장소 관리하기'],
      },
      {
        type: 'checklist',
        id: 'meeting_role_checks',
        label: '역할의 비중을 확인할 기준',
        items: [
          '모임 대부분의 시간에 같은 역할을 맡았다',
          '내가 멈춰도 다른 사람이 역할을 이어받지 않았다',
          '내 이야기를 꺼냈을 때 질문이 돌아오지 않았다',
        ],
      },
      {
        type: 'memo',
        id: 'meeting_role_reduction',
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
    title: '혼자 있는 시간의 전후 비교',
    description: '시작·종료 시각과 몸·생각·다음 연락의 변화를 남깁니다.',
    blocks: [
      {
        type: 'choice',
        id: 'solitude_timebox',
        label: '오늘 정할 혼자 시간',
        options: ['10분', '20분', '30분', '종료 시각부터 직접 정하기'],
      },
      {
        type: 'checklist',
        id: 'solitude_before_after',
        label: '끝난 뒤 다시 볼 항목',
        items: [
          '몸의 긴장이 달라졌는지',
          '같은 생각의 반복이 달라졌는지',
          '다음 연락이나 행동이 쉬워졌는지',
        ],
      },
      {
        type: 'memo',
        id: 'solitude_result_note',
        label: '시작·종료 시각과 실제 변화',
        placeholder: '예: 19:00~19:20 / 긴장은 줄고 같은 생각은 그대로',
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
    title: '이번 작업의 완료선 정하기',
    description: '제출 전 필수 항목과 다음 버전으로 넘길 일을 분리합니다.',
    blocks: [
      {
        type: 'choice',
        id: 'completion_deliverable',
        label: '지금 완료해야 할 산출물',
        options: ['검토용 초안', '내부 공유본', '외부 제출본', '다음 사람이 이어갈 중간본'],
      },
      {
        type: 'checklist',
        id: 'completion_must_haves',
        label: '제출 전에 반드시 필요한 조건',
        items: [
          '받는 사람이 다음 일을 시작할 정보가 있다',
          '빠지면 결론이 달라지는 오류를 확인했다',
          '공유 시각과 초안 여부가 표시돼 있다',
        ],
      },
      {
        type: 'memo',
        id: 'completion_deferred_list',
        label: '다음 버전으로 넘길 수정',
        placeholder: '예: 도표 색상 정리, 추가 사례 한 개',
      },
    ],
  },
  'high-empathy': {
    title: '표정에서 본 사실과 해석 나누기',
    description: '직접 본 것·붙인 뜻·확인 가능한 내 행동을 세 칸으로 적습니다.',
    blocks: [
      {
        type: 'choice',
        id: 'expression_observation_scope',
        label: '직접 확인한 사실',
        options: ['대답이 평소보다 짧았다', '말수가 줄었다', '표정이 굳어 보였다', '아직 확인한 사실이 없다'],
      },
      {
        type: 'checklist',
        id: 'expression_inference_checks',
        label: '사실과 분리해 둘 해석',
        items: [
          '나 때문에 화가 났을 것 같다',
          '관계가 나빠졌을 것 같다',
          '내가 상대 기분을 해결해야 할 것 같다',
        ],
      },
      {
        type: 'memo',
        id: 'expression_next_action',
        label: '한 번 확인하거나 고칠 수 있는 내 행동',
        placeholder: '예: 내가 놓친 일이 있었는지 한 번 묻기',
      },
    ],
  },
  'attachment-styles': {
    title: '연애 장면을 네 단계로 기록하기',
    description: '유형 대신 사건·해석·첫 행동·결과의 순서를 남깁니다.',
    blocks: [
      {
        type: 'choice',
        id: 'relationship_event_kind',
        label: '기록할 실제 사건',
        options: ['답장이 예상보다 늦었다', '약속 시간이 바뀌었다', '만날 횟수를 조정했다', '다툰 뒤 연락을 다시 시작했다'],
      },
      {
        type: 'checklist',
        id: 'relationship_sequence_checks',
        label: '장면에서 분리해 적을 것',
        items: [
          '화면이나 일정에서 확인할 수 있는 사건',
          '사건 직후 붙인 해석',
          '가장 먼저 한 행동과 그 뒤의 결과',
        ],
      },
      {
        type: 'memo',
        id: 'relationship_sequence_note',
        label: '사건 / 해석 / 첫 행동 / 결과',
        placeholder: '예: 답장 3시간 없음 / 무시한다고 생각 / 확인 메시지 2개 / 부담이 커짐',
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
    title: '시작·중단·재시도의 행동 증거',
    description: '능력 평가 대신 실제로 한 동작과 다음 5분을 기록합니다.',
    blocks: [
      {
        type: 'choice',
        id: 'action_evidence_stage',
        label: '오늘 남길 행동 증거',
        options: ['시작한 첫 동작', '중단한 정확한 지점', '다시 시도한 시각', '다음 5분 행동'],
      },
      {
        type: 'checklist',
        id: 'action_evidence_checks',
        label: '확인 가능한 문장 조건',
        items: [
          '파일 열기처럼 실제 동사가 있다',
          '중단한 장소나 이유가 구체적이다',
          '재시도한 시간과 도달점이 있다',
        ],
      },
      {
        type: 'memo',
        id: 'next_five_minute_action',
        label: '중단 지점 다음의 5분 행동',
        placeholder: '예: 표 2에 필요한 수치 세 개 찾기',
      },
    ],
  },
  'mindfulness-habits': {
    title: '60초 감각 뒤 다음 행동 고르기',
    description: '감정을 없애지 않고 감각 하나와 바로 할 동작을 연결합니다.',
    blocks: [
      {
        type: 'choice',
        id: 'sixty_second_anchor',
        label: '지금 붙잡기 쉬운 감각',
        options: ['숨이 코를 지나는 느낌', '발바닥이 바닥에 닿는 감각', '컵을 쥔 손의 온도', '주변 사물 한 개의 색'],
      },
      {
        type: 'checklist',
        id: 'sixty_second_start_signs',
        label: '60초를 시작할 관찰 신호',
        items: [
          '같은 문장을 세 번 읽었다',
          '휴대폰을 들었다가 할 일을 잊었다',
          '하던 손이 멈춘 채 생각만 이어졌다',
        ],
      },
      {
        type: 'memo',
        id: 'sixty_second_next_action',
        label: '60초 뒤 바로 할 한 동작',
        placeholder: '예: 메일 제목 쓰기, 접시 한 장 씻기',
      },
    ],
  },
};
