import { Stack, StackProps } from '../../core/Stack/Stack'
import { Typography } from '../../core/Typography/Typography'

export interface MicrocopyProps extends StackProps {
  message: string
  on: 'background' | 'surface'
  icon?: React.ReactNode
}

export function Microcopy({ message, on, icon, ...props }: MicrocopyProps) {
  return (
    <Stack
      alignItems="center"
      direction="row"
      spacing={0.5}
      color={`on.${on}.mediumEmphasis`}
      {...props}
    >
      {icon}
      <Typography variant="caption" color="inherit">
        {message}
      </Typography>
    </Stack>
  )
}
