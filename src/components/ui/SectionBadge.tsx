interface SectionBadgeProps {
  icon?: React.ReactNode
  text: string
}

export function SectionBadge({ text, icon }: SectionBadgeProps) {
  return (
    <div className={`w-fit flex items-center gap-2 bg-primary-soft text-primary text-xs md:text-sm border border-primary/25 rounded-full px-4 py-1 font-medium font-jetmono`}>
      {icon}
      <span className="uppercase">{text}</span>
    </div>
  )
}