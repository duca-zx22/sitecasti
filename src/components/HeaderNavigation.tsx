import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';
import { CastiCarLogo } from './CastiCarLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderNavigationProps {
  currentPage: Page;
  onNavigate: (page: Page, articleId?: string) => void;
  onOpenBriefing?: () => void;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Início', page: 'home' },
    { label: 'Como Funciona', page: 'como-funciona' },
    { label: 'Serviços', page: 'servicos' },
    { label: 'Sobre', page: 'sobre' },
    { label: 'Blog', page: 'blog' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md py-4 sm:py-5 shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/95 via-black/60 to-transparent py-6 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group text-left cursor-pointer"
        >
          <CastiCarLogo className="w-11 h-11 sm:w-12 sm:h-12 group-hover:scale-105 transition-transform" />
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-1.5 font-display">
            Casti<span className="font-playfair italic text-[#009577] font-normal">Car</span>
          </span>
        </button>

        {/* Desktop Links - Aumentado o tamanho das guias/abas */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-base sm:text-lg font-semibold">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <li key={item.page}>
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`transition-all cursor-pointer py-1.5 px-1 relative tracking-wide ${
                    isActive
                      ? 'text-[#00FFC2] font-bold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#009577] rounded-full shadow-[0_0_12px_#00FFC2]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA - Apenas Falar no WhatsApp */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/5551992000130"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm sm:text-base font-bold bg-gradient-to-r from-[#009577] to-[#01484B] text-white hover:opacity-95 transition-all shadow-xl hover:shadow-[#009577]/40 flex items-center gap-2.5 cursor-pointer active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2.5 focus:outline-none cursor-pointer"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 px-5 pt-5 pb-7 space-y-4 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`block w-full text-left py-3 px-4 rounded-xl text-lg font-bold transition-colors ${
                currentPage === item.page
                  ? 'bg-[#009577]/20 text-[#00FFC2]'
                  : 'text-white/90 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3">
            <a
              href="https://wa.me/5551992000130"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full text-base font-bold bg-gradient-to-r from-[#009577] to-[#01484B] text-white text-center transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#009577]/30"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Falar no WhatsApp (51) 99200-0130</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
