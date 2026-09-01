import type { MetadataRoute } from 'next';
import { projects } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ogol254.github.io/abramogol';
  const routes = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/ai-emerging-technology',
    '/capabilities',
    '/resume',
    '/contact',
  ];
  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
