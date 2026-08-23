"use client"

import { AiOutlineThunderbolt } from "react-icons/ai";
import { SectionBadge } from "../ui/SectionBadge";
import { SectionHeader } from "../ui/SectionHeader";

import { Tabs } from "../ui/Tabs";
import { useState } from "react";
import { TechCard } from "../ui/TechCard";

import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";






const CATEGORIES = ["front-end", "ferramentas"] as const

export type SkillsTabs = typeof CATEGORIES[number] 


interface Techs {
  techCategory: SkillsTabs
  icon: React.ReactNode | null
  bgIcon: string
  colorIcon: string
  techName: string
  status?: "uso no dia a dia" | "primeiros passos"
}

const techs : Techs[] = [
  // Front-End
  { techCategory: "front-end", icon: <FaHtml5 />, bgIcon: "bg-[rgba(240,101,72,.14)]", colorIcon: "text-[#f06548]", techName: "HTML5" },
  { techCategory: "front-end", icon: <FaCss3 />, bgIcon: "bg-[rgba(59,130,246,.14)]", colorIcon: "text-[#3b82f6]", techName: "CSS3" },
  { techCategory: "front-end", icon: <BsJavascript />, bgIcon: "bg-[rgba(240,199,20,.16)]", colorIcon: "dark:text-[#d1a600] light:text-[#a98600]", techName: "JavaScript" },
  { techCategory: "front-end", icon: <FaReact />, bgIcon: "bg-[rgba(97,218,251,.16)]", colorIcon: "text-[#0ea5c4]", techName: "React.js" },
  { techCategory: "front-end", icon: <RiNextjsFill />, bgIcon: "bg-foreground/10", colorIcon: "text-foreground", techName: "Next.js" },
  { techCategory: "front-end", icon: <BsTypescript />, bgIcon: "bg-[rgba(49,120,198,.14)]", colorIcon: "text-[#3178c6]", techName: "TypeScript" },
  { techCategory: "front-end", icon: <RiTailwindCssFill />, bgIcon: "bg-[rgba(56,189,248,.14)]", colorIcon: "dark:text-[#38bdf8] light:text-[#0284c7]", techName: "Tailwind" },



  // Ferramentas
  { techCategory: "ferramentas", icon: <VscVscode />, bgIcon: "bg-[rgba(59,130,246,.14)]", colorIcon: "text-[#3b82f6]", techName: "Vscode" },
  { techCategory: "ferramentas", icon: <FaGitAlt />, bgIcon: "bg-[rgba(240,80,50,.14)]", colorIcon: "text-[#f05032]", techName: "Git" },
  { techCategory: "ferramentas", icon: <FaGithub />, bgIcon: "bg-foreground/10", colorIcon: "text-foreground", techName: "Github" },
  { techCategory: "ferramentas", icon: <FaFigma />, bgIcon: "bg-[rgba(162,89,255,.14)]", colorIcon: "text-[#a259ff]", techName: "Figma" },
  
  
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillsTabs>(CATEGORIES[0])
  
  function getCategory(category: SkillsTabs) {
    setActiveCategory(category)
  }

  return (
    <section id="skills" className="flex flex-col items-center mt-40 bg-background-secondary py-15 md:px-40">
      <SectionBadge icon={<AiOutlineThunderbolt />} text="Habilidades" />
      <SectionHeader title="Tecnologias que domino" description="Ferramentas que uso no dia a dia para construir interfaces modernas e funcionais." />

      <div className="flex gap-2 items-center mt-4">
        {CATEGORIES.map((category, index) =>{
          return (
            <Tabs 
              key={index}
              defaultChecked={index === 0}
              category={category}
              groupName={"skills"}
              getCategory={getCategory}
            />
          )
        })}

      </div>
      
      <div className="flex items-center justify-center flex-wrap mt-12 gap-3">
        {techs
          .filter((tech) => tech.techCategory === activeCategory)
          .map((tech, index) => {  
            return (
              <TechCard 
                key={index}
                icon={tech.icon}
                bgIcon={tech.bgIcon}
                colorIcon={tech.colorIcon}
                nameTech={tech.techName}
                status={tech.status}
              />
            )
        })}
      </div>
    </section>
  )
}