import React from "react";
import "../Components.css";

const ProjectCard = ({
  id,
  projectName,
  type,
  imgUrl,
  projectUrl,
  faIcons,
}) => (
  <div className="stealth hiddenSlide project flex flex-wrap flex-col justify-center">
    <p className="text-center xl:text-left text-xs md:text-base lg:text-xl xl:text-2xl pb-1 pt-3 text-amber-300 font-mono tracking-widest uppercase">
      {projectName}
    </p>
    <a
      className="rounded-lg border-2 border-solid border-cyan-500 hover:border-amber-300 hover:scale-105 transition-all duration-200"
      key={id}
      href={projectUrl}
      target="_blank"
    >
      <img className="rounded-lg" src={imgUrl} alt={projectName} />
    </a>
    <div className="flex flex-wrap justify-between items-start mt-2">
      <div className="flex gap-1 text-amber-300 justify-items-center">
        {faIcons.map((item) => (
          <i className={`${item}`} key={item + id}></i>
        ))}
      </div>
      <p className="text-right text-xs text-amber-300 font-mono">{type}</p>
    </div>
  </div>
);

export default ProjectCard;
