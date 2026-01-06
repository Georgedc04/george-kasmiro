"use client";
import React from "react";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-[40%] flex justify-center items-center relative group">
      {/* 1. Animated Tech Background Rings */}
      <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-[#00D1FF]/10 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-[#00D1FF]/20 animate-[spin_30s_linear_reverse_infinite]"></div>
      
      {/* 2. Professional Glassmorphism Base */}
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[450px] lgl:h-[450px] bg-gradient-to-t from-[#00D1FF]/10 to-transparent rounded-2xl blur-3xl opacity-30"></div>

      {/* 3. Main Image Container with Engineering Accents */}
      <div className="relative z-10 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lgl:w-[480px] lgl:h-[650px] flex justify-center items-end">
        
        {/* Corner Brackets (Cyber Aesthetic) */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#00D1FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#00D1FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>

        <img
          className="w-full h-full object-contain grayscale-0 hover:grayscale transition-all duration-700 drop-shadow-[0_0_20px_rgba(0,209,255,0.2)]"
          src="/images/bannerImg.png"
          alt="George Kasmiro"
        />

        {/* 4. Scanning Line Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D1FF]/20 to-transparent h-[2px] w-full animate-scan top-0 pointer-events-none opacity-40"></div>
        
        {/* 5. System Metadata Labels */}
        <div className="absolute -right-4 top-20 hidden lgl:flex flex-col gap-2 items-end">
          <p className="text-[10px] font-mono text-[#00D1FF] tracking-[2px] bg-[#0B1120]/80 px-2 py-1 border border-[#00D1FF]/30">
            ID: GK_772
          </p>
          <p className="text-[9px] font-mono text-gray-500 uppercase">
            Access_Level: Root
          </p>
        </div>
      </div>

      {/* CSS Animation for the Scanline (Add to your global CSS or a <style> tag) */}
      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
          position: absolute;
        }
      `}</style>
    </FadeIn>
  );
};

export default RightBanner;