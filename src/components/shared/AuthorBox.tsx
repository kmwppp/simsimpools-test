export interface AuthorBoxProps {
  /** 최초 게시일 (YYYY-MM-DD) */
  publishedAt: string;
  /** 마지막 수정일 (YYYY-MM-DD). 미제공 시 publishedAt 사용 */
  lastModified?: string;
}

export function AuthorBox({ publishedAt, lastModified }: AuthorBoxProps) {
  const modified = lastModified ?? publishedAt;
  const isUpdated = lastModified && lastModified !== publishedAt;

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 border-y border-slate-100 py-4 mb-8 text-xs text-slate-500">

      {/* 왼쪽: 팀 귀속 */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm flex-shrink-0 select-none">
          심
        </div>
        <div>
          <p className="font-semibold text-slate-700 text-xs leading-snug">심심풀이 편집팀</p>
          <p className="text-[11px] text-slate-400 leading-snug">교육·오락 목적의 독립 콘텐츠</p>
        </div>
      </div>

      {/* 오른쪽: 날짜 */}
      <div className="flex items-center gap-3 text-[11px] text-slate-400">
        <span>
          <span className="font-medium text-slate-500">게시</span>{' '}
          <time dateTime={publishedAt}>{publishedAt}</time>
        </span>
        {isUpdated && (
          <>
            <span className="text-slate-200">·</span>
            <span>
              <span className="font-medium text-slate-500">수정</span>{' '}
              <time dateTime={modified}>{modified}</time>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
