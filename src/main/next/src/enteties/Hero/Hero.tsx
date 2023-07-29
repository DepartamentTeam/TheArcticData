import { globe, map_shape } from "@/shared/assets/icons"
import { notoSerif } from "@/shared/style/fonts"
import { Button } from "@/shared/ui/Button/Button"
import { Video } from "@/shared/ui/Video/Video"
import Link from "next/link"


export const Hero = () => {
    return (
        <section className="sc-hero">
           
             <h1 className="sc-hero__intro-title" style={notoSerif.style} >Арктида</h1>
             <p className="subtitle-1">геосервис для анализа доступности медицинских услуг в <strong>Арктике</strong></p>
            <div className="sc-hero__buttons">
                <Link href="/login"  className="btn btn--primary">Войти</Link>
               
            </div>
           <div className="sc-hero__content">{globe}
         
           </div>
        </section>
    )
}