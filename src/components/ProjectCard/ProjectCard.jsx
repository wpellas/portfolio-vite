import React from "react";
import "../Components.css";

function ProjectCard({ id, name, type, imgUrl, projectUrl, faIcons }) {
    return (
        <div className="stealth hiddenSlide project">
            <p className="text-xs md:text-base lg:text-xl xl:text-2xl pb-1 pt-3 text-amber-300 font-mono tracking-widest">{name.toUpperCase()}</p>
            <div key={id} className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72 h-32 sm:h-40 md:h-48 lg:h-64 xl:h-72 border-2 border-solid border-cyan-300 rounded-lg shadow shadow-cyan-500 bg-cover hover:border-amber-300 hover:shadow-amber-500">
                <a href={projectUrl} target="_blank">
                    <div className="w-[100%] h-[100%] bg-center rounded-md" style={{backgroundImage: `url(${imgUrl})`}}>
                        {/* <div className="bg-slate-900 border-b-2 border-cyan-300 rounded-t-lg">
                            <p className="text-xs md:text-base lg:text-xl xl:text-2xl py-3 text-amber-300 font-mono tracking-widest">{name.toUpperCase()}</p>
                        </div> */}
                        {/* <div className="types w-[100%] bottom-0 absolute bg-gray-900 border-t-2 border-cyan-300 text-center rounded-b-lg">
                            <p className="text-[.5rem] sm:text-xs py-1 sm:py-2 lg:py-3 text-amber-300 font-mono">{type}</p>
                        </div> */}
                        <div className="text-left absolute bottom-0 mb-1">
                            <div className="ml-1 mt-1 flex gap-1 text-amber-300 justify-items-center">
                                {
                                    faIcons.map((item) => {
                                        return (
                                            <i 
                                            className={`${item} bg-slate-900 py-1 px-1 rounded-md`}
                                            key={item+id}
                                            ></i>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <p className="text-center text-[.45rem] md:text-xs py-0 sm:py-2 lg:py-3 text-amber-300 font-mono absolute w-[100%]">{type}</p>
        </div>
    )
}
export default ProjectCard;