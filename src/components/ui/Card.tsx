"use client"

import { MouseEvent, useRef } from "react";

interface CardProps {
  icon?: React.ReactNode | null;
  iconBgColor?: string;
  iconColor?: string;
  title?: string;
  description: string;
  isStylized: boolean;

}

export function Card({ icon, iconBgColor, iconColor, title, isStylized, description }:CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  function handleMouseEnter() {
    if (!cardRef.current) return
    rectRef.current = cardRef.current.getBoundingClientRect()
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || !rectRef.current) return

    
    const rect = rectRef.current

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 3
    const rotateX = (0.5 - (y / rect.height)) * 3

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`

    if (glowRef.current) {
      glowRef.current.style.setProperty("--mouse-x", `${x}px`)
      glowRef.current.style.setProperty("--mouse-y", `${y}px`)
      glowRef.current.style.opacity = "1"
    }
  }

  function handleMouseLeave() {
    if (!cardRef.current) return
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`

    if (glowRef.current) {
      glowRef.current.style.opacity = "0"
    }
  }

  return (
    // hover:shadow-[0_25px_50px_-12px_black]
    <div ref={cardRef}
      className={`relative overflow-hidden flex flex-col gap-3 bg-surface border border-border rounded-3xl p-8 hover:shadow-lg hover:shadow-primary/50 hover:border-primary/40 transition-all duration-75 ease-out light:shadow-lg light:hover:shadow-black/50`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
    >
      <div ref={glowRef} className="absolute pointer-events-none inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
      style={{
        background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(91, 140, 255, 0.15), transparent 40%)"
      }}
      ></div>
      {
        icon &&
        <div className={`w-fit ${iconBgColor} ${iconColor} text-3xl flex items-center justify-center p-2 rounded-xl`}>
          {icon}
        </div>
      }
      <strong className={`${isStylized ? "text-[1.08rem] font-display font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent" : "text-[1.08rem] font-semibold"}`}>
        {title}
      </strong>
      <p className="text-foreground-secondary text-[0.9rem] md:text-base whitespace-pre-line">
        {description}
      </p>

    </div>
  )
}