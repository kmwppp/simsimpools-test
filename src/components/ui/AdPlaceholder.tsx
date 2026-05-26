interface AdPlaceholderProps {
  /** 광고 삽입 위치 — 심사 승인 후 AdSense 코드로 교체 */
  position?: 'home-mid' | 'result-mid' | 'content-bottom';
  className?: string;
}

export function AdPlaceholder({ position = 'content-bottom', className = '' }: AdPlaceholderProps) {
  const heightClass =
    position === 'home-mid' || position === 'content-bottom'
      ? 'h-20'
      : 'h-32';

  return (
    /* AdSense 광고 영역 — 승인 후 아래 주석 제거 후 코드 삽입
     * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     * <ins class="adsbygoogle" ... />
     */
    <div
      className={`w-full flex items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 ${heightClass} ${className}`}
      aria-hidden="true"
    >
      <span className="text-xs text-slate-300 tracking-widest uppercase">
        Advertisement
      </span>
    </div>
  );
}
