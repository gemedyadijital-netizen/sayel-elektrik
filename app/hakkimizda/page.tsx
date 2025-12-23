import type { Metadata } from 'next';
import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Sayel Elektrik olarak 15 yılı aşkın deneyimimizle İstanbul Anadolu Yakası ve Kocaeli bölgesinde profesyonel elektrik hizmeti sunuyoruz.',
};

const stats = [
  { value: '15+', label: 'Yıl Deneyim' },
  { value: '5000+', label: 'Mutlu Müşteri' },
  { value: '17', label: 'Hizmet Bölgesi' },
  { value: '7/24', label: 'Kesintisiz Hizmet' },
];

const values = [
  {
    icon: Target,
    title: 'Misyonumuz',
    description: 'Müşterilerimize en kaliteli elektrik hizmetini, en uygun fiyatlarla ve en hızlı şekilde sunmak.',
  },
  {
    icon: Heart,
    title: 'Vizyonumuz',
    description: 'İstanbul ve çevresinin en güvenilir ve tercih edilen elektrik hizmet sağlayıcısı olmak.',
  },
  {
    icon: Shield,
    title: 'Değerlerimiz',
    description: 'Güvenilirlik, kalite, müşteri memnuniyeti ve profesyonellik temel değerlerimizdir.',
  },
];

export default function HakkimizdaPage() {
  return (
    <main className="pt-32">
      {/* Header */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 font-semibold mb-2">Hakkımızda</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                <span className="text-yellow-500">Sayel Elektrik</span> Olarak Yanınızdayız
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                15 yılı aşkın sektör deneyimimizle İstanbul Anadolu Yakası ve Kocaeli bölgesinde profesyonel elektrik hizmeti sunuyoruz. Müşteri memnuniyeti odaklı çalışma anlayışımız ve uzman ekibimizle her zaman yanınızdayız.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <div className="aspect-square bg-slate-700/50 rounded-xl flex items-center justify-center">
                <Award className="w-32 h-32 text-yellow-500/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Hikayemiz</h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-slate-400 mb-6">
              Sayel Elektrik, 2009 yılında İstanbul'da küçük bir elektrik atölyesi olarak kuruldu. Kurucumuz, elektrik mühendisliği eğitiminin ardından sektörde edindiği deneyimle kendi işini kurma kararı aldı.
            </p>
            <p className="text-slate-400 mb-6">
              İlk yıllarımızda Kadıköy ve çevresinde hizmet verirken, müşteri memnuniyeti odaklı yaklaşımımız sayesinde hızla büyüdük. Bugün İstanbul Anadolu Yakası'nın tamamında ve Kocaeli'nin önemli ilçelerinde hizmet veriyoruz.
            </p>
            <p className="text-slate-400 mb-6">
              Ekibimiz, alanında uzman ve sertifikalı elektrik teknisyenlerinden oluşmaktadır. Her bir ekip üyemiz, müşteri memnuniyetini ön planda tutarak çalışmaktadır.
            </p>
            <p className="text-slate-400">
              Sayel Elektrik olarak, kaliteli hizmet anlayışımızdan ödün vermeden, müşterilerimize en uygun fiyatlarla en iyi elektrik hizmetini sunmaya devam ediyoruz.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
