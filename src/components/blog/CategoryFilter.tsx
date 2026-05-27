interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: Props) {
  const all = ['전체', ...categories];

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            active === cat
              ? 'bg-brand-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
