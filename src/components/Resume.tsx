"use client";
import React, { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  // Use a string state for better management
  const [activeTab, setActiveTab] = useState("education");

  const tabData = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Professional Skills" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-white/10">
      <FadeIn>
        <div className="flex justify-center items-center text-center mb-10">
          <Title title="SECURE_DOSSIER" des="Operational History" />
        </div>

        {/* Tactical Tabs */}
        <div className="mb-14">
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {tabData.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer font-mono text-xs uppercase tracking-[2px] py-4 px-4 border-2 transition-all duration-300 text-center rounded-md ${
                  activeTab === tab.id
                    ? "border-[#00D1FF] bg-[#00D1FF]/10 text-white shadow-[0_0_20px_rgba(0,209,255,0.1)]"
                    : "border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Render */}
        <div className="mt-8">
          {activeTab === "education" && <Education />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "achievements" && <Achievement />}
        </div>
      </FadeIn>
    </section>
  );
};

export default Resume;