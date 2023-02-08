import TitleCard from "./components/TitleCard/TitleCard";
import ProjectList from "./components/ProjectList/ProjectList";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css"
import "./components/Components.css"
import { useEffect } from "react"


function App() {
  useEffect(() => {
    //---------------HIDDEN ELEMENTS OBSERVER---------------//
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry)=> {
              if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
              } else {
                entry.target.classList.remove("reveal");
              }
          });
      });
    const hiddenElements = document.querySelectorAll(".stealth");
    hiddenElements.forEach((el) => observer.observe(el));
    //------------------------------------------------------//
  })
  return (
    <div className="App text-xs sm:text-sm lg:text-xl section-container bg-cover bg-gradient-to-b from-gray-900 to-slate-900 text-cyan-300">
        <TitleCard />
        <ProjectList />
        <Skills />
        <About />
        <Contact />
    </div>
  )
}

export default App
