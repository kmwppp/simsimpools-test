import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';

interface Props {
  content: string;
}

/**
 * Markdown body 포맷의 블로그 포스트를 렌더링합니다.
 * react-markdown + remark-gfm 사용.
 * 내부 경로(/로 시작)는 react-router Link로 처리.
 */
export function BlogMarkdown({ content }: Props) {
  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-[1.35rem] font-bold text-slate-800 mt-12 mb-4 leading-snug tracking-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-slate-700 mt-8 mb-3 leading-snug">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-slate-700 leading-[1.95] mb-6 text-[0.975rem] sm:text-base">
              {children}
            </p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-brand-400 pl-5 py-2 my-7 bg-brand-50/60 rounded-r-2xl text-slate-600 leading-relaxed not-italic">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6 pl-5 text-slate-700 list-none">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 mb-6 pl-5 text-slate-700 list-decimal">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed flex gap-2 items-start before:content-['·'] before:text-brand-400 before:font-bold before:flex-shrink-0 before:mt-0.5">
              <span>{children}</span>
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-600">{children}</em>
          ),
          hr: () => (
            <div className="my-10 flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-slate-300 text-xs">✦</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>
          ),
          a: ({ href, children }) => {
            if (!href) return <>{children}</>;
            if (href.startsWith('/') || href.startsWith('#')) {
              return (
                <Link
                  to={href}
                  className="text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-800 font-medium transition-colors"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-800 transition-colors"
              >
                {children}
              </a>
            );
          },
          code: ({ children }) => (
            <code className="bg-slate-100 text-brand-700 px-1.5 py-0.5 rounded text-sm font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-slate-900 text-slate-100 rounded-xl p-5 overflow-x-auto mb-6 text-sm leading-relaxed">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
