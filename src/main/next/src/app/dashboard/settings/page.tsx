"use client"
import { useMapThemeStore } from "@/shared/store/store"
import InputRadioGroup from "@/shared/ui/InputRadioButtons/InputRadioButons"
import dynamic from "next/dynamic"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Параметры",
  description: "Параметры аккунта",
  icons: ["/icons/settings.ico"],
  robots: "none",
}

const OnBoardNoSSR = dynamic(() => import("@/widget/OnBoard/OnBoard"), {
  ssr: false
});
export default function SettingsPage() {
  const { theme, setMapTheme } = useMapThemeStore()

  const handleRadioChange = (value: string) => {
    setMapTheme(value)
    window.localStorage.setItem("mapTheme", value)
  }

  const radioOptions = [
    { label: "Светлая", value: "light" },
    { label: "Темная", value: "dark" },
  ]

  return (
    <main className="pg-dashboard-container">
      <div className="full-col lg-row">
      <h1>Параметры</h1>
        <div className="pg-settings">
          <hr className="divider"></hr>
      
          <InputRadioGroup
            label="Тема карты"
            options={radioOptions}
            selectedValue={theme}
            onChange={handleRadioChange}
          />
         
        </div>
      </div>
      <OnBoardNoSSR/>
    </main>
  )
}
