import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ComoFuncionaViewProps {
  onOpenBriefing?: () => void;
}

export const ComoFuncionaView: React.FC<ComoFuncionaViewProps> = () => {
  const steps = [
    {
      num: '01',
      title: 'Briefing',
      desc: 'Você conta o que precisa: modelo, uso, número de passageiros, orçamento, prazo. Sem formulário genérico — uma conversa de verdade.',
    },
    {
      num: '02',
      title: 'Busca',
      desc: 'Vasculhamos os principais canais do mercado (Webmotors, OLX, rede de contatos e lojas parceiras) atrás de opções que batem com o seu perfil.',
    },
    {
      num: '03',
      title: 'Seleção',
      desc: 'Você recebe até 3 opções pré-selecionadas, com dados reais, fotos e uma pré-análise técnica e financeira — nunca uma lista genérica de anúncios.',
    },
    {
      num: '04',
      title: 'Inspeção técnica',
      desc: 'Motor, suspensão, freios, parte elétrica, lataria, pintura, histórico de multas, sinistro e leilão. Tudo checado criteriosamente antes de você decidir.',
    },
    {
      num: '05',
      title: 'Negociação',
      desc: 'Negociamos o valor com base na tabela FIPE e no estado real do carro — você não paga o "preço de anúncio", paga o preço justo.',
    },
    {
      num: '06',
      title: 'Entrega e pós-venda',
      desc: 'Documentação regularizada, carro em mãos, e acompanhamento depois — porque o processo não acaba na entrega das chaves.',
    },
  ];

  return (
    <div className="bg-[#0E0E0F] text-white min-h-screen pt-28 pb-20">
      {/* PAGE HEAD */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center space-y-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
          O Processo
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
          O carro certo não é sorte. É processo.
        </h1>
        <p className="text-[#C9CFCE] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Seis etapas claras, do primeiro contato até a chave na sua mão. Você acompanha e aprova cada uma.
        </p>
      </header>

      {/* STEPS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="card-surface p-8 rounded-[14px] relative hover:border-[#009577] transition-all hover:-translate-y-1 shadow-xl space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[#009577] tracking-wider uppercase block">
                {step.num} — {step.title}
              </span>
              <p className="text-sm text-[#C9CFCE] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-6 pt-12 border-t border-white/10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
          Pronto pra começar?
        </span>
        <blockquote className="text-2xl sm:text-3xl font-bold italic font-playfair text-white/95">
          "Quer começar pelo briefing? É só chamar no WhatsApp."
        </blockquote>

        <div className="flex justify-center pt-2">
          <a
            href="https://wa.me/5551992000130"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold bg-gradient-to-br from-[#009577] to-[#01484B] hover:opacity-95 text-white transition-all shadow-xl flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Falar no WhatsApp (51) 99200-0130</span>
          </a>
        </div>
      </section>
    </div>
  );
};
