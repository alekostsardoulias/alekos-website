interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  description: string;
}

const ITEMS: EducationItem[] = [
  { year: '2020 – Present', institution: 'freeCodeCamp, roadmaps.sh, YouTube', degree: 'Computer Software Engineering', description: '' },
  { year: '2024 – 2025', institution: 'University of Nicosia', degree: 'Blockchain, Cryptocurrencies, NFTs and the Metaverse', description: '' },
  { year: '2023 – 2024', institution: 'Knowcrunch', degree: 'Digital Marketing', description: '' },
  { year: '2020 – 2024', institution: 'Queen Margaret University', degree: 'Marketing Management', description: '' },
  { year: '2019 – 2023', institution: 'University of Patras', degree: 'Philosophy', description: '' },
];

export function EducationTimeline() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-foreground mb-6">
        Education
      </h2>
      <div className="space-y-1">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="grid py-2 ps-3 border-s-2 border-purple-400/20 animate-fade-up"
            style={{ gridTemplateColumns: '180px 1fr', columnGap: '1rem' }}
          >
            <span className="inline-block px-2 py-0.5 rounded-full text-lg font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 shrink-0 h-fit mt-0.5 min-w-[180px] whitespace-nowrap text-center">
              {item.year}
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-foreground leading-snug">
                {item.degree}
              </h3>
              <p className="text-lg text-muted leading-snug">{item.institution}</p>
              {item.description && !item.description.startsWith('TODO') && (
                <p className="text-lg text-muted mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
