
import { Searchbar } from "@/enteties/Searchbar"
import { SidebarItem } from "@/enteties/SidebarItem/SidebarItem"
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
    className="pg-dashboard__sidebar-item"
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 400 160"
    backgroundColor="#f9f9f9"
    foregroundColor="#d9dce1"
  >
    <rect x="23" y="80" rx="0" ry="0" width="290" height="58" />
  </ContentLoader>
)
export const SidebarSceleton = () => {
  return (
    <nav className="pg-dashboard__sidebar">
      <span className="logo">Арктида</span>
      <div className="pg-dashboard__sidebar-menu">
        <Loader/>
        <Loader/>
        <Loader/>
        <Loader/>
      </div>
         
      <div className="pg-dashboard__sidebar-menu">
        <hr className="divider"/>
      
        <Loader/>
        <Loader/>
      </div>
      <span className="small-2">Department team</span>
    </nav>
  )
}


