"use client"

import { SkillsTabs } from "../sections/Skills"

interface TabsProps { 
  category: SkillsTabs
  groupName: string
  defaultChecked: boolean
  getCategory: (category:SkillsTabs) => void
}
export function Tabs({ category, groupName, defaultChecked, getCategory }: TabsProps) {
  return (
    <div>
      <input
        hidden 
        defaultChecked={defaultChecked}
        onChange={() => getCategory(category)}
        id={category} 
        type="radio" 
        name={groupName} 
        value={category} 
        className="peer"
      />
      <label 
        htmlFor={category}
        className="md:px-5 px-3 py-2 text-xs rounded-full border border-border text-foreground-secondary font-medium md:text-sm cursor-pointer not-peer-checked:hover:text-primary not-peer-checked:hover:border-primary transition-all duration-3 peer-checked:bg-foreground peer-checked:text-background peer-checked:border-foreground"
      >
        {category}
      </label>
    </div>
  )
}