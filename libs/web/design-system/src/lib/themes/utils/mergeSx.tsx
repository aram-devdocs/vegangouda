import { SxProps, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system'

export function mergeSx(sx: SystemStyleObject<Theme>, parentSx: SxProps<Theme> = []): SxProps<Theme> {
  return [
    sx,
    ...(Array.isArray(parentSx) ? parentSx : [parentSx])
  ]
}
