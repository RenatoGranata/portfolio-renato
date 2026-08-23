import { BuildStepsTrack } from "./BuildStepsTrack"
import { IconLink } from "./IconLink"
import { MiniWindow } from "./MiniWindow"
import { ProjectFeatureItem } from "./ProjectFeatureItem"
import { Project, STATUS } from "../sections/Projects"
import { TechTags } from "./TechTags"

import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image"



interface ProjectCardProps {
  id: number
  project: Project
}
export function CardProject({ id, project }:ProjectCardProps ) {
  return (
    <article className="w-full bg-surface border border-border rounded-3xl overflow-hidden light:shadow-lg hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl transition-[transform,box-shadow,border-color] duration-[0.4s] flex flex-col-reverse lg:flex-row">

      <div className="flex flex-col flex-1 p-8 md:p-[2.6rem] gap-5">
        <header className="flex items-center gap-4">
          <span className="text-foreground-muted text-[0.68rem] font-jetmono">{id + 1}</span>
          <span className="w-fit flex items-center bg-primary-soft text-primary text-[0.68rem] rounded-full px-4 py-1 font-medium font-jetmono">
            {project.isCompleted ? "Concluído" : "Em construção"}
          </span>
        </header>

        <div className="flex flex-col flex-1 gap-2">
          <h3 className="font-display text-[1.65rem] font-bold">
            {project.projectName}
          </h3>
          <p className="text-foreground-secondary text-sm">
            {project.description}
          </p>

          {/* <BuildStepsTrack /> */}
          {
            project.isCompleted ? project.featureList && <ProjectFeatureItem featureList={project.featureList} /> : (
              <div className="grid grid-cols-2 grid-rows-2 lg:flex flex-1 items-center gap-4 flex-wrap my-4 lg:my-0 lg:gap-2">
                {
                  STATUS.map((statusName, index) => {
                    const positionStatus = STATUS.indexOf(project.projectStatusNow)
                    return (
                      <BuildStepsTrack key={index} 
                        statusNow={project.projectStatusNow} 
                        statusName={statusName}
                        bgStatusProgressBar={positionStatus <= index ? "bg-border" : "bg-secondary"}
                      />
                    ) 
                  })
                }

              </div>
            ) 
          }
          
        </div>


        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Componente das tecnologias ou linguagens usadas no projeto */}
            {project.techsTags.map(( tag, index ) => {
              return (
                <TechTags key={index} tag={tag} />
              ) 
            })}
            
          </div>
          {
            project.isCompleted && (

              <div className="flex items-center gap-2">
                {/* Componente dos botões de links de github e do site */}
                <IconLink textLink={project.iconLinks.github} target="_blank">
                  <FaGithub />
                </IconLink>
                <IconLink textLink={project.iconLinks.site} target="_blank">
                  <LuExternalLink />
                </IconLink>
              </div>
            )
          }
        </footer>

      </div>
      
      <div className="px-7 py-10 md:px-10 lg:py-16 flex justify-center items-center bg-linear-to-tr to-primary/5 from-background-tertiary md:rounded-l-xs"
      >
    

        <div className="relative w-80 h-50 md:h-60 rounded-2xl">
          {project.isCompleted && project.projectIMG ? 
            (
              <Image 
                alt={`imagem de preview do projeto ${project.projectName}`} 
                src={project.projectIMG} 
                fill
                className="object-cover"
                priority
              />
            ) : (
              <MiniWindow />
            )
          }
        </div>

      </div>

    </article>
  )
}