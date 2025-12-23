import type { Metadata } from 'next';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import { Plug, Lightbulb, AlertTriangle, Settings, Cpu, Wrench, Home, Building2, Factory } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Sayel Elektrik olarak elektrik tesisatı, arıza, sigorta panosu, aydınlatma, topraklama ve tadilat elektriği hizmetleri sunuyoruz.',
};

const detailedServices = [
  {
    id: 'elektrik-tesisati',
    title: 'Elektrik Tesisatı',
    icon: Plug,
    description: 'Ev, ofis ve işyerleri için komple elektrik tesisatı kurulumu ve yenileme hizmetleri sunuyoruz.',
    details: [
      'Sıfırdan elektrik tesisatı döşeme',
      'Eski tesisat yenileme ve güncelleme',
      'Kablo ve boru döşeme',
      'Priz ve anahtar montajı',
      'Elektrik projelendirme',
      'Tesisat bakım ve kontrol',
    ],
  },
  {
    id: 'elektrik-ariza',
    title: 'Elektrik Arıza',
    icon: AlertTriangle,
    description: 'Acil elektrik arızalarınızda 7/24 hızlı müdahale. Kısa devre, kaçak akım ve her türlü arıza çözümü.',
    details: [
      'Kısa devre tespiti ve onarımı',
      'Kaçak akım bulma ve giderme',
      'Voltaj düşüklüğü sorunu',
      'Sigorta attırma problemi',
      'Elektrik kesintisi çözümü',
      'Acil müdahale servisi',
    ],
  },
  {
    id: 'sigorta-panosu',
    title: 'Sigorta Panosu',
    icon: Settings,
    description: 'Modern ve güvenli sigorta panosu montajı, bakımı ve güncelleme hizmetleri.',
    details: [
      'Yeni pano montajı',
      'Pano güncelleme ve modernizasyon',
      'Otomatik sigorta takımı',
      'Kaçak akım rölesi montajı',
      'Aşırı gerilim koruma',
      'Pano bakım ve kontrol',
    ],
  },
  {
    id: 'aydinlatma',
    title: 'Aydınlatma',
    icon: Lightbulb,
    description: 'İç ve dış mekan aydınlatma çözümleri. LED, spot ve dekoratif aydınlatma montajı.',
    details: [
      'LED aydınlatma sistemleri',
      'Spot ve sarkıt montajı',
      'Asma tavan aydınlatma',
      'Bahçe ve dış cephe aydınlatma',
      'Dekoratif aydınlatma',
      'Enerji tasarruflu çözümler',
    ],
  },
  {
    id: 'topraklama',
    title: 'Topraklama',
    icon: Cpu,
    description: 'Güvenli topraklama sistemi kurulumu, ölçüm ve rapor hizmetleri.',
    details: [
      'Topraklama tesisatı kurulumu',
      'Topraklama ölçümü ve rapor',
      'Paratoner montajı',
      'Ekipotansiyel bağlantı',
      'Topraklama iyileştirme',
      'Periyodik kontrol ve bakım',
    ],
  },
  {
    id: 'tadilat-elektrik',
    title: 'Tadilat Elektriği',
    icon: Wrench,
    description: 'Ev ve ofis tadilatlarında komple elektrik işleri. Boya öncesi ve sonrası elektrik hizmetleri.',
    details: [
      'Boya öncesi elektrik işleri',
      'Ek priz ve anahtar noktası',
      'Tesisat yenileme',
      'Spot ve aydınlatma ekleme',
      'Mutfak ve banyo elektriği',
      'Balkon kapatma elektriği',
    ],
  },
];

export default function HizmetlerPage() {
  return (
    <main className="pt-32">
      {/* Header */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-yellow-500 font-semibold mb-2">Hizmetlerimiz</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Profesyonel <span className="text-yellow-500">Elektrik</span> Hizmetleri
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            İstanbul Anadolu Yakası ve Kocaeli bölgesinde ev, ofis ve işyerleri için kapsamlı elektrik çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-400 mb-8">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-slate-800 border border-slate-700 rounded-2xl p-8 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="aspect-video bg-slate-700/50 rounded-xl flex items-center justify-center">
                      <Icon className="w-24 h-24 text-yellow-500/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
