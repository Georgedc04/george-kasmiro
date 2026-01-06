"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Section One: Professional Operations */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] font-mono tracking-[4px]">2018 - PRESENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional History</h2>
        </div>
        
        <div className="mt-6 w-full border-l-[4px] border-white/10 flex flex-col gap-10 relative">
          <ResumeCard
            title="Strategic Market Analyst (Trader)"
            subTitle="Quantitative Personal Trading (2023 - Present)"
            result="Global"
            des="Utilizing Smart Money Concepts (SMC) and technical indicators to analyze market liquidity and execute risk-managed trade setups."
          />

          <ResumeCard
            title="Creative Design Consultant"
            subTitle="Freelance Identity Design (2021 - 2023)"
            result="Remote"
            des="Collaborated with various stakeholders to architect brand identities and marketing assets, focusing on visual communication and UX."
          />
          
          <ResumeCard
            title="Multimedia Lead"
            subTitle="Visual Production Studio (2018 - 2023)"
            result="SD / IN"
            des="Directed the creation of high-fidelity visual concepts for film and digital media, ensuring narrative impact through precise technical execution."
          />
        </div>
      </div>

      {/* Section Two: Specialized Training & Mentorship */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] font-mono tracking-[4px]">2014 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Mentorship & Development</h2>
        </div>

        <div className="mt-6 w-full border-l-[4px] border-white/10 flex flex-col gap-10 relative">
          <ResumeCard
            title="Graphic Design Mentor"
            subTitle="Visual Arts Academy (2021 - 2023)"
            result="India"
            des="Synthesized technical curricula for students, teaching advanced design toolsets and fostering creative problem-solving methodologies."
          />
          
          <ResumeCard
            title="Technical Design Assistant"
            subTitle="Startup Incubator Program (2020 - 2021)"
            result="Remote"
            des="Assisted engineering and design teams in prototyping brand identities and scaling visual systems for emerging startups."
          />
          
          <ResumeCard
            title="Art Workshop Lead"
            subTitle="Regional Community Center (2019 - 2020)"
            result="Sudan"
            des="Orchestrated community-driven workshops to bridge the digital divide, introducing participants to digital art and basic visual literacy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;