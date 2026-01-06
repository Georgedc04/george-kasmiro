"use client";
import { HiArrowRight } from "react-icons/hi";
import { ReactNode } from "react";

interface Props {
  title: string;
  des: string;
  icon?: ReactNode; 
}

const Card = ({ title, des, icon }: Props) => {
  return (
    <div className="group w-full px-8 py-10 rounded-2xl bg-[#0F172A]/40 border border-white/5 shadow-xl hover:bg-[#1E293B]/60 hover:border-[#00D1FF]/40 transition-all duration-500 overflow-hidden relative flex flex-col justify-between min-h-[320px]">
      
      {/* 1. The "Cyber Scan" Line Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>

      <div className="flex flex-col gap-8 relative z-10">
        {/* 2. Tactical Icon Container */}
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#00D1FF]/5 border border-[#00D1FF]/10 group-hover:border-[#00D1FF]/40 group-hover:bg-[#00D1FF]/10 transition-all duration-500">
          {icon ? (
            <span className="text-4xl text-[#00D1FF] group-hover:scale-110 transition-transform duration-500">
              {icon}
            </span>
          ) : (
            <div className="flex flex-col gap-1.5 w-8">
              <span className="w-full h-[2px] bg-[#00D1FF]"></span>
              <span className="w-2/3 h-[2px] bg-[#00D1FF]"></span>
              <span className="w-full h-[2px] bg-[#00D1FF]"></span>
            </div>
          )}
        </div>

        {/* 3. Textual Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#00D1FF] transition-colors duration-300">
            {title}
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-bodyFont line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {des}
          </p>
        </div>
      </div>

      {/* 4. Action Trigger (Fixed to Bottom) */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-[#00D1FF] flex items-center gap-2 text-[10px] font-mono uppercase tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
          Uplink_Data <HiArrowRight className="text-lg" />
        </span>
        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-[#00D1FF]/30 transition-colors">
            <span className="text-[10px] text-gray-600 group-hover:text-[#00D1FF] font-mono">01</span>
        </div>
      </div>

      {/* 5. Ambient Glow behind icon */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#00D1FF]/5 rounded-full blur-[50px] group-hover:bg-[#00D1FF]/10 transition-all duration-500"></div>
    </div>
  );
};

export default Card;