'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const badgeStyles = [
  'bg-purple-500/10 text-purple-400 border border-purple-400/20',
  'bg-blue-500/10 text-blue-400 border border-blue-400/20',
  'bg-pink-500/10 text-pink-400 border border-pink-400/20',
] as const;

const FEATURED = [
  { title: 'How AI Is Changing Marketing', category: 'Technology', description: 'An analysis of how AI tools are transforming digital marketing strategies in 2026.', slug: 'ai-marketing-2026' },
  { title: 'Modern Web Development in 2026', category: 'Technology', description: 'The tools, frameworks, and practices I use for web development today.', slug: 'modern-web-dev' },
  { title: 'E-Commerce Redesign Case Study', category: 'Case Study', description: 'How I redesigned an e-commerce platform for better UX and 40% higher conversion.', slug: 'ecommerce-redesign' },
];

export function HomeFeatured() {
  const heading = 'Featured Work';
  const viewProject = 'View project';

  return (
    <section>
      <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED.map((item, i) => (
          <Link
            key={item.title}
            href="/work"
            className="block group rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-purple-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all"
          >
            <div className="flex flex-col gap-3 h-full p-6">
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-lg font-medium w-fit ${badgeStyles[i]}`}
              >
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-text-primary group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-lg text-text-secondary">{item.description}</p>
              <span className="text-purple-400 group-hover:text-purple-300 text-lg font-medium transition-colors inline-flex items-center gap-1 mt-auto">
                {viewProject}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
