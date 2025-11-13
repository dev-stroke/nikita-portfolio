

A modern, unique Next.js portfolio website with blog functionality.

## Project Structure

```
uniiq-next/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Global layout (Header, Footer)
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio pages
│   ├── blog/              # Blog pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Layout.tsx        # Page wrapper
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── AboutSection.tsx  # About section
│   ├── PortfolioGrid.tsx # Portfolio grid
│   ├── BlogList.tsx      # Blog listing
│   ├── ContactForm.tsx   # Contact form
│   ├── CursorEffect.tsx  # Custom cursor
│   └── Loader.tsx        # Page loader
├── lib/                  # Data and utilities
│   ├── posts.ts         # Blog posts data
│   └── projects.ts      # Portfolio projects data
└── public/              # Static assets
    └── images/          # Image assets
```

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ✨ Modern, responsive design
- 🎨 Custom cursor effect
- 📱 Mobile-friendly navigation
- 🎭 Dark mode support
- 📝 Blog system with dynamic routes
- 🖼️ Portfolio showcase
- 📧 Contact form
- ⚡ Fast page loads with Next.js

## Customization

### Adding Images

1. **Logo Images**: Replace `public/images/logo-light.svg` and `public/images/logo-dark.svg` with your own logos
2. **Portfolio Images**: Add project images to `public/images/portfolio/`
3. **Blog Images**: Add blog post images to `public/images/blog/`

### Updating Content

- **Projects**: Edit `lib/projects.ts` to add/modify portfolio projects
- **Blog Posts**: Edit `lib/posts.ts` to add/modify blog posts
- **Pages**: Edit the respective page files in `app/` directory

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework
- [React 19](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com) - Styling

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
