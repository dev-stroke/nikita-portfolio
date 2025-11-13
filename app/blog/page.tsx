import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <h1 className="mb-12 text-center font-serif text-[clamp(3rem,5vw,4.5rem)] text-foreground">
            Blog
          </h1>
          <BlogList />
        </div>
      </div>
    </Layout>
  );
}

