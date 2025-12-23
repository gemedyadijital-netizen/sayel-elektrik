import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Districts from '@/components/Districts';
import WhyUs from '@/components/WhyUs';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Districts />
      <WhyUs />
      <FAQ />
      <CTA />
    </main>
  );
}
