import React from 'react';
import { BLOG_POSTS } from '../blogData';
import { Page } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: Page, articleId?: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0E0E0F] text-white min-h-screen pt-28 pb-20">
      {/* PAGE HEAD */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center space-y-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009577]">
          Conteúdo & Dicas
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
          Guias e análises pra você não cair em furada.
        </h1>
        <p className="text-[#C9CFCE] text-base sm:text-lg max-w-2xl mx-auto">
          Conhecimento técnico direto ao ponto para quem quer comprar carro usado com segurança.
        </p>
      </header>

      {/* BLOG POSTS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                onNavigate('artigo', post.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="card-surface p-6 rounded-[14px] flex flex-col justify-between hover:border-[#009577] transition-all hover:-translate-y-1.5 shadow-xl cursor-pointer group"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-[#009577] mb-3">
                  <span className="uppercase tracking-wider font-semibold">
                    {post.category}
                  </span>
                  <span className="text-[#C9CFCE]/60 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-xl font-bold mb-3 group-hover:text-[#009577] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-[#C9CFCE] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-[#009577] font-semibold group-hover:translate-x-1 transition-transform">
                <span>Ler artigo completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
