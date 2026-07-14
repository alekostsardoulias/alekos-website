import { PageLayout } from '@/components/page-layout';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { EducationTimeline } from '@/components/about/education-timeline';
import { WorkTimeline } from '@/components/about/work-timeline';
import { ToolsFilter } from '@/components/about/tools-filter';
import { CtaSection } from '@/components/cta-section';
import { FaqSection } from '@/components/about/faq-section';
import {
  Sparkles,
  Heart,
  BookOpen,
  User,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Alexandros Tsardoulias — AI-Native Software Engineer & Marketing Specialist.',
};

const philosophyIcons = [Sparkles, Heart, BookOpen] as const;

const philosophyColors: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  1: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  2: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
};

const BIO_PARAGRAPHS = [
  "I'm an interdisciplinary engineer, marketer and researcher helping founders, startups, SMEs and NGOs achieve their goals by bridging technology, philosophy, growth strategy and best communication practices. With my work, I transform ideas into scalable digital products and revenue-generating systems.",
  "I don't just write code for web apps or manage social media and emails, I build holistic systems that generate measurable results. I treat a product's technical architecture and its go-to-market strategy as one problem, not two.",
];

const PHILOSOPHY_ITEMS = [
  { title: "Less Is More", description: "I believe the best solutions are the ones you barely notice. Clean architecture, intentional design, and code that reads like a conversation. Complexity is easy. Clarity takes discipline." },
  { title: "Technology Should Benefit Humanity", description: "Every product I build starts with a single question: who does this help, and how? Technology is at its best when it fades into the background and lets people live better lives. I don't build for the sake of building." },
  { title: "Continuous Learning", description: "This field reinvents itself every few years. I stay sharp by building real things, not just reading about them. If I'm not slightly uncomfortable with what I'm working on, I'm not learning fast enough." },
];

const FAQ_ITEMS = [
  { question: "What exact services do you offer?", answer: "I build custom websites, applications and custom software solutions, handle marketing, workflow automation and strategy. Basically the full stack from code to go-to-market strategy and scaling. If your product or business lives on the web or needs AI integration, I can probably help." },
  { question: "What does your onboarding and project timeline look like?", answer: "We start with a free 30 minute call to figure out what you actually need. After that I send a proposal with timeline and pricing. Typical projects run 2 to 8 weeks depending on scope. I check in weekly and you get access to a shared workspace so you always know where things stand." },
  { question: "Can you work with existing codebases or business projects?", answer: "Yes. I've jumped into codebases and docs I didn't write plenty of times. It takes a day or two to get oriented, then I'm productive. I'm comfortable with legacy systems, messy code, and projects where the original developer or writer vanished." },
  { question: "Can you work with our team or join our organization?", answer: "I can embed with your team on a contract basis or formal recruitment. I've done forward-deployed engineering and I'm comfortable with teams, cooperation and joining existing workflows without disrupting them." },
  { question: "Do you collab with other freelancers to work together?", answer: "I have a network of developers, designers, and marketers I've worked with. If your project needs skills outside my wheelhouse, I can bring in people I trust. You get one point of contact and I handle the coordination." },
  { question: "Can you integrate AI to our business/project and automate our workflows?", answer: "This is literally half of what I do. LLM APIs, RAG pipelines, agentic workflows, Zapier and n8n automations. I've built AI powered chatbots, content generation systems, automated lead qualification, and internal tools that save teams hours every week." },
  { question: "Are you experienced in what you do? Why don't you have public portfolio projects?", answer: "I've been doing this for over 5 years across freelance and corporate roles. Most of my best work is under NDA or built for internal company use. What I can show publicly is on my case studies page. I prioritize delivering for clients over maintaining a flashy portfolio." },
  { question: "Are you available to take new projects right now?", answer: "Usually yes. I take on 2 to 3 active projects at a time so I can give each one real attention. If I'm full, I'll tell you and offer to schedule a start date or refer you to someone in my network." },
  { question: "Why do you write articles about philosophy, politics, arts and non-industry matters?", answer: "Because software doesn't exist in a vacuum. The best engineers I know read widely. Philosophy teaches you to think clearly about ambiguous problems. Politics shapes the systems we build on. Art trains your taste. Writing about these things makes me better at my actual job, not distracted from it." },
];

const TOOLS_CATEGORIES = [
  "Programming Languages",
  "Front-End & UI/UX",
  "Back-End & Databases",
  "DevOps & CI/CD",
  "Marketing & Analytics",
  "Design & Creative",
  "AI Tools",
  "Automation Tools",
  "Project & Knowledge Management Tools",
];

