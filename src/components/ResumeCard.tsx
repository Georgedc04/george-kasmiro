"use client";
import React from "react";

// 1. Define the shape of your props
interface ResumeCardProps {
  title: string;
  subTitle: string;
  result: string;
  des: string;
}

// 2. Apply the interface to the component
const ResumeCard = ({ title, subTitle, result, des }: ResumeCardProps) => {
  return (
    <div className="w-full group flex">
      {/* Timeline Visuals */}
      <div className="w-10 h-[6px] mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#0B1120] border-2 border-white/20 group-hover:border-[#00D1FF] transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-[#00D1FF] duration-300"></span>
        </span>
      </div>

      {/* The Data Card */}
      <div className="w-full bg-[#111827]/40 border border-white/5 hover:border-[#00D1FF]/30 duration-300 rounded-xl p-6 lgl:p-10 flex flex-col justify-center gap-6 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 font-mono text-gray-500 uppercase tracking-widest">
              {subTitle}
            </p>
          </div>
          <div className="flex justify-center items-center px-4 py-2 bg-[#00D1FF]/10 border border-[#00D1FF]/30 rounded-lg">
            <p className="text-[#00D1FF] text-xs font-mono font-bold uppercase tracking-tighter">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;