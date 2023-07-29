import { Tooltip } from '../../core/Tooltip/Tooltip'
import { Typography } from '../../core/Typography/Typography'

export interface SectionDetailItemProps {
  label?: string
  /**
   * @default false
   */
  hideTooltip?: boolean
}

export function SectionDetailItem({ label, hideTooltip = false }: SectionDetailItemProps) {
  return (
    <Tooltip title={hideTooltip ? '' : label || 'Undefined'}>
      <Typography
        noWrap
        sx={{
          typography: {
            xs: 'body2',
            sm: 'h6',
          },
        }}
      >
        {label || 'Undefined'}
      </Typography>
    </Tooltip>
  )
}
