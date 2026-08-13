import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBmwImg from '../assets/images/bmw_dark_hero_1786197086816.jpg';
import heroBmwMobileImg from '../assets/images/bmw_mobile_hero_1786461377267.jpg';
import heroBmwVideo from '../assets/videos/bmw_hero_loop.mp4';
import heroBmwMobileVideo from '../assets/videos/bmw_hero_mobile_loop.mp4';

interface HeroSectionProps {
  onOpenBriefing?: () => void;
  onLearnMore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onLearnMore,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay deferred:', err);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-black z-0 pt-24 sm:pt-28 pb-10 px-4 sm:px-8 md:px-12">
      {/* Top and Bottom Blur Overlays */}
      <div className="blur-overlay blur-overlay-top pointer-events-none" />
      <div className="blur-overlay blur-overlay-bottom pointer-events-none" />

      {/* Video Background Container with Mobile Optimization */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          poster={heroBmwMobileImg}
          className="w-full h-full object-cover transition-transform duration-1000 scale-105 brightness-[0.80]"
        >
          <source src={heroBmwMobileVideo} type="video/mp4" media="(max-width: 639px)" />
          <source src={heroBmwVideo} type="video/mp4" media="(min-width: 640px)" />
        </video>

        {/* Dark Gradient Overlay for maximum readability & mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95 z-1" />
      </div>

      {/* Center Hero Content (No CTA buttons in the hero header) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 my-auto py-6">
        {/* Eyebrow Badge */}
        <span className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#00FFC2] bg-black/80 px-4 py-2 rounded-full border border-[#009577]/50 backdrop-blur-md shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-[#00FFC2] animate-pulse" />
          "Especialista em aquisição veicular" Porto Alegre e região
        </span>

        {/* Main Title */}
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] drop-shadow-2xl max-w-3xl">
          Você sabe qual o carro certo para você?
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl font-medium text-[#E2E8F0] max-w-2xl bg-black/65 border border-white/15 backdrop-blur-md px-6 py-3.5 rounded-2xl shadow-2xl leading-relaxed mt-2">
          Nós encontramos, avaliamos e entregamos ele para você.
        </p>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer" onClick={onLearnMore}>
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#00FFC2]/80">Descubra como funciona</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#00FFC2]" />
      </div>
    </section>
  );
};

