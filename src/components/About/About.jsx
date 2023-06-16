import React from "react";
import { wrapper } from "../../constants";

const About = () => (
  <section>
    <div className={wrapper}>
      <p className="w-full text-2xl sm:text-5xl text-left">About me</p>
      <div className="container grid grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-2 justify-center sm:gap-12 mt-4">
        <div className="w-[100%]">
          <p className="text-sm sm:text-2xl lg:text-3xl text-left text-amber-300">
            Hello!
          </p>
          <p className="text-left text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            My name is William, I am 27 years old and I live in Västerhaninge,
            Stockholm together with my partner and our dog Loke.
            <br />
            If I were to describe myself, I would describe me as an
            easy-to-learn tech geek with a flaming passion for new knowledge and
            teachings. I spend my free time in nature reserves, in the kitchen
            cooking to my hearts content or at home in front of the PC or TV
            together with friends, partner and the dog.
            <br />
            My lifestyle preference is a calm leisure combined with a
            challenging and engaging business life.
          </p>
        </div>
        <div className="w-[100%]">
          <p className="text-sm sm:text-2xl lg:text-3xl text-left text-amber-300">
            Me as a Developer
          </p>
          <p className="text-left text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Prior to advancing in web development, I worked full-time as a
            photographer. The integration between IT and creativity fascinates
            me, regardless if it is analogue or digital. This is probably why I
            found photography interesting early on.
            <br />
            From a heavily IT influenced youth and a programming high school
            diploma, I diverged towards a more graphically oriented business
            life. After spending a few years as a photographer, I returned to my
            roots in the web development world. I turned towards the more modern
            libraries and today I strongly enjoy working with WordPress and
            Blade.
            <br />I enjoy making websites on a larger scale and never back down
            from a challenge. Despite my proficiency in PHP, I also love working
            with React. I'm a curious person that often seeks out new frameworks
            to try out and find new solutions and ideas.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
