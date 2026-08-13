import React from 'react';
import logoImg from '../assets/images/logo_casticar_png_1786645365478.jpg';

interface LogoProps {
  className?: string;
}

export const CastiCarLogo: React.FC<LogoProps> = ({ className = 'w-11 h-11' }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden select-none bg-[#08090A] shadow-md border border-[#009577]/30 ${className}`}>
      <img
        src={logoImg}
        alt="Casti Car Logo"
        className="w-full h-full object-cover rounded-full"
        loading="eager"
      />
    </div>
  );
};





