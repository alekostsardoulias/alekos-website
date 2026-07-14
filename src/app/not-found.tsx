import { PageLayout } from '@/components/page-layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-3xl font-semibold text-foreground">404. Page not found</h1>
      <p className="text-muted text-lg">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">
        <Button variant="outline" className="mt-2">← Back to home</Button>
      </Link>
    </div>
  );
}
