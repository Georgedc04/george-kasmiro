"use client";

import { useParams, useRouter } from "next/navigation";
import { X, ShieldCheck, Cpu, Globe } from "lucide-react";
import Image from "next/image";

interface ProjectData {
  id: string;
  title: string;
  src: string;
  tech?: string[]; // Optional: added for professional detail
}

const projects: ProjectData[] = [
  { id: "trading-dashboard", title: "Trading Dashboard", src: "/images/projects/projectOne.jpg", tech: ["React", "Tailwind", "Firebase"] },
  { id: "portfolio-website", title: "Portfolio Website", src: "/images/projects/pw.jpg", tech: ["Next.js", "TypeScript"] },
  { id: "cryptocurrency-tracker", title: "Cryptocurrency Tracker", src: "/images/projects/project4.jpg", tech: ["API", "Webhooks"] },
  { id: "investment-planner", title: "Investment Planner", src: "/images/projects/ip.jpg", tech: ["Node.js", "MongoDB"] },
  { id: "market-analysis-tool", title: "Market Analysis Tool", src: "/images/projects/mat.jpg", tech: ["Python", "Flask"] },
  { id: "automated-trading-bot", title: "Automated Trading Bot", src: "/images/projects/at.jpg", tech: ["C++", "Algorithm"] },
];

export default function ProjectDetails() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0B1120] text-gray-500 font-mono">
        <X className="w-12 h-12 mb-4 text-red-500 opacity-50" />
        <p className="tracking-widest uppercase">Error: Resource Not Found</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0B1120]/95 backdrop-blur-md flex flex-col items-center justify-center z-[100] p-4">
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-white/5 bg-[#0B1120]/50">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#00D1FF] w-5 h-5" />
          <div className="flex flex-col">
            <h1 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider">
              {project.title}
            </h1>
            <span className="text-[10px] font-mono text-[#00D1FF]/60 uppercase">
              Project_File: {project.id}.sys
            </span>
          </div>
        </div>

        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 p-2 px-4 rounded-full bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
        >
          <span className="text-[10px] font-mono text-gray-400 group-hover:text-red-400 uppercase tracking-widest hidden md:block">
            Terminate Session
          </span>
          <X className="w-5 h-5 text-white group-hover:text-red-400 transition-colors" />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div className="relative group mt-12">
        {/* Decorative corner borders */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#00D1FF] z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#00D1FF] z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative overflow-hidden rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-black">
          <Image
            src={project.src}
            alt={project.title}
            width={1200}
            height={800}
            className="max-h-[70vh] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          {/* Hacking "Scanner" Line Animation */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00D1FF] shadow-[0_0_15px_#00D1FF] opacity-20 group-hover:animate-scan pointer-events-none"></div>
        </div>
      </div>

      {/* Project Metadata Footer */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-10">
        <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
          <Cpu className="w-4 h-4 text-[#00D1FF]" />
          <span className="uppercase tracking-tighter">Status: Deployed</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
          <Globe className="w-4 h-4 text-[#00D1FF]" />
          <span className="uppercase tracking-tighter">Encryption: AES-256</span>
        </div>
        {project.tech && (
           <div className="flex gap-2">
             {project.tech.map((t) => (
               <span key={t} className="px-2 py-1 bg-[#00D1FF]/10 text-[#00D1FF] text-[10px] rounded border border-[#00D1FF]/20">
                 {t}
               </span>
             ))}
           </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}