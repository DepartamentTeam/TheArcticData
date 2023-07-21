"use client"
import React, { useState } from "react"
import { Drawer } from "../Drawer/Drawer"
import { Dialog } from "../Dialog/Dialog"
export const CustomContextMenu = () => {
  const [visible, setVisible] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleContextMenu = (e : any) => {
    e.preventDefault()
    setVisible(true)
    setX(e.clientX)
    setY(e.clientY)
  }

  const handleItemClick = (action : any) => {
    setVisible(false)
    action()
  }
  console.log(x, y)
  return (
    <div className="context-menu-overlay" onContextMenu={handleContextMenu}>
      {visible && (
        <div
          className="context-menu"
          style={{ left: x, top: y }}
          onClick={() => setVisible(false)}
        >
          <ul>
            <li className="small-1">
              <Dialog openTitle="Таблицу" children={<>Создание таблицы</>} />
            </li>
            <li className="small-1">
              <Dialog openTitle="График" children={<>Создание график</>} />
            </li>
            <li className="small-1">
              <Dialog openTitle="Карту" children={<>Создание карты</>} />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
