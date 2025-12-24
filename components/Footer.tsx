'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Zap, Facebook, Instagram, Twitter } from 'lucide-react';

const districts = [
  { name: 'Ataşehir', slug: 'atasehir-elektrikci' },
  { name: 'Kadıköy', slug: 'kadikoy-elektrikci' },
  { name: 'Ümraniye', slug: 'umraniye-elektrikci' },
  { name: 'Pendik', slug: 'pendik-elektrikci' },
  { name: 'Kartal', slug: 'kartal-elektrikci' },
  { name: 'Maltepe', slug: 'maltepe-elektrikci' },
  { name: 'Gebze', slug: 'gebze-elektrikci' },
  { name: 'Tuzla', slug: 'tuzla-elektrikci' },
];

const services = [
  { name: 'Elektrik Tesisatı', slug: 'elektrik-tesisati' },
  { name: 'Elektrik Arıza', slug: 'elektrik-ariza' },
  { name: 'Sigorta Panosu', slug: 'sigorta-panosu' },
  { name: 'Aydınlatma', slug: 'aydinlatma' },
  { name: 'Topraklama', slug: 'topraklama' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Sayel</span>
                <span className="text-xl font-bold text-yellow-500"> Elektrik</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6">
              İstanbul Anadolu Yakası ve Kocaeli bölgesinde 7/24 profesyonel elektrik hizmeti sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler#${service.slug}`}
                    className="text-slate-400 hover:text-yellow-500 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hizmet Bölgeleri</h4>
            <ul className="space-y-3">
              {districts.map((district) => (
                <li key={district.slug}>
                  <Link
                    href={`/bolge/${district.slug}`}
                    className="text-slate-400 hover:text-yellow-500 transition-colors"
                  >
                    {district.name} Elektrikçi
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:05452378845" className="flex items-center gap-3 text-slate-400 hover:text-yellow-500 transition-colors">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Telefon</p>
                    <p className="font-medium text-white">0545 237 8845</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@sayelelektrik.com" className="flex items-center gap-3 text-slate-400 hover:text-yellow-500 transition-colors">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">E-posta</p>
                    <p className="font-medium text-white">info@sayelelektrik.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Çalışma Saatleri</p>
                  <p className="font-medium text-white">7/24 Hizmet</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Sayel Elektrik. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/gizlilik-politikasi" className="text-slate-500 hover:text-yellow-500 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="text-slate-500 hover:text-yellow-500 transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
