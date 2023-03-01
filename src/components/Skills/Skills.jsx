import React from "react";
import "../Components.css";
import { skills } from "../../constants/index";

function Merits() {
    let key = 0;
    return (
        <section className="section w-[100%]">
            <p className="stealth hiddenFade text-2xl sm:text-5xl text-center mb-4"><i className="fa-solid fa-code text-amber-300"></i> Skills</p>

            <div className="stealth hiddenSlide text-left sm:text-center text-xs sm:text-lg lg:text-2xl">
                    <ul className="grid-cols-2 grid-rows-8 grid sm:grid-cols-3 sm:grid-rows-5">
                    {
                            skills.map((item) => (
                                    <li key={`skills_${key++}`} className="my-0 lg:my-1">{item.toLowerCase()}</li>
                                )
                            )  
                    }
                    </ul>
            </div>
        </section>
    )
}

export default Merits;