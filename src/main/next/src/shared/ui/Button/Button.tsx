import { propsButon } from "@/shared/models"



export const Button = ({link, title, variant, color} : propsButon) => {
    

    return(
        
            <button>
                <a href={link} className={`btn btn--${variant} btn--${color}`}>
                {title}
                </a>
            </button>
      
    )
}