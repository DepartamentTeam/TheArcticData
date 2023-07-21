'use client'
import {
    useState,
  type ReactNode,
  useEffect,
} from "react"


interface IDialog {
  openTitle: string
  children: ReactNode
}

export const Dialog = ({ openTitle, children }: IDialog) => {
const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    const dialog : HTMLDialogElement  = document.getElementById("dialog")
    console.log(dialog)
    dialog.showModal()
  }

  const handleClose = (e: KeyboardEvent) => { 
    
    const dialog : HTMLDialogElement = document.getElementById("dialog")
    
    setIsOpen(false)
    console.log("close",dialog)  
    dialog?.close() 
    if ( e.key === "Escape" ) {
      setIsOpen(false)
      console.log("close",dialog)  
      dialog?.close()
    }
  }

  return (
    <>
    
      
      <button id="button-open-dialog" onClick={handleOpen} className="btn btn--text">
        {" "}
        {openTitle}{" "}
      </button>
      {isOpen && <dialog id="dialog" className="dialog">
        <section className="dialog__body">
          <button id="button-close-dialog" onClick={() => handleClose} className="btn btn--text">
            {" "}
            Close Dialog{" "}
          </button>
          {children}
        </section>
      </dialog> }
  </>
  )
}
