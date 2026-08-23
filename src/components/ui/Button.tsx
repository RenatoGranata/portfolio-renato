

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  textLink: string
  // iconColor?: string;

}

export function Button({ children, variant, icon, textLink }: ButtonProps) {
  const variantStyles = {
    primary: "bg-primary text-foreground shadow-lg shadow-primary/50 hover:shadow-xl",
    secondary: "bg-surface border border-border hover:border-primary hover:text-primary",
  }
  return (
    <a href={textLink} className={`${variantStyles[variant]} flex items-center ${icon ? "gap-2" : ""} text-xs rounded-xl px-4 py-3 md:px-8 md:py-4 md:text-base cursor-pointer hover:-translate-y-1 transition-all`}>
      {icon}
      {children}
    </a>
  )
}