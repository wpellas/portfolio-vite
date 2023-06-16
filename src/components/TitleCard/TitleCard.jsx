import React from "react";
import avatar from "../../assets/avatar.webp";
import "../Components.css";
import { wrapper } from "../../constants";

const TitleCard = () => (
  <section>
    <div className={wrapper}>
      <div className="w-full">
        <img
          className="w-auto mx-auto rounded-full pb-3"
          width="288px"
          height="288px"
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className="text-center lg:text-right">
        <p className="text-4xl sm:text-8xl">William Pellas</p>
        <p className="text-center sm:text-right text-xl sm:text-3xl text-amber-300">
          Web Developer
        </p>
      </div>
    </div>
  </section>
);

export default TitleCard;
