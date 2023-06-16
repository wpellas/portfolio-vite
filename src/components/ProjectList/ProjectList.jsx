import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects, wrapper } from "../../constants/index";
import "../Components.css";

const ProjectList = () => (
  <section>
    <div className={wrapper}>
      <p className="stealth hiddenFade w-full text-xl sm:text-2xl md:text-3xl lg:text-5xl text-left">
        Projects
      </p>
      <p className="stealth hiddenFade w-full text-left text-xs sm:text-sm md:text-xl lg:text-2xl mt-1 text-amber-300">
        Check out my{" "}
        <a
          className="underline hover:text-cyan-300"
          href="https://github.com/wpellas"
          target="_blank"
        >
          github
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-4 lg:gap-6 xl:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            projectName={project.name}
            type={project.type}
            imgUrl={project.imgUrl}
            projectUrl={project.projectUrl}
            faIcons={project.faIcons}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectList;
