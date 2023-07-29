import useResizeObserver from '@react-hook/resize-observer'
import { useLayoutEffect, useState } from 'react'

export function useOverflow<T extends HTMLElement>() {
  const [node, ref] = useState<T | null>(null)
  const [hasOverflowX, setHasOverflowX] = useState(false)
  const [hasOverflowY, setHasOverflowY] = useState(false)

  function updateOverflow(node: Element | null): void {
    if (node !== null) {
      setHasOverflowX(node.scrollWidth > node.clientWidth)
      setHasOverflowY(node.scrollHeight > node.clientHeight)
    }
  }

  useLayoutEffect(() => {
    updateOverflow(node)
  }, [node])

  useResizeObserver(node, ({ target }) => {
    updateOverflow(target)
  })

  return { ref, hasOverflowX, hasOverflowY }
}
