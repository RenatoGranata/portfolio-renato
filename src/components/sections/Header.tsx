"use client";

import { useEffect, useState } from "react";

import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MobileMenu } from "../ui/MobileMenu";

export interface MenuList {
  linkSection: string
  textMenu: string
}

const menuList: MenuList[] = [
  { linkSection: "#about", textMenu: "sobre" },
  { linkSection: "#skills", textMenu: "habilidades" },
  { linkSection: "#projects", textMenu: "projetos" },
  { linkSection: "#contact", textMenu: "contatos" },
]


export function Header() {

  const [theme, setTheme] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  },[isMenuOpen])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const isDark = savedTheme !== "light"

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(isDark)
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
    
  }, [])

  function toogleTheme() {
    const actualTheme = !theme
    setTheme(actualTheme);
    document.documentElement.setAttribute("data-theme", actualTheme ? "dark" : "light")
    localStorage.setItem("theme", actualTheme ? "dark" : "light")
  }

  function toogleMenuMobile() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="flex items-center justify-center">

      <nav className="flex items-center gap-4 lg:gap-7 fixed border border-border bg-background-secondary/78 backdrop-blur-lg rounded-full pl-5.5 pr-2 py-2 mt-25 self-center z-50 shadow-xl/32">
      
        <button className="bg-background-tertiary border border-border w-8 h-8 rounded-full cursor-pointer flex justify-center items-center hover:border-primary hover:scale-110 hover:rotate-20 transition-all duration-300 hover:text-primary md:hidden" onClick={toogleMenuMobile}>
          {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
        <a href="#hero" className="font-display font-bold" 
          onClick={() => setIsMenuOpen(false)}
        >
          Renato
          <span className="text-primary">.</span>
          dev
        </a>

        <ul className="hidden md:flex items-center gap-0 text-sm font-medium text-foreground-secondary list-none">
          {menuList.map((menu, index) => {
            return (
              <li key={index}>
                <a href={menu.linkSection} 
                  className="hover:bg-gray-700 hover:text-foreground light:hover:text-surface px-2 py-1 rounded-full transition-all duration-300"
                >
                  {menu.textMenu}
                </a>
              </li>
            )
          })}
        </ul>

        

        <button className="bg-background-tertiary border border-border w-8 h-8 rounded-full cursor-pointer flex justify-center items-center hover:border-primary hover:scale-110 hover:rotate-20 transition-all duration-300 hover:text-primary" 
         onClick={toogleTheme}
        >
          <IoMoonOutline className="light:hidden" /> 
          <FiSun className="dark:hidden" />
        </button>
      </nav>

      {isMenuOpen && <MobileMenu toogleMenuMobile={toogleMenuMobile} menuList={menuList} />}
    </header>
  )
}