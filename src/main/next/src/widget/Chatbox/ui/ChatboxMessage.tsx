import { Image } from "@/shared/ui/Image"
import { FC } from "react"

interface IMessage {
    text: string
    from: "sender" | "bot"
    image?: string
    mediaTitle?: string
    link?: string
}


export const Message:FC<IMessage> = ({text, from, mediaTitle, link, image}) => {
    return(
        <div className={`chatbox__message  chatbox__message--${from}`}>
               
                <span className="subttitle-2">{text}</span>
               
                    {image && <>
                    <blockquote>
                        {mediaTitle}
                        
                    </blockquote>
                    <Image title="" src={image}/>
                    <a  href="">{link}</a>
                    </>}
        </div>
    )
}

