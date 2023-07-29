import { Stack } from '../../core/Stack/Stack'
import { PropsWithChildren } from 'react'

export type MessageTextContainerProps = PropsWithChildren<unknown>

export function MessageTextContainer({ children }: MessageTextContainerProps) {
  return (
    <Stack
      alignItems="center"
      direction="row"
      spacing={1}
      sx={theme => ({
        backgroundColor: 'secondary.main',
        boxShadow: theme.shadows[2],
        borderRadius: '4px',
        width: 'fit-content',
        paddingY: 0.5,
        paddingX: 1.5,
      })}
    >
      {children}
    </Stack>
  )
}
