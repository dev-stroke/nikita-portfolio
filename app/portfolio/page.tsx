import Layout from '@/components/Layout';
import PortfolioGrid from '@/components/PortfolioGrid';

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-foreground">Portfolio</h1>
          <PortfolioGrid />
        </div>
      </div>
    </Layout>
  );
}

