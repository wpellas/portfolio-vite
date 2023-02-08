import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Smartbrain from "../../assets/smartbrain.webp";
import PokeDB from "../../assets/pokedb.webp";
import Robofriends from "../../assets/robofriends.webp";
import Minecraft from "../../assets/minecraft.webp";
import Calculator from "../../assets/calculator.webp";
import "../Components.css";



function ProjectList() {
    const projects = [
        {
            id: 1,
            name: "Smartbrain",
            type: "React, Node, Postgres, REST",
            imgUrl: Smartbrain,
            projectUrl: "https://williampellas.com/smartbrain/",
            faIcons: ["fa-brands fa-react", "fa-brands fa-node-js", "fa-solid fa-database"]
            
        },
        {
            id: 2,
            name: "Pokemon DB",
            type: "React, API",
            imgUrl: PokeDB,
            projectUrl: "https://williampellas.com/pokedb/",
            faIcons: ["fa-brands fa-react"]
        },
        {
            id: 3,
            name: "Robofriends",
            type: "React, API",
            imgUrl: Robofriends,
            projectUrl: "https://williampellas.com/robofriends/",
            faIcons: ["fa-brands fa-react"]
        },
        {
            id: 4,
            name: "Minecraft HUD",
            type: "Vanilla HTML/CSS, JavaScript",
            imgUrl: Minecraft,
            projectUrl: "https://williampellas.com/minecraft/",
            faIcons: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-square-js"]
        },
        {
            id: 5,
            name: "Calculator",
            type: "Vanilla HTML/CSS, JavaScript",
            imgUrl: Calculator,
            projectUrl: "https://williampellas.com/calculator/",
            faIcons: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-square-js"]
        }
    ];

    return (
        <div className="section">
            <p className="stealth hiddenFade text-xl sm:text-2xl md:text-3xl lg:text-5xl text-left">Projects</p>
            <p className="stealth hiddenFade text-left text-xs sm:text-sm md:text-xl lg:text-2xl mt-1 text-amber-300">Check out my <a className="underline hover:text-cyan-300" href="https://github.com/wpellas" target="_blank">github</a>.</p>
            <div className="projects justify-items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
            {
                projects.map((project) => {
                    return (
                    <ProjectCard 
                        key={project.id}
                        name={project.name}
                        type={project.type}
                        imgUrl={project.imgUrl}
                        projectUrl={project.projectUrl}
                        faIcons={project.faIcons}
                    /> 
                    )
                })
            }
            </div>
        </div>
    );
}

{/* <div className="projects">
            {
                projects.map((project) => {
                    return (
                        <Card
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        type={project.type}
                        
                        />
                    )
                })
            }
        </div> */}
export default ProjectList;