import React from "react";
import "../Components.css";
import { skills, wrapper } from "../../constants/index";

function Merits() {
  let key = 0;
  return (
    <section className="section w-[100%]">
      <div className={wrapper}>
        <p className="stealth hiddenFade text-2xl sm:text-5xl text-center mb-4 w-full">
          <i className="fa-solid fa-code text-amber-300"></i> Skills
        </p>

        <div className="stealth hiddenSlide text-center text-base lg:text-2xl">
          <ul className="gap-x-4 gap-y-1 grid lg:grid-cols-3 lg:grid-rows-5">
            {skills.map((item) => (
              <li key={`skills_${key++}`}>
                {item.toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Merits;
