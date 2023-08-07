import Sidebar from "@/widget/Sidebar/Sidebar"
import { Suspense } from "react"
import Loading from "./loading"
import { SidebarSceleton } from "@/widget/Sidebar"
import { montserrat } from "@/shared/style/fonts"

export const metadata = {
  title: "Dashboard",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    
      <main className="lt-dashboard" style={montserrat.style}>
     
          <Suspense fallback={<SidebarSceleton/>}><Sidebar /></Suspense>
          <Suspense fallback={<Loading/>}>
          <section className="pg-dashboard">{children}</section>
          </Suspense>
      </main>
    
  )
}
