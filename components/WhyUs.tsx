'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Wallet, Award, Headphones, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: '7/24 Hizmet',
    description: 'Gece gündüz, hafta sonu dahil her an yanınızdayız. Acil elektrik arızalarında hızlı müdahale.',
  },
  {
    icon: Shield,
    title: 'Garantili İşçilik',
    description: 'Tüm işlerimize işçilik garantisi veriyoruz. Kaliteli malzeme ve profesyonel işçilik.',
  },
  {
    icon: Wallet,
    title: 'Uygun Fiyat',
    description: 'Piyasanın en uygun fiyatları. Keşif sonrası net fiyat, gizli maliyet yok.',
  },
  {
    icon: Award,
    title: '15+ Yıl Deneyim',
    description: '15 yılı aşkın sektör deneyimi ile her türlü elektrik işinde uzman çözümler.',
  },
  {
    icon: Headphones,
    title: 'Müşteri Odaklı',
    description: 'Müşteri memnuniyeti önceliğimiz. İşlem sonrası destek ve takip hizmeti.',
  },
  {
    icon: Wrench,
    title: 'Profesyonel Ekip',
    description: 'Alanında uzman, sertifikalı elektrik teknisyenleri ile kaliteli hizmet.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-semibold mb-2"
          >
            Neden Biz?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Neden <span className="text-yellow-500">Sayel Elektrik</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Müşterilerimizin bizi tercih etmesinin nedenleri
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-slate-400">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
