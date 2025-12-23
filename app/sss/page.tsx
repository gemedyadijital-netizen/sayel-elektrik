import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular',
  description: 'Sayel Elektrik hizmetleri hakkında sık sorulan sorular ve cevapları. Elektrikçi hizmeti, fiyatlandırma, garanti ve daha fazlası.',
};

export default function SSSPage() {
  return (
    <main className="pt-32">
      {/* Header */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-yellow-500 font-semibold mb-2">SSS</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sık Sorulan <span className="text-yellow-500">Sorular</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Elektrik hizmetlerimiz hakkında merak ettikleriniz
          </p>
        </div>
      </section>

      <FAQ />
      <CTA />
    </main>
  );
}
