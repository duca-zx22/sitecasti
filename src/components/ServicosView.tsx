import React from 'react';
import { ShieldCheck, Search, Check } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServicosView: React.FC = () => {
  return (
    <div className="bg-[#0E0E0F] text-white min-h-screen pt-28 pb-20">
      {/* PAGE HEAD */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center space-y-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
          O que fazemos
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
          Compra Assistida: você decide, a gente garante.
        </h1>
        <p className="text-[#C9CFCE] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Dois caminhos, o mesmo critério: encontramos o carro certo pra você do zero, ou confirmamos tecnicamente o carro que você já escolheu.
        </p>
      </header>

      {/* SERVICES CARDS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* CAR HUNTER (FEATURED) */}
          <div className="bg-gradient-to-b from-[#009577]/15 via-[#17181A] to-[#17181A] border-2 border-[#009577] p-8 sm:p-10 rounded-[14px] relative shadow-2xl flex flex-col justify-between hover:shadow-[#009577]/20 transition-all">
            <span className="absolute -top-3.5 left-8 bg-gradient-to-r from-[#009577] to-[#01484B] text-white font-mono text-[10px] uppercase tracking-widest py-1 px-4 rounded-full font-bold shadow-md">
              Mais Completo
            </span>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Search className="w-6 h-6 text-[#009577]" />
                <h2 className="font-display text-2xl sm:text-3xl font-bold">Car Hunter</h2>
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
              className="mt-6 w-full py-4 rounded-full text-sm font-semibold bg-gradient-to-br from-[#009577] to-[#01484B] hover:opacity-95 text-white transition-all text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Pedir minha proposta de Car Hunter</span>
            </a>
          </div>

          {/* AVALIAÇÃO VEICULAR */}
          <div className="card-surface p-8 sm:p-10 rounded-[14px] relative flex flex-col justify-between hover:border-white/20 transition-colors shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-6 h-6 text-white/80" />
                <h2 className="font-display text-2xl sm:text-3xl font-bold">Avaliação Veicular</h2>
              </div>
              <p className="text-white/70 font-medium text-sm mb-4">
                Já achou o carro? Confirma antes de assinar.
              </p>
              <p className="text-xs text-[#C9CFCE]/80 mb-6 leading-relaxed">
                Você já encontrou o carro sozinho e só quer ter certeza antes de fechar negócio. Fazemos uma vistoria técnica completa, com laudo cautelar.
              </p>

              <ul className="space-y-3.5 my-6 text-sm text-[#C9CFCE]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Análise de pintura e estrutura (identifica batida, retoque ou peça trocada)</span>
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
                  <span>Verificação de restrições judiciais, financeiras e administrativas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#009577] shrink-0 mt-0.5" />
                  <span>Consulta de multas, débitos e recall pendente</span>
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
              className="mt-6 w-full py-4 rounded-full text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Solicitar Avaliação Veicular</span>
            </a>
          </div>

        </div>

        {/* PRICE NOTE & FOOTER NOTE */}
        <div className="mt-12 card-surface p-6 rounded-2xl text-center text-xs text-[#C9CFCE] max-w-3xl mx-auto leading-relaxed border border-white/5">
          Valores variam conforme o perfil de busca e o serviço escolhido. Trabalhamos com propostas personalizadas para cada necessidade. Fale conosco sem compromisso para receber uma estimativa.
        </div>
      </section>
    </div>
  );
};
