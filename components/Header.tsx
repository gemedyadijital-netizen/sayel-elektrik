'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const districts = [
  { name: 'Ataşehir', slug: 'atasehir' },
  { name: 'Beykoz', slug: 'beykoz' },
  { name: 'Çekmeköy', slug: 'cekmekoy' },
  { name: 'Kadıköy', slug: 'kadikoy' },
  { name: 'Kartal', slug: 'kartal' },
  { name: 'Maltepe', slug: 'maltepe' },
  { name: 'Pendik', slug: 'pendik' },
  { name: 'Sancaktepe', slug: 'sancaktepe' },
  { name: 'Sultanbeyli', slug: 'sultanbeyli' },
  { name: 'Şile', slug: 'sile' },
  { name: 'Tuzla', slug: 'tuzla' },
  { name: 'Ümraniye', slug: 'umraniye' },
  { name: 'Üsküdar', slug: 'uskudar' },
  { name: 'Darıca', slug: 'darica' },
  { name: 'Çayırova', slug: 'cayirova' },
  { name: 'Gebze', slug: 'gebze' },
  { name: 'Dilovası', slug: 'dilovasi' },
];

const navItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDistrictsOpen, setIsDistrictsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      {/* Top Bar */}
      <div className="bg-yellow-500 text-slate-900 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm font-medium">
          <span>7/24 Acil Elektrik Servisi</span>
          <a href="tel:05452378845" className="flex items-center gap-2 hover:underline">
            <Phone className="w-4 h-4" />
            0545 237 8845
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Sayel</span>
              <span className="text-xl font-bold text-yellow-500"> Elektrik</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-yellow-500 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Districts Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDistrictsOpen(!isDistrictsOpen)}
                className="flex items-center gap-1 text-slate-300 hover:text-yellow-500 transition-colors font-medium"
              >
                Bölgeler
                <ChevronDown className={`w-4 h-4 transition-transform ${isDistrictsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDistrictsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-slate-800 rounded-xl shadow-xl border border-slate-700 py-2 grid grid-cols-2 gap-1 p-2"
                  >
                    {districts.map((district) => (
                      <Link
                        key={district.slug}
                        href={`/bolge/${district.slug}`}
                        className="px-3 py-2 text-sm text-slate-300 hover:text-yellow-500 hover:bg-slate-700 rounded-lg transition-colors"
                        onClick={() => setIsDistrictsOpen(false)}
                      >
                        {district.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA Button */}
          <a
            href="tel:05452378845"
            className="hidden lg:flex items-center gap-2 bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/25"
          >
            <Phone className="w-5 h-5" />
            Hemen Ara
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-slate-800"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-slate-300 hover:text-yellow-500 hover:bg-slate-800 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-slate-800 pt-2 mt-2">
                  <p className="px-4 py-2 text-sm text-slate-500 font-medium">Hizmet Bölgelerimiz</p>
                  <div className="grid grid-cols-2 gap-1 px-2">
                    {districts.map((district) => (
                      <Link
                        key={district.slug}
                        href={`/bolge/${district.slug}`}
                        className="px-3 py-2 text-sm text-slate-400 hover:text-yellow-500 hover:bg-slate-800 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {district.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <a
                  href="tel:05452378845"
                  className="flex items-center justify-center gap-2 bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-semibold mt-4 mx-2"
                >
                  <Phone className="w-5 h-5" />
                  0545 237 8845
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
