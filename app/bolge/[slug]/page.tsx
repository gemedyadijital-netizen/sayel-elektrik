import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

// İlçe verileri
const districts: Record<string, { name: string; city: string; description: string }> = {
  'atasehir': {
    name: 'Ataşehir',
    city: 'İstanbul',
    description: 'Ataşehir ve çevresinde elektrik tesisatı, arıza, sigorta, aydınlatma hizmetleri. Finanskent, Barbaros, İçerenköy, Küçükbakkalköy mahallelerinde 7/24 elektrikçi.',
  },
  'beykoz': {
    name: 'Beykoz',
    city: 'İstanbul',
    description: 'Beykoz bölgesinde profesyonel elektrik hizmeti. Kavacık, Anadoluhisarı, Paşabahçe, Çubuklu mahallelerinde 7/24 elektrikçi.',
  },
  'cekmekoy': {
    name: 'Çekmeköy',
    city: 'İstanbul',
    description: 'Çekmeköy ve çevresinde elektrik tesisatı ve arıza hizmetleri. Merkez, Taşdelen, Alemdağ mahallelerinde 7/24 elektrikçi.',
  },
  'kadikoy': {
    name: 'Kadıköy',
    city: 'İstanbul',
    description: 'Kadıköy\'de profesyonel elektrik hizmeti. Moda, Fenerbahçe, Bostancı, Göztepe, Kozyatağı mahallelerinde 7/24 elektrikçi.',
  },
  'kartal': {
    name: 'Kartal',
    city: 'İstanbul',
    description: 'Kartal bölgesinde elektrik tesisatı ve arıza hizmetleri. Soğanlık, Uğur Mumcu, Kordonboyu mahallelerinde 7/24 elektrikçi.',
  },
  'maltepe': {
    name: 'Maltepe',
    city: 'İstanbul',
    description: 'Maltepe ve çevresinde profesyonel elektrik hizmeti. Cevizli, Altıntepe, Küçükyalı, Dragos mahallelerinde 7/24 elektrikçi.',
  },
  'pendik': {
    name: 'Pendik',
    city: 'İstanbul',
    description: 'Pendik\'te elektrik tesisatı ve arıza hizmetleri. Kaynarca, Kurtköy, Yenişehir, Esenyalı mahallelerinde 7/24 elektrikçi.',
  },
  'sancaktepe': {
    name: 'Sancaktepe',
    city: 'İstanbul',
    description: 'Sancaktepe bölgesinde profesyonel elektrik hizmeti. Samandıra, Sarıgazi, Yenidoğan mahallelerinde 7/24 elektrikçi.',
  },
  'sultanbeyli': {
    name: 'Sultanbeyli',
    city: 'İstanbul',
    description: 'Sultanbeyli ve çevresinde elektrik tesisatı ve arıza hizmetleri. Tüm mahallelerde 7/24 elektrikçi hizmeti.',
  },
  'sile': {
    name: 'Şile',
    city: 'İstanbul',
    description: 'Şile bölgesinde profesyonel elektrik hizmeti. Merkez ve köylerde 7/24 elektrikçi hizmeti.',
  },
  'tuzla': {
    name: 'Tuzla',
    city: 'İstanbul',
    description: 'Tuzla\'da elektrik tesisatı ve arıza hizmetleri. Aydınlı, İçmeler, Postane mahallelerinde 7/24 elektrikçi.',
  },
  'umraniye': {
    name: 'Ümraniye',
    city: 'İstanbul',
    description: 'Ümraniye\'de profesyonel elektrik hizmeti. Çakmak, Atatürk, İstiklal, Armağanevler mahallelerinde 7/24 elektrikçi.',
  },
  'uskudar': {
    name: 'Üsküdar',
    city: 'İstanbul',
    description: 'Üsküdar bölgesinde elektrik tesisatı ve arıza hizmetleri. Acıbadem, Altunizade, Çengelköy mahallelerinde 7/24 elektrikçi.',
  },
  'darica': {
    name: 'Darıca',
    city: 'Kocaeli',
    description: 'Darıca ve çevresinde profesyonel elektrik hizmeti. Osmangazi, Nene Hatun, Fevzi Çakmak mahallelerinde 7/24 elektrikçi.',
  },
  'cayirova': {
    name: 'Çayırova',
    city: 'Kocaeli',
    description: 'Çayırova\'da elektrik tesisatı ve arıza hizmetleri. Akse, Şekerpınar mahallelerinde 7/24 elektrikçi.',
  },
  'gebze': {
    name: 'Gebze',
    city: 'Kocaeli',
    description: 'Gebze\'de profesyonel elektrik hizmeti. Osman Yılmaz, Güzeller, Köşklüçeşme mahallelerinde 7/24 elektrikçi.',
  },
  'dilovasi': {
    name: 'Dilovası',
    city: 'Kocaeli',
    description: 'Dilovası ve organize sanayi bölgelerinde elektrik tesisatı ve arıza hizmetleri. 7/24 elektrikçi.',
  },
};

// Statik parametreler oluştur
export async function generateStaticParams() {
  return Object.keys(districts).map((slug) => ({ slug }));
}

// Dinamik metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const district = districts[params.slug];

  if (!district) {
    return { title: 'Sayfa Bulunamadı' };
  }

  return {
    title: `${district.name} Elektrikçi | 7/24 Acil Servis`,
    description: district.description,
    keywords: [
      `${district.name.toLowerCase()} elektrikçi`,
      `${district.name.toLowerCase()} elektrik`,
      `${district.name.toLowerCase()} elektrik arıza`,
      `${district.name.toLowerCase()} elektrik tesisatı`,
      `${district.name.toLowerCase()} 7/24 elektrikçi`,
      `${district.city.toLowerCase()} elektrikçi`,
    ],
    openGraph: {
      title: `${district.name} Elektrikçi | Sayel Elektrik`,
      description: district.description,
      type: 'website',
      locale: 'tr_TR',
    },
    alternates: {
      canonical: `/bolge/${params.slug}`,
    },
  };
}

// Schema.org JSON-LD
function generateJsonLd(district: { name: string; city: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Sayel Elektrik - ${district.name}`,
    description: `${district.name} bölgesinde profesyonel elektrik hizmeti`,
    telephone: '+905452378845',
    email: 'info@sayelelektrik.com',
    areaServed: {
      '@type': 'City',
      name: district.name,
      containedInPlace: {
        '@type': 'State',
        name: district.city,
      },
    },
    serviceType: [
      'Elektrik Tesisatı',
      'Elektrik Arıza',
      'Sigorta Panosu',
      'Aydınlatma',
      'Topraklama',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-24:00',
  };
}

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = districts[params.slug];

  if (!district) {
    notFound();
  }

  const jsonLd = generateJsonLd(district);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero
          title={`${district.name} Elektrikçi`}
          subtitle={`${district.city} - 7/24 Hizmet`}
          description={district.description}
          district={district.name}
        />
        <Services district={district.name} />
        <WhyUs />
        <FAQ district={district.name} />
        <CTA
          title={`${district.name}'de Elektrik Sorununuz mu Var?`}
          description={`${district.name} ve çevresinde 7/24 acil elektrik servisi. Hemen arayın, en kısa sürede gelelim.`}
        />
      </main>
    </>
  );
}
