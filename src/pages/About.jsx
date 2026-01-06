"use client";
import React from "react";
import AboutDetail from "../components/AboutDetail";
import Resume from "../components/Resume";
import { FadeIn, FadeInStagger } from "../components/FadeIn";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#0B1120] pb-20">
      {/* 1. Hero Section: Personal Dossier */}
      <div className="pt-32 pb-16 px-4 lg:px-28 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
           <div className="absolute top-[5%] left-[10%] w-[40%] h-[40%] bg-[#00D1FF]/5 blur-[120px] rounded-full"></div>
        </div>

        <FadeInStagger>
          <div className="w-full flex justify-center relative z-10">
            <FadeIn>
              <AboutDetail />
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>

      {/* 2. Professional Record Section (Resume) */}
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />
        
        <FadeIn>
          <Resume />
        </FadeIn>
      </div>

      {/* 3. Decorative Tactical Frame */}
      <div className="fixed inset-0 border-[1px] border-white/5 pointer-events-none z-50 m-4 lg:m-8 hidden md:block">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00D1FF]/40"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00D1FF]/40"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00D1FF]/40"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00D1FF]/40"></div>
      </div>
    </main>
  );
}