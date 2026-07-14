import Link from 'next/link';
import { CircleUser, BriefcaseBusiness, FileText, MailOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SUMMARIES = [
  { href: '/about', key: 'about', heading: 'About me', description: "Who I am, what I've studied, where I've worked." },
  { href: '/work', key: 'work', heading: 'What I do', description: 'Services and completed projects.' },
  { href: '/articles', key: 'articles', heading: 'Articles', description: 'Thoughts on AI, marketing, and technology.' },
  { href: '/contact', key: 'contact', heading: 'Contact', description: 'Find me on social media.' },
] as const;

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  about: CircleUser,
  work: BriefcaseBusiness,
  articles: FileText,
  contact: MailOpen,
};

export function PageSummaries() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {SUMMARIES.map(({ href, key, heading, description }, index) => {
        const Icon = ICON_MAP[key];
        return (
        <Link
          key={key}
          href={href}
          className="group animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Card className="transition-colors duration-200 h-full">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-accent transition-colors">
                {Icon && <Icon size={16} className="inline-block me-1.5" aria-hidden="true" />}
                {heading}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted leading-relaxed">
                {description}
              </p>
            </CardContent>
          </Card>
        </Link>
      )})}
    </section>
  );
}
