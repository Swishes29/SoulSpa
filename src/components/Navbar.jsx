import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Galería', href: '#galeria' },
    { label: 'Tarjeta de Regalo', href: '#regalo' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const textColor = isScrolled ? 'text-neutral-800' : 'text-white';
  const iconColor = isScrolled ? 'text-neutral-800' : 'text-white';
  const hoverColor = 'hover:text-[#d4af37]';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/Logo.jpg"
            alt="Soul Spa Logo"
            className="h-14 w-14 object-cover rounded-full shadow-md border-2 border-white group-hover:scale-105 transition-transform"
          />
          <span
            className={`text-2xl font-serif font-bold tracking-wider transition-colors ${textColor} ${hoverColor}`}
          >
            Soul Spa
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 ${textColor} ${hoverColor}`}>
              Servicios
              <ChevronDown size={16} className={iconColor} />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-44 z-50 text-neutral-800"
                >
                  {['Masajes', 'Faciales', 'Aromaterapia'].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-[#fff7e1] hover:text-[#d4af37] cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`${textColor} ${hoverColor} transition`}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right icons (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <img src="/co.png" alt="Colombia" className="h-5 w-7 rounded shadow" />
          <a
            href="#reserva"
            className="bg-[#f6e6c2] hover:bg-[#e7d7b1] text-neutral-800 px-6 py-2 rounded-full font-semibold tracking-wide uppercase text-sm shadow-md transition"
          >
            Reservar
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden ${iconColor}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md px-6 py-6"
          >
            <ul className="flex flex-col gap-5 text-neutral-800 font-medium text-lg">
              <li>
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Servicios <ChevronDown size={18} />
                </button>
                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-4 space-y-2 text-base"
                    >
                      {['Masajes', 'Faciales', 'Aromaterapia'].map((item) => (
                        <li key={item} className="hover:text-[#d4af37] cursor-pointer transition">
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#d4af37] transition">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reserva"
                  className="block mt-4 bg-[#f6e6c2] text-center hover:bg-[#e7d7b1] text-neutral-800 py-3 rounded-full font-semibold uppercase text-sm shadow-md transition"
                >
                  Reservar
                </a>
              </li>
              <li className="mt-4">
                <img src="/co.png" alt="Colombia" className="h-5 w-7 rounded shadow inline-block mr-2" />
                <span className="text-sm text-neutral-600">Español</span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
