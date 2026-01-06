"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagram, FaTerminal } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiTypescript, SiFramer } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "an Ethical Hacker.",
      "a CS Engineer.",
      "a Full Stack Developer.",
      "a Graphic Designer.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });

  return (
    <FadeIn className="w-full lgl:w-[60%] flex flex-col gap-12 pt-10">
      <div className="flex flex-col gap-6">
        {/* Elite Terminal Status Header */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full"></span>
          </div>
          <div className="h-[1px] w-8 bg-white/10"></div>
          <h4 className="text-[10px] font-mono tracking-[4px] text-[#00D1FF] uppercase opacity-80">
            System_Status: Optimal
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl mdl:text-4xl font-bold text-white leading-tight">
            George <span className="text-[#00D1FF] font-extrabold">Kasmiro</span>
          </h1>
          
          <div className="h-16 flex items-center gap-3">
             <FaTerminal className="text-[#00D1FF] text-2xl hidden mdl:block opacity-50" />
             <h2 className="text-3xl mdl:text-4xl font-bold text-neutral-200">
              <span>{text}</span>
              <Cursor cursorStyle="▋" cursorColor="#00D1FF" />
            </h2>
          </div>
        </div>

        <p className="text-base font-bodyFont leading-7 tracking-wide text-neutral-400 max-w-[580px] border-l-2 border-[#00D1FF]/20 pl-6 italic">
          "Architecture is the shield; Code is the sword." Specializing in <span className="text-white font-semibold">Defensive Engineering</span> and 
          Modern UI Infrastructure. Bridging the gap between secure backend logic and intuitive frontend systems.
        </p>

        {/* Dynamic Authority Stats (Elite Upgrade) */}
        <div className="flex gap-10 mt-4">
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">03+</span>
                <span className="text-[10px] uppercase font-mono text-gray-500 tracking-widest">Years_Exp</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10"></div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">40+</span>
                <span className="text-[10px] uppercase font-mono text-gray-500 tracking-widest">Protocols_Closed</span>
            </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-12 justify-between items-start">
        {/* Social Nodes */}
        <div className="group">
          <h2 className="text-xs uppercase font-mono mb-5 tracking-[3px] text-gray-500 group-hover:text-[#00D1FF] transition-colors">
            External_Links
          </h2>
          <div className="flex gap-4">
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} label="LinkedIn" />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram />} label="Instagram" />
            <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} label="Meta" />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="group">
          <h2 className="text-xs uppercase font-mono mb-5 tracking-[3px] text-gray-400 group-hover:text-[#00D1FF] transition-colors">
            Tool_Set
          </h2>
          <div className="flex gap-3">
            <SkillIcon icon={<FaReact />} color="hover:text-cyan-400" />
            <SkillIcon icon={<SiNextdotjs />} color="hover:text-white" />
            <SkillIcon icon={<SiTypescript />} color="hover:text-blue-500" />
            <SkillIcon icon={<SiTailwindcss />} color="hover:text-sky-400" />
            <SkillIcon icon={<SiFramer />} color="hover:text-purple-400" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

// Enhanced Sub-Components
const SocialIcon = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noreferrer" className="relative group/icon">
    <span className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00D1FF] hover:border-[#00D1FF]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,209,255,0.15)]">
      {icon}
    </span>
    {/* Tooltip */}
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#00D1FF] opacity-0 group-hover/icon:opacity-100 transition-opacity uppercase tracking-widest">
      {label}
    </span>
  </a>
);

const SkillIcon = ({ icon, color }) => (
  <span className={`w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-500 ${color} transition-all duration-500 hover:border-white/20 hover:scale-110 cursor-help shadow-inner`}>
    <div className="text-xl">{icon}</div>
  </span>
);

export default LeftBanner;