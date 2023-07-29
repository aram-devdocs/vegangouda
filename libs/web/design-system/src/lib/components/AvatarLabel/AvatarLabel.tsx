import { forwardRef } from 'react'
import { Avatar, AvatarProps } from '../../core/Avatar/Avatar'
import { Stack, StackProps } from '../../core/Stack/Stack'
import { Typography, TypographyProps } from '../../core/Typography/Typography'
import { SvgIconComponent } from '../../icons'
import { OnUnderlying } from '../../themes/types'

export interface AvatarLabelProps extends Omit<StackProps<'span'>, 'children'> {
  /** Label to be shown after the avatar */
  label: string
  /** Hides the label after the avatar if set */
  hideLabel?: boolean
  /** Image to be displayed in avatar. If not defined, it will use first letter of the label */
  src?: string | null
  /** Props that will be passed to the Avatar component */
  avatarProps?: AvatarProps
  /** Props that will be passed to the Typography component that displays the label */
  labelProps?: TypographyProps
  /** @default medium */
  size?: AvatarProps['size']
  /** @default primary */
  type?: AvatarProps['type']
  /** @default false
   * It will display the icon instead of first letter of the label on the avatar
   */
  icon?: SvgIconComponent
  /**
   * @default 'background'
   * This will alter the color of the label based on where is place it.
   */
  on?: 'background' | 'surface'
  /** @default false
   * It will change the avatar style
   */
  isSelected?: boolean
  /** @default false
   * It will change the avatar elevation
   */
  isHoverdable?: boolean
}

export const AvatarLabel = forwardRef<unknown, AvatarLabelProps>(
  (
    {
      label,
      hideLabel,
      src,
      size = 'medium',
      avatarProps,
      labelProps,
      icon: Icon,
      type = 'primary',
      on = 'background',
      isSelected = false,
      isHoverdable = false,
      sx,
      ...stackProps
    },
    ref,
  ) => {
    const typography = size === 'large' ? 'h6' : size === 'medium' ? 'body1' : 'body2'

    const spacing = size === 'small' ? 1 : 2

    return (
      <Stack
        ref={ref}
        display="inline-flex"
        direction="row"
        alignItems="center"
        spacing={spacing}
        {...stackProps}
      >
        <Avatar
          type={type}
          size={size}
          {...avatarProps}
          src={src || undefined}
          sx={theme => ({
            outline: isSelected ? `2px solid ${theme.palette.on.background.accent}` : 'none',
            '&:hover': {
              boxShadow: isHoverdable ? theme.shadows[1] : 'none',
            },
          })}
        >
          {Icon ? <Icon /> : (label[0] ?? '').toUpperCase()}
        </Avatar>
        {!hideLabel && (
          <Typography
            color={`${OnUnderlying[on]}.highEmphasis`}
            component="span"
            typography={typography}
            {...labelProps}
          >
            {label}
          </Typography>
        )}
      </Stack>
    )
  },
)

export default AvatarLabel
