interface IconLinkProps {
  children: React.ReactNode
  textLink: string
  target?: "_blank"
}

export function IconLink({ children, target, textLink }: IconLinkProps) {
  return (
    <a href={textLink} className="flex items-center justify-center p-2.5 rounded-lg border border-border hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all" target={target} rel="noopener noreferrer">
      {children}
    </a>
  )
}