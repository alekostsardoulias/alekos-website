import { WorkContent } from './work-content';
import { getCompletedWork } from '@/lib/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Services and completed projects by Alexandros Tsardoulias.',
};

interface ServiceItem {
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  { name: "Website Development", description: "Custom websites tailored for your needs. Fast, responsive, and SEO-optimized." },
  { name: "Web App Development", description: "Full-stack web applications with modern frameworks, databases, and cloud infrastructure." },
  { name: "Mobile App Development", description: "Cross-platform mobile apps using React Native and Expo for iOS and Android." },
  { name: "Go-To-Market Strategy", description: "Strategic planning for product launches. Positioning, messaging, and go-to-market execution." },
  { name: "Marketing Automation", description: "Automated marketing workflows, email sequences, and lead nurturing systems." },
  { name: "Marketing Consulting", description: "Strategic marketing advisory for startups and small businesses. Growth, retention, analytics." },
  { name: "Forward-Deployed Engineering", description: "Embedded engineering solutions. I work alongside your team to solve technical challenges on site." },
  { name: "Workflow Automation", description: "Custom automation solutions to streamline repetitive tasks and business processes." },
  { name: "AI & Tech Consulting", description: "Advisory on AI integration, tooling, architecture, and scaling for modern businesses." },
  { name: "Copywriting", description: "Persuasive, conversion-focused copy for landing pages, emails, ads, and product descriptions." },
  { name: "Content Writing", description: "Articles, blog posts, and long-form content that educates and engages your audience." },
  { name: "Technical Documentation", description: "Clear, comprehensive documentation for APIs, SDKs, and developer-facing products." },
];

export default async function WorkPage() {
  const completedItems = getCompletedWork().map((article) => ({
    title: article.title,
    date: article.date,
    category: article.category,
    excerpt: article.excerpt,
    slug: article.slug,
  }));

  return (
    <WorkContent
      servicesHeading="What I Do"
      services={SERVICES}
      processHeading="How I Work"
      completedHeading="Completed Projects"
      completedItems={completedItems}
      readMoreLabel="Read more"
    />
  );
}