const TOOLS_ITEMS = [
  { name: "HTML", category: "Programming Languages" },
  { name: "CSS", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "TypeScript", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "Bash", category: "Programming Languages" },
  { name: "SQL", category: "Programming Languages" },
  { name: "Kotlin", category: "Programming Languages" },
  { name: "Swift", category: "Programming Languages" },
  { name: "React", category: "Front-End & UI/UX" },
  { name: "Next.js", category: "Front-End & UI/UX" },
  { name: "Tailwind CSS", category: "Front-End & UI/UX" },
  { name: "Vue.js", category: "Front-End & UI/UX" },
  { name: "Astro", category: "Front-End & UI/UX" },
  { name: "Svelte", category: "Front-End & UI/UX" },
  { name: "Nuxt.js", category: "Front-End & UI/UX" },
  { name: "Remix", category: "Front-End & UI/UX" },
  { name: "SolidJS", category: "Front-End & UI/UX" },
  { name: "Vite", category: "Front-End & UI/UX" },
  { name: "Bun", category: "Front-End & UI/UX" },
  { name: "Turbopack", category: "Front-End & UI/UX" },
  { name: "Framer Motion", category: "Front-End & UI/UX" },
  { name: "GSAP", category: "Front-End & UI/UX" },
  { name: "shadcn/ui", category: "Front-End & UI/UX" },
  { name: "Three.js", category: "Front-End & UI/UX" },
  { name: "Lenis", category: "Front-End & UI/UX" },
  { name: "Node.js", category: "Back-End & Databases" },
  { name: "NestJS", category: "Back-End & Databases" },
  { name: "Express", category: "Back-End & Databases" },
  { name: "Fastify", category: "Back-End & Databases" },
  { name: "FastAPI", category: "Back-End & Databases" },
  { name: "Django", category: "Back-End & Databases" },
  { name: "Flask", category: "Back-End & Databases" },
  { name: "REST APIs", category: "Back-End & Databases" },
  { name: "GraphQL", category: "Back-End & Databases" },
  { name: "tRPC", category: "Back-End & Databases" },
  { name: "Prisma", category: "Back-End & Databases" },
  { name: "Supabase DB", category: "Back-End & Databases" },
  { name: "PostgreSQL", category: "Back-End & Databases" },
  { name: "MySQL", category: "Back-End & Databases" },
  { name: "SQLite", category: "Back-End & Databases" },
  { name: "MongoDB", category: "Back-End & Databases" },
  { name: "Redis", category: "Back-End & Databases" },
  { name: "Git", category: "DevOps & CI/CD" },
  { name: "GitHub Actions", category: "DevOps & CI/CD" },
  { name: "Docker", category: "DevOps & CI/CD" },
  { name: "Terraform", category: "DevOps & CI/CD" },
  { name: "Kubernetes", category: "DevOps & CI/CD" },
  { name: "Google Ads", category: "Marketing & Analytics" },
  { name: "Meta Ads Manager", category: "Marketing & Analytics" },
  { name: "TikTok Ads Manager", category: "Marketing & Analytics" },
  { name: "LinkedIn Campaign Manager", category: "Marketing & Analytics" },
  { name: "Google Analytics", category: "Marketing & Analytics" },
  { name: "Mixpanel", category: "Marketing & Analytics" },
  { name: "Semrush", category: "Marketing & Analytics" },
  { name: "Ahrefs", category: "Marketing & Analytics" },
  { name: "Google Search Console", category: "Marketing & Analytics" },
  { name: "Google Keyword Planner", category: "Marketing & Analytics" },
  { name: "Surfer SEO", category: "Marketing & Analytics" },
  { name: "HubSpot Marketing Hub", category: "Marketing & Analytics" },
  { name: "Salesforce", category: "Marketing & Analytics" },
  { name: "LinkedIn Sales Navigator", category: "Marketing & Analytics" },
  { name: "Hootsuite", category: "Marketing & Analytics" },
  { name: "Sprout Social", category: "Marketing & Analytics" },
  { name: "Buffer", category: "Marketing & Analytics" },
  { name: "Mailchimp", category: "Marketing & Analytics" },
  { name: "Brevo", category: "Marketing & Analytics" },
  { name: "Klaviyo", category: "Marketing & Analytics" },
  { name: "Kit", category: "Marketing & Analytics" },
  { name: "beehiiv", category: "Marketing & Analytics" },
  { name: "Substack", category: "Marketing & Analytics" },
  { name: "Shopify", category: "Marketing & Analytics" },
  { name: "WooCommerce", category: "Marketing & Analytics" },
  { name: "Stripe", category: "Marketing & Analytics" },
  { name: "PostHog", category: "Marketing & Analytics" },
  { name: "Adobe Creative Cloud", category: "Design & Creative" },
  { name: "Figma", category: "Design & Creative" },
  { name: "Framer", category: "Design & Creative" },
  { name: "Miro", category: "Design & Creative" },
  { name: "Canva", category: "Design & Creative" },
  { name: "CapCut", category: "Design & Creative" },
  { name: "Replit", category: "Design & Creative" },
  { name: "Lovable", category: "Design & Creative" },
  { name: "Bolt.new", category: "Design & Creative" },
  { name: "LLMs", category: "AI Tools" },
  { name: "LLM APIs", category: "AI Tools" },
  { name: "Hugging Face", category: "AI Tools" },
  { name: "Ollama", category: "AI Tools" },
  { name: "vLLM", category: "AI Tools" },
  { name: "LM Studio", category: "AI Tools" },
  { name: "OpenCode", category: "AI Tools" },
  { name: "Claude Code", category: "AI Tools" },
  { name: "Codex", category: "AI Tools" },
  { name: "LangChain", category: "AI Tools" },
  { name: "LangGraph", category: "AI Tools" },
  { name: "CrewAI", category: "AI Tools" },
  { name: "LlamaIndex", category: "AI Tools" },
  { name: "Dify", category: "AI Tools" },
  { name: "AutoGen", category: "AI Tools" },
  { name: "Flowise", category: "AI Tools" },
  { name: "Zapier", category: "Automation Tools" },
  { name: "Make", category: "Automation Tools" },
  { name: "n8n", category: "Automation Tools" },
  { name: "Gumloop", category: "Automation Tools" },
  { name: "Lindy", category: "Automation Tools" },
  { name: "Notion", category: "Project & Knowledge Management Tools" },
  { name: "Obsidian", category: "Project & Knowledge Management Tools" },
  { name: "Slack", category: "Project & Knowledge Management Tools" },
  { name: "ClickUp", category: "Project & Knowledge Management Tools" },
  { name: "Asana", category: "Project & Knowledge Management Tools" },
  { name: "Jira", category: "Project & Knowledge Management Tools" },
  { name: "Linear", category: "Project & Knowledge Management Tools" },
  { name: "Trello", category: "Project & Knowledge Management Tools" },
  { name: "GitHub Projects", category: "Project & Knowledge Management Tools" },
  { name: "Confluence", category: "Project & Knowledge Management Tools" },
  { name: "Logseq", category: "Project & Knowledge Management Tools" },
  { name: "Discord", category: "Project & Knowledge Management Tools" },
];

