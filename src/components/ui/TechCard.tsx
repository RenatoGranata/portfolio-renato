interface TechCardProps {
  icon: React.ReactNode
  bgIcon: string
  colorIcon: string
  nameTech: string
  status?: string
}
export function TechCard({ icon, bgIcon, colorIcon, nameTech, status } : TechCardProps) {

  return (
    <div 
      className="bg-surface border border-border rounded-[20px] py-7 px-5 flex flex-col items-center text-center gap-3.5 light:shadow-xl hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/40 transition-[transform,box-shadow,border-color] duration-350 ease-[cubic-bezier(0.16, 1, 0.3, 1)] min-w-30 max-w-40"
    >
      <div className={`flex justify-center items-center rounded-2xl p-3 ${bgIcon} ${colorIcon} text-2xl`}>
        {icon}
      </div>

      <h3 className="font-display font-semibold text-[0.92rem]">
        {nameTech}
      </h3>

      {status && 
        <div className="flex items-center gap-1.5 ">
          <span className="h-1 w-1 rounded-full bg-primary"></span>
          <p className="text-xs text-foreground-muted">
            {status}
          </p>
        </div> 
      }

    </div>
  )
}