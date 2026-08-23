import { Card } from "../ui/Card";
import { SectionBadge } from "../ui/SectionBadge";
import { SectionHeader } from "../ui/SectionHeader";

import { LuSparkle } from "react-icons/lu";
// import { FiTarget } from "react-icons/fi";

export function About() {
  return (
    <section id="about" className="flex flex-col items-center mt-40">
      <div className="flex flex-col items-center">
        <SectionBadge text={"Sobre mim"} icon={<LuSparkle strokeWidth={1} className="fill-primary" />} />
        <SectionHeader
          title="Quem está por trás do código"
          description="Mais do que escrever código, gosto de resolver problemas e criar coisas que as pessoas realmente usam."
        />
      </div>
      <div className="mt-15 perspective-[1000px] px-4 md:px-25 lg:px-45">
        <Card 
          title="Minha jornada" 
          isStylized={false}
          description={
            `Olá! Eu sou Renato, estudante de Ciência da Computação na Universidade Veiga de Almeida (UVA - RJ) e estou buscando minha primeira oportunidade na área de desenvolvimento web como desenvolvedor front-end.

            Foi na programação que encontrei a ferramenta certa para transmitir minhas ideias em código, usando o que aprendo, junto com minha criatividade e atenção aos problemas que identifico ao redor, para criar soluções que simplifiquem e facilitem alguns processos do dia a dia e melhorem a experiência dos usuários.

            Com calma, venho construindo minha trajetória, aprendendo um bloco de cada vez, dia após dia.`
          }
        />
        
        
      </div>
    </section>
  )
}