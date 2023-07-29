import { Stack } from '../core/Stack/Stack'
import { LayoutContainer } from './LayoutContainer'

export interface ContentCenteredLayoutProps {
  children: React.ReactNode
  /**
   * @default 5
   */
  spacing?: number
}

export function ContentCenteredLayout({ children, spacing = 5 }: ContentCenteredLayoutProps) {
  return (
    <LayoutContainer paddingTop={3.75} paddingBottom={5} flexGrow={1} alignItems="center">
      <Stack alignItems="center" spacing={spacing}>
        {children}
      </Stack>
    </LayoutContainer>
  )
}

export default ContentCenteredLayout
