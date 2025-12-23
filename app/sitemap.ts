import { MetadataRoute } from 'next';

const districts = [
  'atasehir', 'beykoz', 'cekmekoy', 'kadikoy', 'kartal', 'maltepe', 'pendik',
  'sancaktepe', 'sultanbeyli', 'sile', 'tuzla', 'umraniye', 'uskudar',
  'darica', 'cayirova', 'gebze', 'dilovasi',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sayelelektrik.com';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/hizmetler`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/sss`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const districtPages = districts.map((district) => ({
    url: `${baseUrl}/bolge/${district}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...districtPages];
}
