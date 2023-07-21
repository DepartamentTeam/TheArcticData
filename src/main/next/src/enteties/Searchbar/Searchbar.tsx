"use client"
import { useRef, useState } from "react"

export const Searchbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (e : KeyboardEvent | MouseEvent) => {
    console.log(e.key)
    const dialog : HTMLDialogElement = document.getElementById("searchbar-dialog")
    if (e.key === "Ctrl+K"){
      dialog.showModal();
      
    }

    setIsOpen(true)

  }
  const handleClose = (e : KeyboardEvent) => {
    console.log(e.key)
    const dialog : HTMLDialogElement = document.getElementById("searchbar-dialog")
    if (e.key === "Escape"){
      dialog.close();
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        className="pg-dashboard__sidebar-item sub2"
        onClick={handleOpen}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      {isOpen && (
        <dialog
          id="searchbar-dialog"
         
          onKeyDown={handleClose}
          className="search-bar"
        >
          <div className="search-bar__container">
            <div className="search-bar__icon"></div>
            <label className="small-1">
              Поиск
              <input
                type="search"
                id="search-bar"
                value="Search"
                placeholder="Я ищу"
              />
            </label>
          </div>
        </dialog>
      )}
    </>
  )
}
