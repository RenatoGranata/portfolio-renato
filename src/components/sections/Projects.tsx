import { SectionBadge } from "../ui/SectionBadge";

import { LuRocket } from "react-icons/lu";
import { SectionHeader } from "../ui/SectionHeader";
import { CardProject } from "../ui/CardProject";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export const STATUS = ["Planejamento", "Design", "Desenvolvimento", "Testes"] as const

export type ProjectStatusList = typeof STATUS[number] 

interface CompletedProject {
  isCompleted: true
  projectName: string
  description: string
  projectIMG?: string | StaticImageData
  featureList?: string[]
  techsTags: string[]
  iconLinks: { github: string, site: string }
}

interface InProgressProject {
  isCompleted: false
  projectName: string
  description: string
  projectStatusNow: ProjectStatusList
  techsTags: string[]
}

export type Project = CompletedProject | InProgressProject

const projects: Project[] = [
  {
    isCompleted: false,
    projectName: "ChromaKit",
    description: "Plataforma de biblioteca de cores e estilos CSS que está sendo desenvolvida em equipe.",
    projectStatusNow: "Planejamento",
    techsTags: ["HTML", "CSS", "JavaScript"],
  },
  {
    isCompleted: false,
    projectName: "UniGroup",
    description: "Plataforma de gestão de grupos acadêmicos.",
    projectStatusNow: "Desenvolvimento",
    techsTags: ["Next.js", "Typescript", "Tailwind"],
  },
  {
    isCompleted: false,
    projectName: "Achei Meu Pet",
    description: "App para reportar e localizar pets perdidos com geolocalização, alertas em tempo real e histórico de avistamentos no mapa.",
    projectStatusNow: "Planejamento",
    techsTags: ["ReactNative", "TypeScript", "Maps API"],
  },
  {
    isCompleted: false,
    projectName: "Grão&Alma",
    description: "Site fictício de venda de café para entrega ou consumo local.",
    projectStatusNow: "Desenvolvimento",
    techsTags: ["Next.js", "TypeScript", "Tailwind"],
  },
] 

export function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center mt-20 py-15 px-4 md:px-20">
      <SectionBadge icon={<LuRocket />} text="projetos" />
      <SectionHeader title="O que eu já construí" />

      <div className="flex flex-col gap-3 mt-10 w-full">
        {projects.map((project, index) => {     
          return (
            <CardProject key={index}
              id={index}
              project={project}
            />
          )
        })}
      </div>
    </section>
  )
}