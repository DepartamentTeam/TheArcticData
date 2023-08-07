import dynamic from "next/dynamic";
import type { Metadata } from "next";
const OnBoardNoSSR = dynamic(() => import("@/widget/OnBoard/OnBoard"), {
  ssr: false
});

export const metadata: Metadata = {
  title: "Главная",
  description: "Основная страница с визуализацией данных",
  icons: ["/icons/arctida.ico"],
  robots: "none",
}

export default async function PageDataLens() {
 
    return(
      
       
        <section className="pg-dashboard-container">
          <iframe  className="full-col" allowFullScreen={true} src="https://datalens.yandex/kc1e2775vc4q9" width="100%" height="100%"></iframe>
        <OnBoardNoSSR/>
        </section>
     
    )
}