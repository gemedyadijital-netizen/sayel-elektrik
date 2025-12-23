import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Sayel Elektrik ile iletişime geçin. 7/24 elektrik hizmeti için bizi arayın.',
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '0545 237 8845',
    link: 'tel:05452378845',
    description: '7/24 ulaşabilirsiniz',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '0545 237 8845',
    link: 'https://wa.me/905452378845',
    description: 'Hızlı iletişim için',
  },
  {
    icon: Mail,
    title: 'E-posta',
    value: 'info@sayelelektrik.com',
    link: 'mailto:info@sayelelektrik.com',
    description: 'Teklif ve sorularınız için',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    value: '7/24 Hizmet',
    link: null,
    description: 'Acil durumlar dahil',
  },
];

export default function IletisimPage() {
  return (
    <main className="pt-32">
      {/* Header */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-yellow-500 font-semibold mb-2">İletişim</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Bizimle <span className="text-yellow-500">İletişime</span> Geçin
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Elektrik ihtiyaçlarınız için bize ulaşın. En kısa sürede size dönüş yapacağız.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">İletişim Bilgileri</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-yellow-500 font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-slate-400">{info.description}</p>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Service Areas */}
              <div className="mt-8 bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Hizmet Bölgelerimiz</h3>
                </div>
                <p className="text-slate-400 mb-4">
                  <strong className="text-white">İstanbul Anadolu Yakası:</strong> Ataşehir, Beykoz, Çekmeköy, Kadıköy, Kartal, Maltepe, Pendik, Sancaktepe, Sultanbeyli, Şile, Tuzla, Ümraniye, Üsküdar
                </p>
                <p className="text-slate-400">
                  <strong className="text-white">Kocaeli:</strong> Darıca, Çayırova, Gebze, Dilovası
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
