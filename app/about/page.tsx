import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-foreground">About</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              Welcome to our creative space. We are passionate about building
              beautiful and functional digital experiences.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Our mission is to create unique, innovative solutions that make
              a difference.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

