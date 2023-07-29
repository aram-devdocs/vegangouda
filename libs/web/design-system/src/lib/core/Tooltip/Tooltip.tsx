import { forwardRef } from 'react'
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material'

export interface TooltipProps extends MuiTooltipProps {
  /** @default true */
  hasMaxWidth?: boolean
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ hasMaxWidth = true, ...props }, ref) => (
    <MuiTooltip
      {...props}
      ref={ref}
      componentsProps={{
        ...props.componentsProps,
        tooltip: {
          ...props.componentsProps?.tooltip,
          sx: {
            maxWidth: hasMaxWidth ? undefined : 'none',
          },
        },
      }}
    />
  ),
)
