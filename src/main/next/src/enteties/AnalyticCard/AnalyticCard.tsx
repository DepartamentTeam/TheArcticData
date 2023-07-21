import type { ReactNode } from "react"

export interface ICard  {
    title: string
    content: ReactNode
}


export const AnalyticCard = ({title, content} : ICard) => {
    return(
        <div className="card">
            
            <h4>{title}</h4>
            {content}
        </div>
    )
}