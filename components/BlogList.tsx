import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
}

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="border border-foreground/20 bg-background/70 px-6 py-8 sm:px-8"
        >
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
              {formatDate(post.date)} - {post.category}
            </p>
          </div>
          <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,3rem)] text-foreground">
            {post.title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-foreground/60">
            {post.excerpt || post.content}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center rounded-full border border-dashed border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
          >
            Read More
          </Link>
        </article>
      ))}
    </div>
  );
}
