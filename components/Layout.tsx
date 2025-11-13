'use client';

import Header from './Header';
import Footer from './Footer';
import CursorEffect from './CursorEffect';
import Loader from './Loader';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="top">
      <CursorEffect />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

