import React from 'react';
import { Page } from '../types';
import { CastiCarLogo } from './CastiCarLogo';

interface FooterProps {
  onNavigate: (page: Page, articleId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0E0E0F] border-t border-white/10 pt-12 pb-8 text-[#C9CFCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group text-left cursor-pointer mb-3"
            >
              <CastiCarLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Casti<span className="font-playfair italic text-[#009577] font-normal">Car</span>
              </span>
            </button>
            <p className="text-xs text-[#C9CFCE]/70 leading-relaxed">
              Consultoria de compra assistida de carros seminovos em Porto Alegre e região.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-[#009577] mb-3">
                Navegação
              </h4>
              <ul className="space-y-2 text-[#C9CFCE]">
                <li>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#009577] transition-colors cursor-pointer"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('como-funciona');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#009577] transition-colors cursor-pointer"
                  >
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('servicos');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#009577] transition-colors cursor-pointer"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('sobre');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#009577] transition-colors cursor-pointer"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('blog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#009577] transition-colors cursor-pointer"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-[#009577] mb-3">
                Contato
              </h4>
              <ul className="space-y-2 text-[#C9CFCE]">
                <li>
                  <a
                    href="https://wa.me/5551992000130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#009577] transition-colors"
                  >
                    (51) 99200-0130
                  </a>
                </li>
                <li className="text-[#C9CFCE]/60 text-xs">Porto Alegre e região</li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-[#009577] mb-3">
                Mantra
              </h4>
              <p className="text-xs italic font-playfair text-[#C9CFCE]/80">
                "O carro certo exige critério."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#C9CFCE]/50 gap-4">
          <p>© 2026 Casti Car. Todos os direitos reservados.</p>
          <p className="font-mono">Compra Assistida · Porto Alegre e Região</p>
        </div>
      </div>
    </footer>
  );
};
