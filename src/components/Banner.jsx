"use client";
import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-20 pb-20 flex flex-col gap-10 lgl:gap-0 lgl:flex-row items-center border-b border-white/5 font-titleFont bg-[#0B1120] relative overflow-hidden"
    >
      {/* 1. Background Grid/Data Ambient Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* 2. Top-Left Ambient Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 3. The Content Hub */}
      <div className="max-w-7xl mx-auto flex flex-col lgl:flex-row items-center justify-between gap-10 z-10 px-4 lgl:px-10">
        <LeftBanner />
        <RightBanner />
      </div>

      {/* 4. Bottom Scroll Indicator (Pro Touch) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lgl:flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[3px]">Scroll_Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00D1FF] to-transparent"></div>
      </div>
    </section>
  );
};

export default Banner;