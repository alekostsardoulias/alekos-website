'use client';

const STATS = [
  { value: '50+', label: 'Projects Completed' },
  { value: '5+', label: 'Years of Experience' },
  { value: '100+', label: 'Tools & Technologies' },
  { value: '200+', label: 'Articles Written' },
];

export function HomeStats() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
        By the Numbers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 text-center hover:border-purple-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all"
          >
            <p className="text-5xl md:text-5xl font-bold text-gradient">
              {stat.value}
            </p>
            <p className="text-lg text-text-tertiary mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
