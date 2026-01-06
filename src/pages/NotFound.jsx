"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiTerminal, FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B1120] text-neutral-300 px-4 overflow-hidden relative">
      
      {/* Background Glitch Text (Purely Visual) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[20vw] font-black leading-none">ERROR_404</h1>
      </div>

      {/* 1. Icon with Warning Pulse */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-[#00D1FF] blur-2xl opacity-20 animate-pulse"></div>
        <FiAlertTriangle className="text-8xl text-[#00D1FF] relative z-10" />
      </motion.div>

      {/* 2. Corrupted 404 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-8xl md:text-9xl font-black text-white mb-2 tracking-tighter"
      >
        404<span className="text-[#00D1FF] animate-pulse">_</span>
      </motion.h1>

      {/* 3. Tactical Status Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 mb-6 px-3 py-1 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded text-[#00D1FF] font-mono text-xs uppercase tracking-widest"
      >
        <FiTerminal /> 
        <span>Status: Resource_Not_Found</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-10 text-gray-400 max-w-sm font-bodyFont leading-relaxed"
      >
        The requested sector does not exist or has been moved to an encrypted directory. Access denied.
      </motion.p>

      {/* 4. Navigation Control */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/"
          className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border border-[#00D1FF]/40 text-[#00D1FF] font-mono text-sm uppercase tracking-widest rounded-md overflow-hidden hover:bg-[#00D1FF]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,209,255,0.1)]"
        >
          <FiHome className="group-hover:-translate-y-1 transition-transform" />
          Return_to_Core
        </Link>
      </motion.div>

      {/* 5. Decorative Scan Line */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <div className="w-full h-[2px] bg-[#00D1FF]/5 absolute animate-scan"></div>
      </div>
    </div>
  );
};

export default NotFound;