'use client';

import { motion } from 'framer-motion';
import { Plug, Lightbulb, AlertTriangle, Settings, Cpu, Home, Building2, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'elektrik-tesisati',
    title: 'Elektrik Tesisatı',
    description: 'Ev ve işyeri elektrik tesisatı kurulumu, yenileme ve bakım hizmetleri.',
    icon: Plug,
    features: ['Komple tesisat', 'Kablo döşeme', 'Priz/Anahtar montajı'],
  },
  {
    id: 'elektrik-ariza',
    title: 'Elektrik Arıza',
    description: 'Acil elektrik arızalarınızda 7/24 hızlı müdahale ve onarım.',
    icon: AlertTriangle,
    features: ['Kısa devre', 'Kaçak akım', 'Voltaj sorunu'],
  },
  {
    id: 'sigorta-panosu',
    title: 'Sigorta Panosu',
    description: 'Sigorta panosu montajı, bakımı ve güncelleme işlemleri.',
    icon: Settings,
    features: ['Pano montajı', 'Sigorta değişimi', 'Kapasite artırma'],
  },
  {
    id: 'aydinlatma',
    title: 'Aydınlatma',
    description: 'İç ve dış mekan aydınlatma tasarımı ve montaj hizmetleri.',
    icon: Lightbulb,
    features: ['LED aydınlatma', 'Spot montajı', 'Dekoratif aydınlatma'],
  },
  {
    id: 'topraklama',
    title: 'Topraklama',
    description: 'Güvenli topraklama sistemi kurulumu ve ölçüm hizmetleri.',
    icon: Cpu,
    features: ['Topraklama tesisatı', 'Ölçüm raporu', 'Paratoner'],
  },
  {
    id: 'tadilat-elektrik',
    title: 'Tadilat Elektriği',
    description: 'Ev ve ofis tadilatlarında komple elektrik işleri.',
    icon: Wrench,
    features: ['Boya öncesi', 'Ek priz/anahtar', 'Tesisat yenileme'],
  },
];

interface ServicesProps {
  showAll?: boolean;
  district?: string;
}

export default function Services({ showAll = false, district }: ServicesProps) {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-20 bg-slate-900" id="hizmetler">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-semibold mb-2"
          >
            {district ? `${district} Elektrik Hizmetleri` : 'Hizmetlerimiz'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Profesyonel <span className="text-yellow-500">Elektrik</span> Çözümleri
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            {district
              ? `${district} bölgesinde tüm elektrik ihtiyaçlarınız için yanınızdayız.`
              : 'Ev ve işyeri için tüm elektrik ihtiyaçlarınızda profesyonel çözümler sunuyoruz.'
            }
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 card-hover group"
              >
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-yellow-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/hizmetler#${service.id}`}
                  className="inline-flex items-center gap-2 text-yellow-500 font-semibold hover:gap-3 transition-all"
                >
                  Detaylı Bilgi
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold hover:bg-slate-700 transition-all"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
