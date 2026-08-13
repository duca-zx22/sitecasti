import React from 'react';
import { BLOG_POSTS } from '../blogData';
import { Page } from '../types';
import { ArrowLeft } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ArticleViewProps {
  articleId?: string;
  onNavigate: (page: Page) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ articleId, onNavigate }) => {
  const post = BLOG_POSTS.find((p) => p.id === articleId) || BLOG_POSTS[0];

  return (
    <div className="bg-[#0E0E0F] text-white min-h-screen pt-28 pb-20">
      {/* HEADER */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-10">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#009577] hover:underline mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o Blog</span>
        </button>

        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
            {post.category} · {post.readTime}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-[#C9CFCE] text-base sm:text-lg leading-relaxed">
        <p className="text-xl text-white font-medium card-surface p-6 rounded-2xl shadow-xl">
          {post.content.lead}
        </p>

        {post.content.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            {section.heading && (
              <h2 className="font-display text-2xl font-bold text-white pt-4 border-t border-white/10">
                {section.heading}
              </h2>
            )}

            {section.paragraphs &&
              section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[#C9CFCE]">
                  {p}
                </p>
              ))}

            {section.items && (
              <ol className="list-decimal pl-6 space-y-3 text-white/90">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="pl-2">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </article>

      {/* ARTICLE FINAL CTA */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center space-y-6 pt-10 border-t border-white/10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
          Quer esse filtro no seu próximo carro?
        </span>
        <blockquote className="text-2xl font-bold italic font-playfair text-white/95">
          "{post.content.conclusion || 'Fale com a Casti Car antes de agendar a visita.'}"
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
