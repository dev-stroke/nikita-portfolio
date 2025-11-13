'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: '#',
    label: 'Instagram',
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'LinkedIn',
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.94 6.94a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z"
          fill="currentColor"
        />
        <path
          d="M4.5 9h4.88v9.75H4.5zM14.5 9a4 4 0 0 1 4 4v5.75h-4.82V13.2c0-1.09-.73-1.82-1.71-1.82s-1.82.73-1.82 1.82v5.55H6.94V9H11v1.36c.73-.95 1.82-1.36 3.45-1.36z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'Facebook',
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 9h3V5.5h-3c-2.48 0-4 1.52-4 4v1.5H8V15h2.5v7h4.5v-7h3l.5-4.5h-3v-1c0-.9.3-1.5 1.5-1.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo-light.svg"
            alt="Uniiq Logo"
            width={44}
            height={44}
            className="dark:hidden"
          />
          <Image
            src="/images/logo-dark.svg"
            alt="Uniiq Logo"
            width={44}
            height={44}
            className="hidden dark:block"
          />
          <span className="text-xl font-semibold tracking-wide text-foreground">Nikita</span>
        </Link>

        <nav className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-10 text-sm font-medium uppercase tracking-wide text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 transition-colors hover:bg-foreground/10 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 text-foreground/70 md:flex">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="rounded-full border border-foreground/10 p-2 transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium uppercase tracking-wide text-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-background/90 px-4 pb-6 pt-4 backdrop-blur-xl">
          <ul className="flex flex-col items-center gap-4 text-base font-medium text-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-full px-4 py-2 transition-colors hover:bg-foreground/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-center gap-3 text-foreground/70">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="rounded-full border border-foreground/10 p-2 transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
