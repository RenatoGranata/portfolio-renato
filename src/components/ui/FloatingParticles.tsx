interface FloatingParticlesProps {
  left: string
  delay: number
  duration: string
}

export function FloatingParticles({ left, delay, duration }: FloatingParticlesProps ) {

  // animate-floating

  return (
    
    <div className={`absolute -z-50 -bottom-1 w-1 h-1 bg-primary rounded-full animate-floating`}
    style={{
      animationDelay: `${delay}s`,
      left: `${left}`,
      animationDuration: `${duration}`
    }}
    />
  )
}