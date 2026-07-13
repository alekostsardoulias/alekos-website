import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-foreground mt-4 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed text-muted mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent underline underline-offset-4 hover:text-foreground transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 text-muted mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 text-muted mb-4 space-y-1">{children}</ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-muted pl-4 italic text-muted my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted/30 rounded px-1.5 py-0.5 text-sm font-mono text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted/20 rounded-lg p-4 overflow-x-auto text-sm mb-4">
        {children}
      </pre>
    ),
    ...components,
  };
}
