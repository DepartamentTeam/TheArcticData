


type TImage = {
    title: string
    src: string
}

export const Image = ({ title, src} : TImage) => {

    return(
        <picture>
            <source  srcSet={`${src}.webp`} />
            
            <img   alt={title}  srcSet={`${src}.png`} />
        </picture>
    )
}