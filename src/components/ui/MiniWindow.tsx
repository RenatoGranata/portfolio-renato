export function MiniWindow() {
  return (
    <div className="relative w-full h-full overflow-hidden p-6 bg-background-secondary flex flex-col justify-between gap-3 rounded-2xl border border-border border-dashed light:border-foreground-muted">
      <div className="w-[50%] rounded-full py-2 border border-border border-dashed light:border-foreground-muted"></div>
      <div className="w-[70%] rounded-full py-2 border border-border border-dashed light:border-foreground-muted"></div>
      <div className="flex flex-1 gap-2 md:gap-3 items-center">
        <div className="flex-1 h-full rounded-lg border border-border border-dashed light:border-foreground-muted"></div>
        <div className="flex-1 h-full rounded-lg border border-border border-dashed light:border-foreground-muted"></div>
        <div className="flex-1 h-full rounded-lg border border-border border-dashed light:border-foreground-muted"></div>
      </div>
      <div className="flex-1 rounded-lg w-full border border-border border-dashed light:border-foreground-muted"></div>
    
      <div className="absolute inset-0 animate-scan-line w-full h-[30%] bg-linear-to-b from-transparent via-primary/14 to-transparent " /> 
    </div>
  )
}