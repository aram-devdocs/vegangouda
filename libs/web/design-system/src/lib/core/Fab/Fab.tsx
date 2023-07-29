import { forwardRef } from 'react'
import MUIFab, { FabProps as MUIProps } from '@mui/material/Fab'
import { Box } from '../Box/Box'

export type FabProps = MUIProps
export const Fab = forwardRef<HTMLButtonElement, FabProps>(({ children, ...props }, ref) => {
  return (
    <MUIFab ref={ref} {...props}>
      {children}
      <Box className="Fab-hover-overlay" component="span" />
    </MUIFab>
  )
})
