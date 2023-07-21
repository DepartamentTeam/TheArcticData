import { Searchbar } from "@/enteties/Searchbar"
import { SidebarItem } from "@/enteties/SidebarItem/SidebarItem"
import Link from "next/link"
import { about_project_icon, analytics, data_lens, map,  params_gear_icon } from "./icons"

const Sidebar = () => {
  return (
    <nav className="pg-dashboard__sidebar">
      <span className="logo">
        {" "}
        <Link href="/">Арктида</Link>
      </span>
      <div className="pg-dashboard__sidebar-menu">
       
        <SidebarItem title="Карта" path="/dashboard" icon={map} />
        <SidebarItem
          title="Аналитика"
          path="/dashboard/analytics"
          icon={
           analytics
          }
        />
        <SidebarItem
          title="Data Lens"
          path="/dashboard/data-lens"
          icon={
          data_lens
          }
        />
      </div>

      <div className="pg-dashboard__sidebar-menu">
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
      <span className="small-2">Department <br></br> team</span>
    </nav>
  )
}

export default Sidebar
