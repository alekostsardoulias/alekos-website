import { PageLayout } from '@/components/page-layout';
import { Hero } from '@/components/hero';
import { HomeStats } from '@/components/home-stats';
import { HomeServices } from '@/components/home-services';
import { FaqSection } from '@/components/about/faq-section';
import { CtaSection } from '@/components/cta-section';
import { getArticleBySlug } from '@/lib/articles';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

export default function HomePage() {
  const latestArticle = getArticleBySlug('fourth-industrial-revolution');

  return (
    <PageLayout>
      <Hero />
      <HomeStats />
      <HomeServices />

      {latestArticle && (
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Latest Article
          </h2>
          <Link
            href={`/articles/${latestArticle.slug}`}
            className="block group rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-purple-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all max-w-2xl mx-auto"
          >
            <div className="flex flex-col gap-3 p-8">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-lg font-medium w-fit bg-purple-500/10 text-purple-400 border border-purple-400/20">
                {latestArticle.category}
              </span>
              <h3 className="text-2xl font-semibold text-text-primary group-hover:text-purple-300 transition-colors">
                {latestArticle.title}
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed line-clamp-3">
                {latestArticle.excerpt}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg text-text-tertiary">
                  {new Date(latestArticle.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="text-purple-400 group-hover:text-purple-300 text-lg font-medium transition-colors inline-flex items-center gap-1">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

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
