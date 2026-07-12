import fs from 'fs';
import path from 'path';
import type { Article, ArticleMeta } from './types';

const ARTICLES_DIR = path.join(process.cwd(), 'src', 'content', 'articles');

function parseMetadata(raw: string): Partial<ArticleMeta> {
  // Match: export const metadata = { ... }
  const match = raw.match(/export\s+const\s+metadata\s*=\s*(\{[\s\S]*?\n\});/);
  if (!match) return {};

  try {
    // Convert JS object literal to parseable JSON
    const objStr = match[1]
      .replace(/'/g, '"')               // single quotes → double
      .replace(/(\w+):/g, '"$1":')      // unquoted keys → quoted
      .replace(/,\s*\}/g, '}')          // trailing commas
      .replace(/,\s*\]/g, ']');          // trailing commas in arrays
    return JSON.parse(objStr) as Partial<ArticleMeta>;
  } catch {
    return {};
  }
}

function readAllArticles(): (Article & { type?: string })[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.mdx'));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
      const meta = parseMetadata(raw) as ArticleMeta & { type?: string };

      if (!meta.title) return null; // Skip invalid articles

      return {
        slug,
        title: meta.title,
        date: meta.date ?? '',
        category: meta.category ?? '',
        excerpt: meta.excerpt ?? '',
        type: (meta.type as 'article' | 'completed-work') ?? 'article',
      };
    })
    .filter((a): a is (Article & { type: 'article' | 'completed-work' }) => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllArticles(): Article[] {
  return readAllArticles().filter((a) => a.type !== 'completed-work');
}

export function getCompletedWork(): Article[] {
  return readAllArticles().filter((a) => a.type === 'completed-work');
}

export function getAllContent(): Article[] {
  return readAllArticles();
}

export function getArticlesByCategory(category: string): Article[] {
  return readAllArticles().filter((a) => a.type !== 'completed-work' && a.category === category);
}

export function getArticleBySlug(slug: string): Article | null {
  return readAllArticles().find((a) => a.slug === slug) ?? null;
}

export function getAllCategories(): string[] {
  const categories = new Set(readAllArticles().map((a) => a.category));
  return Array.from(categories).sort();
}

/** Returns the file path for dynamic MDX import */
export function articlePath(slug: string): string {
  return `@/content/articles/${slug}.mdx`;
}
