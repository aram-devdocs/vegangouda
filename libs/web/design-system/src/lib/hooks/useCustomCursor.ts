import { useEffect, useState } from 'react'

export const useCustomCursor = () => {
  const [cursor, setCursor] = useState('default')

  useEffect(() => {
    document.body.style.cursor = cursor
  }, [cursor])

  const changeCursor = (cursor: string) => {
    setCursor(cursor)
  }

  const resetCursor = () => {
    setCursor('default')
  }

  return {
    cursor,
    changeCursor,
    resetCursor,
  }
}
