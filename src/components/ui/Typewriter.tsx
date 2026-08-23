import { useEffect, useRef, useState } from "react"

interface TypeWriterProps {
  typeWriterTexts: string[],
  typingSpeed: number,
  pauseDuration: number,
}

export function Typewriter({typeWriterTexts, typingSpeed, pauseDuration}: TypeWriterProps) {

  const [displayText, setDisplayText] = useState<string>("")

  const currentIndexRef = useRef<number>(0)
  const isDeletingRef = useRef<boolean>(false)
  const charIndexRef = useRef<number>(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  useEffect(() => {
    function tick() {
      const currentText = typeWriterTexts[currentIndexRef.current]
      let delay = typingSpeed

      if (isDeletingRef.current) {
        charIndexRef.current -= 1

        if (charIndexRef.current <= 0) {
          isDeletingRef.current = false
          currentIndexRef.current = (currentIndexRef.current + 1) % typeWriterTexts.length
          delay = pauseDuration
        }
      } else {
        charIndexRef.current += 1

        if (charIndexRef.current >= currentText.length) {
          isDeletingRef.current = true
          delay = pauseDuration
        }
      }

      setDisplayText(currentText.slice(0, charIndexRef.current))
      timeoutRef.current = setTimeout(tick, delay)
    }

    timeoutRef.current = setTimeout(tick, 100)

    return () => {
      if (timeoutRef.current){
        clearTimeout(timeoutRef.current)
        
      } 
    }
  }, [pauseDuration, typeWriterTexts, typingSpeed])
  return (
    <span className="text-foreground-secondary text-sm md:text-base">
      {displayText}
    </span>
  )
}