import React from 'react';
import logoImg from '../assets/images/casticar_official_logo_1786657233333.jpg';

interface LogoProps {
  className?: string;
}

export const CastiCarLogo: React.FC<LogoProps> = ({ className = 'w-11 h-11' }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden select-none bg-black shadow-md border border-[#009577]/30 ${className}`}>
      <img
        src={logoImg}
        alt="Casti Car Logo"
        className="w-full h-full object-cover rounded-full"
        loading="eager"
      />
    </div>
  );
};





