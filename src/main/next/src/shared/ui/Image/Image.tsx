

type TImage = {
    title: string
    src: string
}

export const Image = ({ title, src} : TImage) => {
   
    return(
        <picture>
            <source srcSet={`${src}.webp`} />
            <source srcSet={`${src}.avif`} />
            <img  alt={title}  srcSet={`${src}.png`} />
        </picture>
    )
}