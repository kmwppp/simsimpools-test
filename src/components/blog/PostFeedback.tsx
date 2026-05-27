import { useState, useEffect } from 'react';

type Reaction = 'helpful' | 'relatable' | 'thinking';

const REACTIONS: { key: Reaction; emoji: string; label: string }[] = [
  { key: 'helpful',   emoji: '🌟', label: '도움됐어요' },
  { key: 'relatable', emoji: '💬', label: '공감해요' },
  { key: 'thinking',  emoji: '🤔', label: '생각해볼게요' },
];

interface Props {
  postId: string;
  postTitle: string;
  postExcerpt: string;
}

export function PostFeedback({ postId, postTitle, postExcerpt }: Props) {
  const storageKey = `reaction-${postId}`;
  const [selected, setSelected] = useState<Reaction | null>(null);
  const [justSelected, setJustSelected] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as Reaction | null;
      if (saved && REACTIONS.some(r => r.key === saved)) {
        setSelected(saved);
      }
    } catch {
      // localStorage unavailable (private mode etc.) — silent fail
    }
  }, [storageKey]);

  const handleSelect = (key: Reaction) => {
    if (selected) return;
    try {
      localStorage.setItem(storageKey, key);
    } catch { /* ignore */ }
    setSelected(key);
    setJustSelected(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: postTitle, text: postExcerpt, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('링크가 복사됐습니다!');
      }).catch(() => {
        alert(`링크: ${window.location.href}`);
      });
    }
  };

  return (
    <div className="border-t border-slate-100 pt-8 mt-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

        {/* 반응 섹션 */}
        <div>
          <p className="text-sm font-medium text-slate-600 mb-3">이 글이 어떠셨나요?</p>
          {selected ? (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="text-lg">{REACTIONS.find(r => r.key === selected)?.emoji}</span>
              <span>
                {justSelected
                  ? '피드백 감사합니다 🙏'
                  : `'${REACTIONS.find(r => r.key === selected)?.label}'로 응답하셨어요`}
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {REACTIONS.map(({ key, emoji, label }) => (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all active:scale-95"
                  aria-label={label}
                >
                  <span aria-hidden="true">{emoji}</span>
                  <span className="text-xs">{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 공유 버튼 */}
        <button
          onClick={handleShare}
          className="self-start sm:self-center flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-500 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all"
          aria-label="링크 공유"
        >
          <span aria-hidden="true">📤</span>
          <span className="text-xs">공유하기</span>
        </button>
      </div>
    </div>
  );
}
