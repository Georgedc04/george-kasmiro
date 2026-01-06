"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] font-mono tracking-[4px]">2018 - PRESENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Path</h2>
        </div>
        <div className="mt-6 w-full border-l-[4px] border-white/10 flex flex-col gap-10">
          <ResumeCard
            title="BTech in CS (Cybersecurity)"
            subTitle="Graphic Era Hill University (2023 - 2027)"
            result="GPA: 8.5/10"
            des="Core focus on network defense, cryptographic analysis, and building secure software architectures."
          />
          <ResumeCard
            title="Advanced IT & Security"
            subTitle="Cyber Academy (2022 - 2023)"
            result="4.75/5"
            des="Foundational training in system administration and digital forensics."
          />
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-sm text-[#00D1FF] font-mono tracking-[4px]">2023 - PRESENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Deployment</h2>
        </div>
        <div className="mt-6 w-full border-l-[4px] border-white/10 flex flex-col gap-10">
          <ResumeCard
            title="Cybersecurity Analyst Intern"
            subTitle="Tech Solutions (2024 - Present)"
            result="Remote"
            des="Vulnerability assessment, threat modeling, and implementing MFA solutions for enterprise web apps."
          />
          <ResumeCard
            title="Junior Developer"
            subTitle="Freelance Dev (2023 - 2024)"
            result="International"
            des="Built secure APIs and optimized frontend performance using Next.js and secure coding patterns."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;