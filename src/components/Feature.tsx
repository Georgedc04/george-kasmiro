"use client";
import React from "react";
import { SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { FaCode, FaDumbbell, FaNetworkWired, FaUserSecret } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-24 bg-[#0B1120] border-b border-white/5 relative overflow-hidden"
    >
      {/* Visual Background Decals */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-bold text-gray-50 absolute -bottom-20 -left-10">CORE</h1>
      </div>

      <FadeIn className="max-w-7xl mx-auto px-6 lgl:px-10">
        <div className="flex flex-col gap-4">
          <Title title="SPECIALIZATION" des="Operational Capabilities" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 mt-10">
          <Card
            title="Strategic Infrastructure"
            des="Designing robust business frameworks through rigorous market analysis and technical scalability audits."
            icon={<MdBusinessCenter />}
          />
          <Card
            title="Offensive Security"
            des="Deploying advanced penetration testing protocols to identify, exploit, and remediate critical system vulnerabilities."
            icon={<FaUserSecret />}
          />
          <Card
            title="Full Stack Architecture"
            des="Engineering end-to-end digital environments with high-performance React frontends and secure Node.js backends."
            icon={<FaCode />}
          />
          <Card
            title="Physical Performance"
            des="Applying biometric data and strength protocols to optimize physical endurance and cognitive longevity."
            icon={<FaDumbbell />}
          />
          <Card
            title="Visual Engineering"
            des="Developing immersive brand identities and motion graphics with a focus on cinematic storytelling and UX."
            icon={<SiAntdesign />}
          />
          <Card
            title="Network Topology"
            des="Managing encrypted node communications and architecting secure server-side infrastructures for global data flow."
            icon={<FaNetworkWired />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;