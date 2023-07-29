import { PropsWithChildren } from 'react'
import { Box } from '../../core/Box/Box'

type SidePanelHeaderProps = PropsWithChildren<{
  /** Remove border bottom of the container @default false */
  disableDivider?: boolean
  /** Hide container when is mobile resolution @default false */
  mobileHide?: boolean
}>

export function SidePanelHeader({
  disableDivider = false,
  mobileHide = false,
  children,
}: SidePanelHeaderProps) {
  return (
    <Box
      className="SidePanelHeader"
      sx={{
        display: { xs: mobileHide ? 'none' : 'flex', md: 'flex' },
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'surface.main',
        color: 'on.surface.highEmphasis',
        borderBottomWidth: disableDivider ? 0 : 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'primary.50',
      }}
    >
      {children}
    </Box>
  )
}
