'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Acil durumlar için 7/24 hizmet veriyor musunuz?',
    answer: 'Evet, elektrik arızaları ve acil durumlar için 7 gün 24 saat hizmet vermekteyiz. Gece yarısı bile bizi arayabilirsiniz.',
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer: 'İstanbul Anadolu Yakası (Ataşehir, Kadıköy, Ümraniye, Pendik, Kartal, Maltepe, Beykoz, Çekmeköy, Sancaktepe, Sultanbeyli, Şile, Tuzla, Üsküdar) ve Kocaeli (Gebze, Darıca, Çayırova, Dilovası) bölgelerine hizmet veriyoruz.',
  },
  {
    question: 'Fiyatlandırma nasıl yapılıyor?',
    answer: 'Keşif sonrası işin kapsamına göre net fiyat bildiriyoruz. Gizli maliyet yoktur. Keşif için ayrıca ücret almıyoruz.',
  },
  {
    question: 'Garanti veriyor musunuz?',
    answer: 'Evet, tüm işlerimize işçilik garantisi veriyoruz. Ayrıca kullandığımız malzemeler de garantili markalardan seçilmektedir.',
  },
  {
    question: 'Aynı gün hizmet alabilir miyim?',
    answer: 'Evet, müsaitlik durumuna göre aynı gün hizmet sağlayabiliyoruz. Acil durumlar için öncelik tanıyoruz.',
  },
  {
    question: 'Elektrik tesisatı yenileme ne kadar sürer?',
    answer: 'Evin büyüklüğüne göre değişmekle birlikte, ortalama bir daire için 2-3 gün sürmektedir. Keşif sonrası kesin süre bildiriyoruz.',
  },
];

interface FAQProps {
  district?: string;
}

export default function FAQ({ district }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-semibold mb-2"
          >
            Sıkça Sorulan Sorular
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            {district ? `${district} Elektrikçi` : 'Merak Edilenler'}
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <span className="font-semibold text-white">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20 text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
