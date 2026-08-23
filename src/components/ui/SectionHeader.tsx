interface SectionHeaderProps {
  title: string;
  description?: string;
  gapContainer?: string;
  maxWidthTitle?: string;
  maxWidthDescription?: string;

}

export function SectionHeader({ title, description, gapContainer, maxWidthDescription, maxWidthTitle }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${gapContainer || "gap-2"} items-center text-center mt-4`}>
      <h2 className={`text-section-title font-bold font-display ${maxWidthTitle || "w-fit"}`}>
        {title}
      </h2>
      {
        description && 
        <p className={`text-center ${maxWidthDescription || "max-w-140"} text-foreground-secondary`}>
          {description}
        </p>
      }
    </div>
  )
}