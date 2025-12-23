'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Zap } from 'lucide-react';

interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTA({ title, description }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-slate-900/20 rounded-full px-4 py-2 mb-6"
        >
          <Zap className="w-5 h-5 text-slate-900" />
          <span className="text-slate-900 font-medium">7/24 Acil Servis</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
        >
          {title || 'Elektrik Sorununuz mu Var?'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-800 mb-10"
        >
          {description || 'Hemen arayın, en kısa sürede adresinize gelelim. Ücretsiz keşif ve fiyat teklifi alın.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:05452378845"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 rounded-xl text-white font-semibold text-lg transition-all hover:bg-slate-800 hover:shadow-lg"
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
            WhatsApp ile Ulaşın
          </a>
        </motion.div>
      </div>
    </section>
  );
}
