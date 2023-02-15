import React from "react";
import "../Components.css";

const ProjectCard = ({ id, projectName, type, imgUrl, projectUrl, faIcons }) => (
        <div className="stealth hiddenSlide project">
            <p className="text-xs md:text-base lg:text-xl xl:text-2xl pb-1 pt-3 text-amber-300 font-mono tracking-widest">{projectName.toUpperCase()}</p>
            <div key={id} className="w-28 sm:w-40 md:w-48 lg:w-64 xl:w-72 h-28 sm:h-40 md:h-48 lg:h-64 xl:h-72 border-2 border-solid border-cyan-300 rounded-lg shadow shadow-cyan-500 bg-cover hover:border-amber-300 hover:shadow-amber-500">
                <a href={projectUrl} target="_blank">
                    <div className="w-[100%] h-[100%] bg-cover rounded-md" style={{backgroundImage: `url(${imgUrl})`}}>
                        <div className="text-left absolute bottom-0 mb-1">
                            <div className="ml-1 mt-1 flex gap-1 text-amber-300 justify-items-center">
                                {
                                    faIcons.map((item) => (<i className={`${item} bg-slate-900 py-1 px-1 rounded-md`} key={item+id}></i>))
                                }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <p className="text-center text-[.45rem] md:text-xs py-0 sm:py-2 lg:py-3 text-amber-300 font-mono absolute w-[100%]">{type}</p>
        </div>
    )

export default ProjectCard;