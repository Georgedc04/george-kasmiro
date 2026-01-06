"use client";
import Title from "../components/Title";
import React from "react";
import { FadeIn } from "../components/FadeIn";
import { FiShield, FiFileText, FiLink, FiAlertCircle, FiLock } from "react-icons/fi";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-neutral-300 pt-32 pb-20 px-6">
      <FadeIn className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
        {/* 1. Use the component with props, don't wrap it in an h1 */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <FiShield className="text-[#00D1FF] text-3xl md:text-4xl" />
          <Title title="LEGAL_PROTOCOL" des="Terms of Service" />
        </div>

        {/* 2. Remove the manual bar if your Title component already has one, 
              otherwise keep this one for extra styling */}
        <div className="h-[2px] w-24 bg-[#00D1FF] mx-auto -mt-6"></div>

        <p className="mt-6 text-gray-400 font-bodyFont leading-relaxed max-w-2xl mx-auto">
          Legal protocols governing the access and utilization of the George Kasmiro Portfolio Database. 
          By accessing this site, you acknowledge the following deployment terms.
        </p>
      </div>

        {/* Content Body */}
        <div className="space-y-8 bg-[#111827]/50 border border-white/5 p-8 rounded-2xl backdrop-blur-sm">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00D1FF] font-mono text-sm">01.</span> 
              <FiFileText className="text-[#00D1FF]/60" /> 
              Personal Usage Protocol
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 ml-8">
              This system and its contents are strictly for personal viewing, educational research, and professional reference. 
              Redistribution, commercial exploitation, or unauthorized data scraping is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00D1FF] font-mono text-sm">02.</span> 
              <FiLink className="text-[#00D1FF]/60" /> 
              External Node Redirection
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 ml-8">
              External links may redirect you to third-party environments. We do not maintain security control 
              over external nodes and are not responsible for their data privacy protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00D1FF] font-mono text-sm">03.</span> 
              <FiAlertCircle className="text-[#00D1FF]/60" /> 
              Data Integrity Disclaimer
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 ml-8">
              While every effort is made to maintain 99.9% information accuracy, system data is provided "as-is." 
              We do not warrant the absolute completeness or real-time correctness of all project descriptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00D1FF] font-mono text-sm">04.</span> 
              <FiLock className="text-[#00D1FF]/60" /> 
              Intellectual Property Rights
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 ml-8">
              All source code snippets, visual assets, and UI architectures are the proprietary property of 
              George Kasmiro. Unauthorized replication of site logic is considered a breach of protocol.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00D1FF] font-mono text-sm">05.</span> 
              <FiShield className="text-[#00D1FF]/60" /> 
              Policy Modifications
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 ml-8">
              Protocol updates may occur without prior notice. Continued system access constitutes 
              acceptance of the most recent version of these terms.
            </p>
          </section>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            ID: GK-PROTOCOL-{new Date().getFullYear()} // System_Time: {new Date().toLocaleDateString()}
          </p>
          <p className="text-[10px] text-gray-600 mt-2">
            © {new Date().getFullYear()} George Kasmiro. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Terms;