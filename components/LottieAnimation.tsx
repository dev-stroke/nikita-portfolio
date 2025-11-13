'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  src: string;
  className?: string;
}

interface LottieData {
  [key: string]: unknown;
}

export default function LottieAnimation({ src, className = '' }: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<LottieData | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(src);
        const data = (await response.json()) as LottieData;
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    loadAnimation();
  }, [src]);

  if (!animationData) {
    return (
      <div className={`${className} flex items-center justify-center bg-background/40`}>
        <div className="text-foreground/40">Loading animation...</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}

