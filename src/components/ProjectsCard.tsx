"use client";

import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

interface Props {
  id: string;
  title: string;
  des: string;
  src: string;
}

const ProjectsCard = ({ id, title, des, src }: Props) => {
  const [showDes, setShowDes] = useState(false);

  return (
    <div
      onClick={() => setShowDes(!showDes)}
      className="group w-full p-4 xl:px-8 h-auto xl:py-8 rounded-2xl border border-white/5 
                 bg-[#1E293B]/20 backdrop-blur-sm shadow-xl
                 hover:border-[#00D1FF]/30 hover:bg-[#1E293B]/40
                 transition-all duration-500 cursor-pointer relative overflow-hidden"
    >
      {/* High-tech ID Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 px-2 py-1 rounded border border-[#00D1FF]/20 uppercase tracking-tighter">
          PID-{id.slice(0, 4)}
        </span>
      </div>

      {/* Image Container */}
      <div className="w-full h-52 overflow-hidden rounded-xl border border-white/5 relative">
        <Image
          src={src}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-md group-hover:scale-110 duration-500 opacity-80 group-hover:opacity-100"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-[#0B1120]/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      {/* Title + Connectivity Nodes */}
      <div className="w-full mt-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#00D1FF] transition-colors">
            {title}
          </h3>

          <div className="flex gap-3">
            <a
              href="https://github.com/Georgedc04"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-lg w-9 h-9 rounded-lg bg-[#0B1120] border border-white/10 flex justify-center items-center text-gray-400 hover:text-[#00D1FF] hover:border-[#00D1FF]/40 duration-300"
            >
              <BsGithub />
            </a>

            <a
              href="https://www.youtube.com/@Dc_trade_fx"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-lg w-9 h-9 rounded-lg bg-[#0B1120] border border-white/10 flex justify-center items-center text-gray-400 hover:text-[#FF0000] hover:border-[#FF0000]/40 duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Description Panel */}
      <div className={`overflow-hidden transition-all duration-500 ${showDes ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
        <p className="text-sm font-normal text-gray-400 leading-6 border-l-2 border-[#00D1FF]/30 pl-4 italic">
          {des}
        </p>
      </div>

      {/* Interaction Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] font-mono text-gray-500 uppercase">
          {showDes ? "Close Intel" : "Tap for Intel"}
        </span>
        
        <Link
          href={`/projects/${id}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-[11px] text-[#00D1FF] font-bold uppercase tracking-widest rounded-lg hover:bg-[#00D1FF] hover:text-[#0B1120] transition-all duration-300 shadow-[0_0_15px_rgba(0,209,255,0.1)]"
        >
          View Case Study <FaExternalLinkAlt className="text-[9px]" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;