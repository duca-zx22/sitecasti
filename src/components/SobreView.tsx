import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const SobreView: React.FC = () => {
  return (
    <div className="bg-[#0E0E0F] text-white min-h-screen pt-28 pb-20">
      {/* PAGE HEAD */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-12 text-center space-y-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
          Quem Somos
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
          O carro certo exige critério.
        </h1>
      </header>

      {/* CONTENT TEXT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6 text-[#C9CFCE] text-base sm:text-lg leading-relaxed">
        <p className="card-surface p-6 rounded-2xl shadow-xl">
          A <strong className="text-white">Casti Car</strong> nasceu de um problema simples: comprar carro usado no Brasil é, na maioria das vezes, um tiro no escuro. Quilometragem adulterada, carro mexido, documentação irregular — o comprador não tem ferramenta, experiência, nem tempo pra checar tudo isso sozinho.
        </p>

        <p>
          Somos uma consultoria de compra assistida. Isso significa que <strong className="text-white">não vendemos carros próprios</strong> — trabalhamos exclusivamente pra você, buscando, inspecionando e negociando o veículo certo, dentro do seu critério, não do critério de quem quer vender rápido.
        </p>

        <p className="border-l-2 border-[#009577] pl-4 text-white font-medium">
          Atuamos em Porto Alegre e toda a região metropolitana.
        </p>
      </section>

      {/* PILARES */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-10">Nossos Pilares</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card-surface p-6 rounded-[14px] space-y-2 hover:border-[#009577] transition-colors">
            <CheckCircle2 className="w-6 h-6 text-[#009577]" />
            <h3 className="font-display text-lg font-bold text-[#009577]">Critério</h3>
            <p className="text-xs text-[#C9CFCE]">
              Toda decisão é técnica, fundamentada e segura, nunca no impulso.
            </p>
          </div>

          <div className="card-surface p-6 rounded-[14px] space-y-2 hover:border-[#009577] transition-colors">
            <CheckCircle2 className="w-6 h-6 text-[#009577]" />
            <h3 className="font-display text-lg font-bold text-[#009577]">Transparência</h3>
            <p className="text-xs text-[#C9CFCE]">
              Você acompanha e entende cada etapa do processo e laudo.
            </p>
          </div>

          <div className="card-surface p-6 rounded-[14px] space-y-2 hover:border-[#009577] transition-colors">
            <CheckCircle2 className="w-6 h-6 text-[#009577]" />
            <h3 className="font-display text-lg font-bold text-[#009577]">Consultoria Isenta</h3>
            <p className="text-xs text-[#C9CFCE]">
              Trabalhamos pra quem compra, garantindo seus interesses.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-6 pt-12 border-t border-white/10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
          Fala com a gente
        </span>
        <blockquote className="text-2xl sm:text-3xl font-bold italic font-playfair text-white/95">
          "Quer saber se faz sentido pro seu caso?"
        </blockquote>

        <a
          href="https://wa.me/5551992000130"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-br from-[#009577] to-[#01484B] hover:opacity-95 text-white transition-all shadow-lg cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Falar no WhatsApp (51) 99200-0130</span>
        </a>
      </section>
    </div>
  );
};
