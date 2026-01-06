"use client";
import React from "react";
import Link from "next/link";
import { FaRegHandPaper, FaShieldAlt, FaCode, FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-neutral-300 pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-[#00D1FF]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 1. Tactical Heading */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter">
            IDENT_PROFILE<span className="text-[#00D1FF]">.</span>
          </h1>
          <div className="h-[2px] w-20 bg-[#00D1FF]"></div>
          <p className="mt-4 text-[10px] font-mono text-[#00D1FF] uppercase tracking-[4px] animate-pulse">
            // Authorized_Access_Only
          </p>
        </div>

        {/* 2. Profile Hexagon/Circle Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D1FF] to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/images/faicon.png"
              alt="George Kasmiro"
              className="relative w-44 h-44 rounded-full border-2 border-[#00D1FF]/30 object-cover bg-[#0F172A]"
            />
          </div>
        </motion.div>

        {/* 3. Bio Terminal */}
        <div className="bg-[#111827]/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-[10px] font-mono text-gray-500 ml-2">bio_manifest.exe</span>
          </div>

          <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
            Hi <span className="inline-block animate-wave text-[#00D1FF]"><FaRegHandPaper /></span>, 
            I’m <span className="text-white font-bold">George Kasmiro</span>, 
            a <span className="text-[#00D1FF]">Computer Science Engineer</span> specializing in 
            <span className="text-white"> Cybersecurity</span>. 
          </p>
          
          <p className="text-neutral-400 mb-8 leading-relaxed italic">
            "I architect secure digital environments and break complex algorithmic problems. 
            My mission is to bridge the gap between high-performance web development 
            and bulletproof security protocols."
          </p>

          {/* 4. Technical Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-white/5 border border-white/5 rounded-lg flex flex-col items-center text-center">
              <FaShieldAlt className="text-[#00D1FF] mb-2 text-xl" />
              <h3 className="text-xs font-mono uppercase text-white">Security</h3>
              <p className="text-[10px] text-gray-500">ZTNA, Pentesting, MFA</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-lg flex flex-col items-center text-center">
              <FaCode className="text-[#00D1FF] mb-2 text-xl" />
              <h3 className="text-xs font-mono uppercase text-white">Engineering</h3>
              <p className="text-[10px] text-gray-500">Next.js, Node, Python</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-lg flex flex-col items-center text-center">
              <FaTerminal className="text-[#00D1FF] mb-2 text-xl" />
              <h3 className="text-xs font-mono uppercase text-white">Logic</h3>
              <p className="text-[10px] text-gray-500">Algorithms, Secure Coding</p>
            </div>
          </div>
        </div>

        {/* 5. Tactical Call to Action */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group relative px-10 py-4 bg-transparent border border-[#00D1FF]/40 text-[#00D1FF] font-mono text-xs uppercase tracking-[3px] rounded-md overflow-hidden hover:bg-[#00D1FF]/10 transition-all duration-300"
          >
             <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00D1FF] -translate-y-full group-hover:animate-scan"></div>
            Establish_Connection
          </Link>
        </div>
      </div>
    </div>
  );
}