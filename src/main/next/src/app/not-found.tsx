import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata : Metadata = {
  title: "Страница не найдена",
  
} 
export default function NotFound() {
  return (
    <section className='not-found'>
      <h2>Страница не найдена</h2>
      <p>Не удалось найти запрошенный ресурс</p>
      <p>
        Вернуться <Link href="/" className='a small-1'>на главную</Link>
      </p>
    </section>
  )
}

