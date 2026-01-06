"use client";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CV = () => {
  const cvRef = useRef(null);

  const handleDownload = async () => {
    if (!cvRef.current) return;

    const element = cvRef.current;
    // Scale 3 ensures the PDF is ultra-crisp for recruiters
    const canvas = await html2canvas(element, { 
      scale: 3, 
      useCORS: true,
      backgroundColor: "#0B1120" // Matches your site theme
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("George_Kasmiro_CV.pdf");
  };

  return (
    <section className="w-full py-24 bg-[#0B1120] flex flex-col items-center">
      {/* 1. Technical Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          PERSONNEL_FILE<span className="text-[#00D1FF]">.</span>
        </h2>
        <div className="h-[2px] w-24 bg-[#00D1FF] mb-4"></div>
        <p className="text-[#00D1FF] font-mono text-xs uppercase tracking-[4px] animate-pulse">
          // Digital_Dossier_Verified
        </p>
      </div>

      {/* 2. Tactical Download Button */}
      <div className="flex flex-col items-center gap-2 mb-12">
        <button
          onClick={handleDownload}
          className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border border-[#00D1FF]/40 text-[#00D1FF] font-mono text-sm uppercase tracking-widest rounded-md overflow-hidden hover:bg-[#00D1FF]/10 transition-all duration-300"
        >
          {/* Scanning Line Animation */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00D1FF] -translate-y-full group-hover:animate-scan"></div>
          <FaDownload className="text-lg" /> 
          Export_to_PDF
        </button>
        <span className="text-[10px] text-gray-500 font-mono italic">Optimized for Desktop Resolution</span>
      </div>

      {/* 3. The CV Document (Wrapped in a themed container) */}
      <div className="w-full max-w-5xl px-4 overflow-x-auto pb-10 custom-scrollbar">
        <div
          ref={cvRef}
          className="min-w-[850px] mx-auto bg-[#0B1120] border border-white/10 rounded-lg shadow-2xl p-10 flex gap-10 text-white font-bodyFont"
        >
          {/* Left Sidebar (Technical Info) */}
          <div className="w-1/3 border-r border-white/5 pr-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-32 h-32 rounded-xl border-2 border-[#00D1FF] p-1 mb-4 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="George Kasmiro"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-tighter">GEORGE KASMIRO</h3>
              <p className="text-[#00D1FF] text-xs font-mono uppercase mt-1">Cyber_Sec_Eng</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[#00D1FF] text-[10px] font-mono uppercase tracking-widest mb-3 underline">Contact_Nodes</h4>
                <div className="text-xs space-y-2 text-gray-400 font-mono">
                  <p>EMAIL: gkasmiro@gmail.com</p>
                  <p>PHON: +91-9258885837</p>
                  <p>LOC: Dehradun, UK, India</p>
                </div>
              </div>
              <div>
                <h4 className="text-[#00D1FF] text-[10px] font-mono uppercase tracking-widest mb-3 underline">Core_Toolbox</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Python", "SQLi", "ZTNA", "Git"].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] rounded-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Operational History) */}
          <div className="w-2/3 flex flex-col gap-8">
            <section>
              <h4 className="text-sm font-mono text-[#00D1FF] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D1FF] rounded-full"></span> 01_Executive_Summary
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed italic">
                Third-year B.Tech Cybersecurity student specializing in cryptographic implementation, offensive security testing, and high-performance algorithm design.
              </p>
            </section>

            <section>
              <h4 className="text-sm font-mono text-[#00D1FF] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D1FF] rounded-full"></span> 02_Operational_Experience
              </h4>
              <div className="space-y-6">
                {[
                  { title: "SQL Injection Security Research", date: "Feb 2024", desc: "Developed secure PHP authentication frameworks using prepared statements to mitigate SQLi vectors." },
                  { title: "ZTNA Simulation (MFA)", date: "Apr 2024", desc: "Architected a Python-based Zero Trust Network Access simulation with integrated multi-factor protocols." },
                  { title: "Heuristic TSP Solver", date: "May 2024", desc: "Engineered Genetic and Ant Colony optimization algorithms for complex pathfinding logic." }
                ].map((item, idx) => (
                  <div key={idx} className="border-l border-white/10 pl-4">
                    <h5 className="text-sm font-bold">{item.title}</h5>
                    <p className="text-[10px] text-[#00D1FF] font-mono mb-2">{item.date}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="text-sm font-mono text-[#00D1FF] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D1FF] rounded-full"></span> 03_Education
              </h4>
              <p className="text-xs text-gray-300 font-bold">B.Tech in CS (Cybersecurity) — GEHU</p>
              <p className="text-[10px] text-gray-500">Expected Graduation: 2027</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;