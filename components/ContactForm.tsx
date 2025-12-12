'use client';

import { useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const artworkCategory = searchParams.get('artCategory');

  const prettyCategory =
    artworkCategory === 'canvas painting'
      ? 'Canvas Painting'
      : artworkCategory === 'pencil sketch'
      ? 'Pencil Sketch'
      : artworkCategory === 'custom outfits & designs'
      ? 'Custom Outfits & Designs'
      : artworkCategory === 'mural painting'
      ? 'Mural Painting'
      : null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prettyCategory ? `Inquiry about: ${prettyCategory}` : '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const buildWhatsappMessage = () =>
    [
      'Hi Nikita, I would like to connect about your art.',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.subject ? `Subject: ${formData.subject}` : null,
      `Message: ${formData.message}`,
    ]
      .filter(Boolean)
      .join('\n');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const whatsappNumber = '919886658944';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      buildWhatsappMessage()
    )}`;

    try {
      await navigator.clipboard.writeText(buildWhatsappMessage());
      const newWindow = window.open(whatsappUrl, '_blank');
      if (!newWindow) {
        window.location.href = whatsappUrl;
      }
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-transparent border border-dashed border-foreground/30 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-foreground/60 transition-colors"
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-transparent border border-dashed border-foreground/30 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-foreground/60 transition-colors"
        />
      </div>

      <div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-transparent border border-dashed border-foreground/30 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-foreground/60 transition-colors"
        />
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-transparent border border-dashed border-foreground/30 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-foreground/60 resize-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message in WhatsApp'}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-600 dark:text-green-400 text-center text-sm">
          Message copied! Paste in whatsapp and hit send.
        </p>
      )}

      {submitStatus === 'error' && (
        <p className="text-red-600 dark:text-red-400 text-center text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

