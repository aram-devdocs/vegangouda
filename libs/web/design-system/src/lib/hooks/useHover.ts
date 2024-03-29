import { useState } from 'react'

export function useHover() {
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return [isHovered, { onMouseEnter, onMouseLeave }] as const
}
