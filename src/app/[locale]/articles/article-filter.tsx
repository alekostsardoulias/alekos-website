'use client';

import { useState } from 'react';
import { ArticleCard } from '@/components/articles/article-card';
import type { Article } from '@/lib/types';

interface ArticleFilterProps {
  articles: Article[];
  categories: string[];
  allLabel: string;
  emptyMessage: string;
  readMoreLabel: string;
  readingTimeLabel: string;
}

export function ArticleFilter({
  articles,
  categories,
  allLabel,
  emptyMessage,
  readMoreLabel,
  readingTimeLabel,
}: ArticleFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <section>
      {/* Category filter — glass pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full border text-lg transition-all duration-200 ${
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
            className={`px-4 py-2 rounded-full border text-lg transition-all duration-200 ${
              activeCategory === cat
                ? 'border-purple-400/30 bg-purple-500/10 text-purple-400'
                : 'border-white/[0.06] bg-white/[0.02] text-text-secondary hover:border-white/[0.12]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article list */}
      {filtered.length === 0 ? (
        <p className="text-text-secondary text-center py-12">{emptyMessage}</p>
      ) : (
        <div className="space-y-6" key={activeCategory ?? 'all'}>
          {filtered.map((article, index) => (
            <div
              key={article.slug}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ArticleCard
                title={article.title}
                date={article.date}
                category={article.category}
                excerpt={article.excerpt}
                slug={article.slug}
                featured={index === 0}
                readMoreLabel={readMoreLabel}
                readingTimeLabel={readingTimeLabel}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}