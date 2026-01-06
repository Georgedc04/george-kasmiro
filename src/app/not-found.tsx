"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiTerminal, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#0B1120] text-neutral-300 px-4 overflow-hidden relative">
      
      {/* Background Glitch Decor */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[25vw] font-black leading-none">404</h1>
      </div>

      {/* 1. Tactical Warning Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-[#00D1FF] blur-3xl opacity-20 animate-pulse"></div>
        <FiAlertTriangle className="text-8xl text-[#00D1FF] relative z-10" />
      </motion.div>

      {/* 2. Error Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-8xl md:text-9xl font-black text-white mb-2 tracking-tighter"
      >
        404<span className="text-[#00D1FF] animate-pulse">_</span>
      </motion.h1>

      {/* 3. Status Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full text-[#00D1FF] font-mono text-[10px] uppercase tracking-[0.2em]"
      >
        <FiTerminal className="animate-pulse" /> 
        <span>System_Error: Sector_Not_Found</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-10 text-gray-400 max-w-sm font-bodyFont leading-relaxed text-sm"
      >
        The requested data packet does not exist or has been relocated to an encrypted directory. Access is currently restricted.
      </motion.p>

      {/* 4. Action Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/"
          className="group relative flex items-center gap-3 px-10 py-4 bg-transparent border border-[#00D1FF]/40 text-[#00D1FF] font-mono text-xs uppercase tracking-widest rounded-md overflow-hidden hover:bg-[#00D1FF]/10 transition-all duration-300"
        >
          {/* Scan Line Effect */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00D1FF] -translate-y-full group-hover:animate-scan"></div>
          
          <FiHome className="text-lg group-hover:-translate-y-1 transition-transform" />
          Return_to_Core
        </Link>
      </motion.div>
    </div>
  );
}