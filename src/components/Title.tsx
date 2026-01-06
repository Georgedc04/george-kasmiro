"use client";
import React from "react";

interface Props {
  title: string;
  des: string;
}

const Title = ({ title, des }: Props) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14 relative group">
      {/* 1. Technical Prefix Header */}
      <div className="flex items-center gap-3">
        <span className="w-8 h-[1px] bg-[#00D1FF] opacity-50 group-hover:w-12 transition-all duration-500"></span>
        <h3 className="text-sm uppercase font-mono font-medium text-[#00D1FF] tracking-[0.3em]">
          // {title}
        </h3>
      </div>

      {/* 2. Main Descriptive Title - Locked to Light Text on Dark Base */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl font-extrabold capitalize text-white tracking-tight leading-none">
          {des}<span className="text-[#00D1FF] animate-pulse">_</span>
        </h1>
        
        {/* 3. Tactical Underline Detail */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-[4px] w-24 bg-[#00D1FF] rounded-full shadow-[0_0_15px_rgba(0,209,255,0.6)]"></div>
          <div className="h-[4px] w-4 bg-[#00D1FF]/30 rounded-full"></div>
          <div className="h-[4px] w-2 bg-[#00D1FF]/10 rounded-full"></div>
        </div>
      </div>

      {/* 4. Background Decal (Subtle Watermark) */}
      <span className="absolute -left-4 -top-6 text-7xl font-bold text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter hidden md:block">
        {title.split('_')[0]}
      </span>
    </div>
  );
};

export default Title;