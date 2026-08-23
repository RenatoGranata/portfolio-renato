
interface TechTagsProps {
  tag: string
}
export function TechTags({ tag }:TechTagsProps) {
  return (
    <span className="font-jetmono text-[0.66rem] text-foreground-secondary bg-background-tertiary px-3 py-1.5 rounded-full">
      {tag}
    </span>
  )
}