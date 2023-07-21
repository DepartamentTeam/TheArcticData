"use client"
import type { ReactNode } from "react"

type Tools = {
  id: number
  handler?: () => void
  element: ReactNode
}
interface propsTooltipsBar {
  tools: Tools[]
}

export const  TooltipsBar = ({tools}:propsTooltipsBar) => {
  return (
    <menu className="tooltips-bar">
      <ul>
        {tools.map((tool) => (
          <li key={tool.id} className="small-2">
           {tool.element}
          </li>
        ))}
      </ul>
      
    </menu>
  )
}
