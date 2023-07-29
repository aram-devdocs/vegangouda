import { Avatar, AvatarProps } from '../../core/Avatar/Avatar'
import { Tooltip } from '../../core/Tooltip/Tooltip'
import { mergeSx } from '../../themes'

export interface AvatarOverflowProps extends AvatarProps {
  items: string[]
}
export function AvatarOverflow({ items, ...props }: AvatarOverflowProps) {
  return (
    <Tooltip title={items.join('\n')} PopperProps={{ sx: { whiteSpace: 'pre-line' } }}>
      <Avatar
        {...props}
        sx={mergeSx(
          {
            color: 'on.primary.50.highEmphasis',
            backgroundColor: 'primary.50',
            typography: 'body2',
          },
          props.sx
        )}
      >
        +{items.length}
      </Avatar>
    </Tooltip>
  )
}
