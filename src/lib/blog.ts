import fs from 'fs';
import path from 'path';
import type { Article, ArticleMeta } from './types';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

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

function readAllBlogPosts(): Article[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const meta = parseMetadata(raw) as ArticleMeta;

      if (!meta.title) return null; // Skip invalid posts

      return {
        slug,
        title: meta.title,
        date: meta.date ?? '',
        category: meta.category ?? 'Blog',
        excerpt: meta.excerpt ?? '',
      };
    })
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllBlogPosts(): Article[] {
  return readAllBlogPosts();
}

export function getBlogPostBySlug(slug: string): Article | null {
  return readAllBlogPosts().find((a) => a.slug === slug) ?? null;
}

/** Returns the file path for dynamic MDX import */
export function blogPostPath(slug: string): string {
  return `@/content/blog/${slug}.mdx`;
}
