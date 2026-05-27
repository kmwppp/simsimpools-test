import { Link } from 'react-router-dom';
import { testsMeta } from '../data/tests';
import { SEOMeta } from '../components/seo/SEOMeta';
import { Badge } from '../components/ui/Badge';
import { AdPlaceholder } from '../components/ui/AdPlaceholder';

export function TestList() {
  return (
    <>
      <SEOMeta
        title="짧은 문답 — 내 반응을 천천히 살펴보는 질문들"
        description="약속 뒤의 피로, 거절 뒤의 불편함, 가까운 사람과 엇갈리는 순간을 떠올려보는 짧은 문답 5가지."
        canonical="/tests"
      />

      {/* Page header */}
      <div className="bg-white border-b border-slate-100">
        <div className="section-container py-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">짧은 문답</h1>
          <p className="text-slate-500">설명하기 어려운 내 반응들을 천천히 떠올려봅니다.</p>
        </div>
      </div>

      <div className="section-container py-12">

        {/* ── SEO 소개 섹션 ── */}
        <div className="mb-14 max-w-2xl">
          <p className="text-slate-700 leading-[1.92] mb-5 text-[0.975rem]">
            자기 자신을 가장 잘 모른다고 느끼는 순간은 대부분 거창한 상황이 아닙니다.
            약속이 잡혔는데 왜 이렇게 마음이 무거운지, 재밌게 놀고 왔는데 왜 집에 오면 아무 말도 하기 싫은지,
            똑같은 말인데 어떤 사람에게 들을 때는 괜찮고 어떤 사람에게 들을 때는 상처가 되는지.
            그 이유를 딱 꼬집어 말하기 어려운 날들이 있어요.
          </p>
          <p className="text-slate-700 leading-[1.92] mb-8 text-[0.975rem]">
            여기에 있는 문답들은 그런 장면들과 연결되어 있습니다.
            스트레스가 올라오는 방식, 가까운 사람과의 거리감, 마음이 회복되는 속도처럼 —
            이론을 배우기 위한 게 아니라,
            "나는 왜 이런 상황에서 이렇게 되는 걸까"를 조금 더 선명하게 들여다보기 위한 것들입니다.
          </p>

          <h2 className="text-base font-bold text-slate-800 mb-3">결과를 어떻게 읽으면 좋을까요</h2>
          <p className="text-slate-600 leading-[1.92] mb-4 text-[0.975rem]">
            문답 결과는 정답이 아닙니다. 내가 어떤 유형인지를 증명하는 자료라기보다,
            지금의 나를 관찰하는 출발점에 가깝습니다.
            같은 문답을 1년 뒤에 다시 하면 결과가 달라지는 경우도 있고,
            컨디션이 좋을 때와 많이 지쳐 있을 때 다르게 나오기도 해요.
            그 변화 자체가 나에 대한 정보입니다.
          </p>
          <p className="text-slate-600 leading-[1.92] text-[0.975rem]">
            결과를 받은 뒤 "아, 나 원래 이런 사람이구나"로 닫기보다,
            "이 부분은 맞는 것 같고, 이 부분은 좀 다른 것 같은데"를 떠올려보는 게 더 유용합니다.
            문답은 나를 분류하기 위한 도구가 아니라, 나를 관찰하는 작은 계기에 가깝습니다.
          </p>
        </div>

        <div className="border-t border-slate-100 mb-10" />

        {/* ── 테스트 카드 목록 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testsMeta.map(test => (
            <Link
              key={test.id}
              to={`/tests/${test.id}`}
              className="card group hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{test.thumbnail}</div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge color={test.categoryColor as 'violet'}>{test.category}</Badge>
                  {test.popular && <Badge color="amber">🔥 인기</Badge>}
                  {test.isNew && <Badge color="emerald">NEW</Badge>}
                </div>
                <h2 className="text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                  {test.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                  {test.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {test.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-5 flex items-center justify-between border-t border-slate-50 pt-4">
                <span className="text-xs text-slate-400">⏱ {test.duration}</span>
                <span className="text-xs text-slate-400">{test.questionCount}문항</span>
                <span className="text-sm font-medium text-brand-600 group-hover:underline">
                  시작하기 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <AdPlaceholder position="content-bottom" />
        </div>
      </div>
    </>
  );
}
