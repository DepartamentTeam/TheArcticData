import { useEffect, useState } from "react"

type MediaQuery = {
  matches: boolean
  media: string
}

const useMediaQuery = (query: string): MediaQuery => {

  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({
    matches: window.matchMedia(query).matches,
    media: query,
  })

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const handleChange = (event: MediaQueryListEvent) => {
      setMediaQuery({
        matches: event.matches,
        media: event.media,
      })
    }


    mediaQueryList.addEventListener("change", handleChange)


    return () => {
      mediaQueryList.removeEventListener("change", handleChange)
    }
  }, [query])

  return mediaQuery
}

export default useMediaQuery
