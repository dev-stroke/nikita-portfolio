import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-foreground">Contact</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
            Get in touch with us. We&apos;d love to hear from you.
          </p>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}

