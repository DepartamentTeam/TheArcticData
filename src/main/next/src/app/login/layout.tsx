import { Metadata } from "next"
import { map_shape } from "@/shared/assets/icons"

export const metadata: Metadata = {
  title: "Войти",
  description: "Войти в систему",
  robots: "none",
  icons: ["/icons/lock.ico"],
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="pg-login__layout">
      {children}
   
    </section>
  )
}
