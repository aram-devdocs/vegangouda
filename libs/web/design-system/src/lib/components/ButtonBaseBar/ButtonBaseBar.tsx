import {
  Badge,
  BadgeProps,
  Box,
  Button,
  ButtonTypeMap as MuiButtonTypeMap,
  ExtendButtonBase,
  styled,
} from '@mui/material'
import { forwardRef } from 'react'
import { Tooltip, TooltipProps } from '../../core/Tooltip/Tooltip'
import { SvgIconComponent } from '../../icons'
import { IUnderlying, OnUnderlying } from '../../themes'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 2,
    top: 2,
    fontSize: '8px',
    backgroundColor: theme.palette.background.main,
    color: theme.palette.on.background.highEmphasis,
    paddingRight: 4,
    paddingLeft: 4,
    height: 14,
    minWidth: 'auto',
  },
}))

type ButtonTypeMap = MuiButtonTypeMap<{
  counter?: number
  icon: SvgIconComponent
  label: string
  id?: string
  tooltip?: string
  /** @default true */
  showCounterInTooltip?: boolean
  /** @default top */
  tooltipPlacement?: TooltipProps['placement']
  /**
   * @default 'background'
   */
  on?: keyof IUnderlying
}>

export type ButtonBaseBarProps = Omit<ButtonTypeMap['props'], 'children'>

export const ButtonBaseBar: ExtendButtonBase<ButtonTypeMap> = forwardRef<
  HTMLButtonElement,
  ButtonBaseBarProps
>(
  (
    {
      counter,
      icon: Icon,
      label,
      on = 'background',
      tooltip = '',
      showCounterInTooltip = true,
      tooltipPlacement = 'top',
      ...restProps
    },
    ref,
  ) => {
    const iconStyles = { width: 20, height: 20, color: 'inherit' }
    const backgroundColorHover = `state.${on}.hovered`
    const tooltipTitle =
      counter !== undefined && showCounterInTooltip ? `${counter} ${tooltip}` : tooltip
    return (
      <Tooltip title={restProps.disabled ? '' : tooltipTitle} placement={tooltipPlacement}>
        <Button
          aria-label={label}
          variant="text"
          size="small"
          ref={ref}
          sx={{
            padding: 1.25,
            '&.MuiButton-root': {
              backgroundColor: 'transparent',
              color: restProps.disabled
                ? `${OnUnderlying[on]}.disabled`
                : `${OnUnderlying[on]}.highEmphasis`,
              borderRadius: 0,
            },
            '&:hover': {
              '.Button-hover-overlay': {
                backgroundColor: backgroundColorHover,
              },
            },
          }}
          {...restProps}
        >
          {counter ? (
            <StyledBadge
              badgeContent={counter}
              showZero
              sx={{
                '.MuiBadge-badge': {
                  color: restProps.disabled ? 'inherit' : undefined,
                },
              }}
            >
              <Icon sx={iconStyles} />
            </StyledBadge>
          ) : (
            <Icon sx={iconStyles} />
          )}
          <Box className="Button-hover-overlay" component="span" />
        </Button>
      </Tooltip>
    )
  },
) as ExtendButtonBase<ButtonTypeMap>
