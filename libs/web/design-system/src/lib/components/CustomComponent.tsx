import { CSSObject } from '@mui/material'

export interface CustomVariants {
  props: Record<string, unknown>
  style: CSSObject
}

export interface CustomComponent {
  defaultProps?: Record<string, unknown>
  styleOverrides?: {
    root: CSSObject
    [k: string]: CSSObject
  }
  variants?: Array<CustomVariants>
}
