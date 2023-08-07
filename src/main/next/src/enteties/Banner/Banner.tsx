'use client'

import { useState } from "react";

interface propsBanner {
    username: string;
    location: string;
}

export const Banner = ({username, location}:propsBanner) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleClose = () => setIsOpen(false)
    return(
        <>
       {isOpen && <section className="banner body2">
            <h3>
            👋🏼 Привет, {username}
            </h3>
            <p  dangerouslySetInnerHTML={{__html: `👀 Мы узнали, что вы из <strong>${location}</strong>, этот шаблон сгенерирован автоматически.`}}></p>
            <p >Здесь можно закрепить 🗺️ Карты, 📈 Графики и 📑 Таблицы</p>
        
            <button type="button" onClick={handleClose}className="btn btn--outlined">Ок</button>
        </section> }</>
    )   
}