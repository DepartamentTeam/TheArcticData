import "@/shared/style/globals.scss"
import { montserrat } from "../shared/style/fonts"
//import { WithAuthProvider } from "@/process/provider/withAuth"
import Header from "@/widget/Header/Header"
import { Metadata } from 'next'
import { ServiceWorker } from "@/process/worker/worker"
export const metadata : Metadata = {
  title: "Арктида",
  description: "Проект команды Департамент специально для хакатона Арктек Дата",
  robots: "none",
  icons: ["/icons/arctida.ico"],
  colorScheme: "light dark",
  themeColor: "#B0D7FF",
  manifest: "manifest.json"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        
          <main className="lt-home">{children}</main>
       
      </body>
    </html>
  )
}
