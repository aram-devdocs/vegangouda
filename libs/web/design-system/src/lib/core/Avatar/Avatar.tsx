import { forwardRef } from 'react'
import MuiAvatar, { AvatarProps as MuiProps } from '@mui/material/Avatar'
import { mergeSx } from '../../themes/utils/mergeSx'
import { useTheme } from '@mui/material'

export interface AvatarProps extends MuiProps {
  /** @default default */
  type?: 'default' | 'primary'
  /** @default medium */
  size?: 'small' | 'medium' | 'large'
  /** @default false */
  isSelected?: boolean
  /** @default false */
  isHoverdable?: boolean

  /** @default false */
  isOutlined?: boolean
}

export const avatarSizes = {
  small: { width: 20, height: 20 },
  medium: { width: 32, height: 32 },
  large: { width: 40, height: 40 },
}
export const defaultAvatarSize = 'medium'

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      type = 'default',
      size = defaultAvatarSize,
      isSelected = false,
      isHoverdable = false,
      isOutlined = false,
      sx,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme()
    const typography = size === 'small' ? 'body2' : size === 'medium' ? 'body1' : 'h6'
    const avatarSize = avatarSizes[size]
    const backgroundColor = type === 'default' ? 'surface.main' : 'primary.100'
    const textColor =
      type === 'default' ? 'on.primary.50.highEmphasis' : 'on.primary.100.highEmphasis'
    const svgSize =
      size === 'small'
        ? {
            width: 14,
            height: 14,
          }
        : size === 'medium'
        ? {
            width: 24,
            height: 24,
          }
        : {
            width: 30,
            height: 30,
          }
    const outline = isSelected
      ? `2px solid ${theme.palette.common.white}`
      : isOutlined
      ? `1.5px solid ${theme.palette.common.white}`
      : 'none'

    return (
      <MuiAvatar
        ref={ref}
        sx={mergeSx(
          {
            typography,
            backgroundColor: props.src ? 'transparent' : backgroundColor,
            color: textColor,
            ...avatarSize,
            svg: {
              ...svgSize,
              textColor,
            },
            outline: outline,
            '&:hover': {
              boxShadow: isHoverdable ? theme.shadows[1] : 'none',
            },
          },
          sx,
        )}
        {...props}
      />
    )
  },
)
