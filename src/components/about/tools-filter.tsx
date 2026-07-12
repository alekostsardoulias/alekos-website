'use client';

import { useState, useEffect } from 'react';

interface ToolsFilterProps {
  tools: Array<{ name: string; category: string; icon?: string }>;
  categories: string[];
  heading: string;
  allLabel: string;
  emptyMessage: string;
}

export function ToolsFilter({
  tools,
  categories,
  heading,
  allLabel,
  emptyMessage,
}: ToolsFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(20);

  const filtered = activeCategory
    ? tools.filter((t) => t.category === activeCategory)
    : tools;

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(20);
  }, [activeCategory]);

  const displayed = filtered.slice(0, visibleCount);

  return (
    <section className="border-t border-border pt-8 mt-12">
      <h2 className="text-xl font-semibold text-foreground mb-6">{heading}</h2>

      {/* Category filter — glass pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full border text-base transition-all duration-200 ${
            activeCategory === null
              ? 'border-purple-400/30 bg-purple-500/10 text-purple-400'
              : 'border-white/[0.06] bg-white/[0.02] text-text-secondary hover:border-white/[0.12]'
          }`}
        >
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border text-base transition-all duration-200 ${
              activeCategory === cat
                ? 'border-purple-400/30 bg-purple-500/10 text-purple-400'
                : 'border-white/[0.06] bg-white/[0.02] text-text-secondary hover:border-white/[0.12]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tool badges grid */}
      {filtered.length === 0 ? (
        <p className="text-text-secondary text-center py-12">{emptyMessage}</p>
      ) : (
        <>
          <div
            key={activeCategory ?? 'all'}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {displayed.map((tool, index) => (
              <div
                key={tool.name}
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-base text-text-secondary hover:border-white/[0.12] transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tool.name}
              </div>
            ))}
          </div>
          {filtered.length > visibleCount && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleCount(filtered.length)}
                className="rounded-full border border-purple-400/20 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-all text-sm px-6 py-2"
              >
                Show {filtered.length - visibleCount} more
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
