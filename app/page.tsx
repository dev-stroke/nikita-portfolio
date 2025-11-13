import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Services from '@/components/Services';
import ClientsStrip from '@/components/ClientsStrip';
import EducationExperience from '@/components/EducationExperience';
import ContactBanner from '@/components/ContactBanner';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Showcase />
      <Services />
      <ClientsStrip />
      <EducationExperience />
      <ContactBanner />
    </Layout>
  );
}
