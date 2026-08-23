"use client";


import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { FloatingParticles } from "../ui/FloatingParticles";
import { Typewriter } from "../ui/Typewriter";

import { CiMail } from "react-icons/ci";

import perfilDark from "../../../public/perfil-2.png"
import perfilLight from "../../../public/perfil-3.png"
import Image from "next/image";

interface ParticleData {
  left: string;
  delay: number;
  duration: string;
}


const codeSnippets: string[] = [
  'while(true) { aprender(); }',
  'const paixao = ["código", "design"]',
  'git commit -m "feat: nova interface"',
  'if (bug) { café++; tentarDeNovo(); }',
  'while (isCoding) { playLofi() }',
]

export function Hero() {
  const [particlesData, setParticlesData] = useState<ParticleData[]>([])

  useEffect(() => {
    const generated: ParticleData[] = Array.from(
      { length: 25 }, 
      () => ({
        left: (Math.random() * 90 + 5) + '%',
        delay: Math.random() * 8,
        duration: (Math.random() * 8 + 8) + 's'
      }),
    )
    // eslint-disable-next-line
    setParticlesData(generated)
  }, [])

  
  
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" 
        style={{ background: "var(--glow)" }}
      />

      {/* Vou pensar se vou manter */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--primary-rgb), 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 55% at 50% 35%, black 15%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 35%, black 15%, transparent 75%)",
        }}
      />
      {/* ---------------------------- */}
      
      <div className="flex justify-center pt-30">
        {/* container para minha foto */}
        <div className="flex flex-col items-center">
          <div className="relative border-3 border-primary w-50 h-50 rounded-full overflow-hidden">
            {/* Minha foto */}
            <Image src={perfilDark} 
              alt="Foto de perfil de Renato"
              fill 
              className="object-cover light:hidden" 
              priority
            />
            <Image src={perfilLight} 
              alt="Foto de perfil de Renato"
              fill 
              className="object-cover dark:hidden" 
              priority
            />
          </div>
          <div className="flex items-center justify-center gap-2 bg-background-secondary border border-border rounded-full px-4 py-1 relative bottom-5">
            {/* Ponto pulsante */}
            <span className="block relative w-2 h-2 rounded-full bg-secondary after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-secondary after:animate-ping after:absolute after:left-1/2 after:-translate-x-1/2"></span>
            <span className="text-xs text-secondary">
              Disponível para estágio
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center text-center px-4">
        <p className="text-foreground-secondary">
          Olá, mundo!{(' ')}
          <span>👋{(' ')}</span> 
          Eu sou Renato.
        </p>
        <h1 className="text-3xl font-bold md:text-6xl">
          Desenvolvedor {(' ')}
          <span className="whitespace-nowrap inline-block"> 
            Front-End

          </span>
        </h1>
        <p className="text-secondary flex items-center gap-1">
          ~$
          <Typewriter typeWriterTexts={codeSnippets} 
            typingSpeed={100} 
            pauseDuration={1000} 
          />
          <span className="block w-1 h-4 bg-primary animate-blink"></span>
        </p>
        <p className="text-foreground-secondary">
          Transformando ideias em interfaces, uma linha de código por vez.
        </p>

        <div className="flex items-center gap-4 mt-4 mb-8">
          <Button textLink="#projects" variant="primary">Ver meus projetos</Button>
          <Button textLink="#contact" icon={<CiMail size={20} strokeWidth={0.7} />} variant="secondary">Entrar em contato</Button>
        </div>
      </div>

      {particlesData.map(({ delay, left, duration }, index) => {
        return (
          <FloatingParticles 
            key={index} 
            left={left} 
            delay={delay}
            duration={duration} 
          />)
      })}

      

    </section>
  )
}