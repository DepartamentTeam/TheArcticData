import { Metadata } from "next"
export const metadata: Metadata = {
    title: "Аналитика",
    description: "Аналитические данные",
    icons: ["/icons/analytic.ico"],
}

export default function AboutPage() {
    return(
        <section className="pg-dashboard__container">
            <section className="lg-row lg-col">
            <h1>О проекте</h1>
            </section>
         
        </section>
    )
}