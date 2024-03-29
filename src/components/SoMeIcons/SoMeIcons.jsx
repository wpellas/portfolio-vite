import React from "react";
import { icons } from "../../constants/index";

const SoMeIcons = () => (
    <div className="stealth hiddenFade w-[100%]">
        <ul className="flex flex-wrap lg:flex-nowrap justify-center my-10  gap-8">
            {
                icons.map((item) => (
                        <li key={item.id}>
                            <a
                            name={item.name} 
                            className={`${item.styles} text-amber-300 text-lg sm:text-3xl border border-solid border-cyan-300 rounded-full w-10 h-10 sm:w-16 sm:h-16 flex flex-wrap items-center justify-center hover:transition-all hover:text-cyan-300 hover:border-amber-300 hover:scale-105`}
                            href={item.url} 
                            target="_blank">
                            </a>
                        </li>
                    )
                )
            }
        </ul>
    </div>
)

export default SoMeIcons;