


interface BuildStepsTrackProps {
  statusName: string
  statusNow: string
  bgStatusProgressBar: string
}

export function BuildStepsTrack({ bgStatusProgressBar ,statusNow, statusName }: BuildStepsTrackProps) {

  // concluido -> bg-secondary
  // pendente -> bg-border
  // atual -> bg-border + barra b-primary animada


  

  return (
    <div className="flex flex-col flex-1 gap-1">
      <div className={`overflow-hidden rounded-full h-1 ${bgStatusProgressBar}`}>
        { statusNow === statusName && <div className="bg-primary h-1 rounded-full w-[60%] animate-progress-slide" />}
      </div>
      <span className={`font-jetmono text-xs ${statusNow === statusName ? "text-primary" : "text-foreground-muted"}`}>
        {statusName}
      </span>
    </div>
      
  )
}