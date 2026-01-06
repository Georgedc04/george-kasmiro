"use client";

import React from "react";
import Title from "../components/Title";
import ProjectsCard from "../components/ProjectsCard";
import { FadeIn } from "../components/FadeIn";

// Remove the "interface ProjectData" block entirely if using .jsx

const projects = [
  {
    id: "trading-dashboard",
    title: "Trading Dashboard",
    des: "Real-time market telemetry and asset analysis portal.",
    src: "/images/projects/projectOne.jpg",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    des: "Cyber Sentinel themed architecture for professional identity.",
    src: "/images/projects/pw.jpg",
  },
  {
    id: "cryptocurrency-tracker",
    title: "Crypto Tracker",
    des: "Secure node monitoring for decentralized financial assets.",
    src: "/images/projects/project4.jpg",
  },
  {
    id: "investment-planner",
    title: "Investment Planner",
    des: "Algorithmic resource allocation and risk assessment tool.",
    src: "/images/projects/ip.jpg",
  },
  {
    id: "market-analysis-tool",
    title: "Market Analysis",
    des: "Data-driven insights using secure telemetry protocols.",
    src: "/images/projects/mat.jpg",
  },
  {
    id: "automated-trading-bot",
    title: "Automated Bot",
    des: "Automated execution engine with low-latency link-state.",
    src: "/images/projects/at.jpg",
  },
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="w-full py-20 bg-[#0B1120] border-b border-white/5"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="OPERATIONS" des="Project Portfolio" />
        </div>
        
        {/* Professional Responsive Grid */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8 xl:gap-12">
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              id={project.id}
              title={project.title}
              des={project.des}
              src={project.src}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;