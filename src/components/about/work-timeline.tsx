interface WorkItem {
  year: string;
  company: string;
  role: string;
  description: string;
}

const ITEMS: WorkItem[] = [
  { year: '2025 – Present', company: 'Freelance', role: 'AI-Native Software Engineer & Marketing Specialist', description: '' },
  { year: '2021 – 2025', company: 'Corporate Roles & Freelance', role: 'Digital Marketer, UI/UX & Graphic Designer, Copywriter', description: '' },
  { year: '2023 – 2025', company: 'Volunteering', role: 'Tutor for Business & Marketing Students', description: '' },
];

export function WorkTimeline() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-foreground mb-6">
        Work Experience
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
                {item.role}
              </h3>
              <p className="text-lg text-muted leading-snug">{item.company}</p>
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
