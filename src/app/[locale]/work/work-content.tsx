'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PageLayout } from '@/components/page-layout';
import { HeroSection } from '@/components/hero-section';
import { CtaSection } from '@/components/cta-section';
import {
  Code2,
  Monitor,
  Smartphone,
  Target,
  Workflow,
  Lightbulb,
  Rocket,
  GitBranch,
  Brain,
  PenTool,
  FileText,
  BookOpen,
  Search,
  Compass,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────

interface ServiceItem {
  name: string;
  description: string;
}

interface CompletedItem {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
}

interface WorkContentProps {
  servicesHeading: string;
  services: ServiceItem[];
  processHeading: string;
  completedHeading: string;
  completedItems: CompletedItem[];
}

// ── Service config: icon + color per service (index 0–11 from translations) ─

interface ServiceConfig {
  icon: LucideIcon;
  color: string;
}

const SERVICE_CONFIG: ServiceConfig[] = [
  { icon: Code2,      color: 'text-purple-400' },   // 0  Web Development
  { icon: Monitor,    color: 'text-blue-400' },      // 1  Web App Development
  { icon: Smartphone, color: 'text-pink-400' },      // 2  Mobile App Development
  { icon: Target,     color: 'text-amber-400' },     // 3  Go-To-Market Strategy
  { icon: Workflow,   color: 'text-green-400' },     // 4  Marketing Automation
  { icon: Lightbulb,  color: 'text-yellow-400' },    // 5  Marketing Consulting
  { icon: Rocket,     color: 'text-red-400' },       // 6  Forward-Deployed Engineering
  { icon: GitBranch,  color: 'text-teal-400' },      // 7  Workflow Automation
  { icon: Brain,      color: 'text-indigo-400' },    // 8  AI & Tech Consulting
  { icon: PenTool,    color: 'text-purple-400' },    // 9  Copywriting
  { icon: FileText,   color: 'text-blue-400' },      // 10 Content Writing
  { icon: BookOpen,   color: 'text-pink-400' },      // 11 Technical Documentation
];

// ── Process-step config ────────────────────────────────────────────────────

const PROCESS_STEPS = [
  { icon: Search,      color: 'text-blue-400' },
  { icon: Compass,     color: 'text-amber-400' },
  { icon: Rocket,      color: 'text-purple-400' },
  { icon: CheckCircle, color: 'text-green-400' },
] as const;

// ── Shared glass-card classes ──────────────────────────────────────────────

const glassCard =
  'rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 hover:border-purple-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(168,85,247,0.08)] transition-all duration-300';

const iconContainer =
  'w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center mb-3 shrink-0';

// ── Component ──────────────────────────────────────────────────────────────

export function WorkContent({
  servicesHeading,
  services,
  processHeading,
  completedHeading,
  completedItems,
}: WorkContentProps) {
  const t = useTranslations('work');
  const tc = useTranslations('articles.categories');

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <HeroSection headingKey="heading" headingNamespace="work" hideImage />

      {/* ── Services ──────────────────────────────────────────────── */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const config = SERVICE_CONFIG[i] ?? SERVICE_CONFIG[0];
            const Icon = config.icon;
            return (
              <div
                key={i}
                className={`${glassCard} animate-fade-up`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={iconContainer}>
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {service.name}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How I Work ────────────────────────────────────────────── */}
      <section>
        <h2 className="text-3xl font-semibold text-text-primary mb-8">
          {processHeading}
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map(({ icon: StepIcon, color }, i) => (
              <div
                key={i}
                className={`${glassCard} relative group`}
              >
                {/* Step number */}
                <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/30 text-lg font-bold text-purple-300 flex items-center justify-center backdrop-blur-sm">
                  {i + 1}
                </span>

                <div className={iconContainer}>
                  <StepIcon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {t(`process.steps.${i}.title`)}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {t(`process.steps.${i}.description`)}
                </p>

                {/* Arrow for mobile/tablet (not on last) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="hidden sm:block lg:hidden absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      {/* ── Completed Projects ────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-semibold text-text-primary">
            {completedHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {completedItems.map((item, i) => (
            <Link key={i} href={`/case-studies/${item.slug}`} className="block group">
              <div className={glassCard}>
                {/* Top row: date + category badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg text-text-secondary font-mono">
                    {item.date}
                  </span>
                  <span className="text-lg px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 font-medium">
                    {tc(item.category)}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-1 mt-3 text-lg text-purple-400/60 group-hover:text-purple-400 transition-colors">
                  <span>Read more</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}