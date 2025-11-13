import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import LottieAnimation from '@/components/LottieAnimation';

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-[clamp(3rem,5vw,4.5rem)] text-foreground">
              Get In Touch
            </h1>
          </div>

          <div className="mb-12">
            <ContactInfo />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-3xl overflow-hidden border border-foreground/10 bg-background/60">
              <LottieAnimation src="/contact.json" className="w-full h-[500px]" />
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

