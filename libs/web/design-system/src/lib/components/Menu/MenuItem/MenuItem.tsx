import { ReactNode } from 'react'
import { Box } from '../../../core/Box/Box'
import {
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
  ListItemTextProps,
} from '../../../core/List/List'
import { MenuItem as MuiMenuItem, MenuItemProps as MuiProps, Tooltip } from '@mui/material'
import { CheckIcon, SvgIconComponent } from '../../../icons'
import { mergeSx } from '../../../themes/utils/mergeSx'

export type MenuItemProps<C extends React.ElementType> = MuiProps<
  C,
  {
    component?: C
    avatar?: ReactNode
    checked?: boolean
    /** @default left */
    checkPosition?: 'left' | 'right'
    icon?: SvgIconComponent
    iconProps?: ListItemIconProps
    iconRight?: SvgIconComponent
    iconRightProps?: ListItemIconProps
    iconRightTooltip?: string
    titleProps?: ListItemTextProps['primaryTypographyProps']
    subtitle?: string
    subtitleProps?: ListItemTextProps['secondaryTypographyProps']
  }
>

export function MenuItem<C extends React.ElementType>({
  avatar,
  checked,
  checkPosition = 'left',
  icon: IconLeft,
  iconProps,
  iconRight: IconRight,
  iconRightProps,
  iconRightTooltip,
  titleProps,
  subtitle,
  subtitleProps,
  sx,
  ...props
}: MenuItemProps<C>) {
  const checkable = checked !== undefined
  const showIconLeft = !avatar && (Boolean(IconLeft) || (checkable && checkPosition === 'left'))
  const showIconRight = Boolean(IconRight) || (checkable && checkPosition === 'right')
  const styleIcon = { color: 'on.surface.highEmphasis', minHeight: 24 }
  const paddingY = subtitle ? 1.625 : avatar ? 1 : 1.75
  const paddingX = showIconLeft ? 3 : 2

  return (
    <MuiMenuItem
      sx={mergeSx(
        {
          '.MuiListItemIcon-root': {
            minWidth: 44,
          },
          paddingY,
          paddingX,
        },
        sx,
      )}
      {...props}
      onKeyUp={e => {
        if (e.code === 'Space') {
          props.onClick?.(e)
          e.preventDefault()
          e.stopPropagation()
          return
        }
        props.onKeyUp?.(e)
      }}
      onKeyDown={e => {
        if (e.code === 'Space') {
          return
        }
        props.onKeyDown?.(e)
      }}
    >
      {showIconLeft && (
        <ListItemIcon sx={styleIcon} {...iconProps}>
          {IconLeft ? <IconLeft /> : checked ? <CheckIcon /> : null}
        </ListItemIcon>
      )}
      {avatar && !IconLeft && <Box paddingRight={2}>{avatar}</Box>}
      <ListItemText
        data-value={props['data-value']}
        primary={props['children']}
        secondary={subtitle}
        primaryTypographyProps={{
          color: 'on.surface.highEmphasis',
          typography: subtitle ? 'body1' : 'body2',
          noWrap: true,
          ...titleProps,
        }}
        secondaryTypographyProps={{
          color: 'on.surface.mediumEmphasis',
          typography: 'body2',
          noWrap: true,
          ...subtitleProps,
        }}
      />
      {showIconRight && (
        <ListItemIcon sx={{ ...styleIcon, justifyContent: 'end' }} {...iconRightProps}>
          {IconRight ? (
            <Tooltip title={iconRightTooltip}>
              <IconRight />
            </Tooltip>
          ) : checked ? (
            <CheckIcon />
          ) : null}
        </ListItemIcon>
      )}
    </MuiMenuItem>
  )
}
