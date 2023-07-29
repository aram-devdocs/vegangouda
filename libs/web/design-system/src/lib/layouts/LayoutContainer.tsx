// import { useMediaQuery } from '@vegangouda/web/design-system'
import { Box } from '../core/Box/Box'
import { Stack, StackProps } from '../core/Stack/Stack'

export type LayoutContainerProps = StackProps & {
  disableMaxWidth?: boolean
}

export function LayoutContainer({
  children,
  disableMaxWidth,
  ...stackProps
}: LayoutContainerProps) {
  const isPrint = false // TODO useMediaQuery('print')
  return (
    <Stack direction="row" justifyContent="center" {...stackProps}>
      <Box
        width="100%"
        maxWidth={
          isPrint
            ? { xs: 'unset' }
            : disableMaxWidth
            ? 'unset'
            : {
                xs: '292px',
                sm: '444px',
                md: '724px',
                lg: '996px',
                xl: '1140px',
                xxl: '1428px',
              }
        }
      >
        {children}
      </Box>
    </Stack>
  )
}
