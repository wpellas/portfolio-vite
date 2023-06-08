import Smartbrain from "../assets/smartbrain.webp";
import AllAboutDogs from "../assets/allaboutdogs.webp";
import Fikapaus from "../assets/fikapaus.webp";
import StudioMimir from "../assets/studiomimir.webp";
import PokeDB from "../assets/pokedb.webp";

// This file lets you edit all constants that the page components include
// Makes the code less messy and easier to interpret.

export const projects = [
    {
        id: 1,
        name: "Studio Mimir",
        type: "Blade/Sage, ACF, Tailwind",
        imgUrl: StudioMimir,
        projectUrl: "https://studiomimir.se/",
        faIcons: ["fa-brands fa-laravel", "fa-brands fa-wordpress", "fa-solid fa-database"]
    },
    {
        id: 2,
        name: "Smartbrain",
        type: "React, Node, Postgres, REST",
        imgUrl: Smartbrain,
        projectUrl: "https://williampellas.com/smartbrain/",
        faIcons: ["fa-brands fa-react", "fa-brands fa-node-js", "fa-solid fa-database"]
    },
    {
      id: 3,
      name: "AllAboutDogs",
      type: "Wordpress, ACF, Tailwind",
      imgUrl: AllAboutDogs,
      projectUrl: "https://williampellas.com/wordpress/",
      faIcons: ["fa-brands fa-wordpress", "fa-brands fa-php"]
    },
    {
      id: 4,
      name: "Fikapaus",
      type: "React, TypeScript, Tailwind",
      imgUrl: Fikapaus,
      projectUrl: "https://williampellas.com/fikapaus/",
      faIcons: ["fa-brands fa-react", "fa-solid fa-file-code"]
    },
    {
        id: 5,
        name: "Pokemon DB",
        type: "React, API",
        imgUrl: PokeDB,
        projectUrl: "https://williampellas.com/pokedb/",
        faIcons: ["fa-brands fa-react"]
    }
];

export const skills = [
    "HTML5 & CSS3",
    "JavaScript & React.js",
    "WordPress & PHP",
    "Laravel & Blade",
    "Tailwind & Sass",
    "ACF & WooCommerce",
    "Git, SSH & Ftp",
    "Roots Ecosystem",
    "Node.js & Express.js",
    "PostgreSQL & MySQL",
    "Illustrator & SVG",
    "Agile Project Methodology",
    "Scrum & Trello",
    "Project Management",
    "Photography",
    "Livestreaming",
    "Adobe Suite",
    "3D Graphics"
];

export const icons = [
    {
        name: "email",
        styles: "fa-solid fa-envelope",
        url: "mailto:william.pellas@hotmail.com",
        id: 1
    },
    {
        name: "github",
        styles: "fa-brands fa-github-alt",
        url: "https://github.com/wpellas",
        id: 2
    },
    {
        name: "linkedin",
        styles: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/williampellas/",
        id: 3
    },
    {
        name: "instagram",
        styles: "fa-brands fa-instagram",
        url: "https://www.instagram.com/william_pellas/",
        id: 4
    },
    {
        name: "curriculum",
        styles: "fa-regular fa-file-pdf",
        url: "/extra/William_Pellas_CV+PB_2023.pdf",
        id: 5
    },
    {
        name: "facebook",
        styles: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/wille.pellas",
        id: 6
    }
]