import React from "react";

function SoMeIcons() {
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
            url: "/assets/William_Pellas_CV+PB_2023.pdf",
            id: 5
        },{
            name: "facebook",
            styles: "fa-brands fa-facebook-f",
            url: "https://www.facebook.com/wille.pellas",
            id: 6
        },
    ]
    return (
        <div className="stealth hiddenFade w-[100%]">
            <ul className="flex justify-center my-10 gap-2 sm:gap-8">
                {
                    icons.map((item) => {
                        return (
                            <li key={item.id}>
                                <a
                                name={item.name} 
                                className={`${item.styles} text-amber-300 text-lg sm:text-3xl border border-solid border-cyan-300 rounded-full w-10 h-10 sm:w-16 sm:h-16 flex flex-wrap items-center justify-center hover:transition-all hover:text-cyan-300 hover:border-amber-300 hover:scale-105`} href={item.url} target="_blank">
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SoMeIcons;