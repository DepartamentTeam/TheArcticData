"use client"
import { useState } from "react"
import type { ReactNode } from "react"

interface IMenu {
  childrens: ReactNode[]
  title: string
  handler?: any
}

export const Menu = ({ childrens, title handler }: IMenu) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (e: MouseEvent | TouchEvent) => {
    e.preventDefault()
    setIsOpen(true)
  }

  const handleClose = (e: MouseEvent | TouchEvent) => {
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <div className="menu">
      <button onClick={handleOpen} onMouseDown={handleClose} onDoubleClick={handleClose}>
        {" "}
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
             style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && (
        <menu>
          <ul>
            {childrens.map((child, idx) => (
              <li key={idx}>{child}</li>
            ))}
          </ul>
        </menu>
      )}
    </div>
  )
}
