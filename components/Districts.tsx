'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

const districts = [
  { name: 'Ataşehir', slug: 'atasehir-elektrikci', city: 'İstanbul' },
  { name: 'Beykoz', slug: 'beykoz-elektrikci', city: 'İstanbul' },
  { name: 'Çekmeköy', slug: 'cekmekoy-elektrikci', city: 'İstanbul' },
  { name: 'Kadıköy', slug: 'kadikoy-elektrikci', city: 'İstanbul' },
  { name: 'Kartal', slug: 'kartal-elektrikci', city: 'İstanbul' },
  { name: 'Maltepe', slug: 'maltepe-elektrikci', city: 'İstanbul' },
  { name: 'Pendik', slug: 'pendik-elektrikci', city: 'İstanbul' },
  { name: 'Sancaktepe', slug: 'sancaktepe-elektrikci', city: 'İstanbul' },
  { name: 'Sultanbeyli', slug: 'sultanbeyli-elektrikci', city: 'İstanbul' },
  { name: 'Şile', slug: 'sile-elektrikci', city: 'İstanbul' },
  { name: 'Tuzla', slug: 'tuzla-elektrikci', city: 'İstanbul' },
  { name: 'Ümraniye', slug: 'umraniye-elektrikci', city: 'İstanbul' },
  { name: 'Üsküdar', slug: 'uskudar-elektrikci', city: 'İstanbul' },
  { name: 'Darıca', slug: 'darica-elektrikci', city: 'Kocaeli' },
  { name: 'Çayırova', slug: 'cayirova-elektrikci', city: 'Kocaeli' },
  { name: 'Gebze', slug: 'gebze-elektrikci', city: 'Kocaeli' },
  { name: 'Dilovası', slug: 'dilovasi-elektrikci', city: 'Kocaeli' },
];

export default function Districts() {
  const istanbulDistricts = districts.filter(d => d.city === 'İstanbul');
  const kocaeliDistricts = districts.filter(d => d.city === 'Kocaeli');

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-semibold mb-2"
          >
            Hizmet Bölgelerimiz
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            <span className="text-yellow-500">17 İlçede</span> Hizmetinizdeyiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            İstanbul Anadolu Yakası ve Kocaeli bölgesinde 7/24 elektrik hizmeti veriyoruz.
          </motion.p>
        </div>

        {/* Districts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* İstanbul */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">İstanbul Anadolu Yakası</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {istanbulDistricts.map((district, index) => (
                <Link
                  key={district.slug}
                  href={`/bolge/${district.slug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 rounded-lg text-slate-300 hover:text-yellow-500 hover:bg-slate-700 transition-all group"
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {district.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Kocaeli */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Kocaeli</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {kocaeliDistricts.map((district, index) => (
                <Link
                  key={district.slug}
                  href={`/bolge/${district.slug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 rounded-lg text-slate-300 hover:text-yellow-500 hover:bg-slate-700 transition-all group"
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {district.name}
                </Link>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-500 text-sm">
                <strong>Not:</strong> Listede olmayan yakın bölgelere de hizmet verebiliyoruz. Lütfen bizimle iletişime geçin.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
