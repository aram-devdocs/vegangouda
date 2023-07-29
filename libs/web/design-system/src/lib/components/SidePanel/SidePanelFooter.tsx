import { PropsWithChildren } from 'react'
import { Box } from '../../core/Box/Box'

type SidePanelFooterProps = PropsWithChildren<{
  /** Remove padding from the container @default false */
  noPadding?: boolean
}>

export function SidePanelFooter({ noPadding, children }: SidePanelFooterProps) {
  return (
    <Box
      className="SidePanelFooter"
      sx={{
        borderTopColor: 'on.surface.disabled',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        padding: noPadding ? 0 : 3,
        zIndex: 2,
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'surface.main',
      }}
    >
      {children}
    </Box>
  )
}
