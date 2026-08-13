import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Search, ShieldCheck, Check } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Page } from '../types';

interface HomeViewProps {
  onNavigate: (page: Page, articleId?: string) => void;
  onOpenBriefing?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'Isso não fica caro? Posso pesquisar sozinho.',
      a: 'Você pode. A pergunta é: você sabe identificar quilometragem adulterada, se o carro tem histórico ruim, motor trocado, adulterado ou defeito oculto? Nós sabemos — e é isso que evita um prejuízo muito maior que o custo do nosso serviço.',
    },
    {
      q: 'Confio mais em loja com CNPJ.',
      a: 'Loja garante nota fiscal. Não garante que o carro foi inspecionado a fundo. A Casti Car faz exatamente essa inspeção que falta — em qualquer carro, de loja ou particular.',
    },
    {
      q: 'Vou perder mais tempo com isso.',
      a: 'É o contrário: você para de perder fim de semana vendo carro errado. Nós filtramos antes, e te entregamos apenas o melhor dentro do que você deseja.',
    },
    {
      q: 'Vocês atendem em qual região?',
      a: 'Porto Alegre e região. Se o carro estiver fora do RS, avaliamos caso a caso — é só chamar no WhatsApp.',
    },
  ];

  return (
    <div className="bg-[#0E0E0F] text-white min-h-screen">
      {/* HERO SECTION */}
      <HeroSection
        onOpenBriefing={() => {}}
        onLearnMore={() => {
          const el = document.getElementById('servicos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* SEÇÃO DE SERVIÇOS (ANTES DO COMO FUNCIONA) */}
      <section id="servicos" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* CAR HUNTER (FEATURED) */}
          <div className="bg-gradient-to-b from-[#009577]/15 via-[#17181A] to-[#17181A] border-2 border-[#009577] p-8 sm:p-10 rounded-[14px] relative shadow-2xl flex flex-col justify-between hover:shadow-[#009577]/25 transition-all">
            <span className="absolute -top-3.5 left-8 bg-gradient-to-r from-[#009577] to-[#01484B] text-white font-mono text-[10px] uppercase tracking-widest py-1 px-4 rounded-full font-bold shadow-md">
              Mais Completo
            </span>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Search className="w-6 h-6 text-[#009577]" />
                <h3 className="font-display text-2xl sm:text-3xl font-bold">Car Hunter</h3>
              </div>
              <p className="text-[#009577] font-medium text-sm mb-4">
                Da dúvida na escolha à chave na mão. Fazemos tudo para você.
              </p>

              <ul className="space-y-3.5 my-6 text-sm text-[#C9CFCE]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Consultoria de automóvel ideal e alinhamento de perfil</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Pesquisa profunda e busca ativa no mercado inteiro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Inspeção técnica presencial e avaliação cautelar</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Negociação com base em dados (FIPE + estado real do veículo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Despache: suporte na documentação e transferência do carro</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/5551992000130?text=${encodeURIComponent('Olá, vim pelo site da Casti Car. Quero marcar uma conversa para saber como funciona!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-4 rounded-full text-sm font-semibold bg-gradient-to-br from-[#009577] to-[#01484B] hover:opacity-95 text-white transition-all text-center flex items-center justify-center gap-2.5 shadow-lg shadow-[#009577]/30 cursor-pointer active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Pedir proposta de Car Hunter</span>
            </a>
          </div>

          {/* AVALIAÇÃO VEICULAR */}
          <div className="card-surface p-8 sm:p-10 rounded-[14px] relative flex flex-col justify-between hover:border-white/20 transition-colors shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-6 h-6 text-white/80" />
                <h3 className="font-display text-2xl sm:text-3xl font-bold">Avaliação Veicular</h3>
              </div>
              <p className="text-white/70 font-medium text-sm mb-4">
                Já achou o carro? Confirme antes de fechar negócio.
              </p>
              <p className="text-xs text-[#C9CFCE]/80 mb-6 leading-relaxed">
                Você já encontrou o carro sozinho e quer ter certeza antes de fechar negócio. Fazemos uma vistoria técnica completa presencial com laudo cautelar.
              </p>

              <ul className="space-y-3.5 my-6 text-sm text-[#C9CFCE]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Análise de pintura e estrutura (identifica batidas ou peças trocadas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Verificação de chassi, motor, transmissão e scanner eletrônico</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Consulta de roubo, furto, sinistro e leilão em base nacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Verificação de restrições judiciais, financeiras e recall pendente</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Relatório fotográfico completo + laudo técnico assinado</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/5551992000130?text=${encodeURIComponent('Olá, vim pelo site da Casti Car. Quero marcar uma conversa para saber como funciona!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-4 rounded-full text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors text-center flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Solicitar Avaliação Veicular</span>
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (RESUMO DE 4 PASSOS) */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Quatro passos até o carro certo.
          </h2>
          <p className="text-[#C9CFCE] text-sm sm:text-base">
            Sem estresse, sem surpresas desagradáveis e sem perda de tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-surface p-6 rounded-[14px] relative group hover:border-[#009577] transition-all hover:-translate-y-1">
            <span className="font-mono text-2xl font-bold text-[#009577] block mb-3">01</span>
            <h3 className="font-display text-lg font-bold mb-2">Você conta o que quer em um carro</h3>
            <p className="text-xs text-[#C9CFCE] leading-relaxed">
              Modelo, uso, orçamento, economia, espaço e preferências da sua família.
            </p>
          </div>

          <div className="card-surface p-6 rounded-[14px] relative group hover:border-[#009577] transition-all hover:-translate-y-1">
            <span className="font-mono text-2xl font-bold text-[#009577] block mb-3">02</span>
            <h3 className="font-display text-lg font-bold mb-2">Pesquisa aprofundada e filtro</h3>
            <p className="text-xs text-[#C9CFCE] leading-relaxed">
              Vasculhamos o mercado inteiro. Você recebe só o que passou no nosso rigoroso critério.
            </p>
          </div>

          <div className="card-surface p-6 rounded-[14px] relative group hover:border-[#009577] transition-all hover:-translate-y-1">
            <span className="font-mono text-2xl font-bold text-[#009577] block mb-3">03</span>
            <h3 className="font-display text-lg font-bold mb-2">Avaliação técnica detalhada</h3>
            <p className="text-xs text-[#C9CFCE] leading-relaxed">
              Motor, estrutura, pintura, histórico e documentos. Tudo verificado presencialmente.
            </p>
          </div>

          <div className="card-surface p-6 rounded-[14px] relative group hover:border-[#009577] transition-all hover:-translate-y-1">
            <span className="font-mono text-2xl font-bold text-[#009577] block mb-3">04</span>
            <h3 className="font-display text-lg font-bold mb-2">Aprovação, negociação e entrega</h3>
            <p className="text-xs text-[#C9CFCE] leading-relaxed">
              Cuidamos dos trâmites burocráticos e da transferência pra você economizar tempo.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              onNavigate('como-funciona');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
          >
            <span>Ver o processo completo de 6 etapas</span>
            <ArrowRight className="w-4 h-4 text-[#009577]" />
          </button>
        </div>
      </section>

      {/* DIFERENCIAIS / POR QUE CASTI CAR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10 bg-[#17181A]/50 backdrop-blur-md rounded-3xl my-12 border border-white/5 shadow-2xl">
        <div className="max-w-3xl space-y-3 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
            Por que Casti Car
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Confiança não é adjetivo. É processo.
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="flex items-start gap-4 p-4.5 rounded-xl bg-[#0E0E0F]/80 border border-white/5 hover:border-[#009577]/40 transition-colors">
            <CheckCircle2 className="w-6 h-6 text-[#009577] shrink-0 mt-0.5" />
            <span className="text-sm text-[#C9CFCE] leading-relaxed">
              Você não paga por "confiar" — paga por facilidade, segurança, tranquilidade, tempo e custo-benefício.
            </span>
          </li>
          <li className="flex items-start gap-4 p-4.5 rounded-xl bg-[#0E0E0F]/80 border border-white/5 hover:border-[#009577]/40 transition-colors">
            <CheckCircle2 className="w-6 h-6 text-[#009577] shrink-0 mt-0.5" />
            <span className="text-sm text-[#C9CFCE] leading-relaxed">
              Cada carro passa por vistoria cautelar e técnica completa antes de chegar até você.
            </span>
          </li>
          <li className="flex items-start gap-4 p-4.5 rounded-xl bg-[#0E0E0F]/80 border border-white/5 hover:border-[#009577]/40 transition-colors">
            <CheckCircle2 className="w-6 h-6 text-[#009577] shrink-0 mt-0.5" />
            <span className="text-sm text-[#C9CFCE] leading-relaxed">
              Negociação feita por quem entende de mercado e FIPE, não por quem quer vender rápido.
            </span>
          </li>
          <li className="flex items-start gap-4 p-4.5 rounded-xl bg-[#0E0E0F]/80 border border-white/5 hover:border-[#009577]/40 transition-colors">
            <CheckCircle2 className="w-6 h-6 text-[#009577] shrink-0 mt-0.5" />
            <span className="text-sm text-[#C9CFCE] leading-relaxed">
              Você só assina o contrato quando aprovar cada detalhe do laudo e da negociação.
            </span>
          </li>
        </ul>
      </section>

      {/* MERCADO EM NÚMEROS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
            O Mercado em Números
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Por que critério importa mais do que sorte.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="card-surface p-8 rounded-2xl space-y-3">
            <span className="font-mono text-5xl font-extrabold bg-gradient-to-r from-[#009577] to-[#01484B] bg-clip-text text-transparent block">
              30%
            </span>
            <p className="text-sm text-[#C9CFCE] leading-relaxed">
              dos seminovos no Brasil têm suspeita ou confirmação de quilometragem adulterada.
            </p>
          </div>

          <div className="card-surface p-8 rounded-2xl space-y-3">
            <span className="font-mono text-5xl font-extrabold bg-gradient-to-r from-[#009577] to-[#01484B] bg-clip-text text-transparent block">
              69%
            </span>
            <p className="text-sm text-[#C9CFCE] leading-relaxed">
              dos compradores de veículo são casados, buscando uma decisão segura pra família.
            </p>
          </div>

          <div className="card-surface p-8 rounded-2xl space-y-3">
            <span className="font-mono text-5xl font-extrabold bg-gradient-to-r from-[#009577] to-[#01484B] bg-clip-text text-transparent block">
              1 em 3
            </span>
            <p className="text-sm text-[#C9CFCE] leading-relaxed">
              anúncios de usados esconde algum problema mecânico ou estrutural não declarado.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[#C9CFCE]/60 font-mono mt-8">
          Dados de contexto e amostragem de mercado automotivo nacional.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
        <div className="text-center space-y-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Antes de você perguntar.</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="card-surface rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-semibold text-base sm:text-lg flex justify-between items-center gap-4 cursor-pointer hover:text-[#009577] transition-colors"
                >
                  <span className="font-display">{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#009577] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#C9CFCE] leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#0E0E0F] via-[#17181A] to-[#0E0E0F] border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
            É hora de decidir
          </span>
          <blockquote className="font-display text-2xl sm:text-4xl font-bold leading-tight">
            "O carro certo para você existe — basta ter critério e conhecimento para encontrar."
          </blockquote>

          <div className="pt-4 flex justify-center">
            <a
              href="https://wa.me/5551992000130"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold bg-gradient-to-br from-[#009577] to-[#01484B] hover:opacity-95 text-white transition-all shadow-xl hover:shadow-[#009577]/40 flex items-center justify-center gap-3 cursor-pointer active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Falar no WhatsApp (51) 99200-0130</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
