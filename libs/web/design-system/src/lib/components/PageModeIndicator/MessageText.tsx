import { Typography } from '../../core/Typography/Typography'

type MessageTextProps = {
  label: string
}

export function MessageText({ label }: MessageTextProps) {
  return (
    <Typography variant="caption" color="on.secondary.highEmphasis">
      {label}
    </Typography>
  )
}
