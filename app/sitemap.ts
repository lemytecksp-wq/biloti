import { MetadataRoute } from 'next';
import { serviceCategories, allServices } from '@/lib/data/servicesData';
import { siteConfig } from '@/lib/data/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const mainPages = [
    '',
    '/about-us',
    '/contact',
    '/get-a-quote',
    '/terms-of-use',
    '/privacy-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const categoryPages = serviceCategories.map((cat) => ({
    url: `${baseUrl}/service/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const servicePages = allServices.map((serv) => ({
    url: `${baseUrl}/service/${serv.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Deduplicate URLs if category and service have same slug (e.g. pest-control)
  const allUrlsMap = new Map();
  [...mainPages, ...categoryPages, ...servicePages].forEach((item) => {
    allUrlsMap.set(item.url, item);
  });

  return Array.from(allUrlsMap.values());
}
