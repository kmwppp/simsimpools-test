import { useEffect, useMemo, useState } from 'react';
import type { BlogInteractive as BlogInteractiveData, BlogInteractiveBlock } from '../../types/blog';
import {
  clearBlogInteractiveValues,
  createInitialBlogInteractiveValues,
  readBlogInteractiveValues,
  writeBlogInteractiveValues,
  type BlogInteractiveValues,
} from '../../utils/blogInteractiveStorage';

type SavedValues = BlogInteractiveValues;

interface BlogInteractiveProps {
  postId: string;
  data: BlogInteractiveData;
}

function readSavedValues(postId: string): SavedValues {
  if (typeof window === 'undefined') return {};
  return readBlogInteractiveValues(window.localStorage, postId);
}

function defaultSliderValue(block: Extract<BlogInteractiveBlock, { type: 'slider' }>) {
  const min = block.min ?? 1;
  const max = block.max ?? 5;
  return block.defaultValue ?? Math.round((min + max) / 2);
}

export function BlogInteractive({ postId, data }: BlogInteractiveProps) {
  const [values, setValues] = useState<SavedValues>(createInitialBlogInteractiveValues);
  const [loadedPostId, setLoadedPostId] = useState<string | null>(null);

  useEffect(() => {
    setValues(readSavedValues(postId));
    setLoadedPostId(postId);
  }, [postId]);

  useEffect(() => {
    if (typeof window === 'undefined' || loadedPostId !== postId) return;
    writeBlogInteractiveValues(window.localStorage, postId, values);
  }, [loadedPostId, postId, values]);

  const checklistItems = useMemo(
    () =>
      data.blocks.flatMap((block) =>
        block.type === 'checklist'
          ? block.items.map((_, index) => `${block.id}.${index}`)
          : []
      ),
    [data.blocks]
  );

  const checkedCount = checklistItems.filter((key) => values[key] === true).length;
  const progress = checklistItems.length > 0 ? Math.round((checkedCount / checklistItems.length) * 100) : 0;

  function setValue(key: string, value: string | number | boolean) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setValues({});
    if (typeof window !== 'undefined') {
      clearBlogInteractiveValues(window.localStorage, postId);
    }
  }

  return (
    <section className="mt-12 mb-12 rounded-2xl border border-brand-100 bg-gradient-to-br from-white via-brand-50/50 to-slate-50 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand-500 mb-2">
            Interactive note
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            {data.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {data.description}
          </p>
        </div>
        {checklistItems.length > 0 && (
          <div className="shrink-0 rounded-xl bg-white border border-slate-100 px-4 py-3 text-right shadow-sm">
            <p className="text-xs text-slate-400 mb-1">체크 진행</p>
            <p className="text-lg font-bold text-brand-600">{progress}%</p>
          </div>
        )}
      </div>

      <div className="space-y-5">
        {data.blocks.map((block) => (
          <InteractiveBlock
            key={block.id}
            block={block}
            values={values}
            onChange={setValue}
          />
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200/70 pt-5">
        <p className="text-xs text-slate-500 leading-relaxed">
          입력한 내용은 현재 브라우저에만 저장되며 외부 서버로 전송되지 않습니다. 기록 지우기로 삭제할 수 있습니다.
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors self-start sm:self-auto"
        >
          기록 지우기
        </button>
      </div>
    </section>
  );
}

interface InteractiveBlockProps {
  block: BlogInteractiveBlock;
  values: SavedValues;
  onChange: (key: string, value: string | number | boolean) => void;
}

function InteractiveBlock({ block, values, onChange }: InteractiveBlockProps) {
  if (block.type === 'checklist') {
    return (
      <div className="rounded-xl bg-white border border-slate-100 p-4 sm:p-5">
        <h3 className="text-sm font-bold text-slate-800 mb-3">{block.label}</h3>
        <div className="space-y-2">
          {block.items.map((item, index) => {
            const key = `${block.id}.${index}`;
            const checked = values[key] === true;

            return (
              <label
                key={item}
                className={`flex items-start gap-3 rounded-lg border px-3 py-3 text-sm leading-relaxed cursor-pointer transition-colors ${
                  checked
                    ? 'border-brand-200 bg-brand-50 text-slate-800'
                    : 'border-slate-100 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(event) => onChange(key, event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <span>{item}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  if (block.type === 'slider') {
    const min = block.min ?? 1;
    const max = block.max ?? 5;
    const value =
      typeof values[block.id] === 'number'
        ? Number(values[block.id])
        : defaultSliderValue(block);

    return (
      <div className="rounded-xl bg-white border border-slate-100 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-sm font-bold text-slate-800">{block.label}</h3>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-bold text-brand-600">
            {value}
          </span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(event) => onChange(block.id, Number(event.target.value))}
          className="w-full accent-brand-600"
        />
        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>{block.minLabel}</span>
          <span>{block.maxLabel}</span>
        </div>
      </div>
    );
  }

  if (block.type === 'choice' || block.type === 'sentence') {
    const selected = typeof values[block.id] === 'string' ? String(values[block.id]) : '';

    return (
      <div className="rounded-xl bg-white border border-slate-100 p-4 sm:p-5">
        <h3 className="text-sm font-bold text-slate-800 mb-3">{block.label}</h3>
        <div className="grid grid-cols-1 gap-2">
          {block.options.map((option) => {
            const active = selected === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onChange(block.id, option)}
                className={`text-left rounded-lg border px-3 py-3 text-sm leading-relaxed transition-colors ${
                  active
                    ? 'border-brand-300 bg-brand-50 text-slate-900'
                    : 'border-slate-100 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {block.type === 'sentence' && selected && (
          <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500 leading-relaxed">
            오늘 남긴 문장: <span className="font-medium text-slate-700">{selected}</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white border border-slate-100 p-4 sm:p-5">
      <label htmlFor={block.id} className="block text-sm font-bold text-slate-800 mb-3">
        {block.label}
      </label>
      <textarea
        id={block.id}
        value={typeof values[block.id] === 'string' ? String(values[block.id]) : ''}
        onChange={(event) => onChange(block.id, event.target.value)}
        placeholder={block.placeholder}
        rows={3}
        className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
