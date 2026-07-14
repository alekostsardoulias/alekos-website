import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  featured?: boolean;
  readMoreLabel: string;
  readingTimeLabel: string;
}

function computeReadingTime(excerpt: string, title: string): number {
  const text = `${title} ${excerpt}`;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function ArticleCard({
  title,
  date,
  category,
  excerpt,
  slug,
  featured = false,
  readMoreLabel,
  readingTimeLabel,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const minutes = computeReadingTime(excerpt, title);
  const readingTime = readingTimeLabel.replace('{minutes}', String(minutes));

  return (
    <Link href={`/articles/${slug}`} className="group block">
      <article
        className={`rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-purple-400/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.08)] ${
          featured ? 'p-8' : 'p-6'
        }`}
      >
        {/* Top row: category badge + reading time */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-lg px-3 py-1 rounded-full border border-purple-400/20 bg-purple-500/10 text-purple-400">
            {category}
          </span>
          <span className="text-lg text-text-tertiary">{readingTime}</span>
        </div>

        {/* Title */}
        <h3
          className={`${
            featured ? 'text-2xl' : 'text-xl'
          } font-semibold text-text-primary group-hover:text-purple-300 transition-colors`}
        >
          {title}
        </h3>

        {/* Date */}
        <p className="text-lg text-text-tertiary mt-1">{formattedDate}</p>

        {/* Excerpt */}
        <p className="text-lg text-text-secondary mt-3 leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        {/* Read more */}
        <span className="inline-block mt-4 text-lg text-purple-400 group-hover:text-purple-300 transition-colors">
          {readMoreLabel} →
        </span>
      </article>
    </Link>
  );
}
