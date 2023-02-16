import TitleCard from "./components/TitleCard/TitleCard";
import ProjectList from "./components/ProjectList/ProjectList";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Smartbrain from "./assets/smartbrain.webp";
import PokeDB from "./assets/pokedb.webp";
import Robofriends from "./assets/robofriends.webp";
import Fikapaus from "./assets/fikapaus.webp";
import Blockchain from "./assets/blockchain.webp";
import "./App.css"
import "./components/Components.css"
import { useEffect } from "react"


function App() {
//-------------------------STATE-------------------------//
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
    hiddenElements.forEach((ele) => observer.observe(ele));
    //------------------------------------------------------//
  })
//------------------------------------------------------//

//--------------------PROJECTS CARDS--------------------//
  const projects = [
    {
        id: 1,
        name: "Smartbrain",
        type: "React, Node, Postgres, REST",
        imgUrl: Smartbrain,
        projectUrl: "https://williampellas.com/smartbrain/",
        faIcons: ["fa-brands fa-react", "fa-brands fa-node-js", "fa-solid fa-database"]
    },
    {
      id: 2,
      name: "Fikapaus",
      type: "React, Tailwind, TypeScript",
      imgUrl: Fikapaus,
      projectUrl: "https://williampellas.com/fikapaus/",
      faIcons: ["fa-brands fa-react", "fa-solid fa-file-code"]
    },
    {
        id: 3,
        name: "Blockchain",
        type: "React, Tailwind",
        imgUrl: Blockchain,
        projectUrl: "https://williampellas.com/blockchain/",
        faIcons: ["fa-brands fa-react", "fa-solid fa-file-code"]
        
    },
    {
        id: 4,
        name: "Pokemon DB",
        type: "React, API",
        imgUrl: PokeDB,
        projectUrl: "https://williampellas.com/pokedb/",
        faIcons: ["fa-brands fa-react"]
    },
    {
        id: 5,
        name: "Robofriends",
        type: "React, API",
        imgUrl: Robofriends,
        projectUrl: "https://williampellas.com/robofriends/",
        faIcons: ["fa-brands fa-react"]
    }
];
//------------------------------------------------------//

//------------------SOCIAL MEDIA ICONS------------------//
  const icons = [
    {
        name: "email",
        styles: "fa-solid fa-envelope",
        url: "mailto:william.pellas@hotmail.com",
        id: 1
    },{
        name: "github",
        styles: "fa-brands fa-github-alt",
        url: "https://github.com/wpellas",
        id: 2
    },{
        name: "linkedin",
        styles: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/williampellas/",
        id: 3
    },{
        name: "instagram",
        styles: "fa-brands fa-instagram",
        url: "https://www.instagram.com/william_pellas/",
        id: 4
    },{
        name: "curriculum",
        styles: "fa-regular fa-file-pdf",
        url: "/extra/William_Pellas_CV+PB_2023.pdf",
        id: 5
    },{
        name: "facebook",
        styles: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/wille.pellas",
        id: 6
    },
]
//------------------------------------------------------//

  return (
    <main className="text-xs sm:text-sm lg:text-xl section-container bg-cover bg-gradient-to-b from-gray-900 to-slate-900 text-cyan-300">
        <TitleCard />
        <ProjectList projects={projects}/>
        <Skills />
        <About />
        <Contact icons={icons}/>
    </main>
  )
}

export default App
