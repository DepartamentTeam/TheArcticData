import { useState, ReactNode } from "react"

interface IPopover {
    title: string
    buttonType: "primary" | "secondary"
    icon: ReactNode
    children: ReactNode
    className: string
    buttonStyle: "contained" | "outlined"
}


export const Popover = ({children, title, buttonType, buttonStyle, icon, className}:IPopover) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleOpen = (event: Event) => {
        event.preventDefault()
        !isOpen ? setIsOpen(true) : setIsOpen(false)  
    }
    const hasIcon = icon !== "" || typeof icon !== undefined ? true : false
    return (
        <>
      <button popovertarget="my-popover" onClick={handleOpen} className={`btn btn--${buttonType}  btn--${buttonStyle} ${hasIcon? "btn--icon" : " "}`}>
    {icon}
      {title}</button>
     {isOpen && <div className={className !== "" ? className : "popover"} popover id="popover">
        {children}
      </div>}
      </>
    )
}

