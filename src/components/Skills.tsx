"use client";
import React from "react";
import { motion } from "framer-motion";

// Reusable SkillBar Component for cleaner code
interface SkillBarProps {
  name: string;
  percentage: string;
  delay: number;
}

const SkillBar = ({ name, percentage, delay }: SkillBarProps) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-mono tracking-widest text-gray-300">
      {name}
    </p>
    <span className="w-full h-2 bg-black/40 rounded-md inline-flex mt-2 border border-white/5">
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: delay, ease: "circOut" }}
        style={{ width: percentage }}
        className="h-full bg-gradient-to-r from-[#00D1FF] to-blue-600 rounded-md relative shadow-[0_0_10px_rgba(0,209,255,0.3)]"
      >
        <span className="absolute -top-7 right-0 font-mono text-xs text-[#00D1FF]">
          {percentage}
        </span>
      </motion.span>
    </span>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* 1. Cybersecurity & Offensive Ops */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] tracking-[4px] uppercase font-mono">
            Security_Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Offensive Skillset</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar name="Penetration Testing" percentage="85%" delay={0.1} />
          <SkillBar name="Vulnerability Assessment" percentage="90%" delay={0.2} />
          <SkillBar name="Network Security (ZTNA)" percentage="75%" delay={0.3} />
          <SkillBar name="Metasploit / Wireshark" percentage="80%" delay={0.4} />
          <SkillBar name="Linux (Kali/Parrot)" percentage="95%" delay={0.5} />
        </div>
      </div>

      {/* 2. Full-Stack Development */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] tracking-[4px] uppercase font-mono">
            Dev_Environment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineering Skillset</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar name="Next.js / React" percentage="100%" delay={0.1} />
          <SkillBar name="TypeScript" percentage="95%" delay={0.2} />
          <SkillBar name="Python (Automation)" percentage="80%" delay={0.3} />
          <SkillBar name="Node.js (Backend)" percentage="75%" delay={0.4} />
          <SkillBar name="Tailwind CSS" percentage="90%" delay={0.5} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;