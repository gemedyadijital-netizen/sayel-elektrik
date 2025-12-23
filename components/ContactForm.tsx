'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', district: '', service: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const districts = [
    'Ataşehir', 'Beykoz', 'Çekmeköy', 'Kadıköy', 'Kartal', 'Maltepe', 'Pendik',
    'Sancaktepe', 'Sultanbeyli', 'Şile', 'Tuzla', 'Ümraniye', 'Üsküdar',
    'Darıca', 'Çayırova', 'Gebze', 'Dilovası',
  ];

  const services = [
    'Elektrik Tesisatı', 'Elektrik Arıza', 'Sigorta Panosu',
    'Aydınlatma', 'Topraklama', 'Tadilat Elektriği', 'Diğer',
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Bize Ulaşın</h2>

      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Adınız Soyadınız *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="Adınızı girin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="05XX XXX XX XX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            E-posta
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="ornek@email.com"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Bölge *
            </label>
            <select
              required
              value={formData.district}
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            >
              <option value="">Bölge seçin</option>
              {districts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Hizmet Türü *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            >
              <option value="">Hizmet seçin</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Mesajınız
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
            placeholder="Elektrik sorununuzu veya ihtiyacınızı kısaca açıklayın..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-lg transition-all ${
            isSubmitted
              ? 'bg-green-600 text-white'
              : 'bg-yellow-500 text-slate-900 hover:bg-yellow-400'
          } disabled:opacity-70`}
        >
          {isSubmitting ? (
            <span className="animate-spin w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full" />
          ) : isSubmitted ? (
            <>
              <CheckCircle className="w-6 h-6" />
              Mesajınız Gönderildi!
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Gönder
            </>
          )}
        </button>
      </div>
    </form>
  );
}
