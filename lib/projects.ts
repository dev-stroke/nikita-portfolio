export type ProjectCategory = 'canvas painting' | 'pencil sketch' | 'custom outfits & designs' | 'mural painting';

export interface Project {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  category: ProjectCategory;
}

const projects: Project[] = [
  {
    slug: '20210123-191517',
    title: '20210123_191517',
    image: '/images/portfolio/pencilsketch/20210123_191517.webp',
    category: 'pencil sketch',
  },
  {
    slug: '20210610-203419',
    title: '20210610_203419',
    image: '/images/portfolio/pencilsketch/20210610_203419.webp',
    category: 'pencil sketch',
  },
  {
    slug: '20211027-093822-01',
    title: '20211027_093822-01',
    image: '/images/portfolio/pencilsketch/20211027_093822-01.webp',
    category: 'pencil sketch',
  },
  {
    slug: '20240126-175031',
    title: '20240126_175031',
    image: '/images/portfolio/custom/20240126_175031.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20240710-192306',
    title: '20240710_192306',
    image: '/images/portfolio/custom/20240710_192306.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250201-175936',
    title: '20250201_175936',
    image: '/images/portfolio/canvaspainting/20250201_175936.webp',
    category: 'canvas painting',
  },
  {
    slug: '20250307-204649',
    title: '20250307_204649',
    image: '/images/portfolio/pencilsketch/20250307_204649.webp',
    category: 'pencil sketch',
  },
  {
    slug: '20250315-175255',
    title: '20250315_175255',
    image: '/images/portfolio/custom/20250315_175255.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250419-163730',
    title: '20250419_163730',
    image: '/images/portfolio/custom/20250419_163730.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250515-200021',
    title: '20250515_200021',
    image: '/images/portfolio/custom/20250515_200021.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250522-172854',
    title: '20250522_172854',
    image: '/images/portfolio/custom/20250522_172854.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250522-174129',
    title: '20250522_174129',
    image: '/images/portfolio/custom/20250522_174129.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250705-163325-1',
    title: '20250705_163325 (1)',
    image: '/images/portfolio/canvaspainting/20250705_163325 (1).webp',
    category: 'canvas painting',
  },
  {
    slug: '20250713-133609',
    title: '20250713_133609',
    image: '/images/portfolio/canvaspainting/20250713_133609.webp',
    category: 'canvas painting',
  },
  {
    slug: '20250720-182820',
    title: '20250720_182820',
    image: '/images/portfolio/custom/20250720_182820.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250723-092244',
    title: '20250723_092244',
    image: '/images/portfolio/custom/20250723_092244.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250807-181358',
    title: '20250807_181358',
    image: '/images/portfolio/custom/20250807_181358.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250807-181402',
    title: '20250807_181402',
    image: '/images/portfolio/custom/20250807_181402.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250807-181436',
    title: '20250807_181436',
    image: '/images/portfolio/custom/20250807_181436.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: '20250910-122802-1',
    title: '20250910_122802 (1)',
    image: '/images/portfolio/pencilsketch/20250910_122802.webp',
    category: 'pencil sketch',
  },
  {
    slug: '20251019-175039',
    title: '20251019_175039',
    image: '/images/portfolio/canvaspainting/20251019_175039.webp',
    category: 'canvas painting',
  },
  {
    slug: '20251101-131311-1',
    title: '20251101_131311 (1)',
    image: '/images/portfolio/canvaspainting/20251101_131311.webp',
    category: 'canvas painting',
  },
  {
    slug: 'chatgpt-image-2025-05-03-18-36-13',
    title: 'ChatGPT Image May 3, 2025 at 06_36_13 PM',
    image: '/images/portfolio/custom/392847_99729.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: 'chatgpt-image-2025-05-03-18-40-44',
    title: 'ChatGPT Image May 3, 2025 at 06_40_44 PM',
    image: '/images/portfolio/custom/2023293836_283.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: 'fb-img-1720616998652',
    title: 'FB_IMG_1720616998652',
    image: '/images/portfolio/custom/FB_IMG_1720616998652.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: 'fb-img-1720617011954',
    title: 'FB_IMG_1720617011954',
    image: '/images/portfolio/custom/FB_IMG_1720617011954.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: 'file-00000000d65861fba693265b48cbc9ba',
    title: 'file_00000000d65861fba693265b48cbc9ba',
    image: '/images/portfolio/custom/file_00000000d65861fba693265b48cbc9ba.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: 'img-20240128-182755-173-3',
    title: 'IMG_20240128_182755_173 (3)',
    image: '/images/portfolio/custom/IMG_20240128_182755_173.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: 'img-20240312',
    title: 'IMG_20240312',
    image: '/images/portfolio/custom/IMG_20240312.webp',
    category: 'custom outfits & designs',
  },
  {
    slug: 'picsart-01-09-02-15-00',
    title: 'PicsArt_01-09-02.15.00',
    image: '/images/portfolio/pencilsketch/PicsArt_01-09-02.15.00.webp',
    category: 'pencil sketch',
  },
  {
    slug: 'picsart-04-18-10-12-05',
    title: 'PicsArt_04-18-10.12.05',
    image: '/images/portfolio/pencilsketch/PicsArt_04-18-10.12.05.webp',
    category: 'pencil sketch',
  },
  {
    slug: 'picsart-07-28-09-57-12-01',
    title: 'PicsArt_07-28-09.57.12-01',
    image: '/images/portfolio/pencilsketch/PicsArt_07-28-09.57.12-01.webp',
    category: 'pencil sketch',
  },
  {
    slug: 'picsart-09-06-10-38-03',
    title: 'PicsArt_09-06-10.38.03',
    image: '/images/portfolio/pencilsketch/PicsArt_09-06-10.38.03.webp',
    category: 'pencil sketch',
  },
  {
    slug: '20240505-224225',
    title: '20240505_224225',
    image: '/images/portfolio/muralpainting/20240505_224225.jpg',
    category: 'mural painting',
  },
  {
    slug: '20251128-170106',
    title: '20251128_170106',
    image: '/images/portfolio/muralpainting/20251128_170106.jpg',
    category: 'mural painting',
  },
  {
    slug: 'img-20231014-wa0035',
    title: 'IMG-20231014-WA0035',
    image: '/images/portfolio/muralpainting/IMG-20231014-WA0035.jpg',
    category: 'mural painting',
  },
  {
    slug: 'img-20231017-wa0041',
    title: 'IMG-20231017-WA0041',
    image: '/images/portfolio/muralpainting/IMG-20231017-WA0041.jpg',
    category: 'mural painting',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

