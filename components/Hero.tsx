'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Zap, Shield, Clock, CheckCircle } from 'lucide-react';

const features = [
  '7/24 Acil Servis',
  'Garantili İşçilik',
  'Uygun Fiyat',
  'Deneyimli Ekip',
];

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  district?: string;
}

export default function Hero({ title, subtitle, description, district }: HeroProps) {
  const heroTitle = title || (district ? `${district} Elektrikçi` : 'Profesyonel Elektrik Hizmeti');
  const heroSubtitle = subtitle || 'İstanbul Anadolu Yakası & Kocaeli';
  const heroDescription = description || `${district ? district + ' ve çevresinde' : 'İstanbul Anadolu Yakası ve Kocaeli bölgesinde'} elektrik tesisatı, arıza, sigorta, aydınlatma ve tüm elektrik işleriniz için 7/24 hizmetinizdeyiz.`;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 font-medium text-sm">{heroSubtitle}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {heroTitle.split(' ').map((word, i) => (
                <span key={i} className={word === 'Elektrik' || word === 'Elektrikçi' ? 'text-yellow-500' : ''}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              {heroDescription}
            </motion.p>

            {/* Features */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:05452378845"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 rounded-xl text-slate-900 font-semibold text-lg transition-all hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/25"
              >
                <Phone className="w-6 h-6" />
                0545 237 8845
              </a>

              <a
                href="https://wa.me/905452378845"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 rounded-xl text-white font-semibold text-lg transition-all hover:bg-green-500"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Stats / Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 card-hover">
              <Clock className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">7/24</h3>
              <p className="text-slate-400">Kesintisiz Hizmet</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 card-hover">
              <Shield className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">%100</h3>
              <p className="text-slate-400">Müşteri Memnuniyeti</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 card-hover">
              <Zap className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
              <p className="text-slate-400">Yıl Deneyim</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 card-hover">
              <CheckCircle className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-1">5000+</h3>
              <p className="text-slate-400">Mutlu Müşteri</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
