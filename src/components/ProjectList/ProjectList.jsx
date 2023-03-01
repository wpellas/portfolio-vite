import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../constants/index";
import "../Components.css";

const ProjectList = () => (
    <section className="section">
        <p className="stealth hiddenFade text-xl sm:text-2xl md:text-3xl lg:text-5xl text-left">Projects</p>
        <p className="stealth hiddenFade text-left text-xs sm:text-sm md:text-xl lg:text-2xl mt-1 text-amber-300">Check out my <a className="underline hover:text-cyan-300" href="https://github.com/wpellas" target="_blank">github</a>.</p>
        <div className="projects justify-items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
        {
            projects.map((project) => (
                <ProjectCard 
                    key={project.id}
                    projectName={project.name}
                    type={project.type}
                    imgUrl={project.imgUrl}
                    projectUrl={project.projectUrl}
                    faIcons={project.faIcons}
                /> 
                )
            )
        }
        </div>
    </section>
);

export default ProjectList;