'use client'
interface propsBanner {
    username: string;
    location: string;
}

export const Banner = ({username}:propsBanner) => {
    
    return (
        <section className="banner">
            <h3>
            👋🏼 Привет, {username}
            </h3>
            <p className="body2" dangerouslySetInnerHTML={{__html: `👀 Мы узнали, что вы из <strong>Мурманской области</strong>, этот шаблон сгенерирован автоматически.`}}></p>
            <p className="body2">Здесь можно закрепить 🗺️ Карты, 📈 Графики и 📑 Таблицы</p>
        
            <button type="button" className="btn btn--outlined">Ок</button>
        </section>
    )   
}