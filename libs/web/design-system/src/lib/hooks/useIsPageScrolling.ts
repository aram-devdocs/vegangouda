import { useEffect, useState } from 'react'

export const useIsPageScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      setTimeout(() => setIsScrolling(false), 1000)
    }

    window.addEventListener('scroll', handleScroll, true)

    return () => window.removeEventListener('scroll', handleScroll, true)
  }, [])

  return isScrolling
}