export default async function AboutPage() {
  return (
    <PageLayout>
      <HeroSection largeImage hideTitle>
          <div className="mt-4 space-y-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 md:p-6 max-h-full overflow-y-auto">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <User size={24} aria-hidden="true" />
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Who I Am</h3>
          </div>
          {BIO_PARAGRAPHS.map((paragraph, i) => (
            <p key={i} className="text-xl md:text-2xl leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </HeroSection>

      {/* Philosophy section */}
      <section>
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          My Philosophy
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {PHILOSOPHY_ITEMS.map((item, i) => {
            const Icon = philosophyIcons[i] ?? Sparkles;
            const c = philosophyColors[i] ?? philosophyColors[0];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 transition-colors duration-200 hover:border-white/[0.12]"
              >
                <span
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${c.bg} ${c.text} border ${c.border} mb-3`}
                >
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-lg text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education timeline */}
      <section className="pt-8">
        <EducationTimeline />
      </section>

      {/* Work timeline */}
      <section className="pt-8">
        <WorkTimeline />
      </section>

      <ToolsFilter
        tools={TOOLS_ITEMS}
        categories={TOOLS_CATEGORIES}
        heading="Technologies & Tools"
        allLabel="All"
        emptyMessage="No tools found in this category."
      />

      {/* FAQ */}
      <section className="pt-8">
        <FaqSection
          heading="Frequently Asked Questions"
          items={FAQ_ITEMS}
        />
      </section>

      <CtaSection />
    </PageLayout>
  );
}
