import { Tooltip } from '../../core/Tooltip/Tooltip'
import { Typography, TypographyProps } from '../../core/Typography/Typography'

export interface DateTimeDistanceProps extends Omit<TypographyProps, 'children'> {
  dateTime: string
}

export function DateTimeDistance({ dateTime, ...props }: DateTimeDistanceProps) {
  return (
    <Tooltip title={"formatFullDateTime(dateTime)"}>
      <Typography component="span" noWrap variant="inherit" {...props}>
        "formatDistanceToNow(dateTime)"
      </Typography>
    </Tooltip>
  )
}
