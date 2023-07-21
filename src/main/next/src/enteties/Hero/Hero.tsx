import { notoSerif } from "@/shared/style/fonts"
import { Button } from "@/shared/ui/Button/Button"
import Link from "next/link"


export const Hero = () => {
    return (
        <section className="sc-hero">
             <h1 className="sc-hero__intro-title" style={notoSerif.style} >Арктида</h1>
             <p className="subtitle-1">геосервис для анализа доступности медицинских услуг в <strong>Арктике</strong></p>
            <div className="sc-hero__buttons">
                <Link href="/login"  className="btn btn--primary">Войти</Link>
               
            </div>
        </section>
    )
}