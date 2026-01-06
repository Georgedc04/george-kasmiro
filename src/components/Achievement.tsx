"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Column One: Specialized Media Operations */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] font-mono tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Creative Intelligence</h2>
        </div>
        
        <div className="mt-6 w-full border-l-[4px] border-white/10 flex flex-col gap-10 relative">
          <ResumeCard
            title="Multimedia Lead"
            subTitle="Video, Image & Audio Synthesis (2018 - 2024)"
            result="INTL"
            des="Engineered high-impact visual narratives and audio-visual assets for cross-platform media projects, focusing on high-fidelity creative output."
          />
          <ResumeCard
            title="Post-Production Specialist"
            subTitle="Independent Digital Projects (2019 - 2022)"
            result="Remote"
            des="Managed end-to-end video production pipelines, implementing advanced color grading, sound design, and motion graphics."
          />
          <ResumeCard
            title="Operational Media Assistant"
            subTitle="Creative Studios (2020 - 2023)"
            result="Sudan"
            des="Optimized media workflows by standardizing editing formats and enhancing content delivery speed for fast-paced studio environments."
          />
        </div>
      </div>

      {/* Column Two: Cybersecurity Research */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] font-mono tracking-[4px]">2023 - PRESENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Training</h2>
        </div>

        <div className="mt-6 w-full border-l-[4px] border-white/10 flex flex-col gap-10 relative">
          <ResumeCard
            title="Cybersecurity Scholar"
            subTitle="Graphic Era Hill University (2023 - Present)"
            result="9.0/10"
            des="Conducting research in ethical hacking vectors, secure network topology, and offensive security methodologies within the B.Tech framework."
          />
          <ResumeCard
            title="Information Security Intern"
            subTitle="Digital Defense Platforms (2023 - Present)"
            result="Active"
            des="Executing vulnerability scans and threat assessments to harden system architectures against unauthorized data exfiltration."
          />
          <ResumeCard
            title="Cisco Network Strategist"
            subTitle="Infrastructure Projects (2024 - 2025)"
            result="Cert"
            des="Designed and deployed secure Cisco-based network infrastructures, ensuring 99.9% uptime and encrypted node-to-node communication."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;