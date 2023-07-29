import { arrow_left_icon, idea_icon, layers_icons, question_mark_icon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/Button/Button';
import React, { useState } from 'react';



interface SideSheetsModalProps {
  from: "left" | "right" | "bottom" | "top"  
  children: React.ReactNode
}

export const SideSheetsModal: React.FC<SideSheetsModalProps> = ({ from,  children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        document.getElementById("map-container")?.setAttribute("dragging", "false")
        !isOpen ? setIsOpen(true) : setIsOpen(false)  
    }
    const handleClose = () => {
        document.getElementById("map-container")?.setAttribute("dragging", "true")
        setIsOpen(false)  
    }
  return (
    <>
    <button   className='side-sheets-modal-btn btn btn--icon btn--secondary btn--contained' onClick={handleOpen}>{idea_icon} Рекомендации</button>
   {isOpen && <div className={`side-sheets-modal ${from} ${isOpen ? 'open' : ''}`}>
      <div className="modal-overlay" onClick={handleClose} />
      <div className="modal-content">
        <span className="side-sheets-modal-title">
        <button className="btn close-button" onClick={handleClose}>
         {arrow_left_icon}
        </button>
        <h5>Рекомендации</h5> </span>
        {children}
      
        
      </div>

    </div>}
    </>
  );
};
