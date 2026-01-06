import Title from "./Title";

import { FadeIn } from "./FadeIn";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Trading Dashboard"
            des="A real-time trading dashboard providing market insights, trends, and analytics."
            src="/assets/projectOne.png" id={""}          />

          <ProjectsCard
            title="Portfolio Website"
            des="A personal website showcasing projects, skills, and experience in design and development."
            src="/assets/pw.png" id={""}          />

          <ProjectsCard
            title="Cryptocurrency Tracker"
            des="An app to monitor cryptocurrency prices, news, and trading opportunities."
            src="/assets/project4.png" id={""}          />

          <ProjectsCard
            title="Investment Planner"
            des="Tool to help users plan and track investments for better financial decisions."
            src="/assets/ip.png" id={""}          />

          <ProjectsCard
            title="Market Analysis Tool"
            des="An advanced tool offering technical indicators and charts for informed trading."
            src="/assets/mat.png" id={""}          />

          <ProjectsCard
            title="Automated Trading Bot"
            des="A bot that executes trades automatically based on predefined strategies."
            src="/assets/at.png" id={""}          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
