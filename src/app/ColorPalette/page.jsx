"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaShieldAlt, FaCode, FaTerminal, FaExternalLinkAlt } from "react-icons/fa";

const ColorPalette = () => {
  const palettes = [
    {
      name: "Cyber Sentinel",
      desc: "Perfect for Cybersecurity & Backend. Professional, deep, and high-tech.",
      bg: "bg-[#0B1120]",
      card: "bg-[#1E293B]",
      accent: "text-[#00D1FF]",
      button: "bg-[#00D1FF]",
      border: "border-[#1E293B]",
      text: "text-[#94A3B8]",
      title: "text-white",
      hex: "#00D1FF"
    },
    {
      name: "Modern Architect",
      desc: "Clean, corporate, and highly readable. Ideal for Full Stack Engineering.",
      bg: "bg-[#F8FAFC]",
      card: "bg-white",
      accent: "text-[#4F46E5]",
      button: "bg-[#4F46E5]",
      border: "border-gray-200",
      text: "text-slate-600",
      title: "text-slate-900",
      hex: "#4F46E5"
    },
    {
      name: "Slate & Crimson",
      desc: "Bold and aggressive. Best for Ethical Hacking and high-impact design.",
      bg: "bg-[#121212]",
      card: "bg-[#1A1A1A]",
      accent: "text-[#E11D48]",
      button: "bg-[#E11D48]",
      border: "border-neutral-800",
      text: "text-neutral-400",
      title: "text-neutral-100",
      hex: "#E11D48"
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <header className="mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            Portfolio Color Templates
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Visualizing professional themes for George Kasmiro (CSE & Security Engineer).
          </p>
        </header>

        <div className="space-y-20">
          {palettes.map((p, index) => (
            <section key={index} className={`rounded-3xl overflow-hidden shadow-2xl border ${p.border} ${p.bg}`}>
              {/* Palette Info Header */}
              <div className="p-8 border-b border-white/5 bg-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className={`text-3xl font-bold ${p.title}`}>{p.name}</h2>
                  <p className={`${p.text} mt-1`}>{p.desc}</p>
                </div>
                <div className="flex gap-2">
                  <code className="bg-black/20 px-3 py-1 rounded text-xs text-white">Accent: {p.hex}</code>
                </div>
              </div>

              {/* Preview Content */}
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* 1. Typography & Branding */}
                <div className="space-y-6">
                  <h3 className={`text-xs uppercase tracking-[3px] font-bold ${p.accent}`}>01. Typography</h3>
                  <div className="space-y-4">
                    <h1 className={`text-4xl font-bold ${p.title}`}>Hi, I'm George</h1>
                    <p className={`${p.text} leading-relaxed`}>
                      I build secure systems and scalable web applications. My focus is on the intersection of 
                      code quality and system integrity.
                    </p>
                    <div className="flex gap-3">
                        <span className={`h-1 w-12 rounded-full ${p.button}`}></span>
                        <span className={`h-1 w-4 rounded-full ${p.button} opacity-50`}></span>
                    </div>
                  </div>
                </div>

                {/* 2. Component Preview (Card) */}
                <div className="space-y-6">
                   <h3 className={`text-xs uppercase tracking-[3px] font-bold ${p.accent}`}>02. Component</h3>
                   <div className={`${p.card} p-8 rounded-2xl border ${p.border} shadow-xl hover:-translate-y-2 transition-transform duration-300`}>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-white/5 ${p.accent} text-2xl`}>
                        <FaShieldAlt />
                      </div>
                      <h4 className={`text-xl font-bold mb-3 ${p.title}`}>Ethical Hacking</h4>
                      <p className={`text-sm ${p.text} mb-6`}>
                        Penetration testing and vulnerability assessment for enterprise networks.
                      </p>
                      <button className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${p.accent}`}>
                        View Project <HiArrowRight />
                      </button>
                   </div>
                </div>

                {/* 3. Action Elements */}
                <div className="space-y-6">
                   <h3 className={`text-xs uppercase tracking-[3px] font-bold ${p.accent}`}>03. UI Elements</h3>
                   <div className="flex flex-col gap-4">
                      <button className={`${p.button} text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg`}>
                        Contact Me <FaExternalLinkAlt className="text-xs" />
                      </button>
                      
                      <div className="flex gap-4 mt-2">
                        {[FaCode, FaTerminal, FaShieldAlt].map((Icon, i) => (
                          <div key={i} className={`w-12 h-12 rounded-full ${p.card} border ${p.border} flex items-center justify-center ${p.accent} cursor-pointer hover:scale-110 transition-transform`}>
                            <Icon />
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className={`text-[10px] uppercase tracking-widest ${p.text} mb-2`}>Code Block Style</p>
                        <div className="bg-black/40 p-3 rounded-md border border-white/5 font-mono text-[11px]">
                          <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = <span className="text-yellow-400">"George"</span>;
                        </div>
                      </div>
                   </div>
                </div>

              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;