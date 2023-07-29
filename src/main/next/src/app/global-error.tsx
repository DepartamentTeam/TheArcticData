'use client' 
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Мы потерпели крушение</h2>
      <p className='body-1'>Не отчаиваемся и пробуем выйти сухими из воды</p>
      <button
        onClick={

          () => reset()
        }
        className='btn btn--primary btn--contained'
      >
        Попробовать снова
      </button>
      <Link href="/" className='a'>Вернутся на главную</Link>
    </div>
  )
}