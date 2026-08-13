import { useState } from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { HomeView } from './components/HomeView';
import { ComoFuncionaView } from './components/ComoFuncionaView';
import { ServicosView } from './components/ServicosView';
import { SobreView } from './components/SobreView';
import { BlogView } from './components/BlogView';
import { ArticleView } from './components/ArticleView';
import { Footer } from './components/Footer';
import { Page } from './types';
import { WhatsAppIcon } from './components/WhatsAppIcon';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeArticleId, setActiveArticleId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: Page, articleId?: string) => {
    setCurrentPage(page);
    if (articleId) {
      setActiveArticleId(articleId);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E0F] text-white selection:bg-[#009577] selection:text-white font-sans relative">
      {/* Background Aurora Orbs */}
      <div className="bg-orbs">
        <div className="bg-orb o1" />
        <div className="bg-orb o2" />
        <div className="bg-orb o3" />
      </div>

      {/* Film Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Fixed Navigation Bar */}
      <HeaderNavigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Dynamic View Rendering */}
      <main>
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'como-funciona' && (
          <ComoFuncionaView />
        )}

        {currentPage === 'servicos' && <ServicosView />}

        {currentPage === 'sobre' && <SobreView />}

        {currentPage === 'blog' && <BlogView onNavigate={handleNavigate} />}

        {currentPage === 'artigo' && (
          <ArticleView articleId={activeArticleId} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5551992000130"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-[#009577] to-[#01484B] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer border border-white/20 hover:shadow-[#009577]/50"
      >
        <WhatsAppIcon className="w-5 h-5 text-white fill-current" />
        <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span>
      </a>
    </div>
  );
}
