import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group"
        >
          <article className="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              {post.image && (
                <div className="relative md:w-64 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <h2 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                  {post.date}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {post.excerpt || post.content.substring(0, 150)}...
                </p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

