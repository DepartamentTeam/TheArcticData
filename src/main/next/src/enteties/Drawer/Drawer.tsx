'use client'
import { useState } from "react"
import { Dialog } from "../Dialog/Dialog"


export const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = (event: MouseEvent ) => {
        event.preventDefault()
        if (isOpen === true) { 
            setIsOpen(false)
            document.body.classList.remove("dialog-open")
        } else {
        
        setIsOpen(true)
        document.body.classList.add("dialog-open")
    }
    }
    return (
        <>
        <button className="btn btn--icon btn--text btn--small" onClick={() => setIsOpen(true)}> 
        <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        Добавить элемент</button>
        {isOpen && <section className="drawer">
            <menu type="toolbar">
                <li>
                   <Dialog  openTitle="Таблица"></Dialog>
                </li>
                <li>
                    График
                </li>
                <li>
                    Карта
                </li>
            </menu>
        </section>}
        </>
    )
}