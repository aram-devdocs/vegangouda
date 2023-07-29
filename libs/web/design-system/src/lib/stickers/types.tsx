import { SVGProps } from 'react'
import { createSvgSticker } from './createSvgSticker'

export type SvgStickerComponent = ReturnType<typeof createSvgSticker>

export interface SvgStickerProps extends SVGProps<SVGSVGElement> {
  elevation?: number
}
