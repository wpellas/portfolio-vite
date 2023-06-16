import TitleCard from "./components/TitleCard/TitleCard";
import ProjectList from "./components/ProjectList/ProjectList";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";
import "./components/Components.css";
import { useEffect } from "react";

function App() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //-------------------------STATE-------------------------//
  useEffect(() => {
    //---------------HIDDEN ELEMENTS OBSERVER---------------//
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        } else {
          entry.target.classList.remove("reveal");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".stealth");
    hiddenElements.forEach((ele) => observer.observe(ele));
    //------------------------------------------------------//
    let backToTop = document.getElementById("backToTop");

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        backToTop.classList.remove("opacity-0");
      } else {
        backToTop.classList.add("opacity-0");
      }
    }
  });
  //------------------------------------------------------//

  return (
    <main className="h-full lg:h-[100dvh] w-full flex flex-wrap justify-center overflow-auto snap-y snap-mandatory text-xs sm:text-sm lg:text-xl section-container bg-cover bg-gradient-to-b from-gray-900 to-slate-900 text-cyan-300">
      <TitleCard />
      <ProjectList />
      <Skills />
      <About />
      <Contact />
      <i
        id="backToTop"
        onClick={handleClick}
        className="fa-solid fa-chevron-up block lg:hidden opacity-0 fixed bottom-4 lg:bottom-16 right-4 lg:right-16 scale-125 p-3 lg:p-4 rounded-full text-amber-300 bg-cyan-700 hover:bg-cyan-500 hover:scale-150 transition-all duration-200 cursor-pointer"
      ></i>
    </main>
  );
}

export default App;
