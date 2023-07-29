import React from 'react'
import { styled } from '@mui/material'
import { SvgStickerProps } from './types'

export function createSvgSticker(path: React.ReactNode) {
  return styled(({ elevation, ...props }: SvgStickerProps) => (
    <svg
      width="94"
      height="70"
      {...props}
      viewBox="0 0 94 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {path}
    </svg>
  ))(({ theme, elevation }) => {
    if (elevation != null) {
      return {
        filter: boxShadowToDropShadow(theme.shadows[elevation]),
      }
    }

    return {}
  })
}

function boxShadowToDropShadow(boxShadow: string): string {
  if (!boxShadow || boxShadow === 'none') {
    return boxShadow
  }

  const regexp = /\S+ \S+ \S+ rgba\(.*?\)/g

  const shadows = [...boxShadow.matchAll(regexp)].map(m => m[0])

  const dropShadow = shadows.map(shadow => `drop-shadow(${shadow})`).join(' ')

  return dropShadow
}
