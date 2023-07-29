import useResizeObserver from '@react-hook/resize-observer'
import { useLayoutEffect, useState } from 'react'

export function useSize<T extends HTMLElement>() {
  const [size, setSize] = useState<{ width: number; height: number } | undefined>(undefined)
  const [node, ref] = useState<T | null>(null)

  useLayoutEffect(() => {
    if (node !== null) setSize(node.getBoundingClientRect())
  }, [node])

  useResizeObserver(node, ({ target }) => {
    setSize(target.getBoundingClientRect())
  })

  return { size, ref }
}
