import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/** 섹션 본문 내 키워드 → 내부 링크 자동 변환 */
const LINK_MAP: [RegExp, string][] = [
  [/동물 성격 유형 테스트/g, '/tests/animal-personality'],
  [/연애 성향 테스트/g, '/tests/love-style'],
  [/스트레스 반응 유형 테스트/g, '/tests/stress-response'],
  [/인간관계 거리감 테스트/g, '/tests/social-distance'],
  [/감정 회복 스타일 테스트/g, '/tests/emotional-recovery'],
  [/감정 회복 스타일/g, '/tests/emotional-recovery'],
  // 블로그 포스트 내부 링크
  [/감정 소비 패턴/g, '/blog/emotional-drain-patterns'],
  [/애착 유형/g, '/blog/attachment-styles'],
  [/경계선 설정/g, '/blog/boundaries-setting'],
  [/고독의 회복/g, '/blog/solitude-recovery'],
];

type Segment = string | React.ReactElement;

/** 텍스트에서 키워드를 찾아 <Link>로 교체 후 ReactNode 배열 반환 */
export function linkify(text: string): Segment[] {
  let parts: Segment[] = [text];

  for (const [pattern, href] of LINK_MAP) {
    parts = parts.flatMap<Segment>((seg) => {
      if (typeof seg !== 'string') return [seg];

      const result: Segment[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      // RegExp를 재사용하기 위해 lastIndex 초기화
      pattern.lastIndex = 0;

      while ((match = pattern.exec(seg)) !== null) {
        if (match.index > lastIndex) {
          result.push(seg.slice(lastIndex, match.index));
        }
        result.push(
          <Link
            key={`${href}-${match.index}`}
            to={href}
            className="text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-800 font-medium transition-colors"
          >
            {match[0]}
          </Link>
        );
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < seg.length) {
        result.push(seg.slice(lastIndex));
      }

      return result.length > 0 ? result : [seg];
    });
  }

  return parts;
}

/** 텍스트를 받아 내부 링크가 포함된 ReactNode를 반환 */
export function TextWithLinks({ text }: { text: string }) {
  const segments = linkify(text);
  return (
    <>
      {segments.map((seg, i) => (
        <Fragment key={i}>{seg}</Fragment>
      ))}
    </>
  );
}
