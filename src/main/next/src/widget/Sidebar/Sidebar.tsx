"use client"
import { SidebarItem } from "@/enteties/SidebarItem/SidebarItem"
import Link from "next/link"
import { about_project_icon, analytics, data_lens, home, map,  params_gear_icon } from "./icons"
import { useState } from "react"
import { arrow_left_icon, rect_group_icon, two_arrows_right } from "@/shared/assets/icons"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <nav className={!isOpen ? "pg-dashboard__sidebar" : "pg-dashboard__sidebar-hidden"}>
    
      <span className="logo">
        {" "}
        <Link href="/">Арктида</Link>
      
      </span>
      <div className="pg-dashboard__sidebar-menu" >
      { isOpen? <button className="btn  btn--icon" onClick={handleClose}>
        {two_arrows_right}
      </button> : <button className="btn btn--icon" onClick={handleOpen}>
        {two_arrows_right}
      </button>
      }
       <SidebarItem
          title="Главная"
          path="/dashboard"
          icon={
          rect_group_icon
          }
        />
        <SidebarItem title="Карта" path="/dashboard/map" icon={map} />
        <SidebarItem
          title="Аналитика"
          path="/dashboard/analytics"
          icon={
           analytics
          }
        />
        <hr className="divider" />
        
        <SidebarItem
          title="Параметры"
          path="/dashboard/settings"
          icon={
            params_gear_icon
          }
        />
        <SidebarItem
          title="О проекте"
          path="/dashboard/about"
          icon={
          about_project_icon
          }
        />
      </div>

      
       

          
   
    
     
    </nav>
  )
}

export default Sidebar
