import Layout from '@/components/Layout';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            {post.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            {post.date}
          </p>
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          )}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

