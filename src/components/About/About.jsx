import React from "react";

const About = () => (
    <section className="section px-4">
        <div className="stealth hiddenFade">
            <p className="text-2xl sm:text-5xl text-left">About me</p>
            <div className="container grid grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-2 justify-center sm:gap-12 mt-4">
                <div className="w-[100%]">
                    <p className="text-sm sm:text-2xl lg:text-3xl text-left text-amber-300">Hello!</p>
                        <p className="text-left text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            My name is William, I am 27 years old and I live in Västerhaninge, Stockholm together with my partner and our dog Loke.
                                <br />
                            If I were to describe myself, I would describe me as an easy-to-learn tech geek with a flaming passion for new knowledge and teachings.
                            I spend my free time in nature reserves, in the kitchen cooking to my hearts content or at home in front of the PC or TV together with friends, partner and the dog.
                                <br />
                            My lifestyle preference is a calm leisure combined with a challenging and engaging business life.
                        </p>
                </div>
                <div className="w-[100%]">
                <p className="text-sm sm:text-2xl lg:text-3xl text-left text-amber-300">Early business life</p>
                    <p className="text-left text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        Prior to advancing in web development, I worked full-time as a photographer.
                        The integration between IT and creativity fascinates me, regardless if it is analogue or digital. This is probably why I found photography interesting early on.
                            <br />
                        From a heavily IT influenced youth and a programming high school diploma, I diverged towards a more graphically oriented business life. I picked up photography, learnt it in a few months and got hired as a school photographer where my career kicked off.  
                            <br />
                        Though I had studied a fair bit of web development prior to it, it was not until a few years of working as a photographer that I realised my desire to keep photography as a hobby. I wanted to focus on web development as my working life and leave the photography branch behind and retain my passion for it on a hobby level.
                    </p>
                </div>
            </div>   
        </div>
    </section>
)


export default About;