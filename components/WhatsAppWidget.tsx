'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = '905452378845';
  const defaultMessage = 'Merhaba, elektrik hizmeti hakkında bilgi almak istiyorum.';

  const handleSendMessage = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700"
          >
            {/* Header */}
            <div className="bg-green-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sayel Elektrik</h4>
                    <p className="text-sm text-green-100">Genellikle anında yanıt verir</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-slate-900/50">
              <div className="bg-slate-700 rounded-lg p-3 shadow-sm">
                <p className="text-slate-200 text-sm">
                  Merhaba! 👋 Elektrik hizmeti için bize ulaşın. Acil durumlar için 7/24 hizmet veriyoruz.
                </p>
                <p className="text-xs text-slate-400 mt-2">Şimdi</p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700">
              <button
                onClick={handleSendMessage}
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
              >
                <Send className="w-5 h-5" />
                Sohbete Başla
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-500 transition-colors relative"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}

        {/* Pulse Animation */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
