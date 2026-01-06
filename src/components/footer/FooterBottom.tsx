"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#0B1120] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-[#00D1FF]/20 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* Brand & Status */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-2 group">
            <div className="p-2 bg-[#00D1FF]/10 rounded border border-[#00D1FF]/20 group-hover:border-[#00D1FF]/50 transition-all">
              <FaShieldAlt className="text-[#00D1FF] text-lg" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tighter uppercase">
              Kasmiro<span className="text-[#00D1FF]">.</span>
            </h2>
          </div>
          <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">
            // Secure Systems Engineer
          </p>
        </div>

        {/* Social Nodes */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E293B]/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D1FF] hover:border-[#00D1FF]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-tighter">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Copyright & Timestamp */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-[10px] font-mono text-[#00D1FF]/40 uppercase tracking-widest">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
      
      {/* Bottom Legal bar */}
      <div className="mt-10 pt-6 border-t border-white/[0.02] text-center">
        <p className="text-[9px] text-gray-700 uppercase tracking-[0.5em] font-mono">
          Encryption Level: AES-256-GCM // Deployment: v2.0.4
        </p>
      </div>
    </footer>
  );
};

export default Footer;