import React from "react";
import avatar from "./avatar.webp"
import "../Components.css"

const TitleCard = () => (
    <section className="section">
        <div className="stealth hiddenFade relative">
            <img className="w-72 sm:w-auto max-w-sm mx-auto rounded-full pb-3" width="288px" height="288px" src={avatar} alt="avatar" />
            <p className="text-4xl sm:text-8xl">William Pellas</p>
            <p className="text-center sm:text-right text-xl sm:text-3xl text-amber-300">Frontend Developer</p>    
        </div> 
    </section>
)

export default TitleCard;