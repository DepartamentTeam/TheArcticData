"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { propsSidebarItem } from "@/shared/models"

export const SidebarItem = ({ title, icon, path }: propsSidebarItem) => {
  const pathname = usePathname()
  const isActive = pathname.endsWith(path)

  return (
    
      <Link
        title={title}
        href={path}
        className={
          isActive
            ? "pg-dashboard__sidebar-item-active small-2"
            : "pg-dashboard__sidebar-item small-2"
        }
      >
        {icon}
       <span>{title}</span> 
      </Link>
  )
}
