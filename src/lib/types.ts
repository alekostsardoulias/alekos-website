export interface ArticleMeta {
  title: string;
  date: string; // ISO date string
  category: string;
  excerpt: string;
  type?: 'article' | 'completed-work'; // defaults to 'article'
}

export interface Article extends ArticleMeta {
  slug: string;
}

export interface ArticleWithContent extends Article {
  content: unknown; // MDX component
}
