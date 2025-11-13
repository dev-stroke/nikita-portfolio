import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-foreground">Blog</h1>
          <BlogList />
        </div>
      </div>
    </Layout>
  );
}

