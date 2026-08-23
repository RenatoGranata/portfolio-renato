interface ProjectFeatureItemProps {
  featureList: string[] 
}

export function ProjectFeatureItem({ featureList }: ProjectFeatureItemProps) {
  return (
    <ul className="flex flex-col my-auto gap-2 text-foreground-secondary text-xs">
      {featureList.map((featureText, index) => {
        return <li key={index}>{featureText}</li>
      })}
    </ul>
  )
}