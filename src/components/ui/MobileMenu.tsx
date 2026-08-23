import { MenuList } from "../sections/Header"


interface MobileMenuProps {
  toogleMenuMobile: () => void
  menuList: MenuList[]
}

export function MobileMenu({ toogleMenuMobile, menuList }: MobileMenuProps) {
  

  
  
  return (
    <div className="fixed inset-0 z-10 md:hidden w-full h-screen bg-background">

      <ul className="flex flex-col h-full items-center justify-center gap-4 text-2xl font-medium text-foreground-secondary list-none">
        {menuList.map((menu, index) => {
          return (
            <li key={index}>
              <a href={menu.linkSection} 
                className="hover:text-primary transition-all capitalize"
                onClick={toogleMenuMobile}
              >
                {menu.textMenu}
              </a>
            </li>
          )
        })}
      </ul>
      
    </div>
  )
}