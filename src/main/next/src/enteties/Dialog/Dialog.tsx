'use client'
import { question_mark_icon } from "@/shared/assets/icons"

import {
    useState,
  type ReactNode,
  useEffect,
} from "react"


interface IDialog {
  openTitle?: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  dialogTitle?: string
}

export const Dialog = ({ openTitle, children, dialogTitle }: IDialog) => {

  
 
  
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => { 
      
    const showModalOnce = localStorage.getItem('OnBoardDisplay');
    if (!showModalOnce) {
      setIsOpen(true);
      localStorage.setItem('OnBoardDisplay', 'true');
    }
      window.localStorage.setItem("OnBoardDisplay", "true")
    }, [])
  const handleOpen = () => {
    setIsOpen(true)
    const dialog : HTMLDialogElement  = document.getElementById("dialog")
    dialog.showModal()
  }

  const handleClose = (e: KeyboardEvent) => { 
    
    const dialog : HTMLDialogElement = document.getElementById("dialog")
    
    setIsOpen(false)
   
    dialog?.close() 
   
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const dialog : HTMLDialogElement = document.getElementById("dialog")
    if ( e.key === "Escape" ) {
      setIsOpen(false)
     
      dialog?.close()
    }
  }
  return (
    <>
    
      
      <button id="button-open-dialog" onClick={handleOpen} className="btn btn--FAB btn--icon btn--outlined btn--text cta-help-modal">
        {" "}
        {openTitle}
      </button>

      {isOpen && <dialog id="dialog" className="dialog" >
        <section className="dialog__body"  onKeyDown={handleKeyDown}>
          <div className="dialog__title"> 
          <span className="subtitle-1">{dialogTitle}</span>
          <button id="button-close-dialog" onClick={handleClose} className="btn btn--text">
            &times;
          </button>
          </div>
          {children}
          <button id="button-close-dialog" onClick={handleClose} className="btn btn--text btn--secondary btn--outlined">
            Ок
          </button>
        </section>
      </dialog> }
  </>
  )
}
