'use client';

import Link from 'next/link';
import { Code2, Megaphone, Bot, Lightbulb } from 'lucide-react';

const SERVICES = [
  { icon: Code2, color: 'text-purple-400', title: 'Software Development', description: 'Custom websites, web apps, mobile apps and internal tools tailored for your needs. Fast, responsive, cost-optimized, SEO-ready, AI-Native.' },
  { icon: Megaphone, color: 'text-blue-400', title: 'Marketing & Growth', description: 'Go-to-market strategy, marketing automation, copy and content writing, and conversion-focused campaigns that drive results.' },
  { icon: Bot, color: 'text-pink-400', title: 'AI & Automation', description: 'AI integration, workflow automation, marketing automation, and intelligent systems that scale your product or business.' },
  { icon: Lightbulb, color: 'text-amber-400', title: 'Strategy & Consulting', description: 'Technical advisory, architecture decisions, and product strategy for founders, modern businesses and organizations.' },
];

export function HomeServices() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {SERVICES.map(({ icon: Icon, color, title, description }, i) => (
            <Link key={i} href="/work" className="block group h-full">
              <div
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 hover:border-purple-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-4">
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-purple-300 transition-colors">
                  {title}
                </h3>
                <p className="text-lg text-text-secondary">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
