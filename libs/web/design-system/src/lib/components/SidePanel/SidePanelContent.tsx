import { PropsWithChildren } from 'react'
import { Stack } from '../../core/Stack/Stack'
import { Box } from '../../core/Box/Box'

type SidePanelContentProps = PropsWithChildren<{
  /** Padding of the container @default 0 */
  padding?: number
}>

export function SidePanelContent({ padding = 0, children }: SidePanelContentProps) {
  return (
    <Stack className="SidePanelContent" flexGrow={1} padding={padding}>
      <Box>{children}</Box>
    </Stack>
  )
}
