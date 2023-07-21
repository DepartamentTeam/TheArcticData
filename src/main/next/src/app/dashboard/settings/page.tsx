import { Metadata } from "next"

export const metadata : Metadata = {
    title: "Параметры",
    description: "Параметры аккунта",
    icons: ["/icons/settings.ico"],
    robots: "none"
  }
  
export default function SettingsPage() {
    return(
        <main className="pg-dashboard-container">
                <h1>Параметры</h1>
        </main>
    )
}