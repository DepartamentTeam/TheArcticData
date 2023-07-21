import { arrow_left_icon, layers_icons } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/Button/Button';
import React, { useState } from 'react';



interface SideSheetsModalProps {
 
  onClose?: () => void;
  children: React.ReactNode
}

export const SideSheetsModal: React.FC<SideSheetsModalProps> = ({ onClose,  children }) => {
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
    <button className='btn btn--icon btn--secondary btn--contained' onClick={handleOpen}>{layers_icons}</button>
   {isOpen && <div className={`side-sheets-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-overlay" onClick={handleClose} />
      <div className="modal-content">
        <span className="side-sheets-modal-title">
        <button className="btn close-button" onClick={handleClose}>
         {arrow_left_icon}
        </button>
        <h4>Установить слои</h4> </span>
        {children}
      
        
      </div>

    </div>}
    </>
  );
};
