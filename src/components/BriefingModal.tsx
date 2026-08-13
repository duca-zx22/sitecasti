import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { BriefingFormData } from '../types';
import { CastiCarLogo } from './CastiCarLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BriefingFormData>({
    name: '',
    phone: '',
    budget: 'Até R$ 80.000',
    usage: 'Uso diário / trabalho',
    passengers: 'Família (4+ pessoas)',
    preference: 'SUV ou Sedan',
    city: 'Porto Alegre',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, vim pelo site da Casti Car e gostaria de iniciar um briefing:
*Nome:* ${formData.name || 'Não informado'}
*Telefone:* ${formData.phone || 'Não informado'}
*Orçamento:* ${formData.budget}
*Uso principal:* ${formData.usage}
*Capacidade:* ${formData.passengers}
*Preferência:* ${formData.preference}
*Cidade/Região:* ${formData.city}`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/5551992000130?text=${encoded}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#17181A] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#009577] mx-auto animate-bounce" />
            <h3 className="font-display text-2xl font-bold">Briefing Enviado!</h3>
            <p className="text-sm text-[#C9CFCE]">
              Redirecionando para o WhatsApp da Casti Car...
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-2">
                <CastiCarLogo className="w-7 h-7" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#009577]">
                  Passo 1 — Briefing Inicial
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mt-1">Defina o perfil do seu carro ideal</h3>
              <p className="text-xs text-[#C9CFCE] mt-1">
                Preencha em menos de 1 minuto para receber uma consultoria personalizada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0E0E0F] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#009577]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(51) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0E0E0F] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#009577]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Orçamento Estimado
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#0E0E0F] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#009577]"
                  >
                    <option>Até R$ 50.000</option>
                    <option>R$ 50.000 a R$ 80.000</option>
                    <option>R$ 80.000 a R$ 120.000</option>
                    <option>Acima de R$ 120.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Cidade / Região
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#0E0E0F] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#009577]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  Uso Principal do Veículo
                </label>
                <select
                  value={formData.usage}
                  onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                  className="w-full bg-[#0E0E0F] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#009577]"
                >
                  <option>Uso diário / trabalho e cidade</option>
                  <option>Viagens de fim de semana e família</option>
                  <option>Uso misto (cidade + estrada)</option>
                  <option>Primeiro carro / motorista iniciante</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  Estilo ou Preferência
                </label>
                <input
                  type="text"
                  placeholder="Ex: Hatch econômico, SUV automático, Sedan espaçoso..."
                  value={formData.preference}
                  onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                  className="w-full bg-[#0E0E0F] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#009577]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-br from-[#009577] to-[#01484B] hover:opacity-95 text-white font-semibold transition-all shadow-lg hover:shadow-[#009577]/30 flex items-center justify-center gap-2.5 cursor-pointer mt-6"
              >
                <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
                <span>Enviar Briefing via WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
