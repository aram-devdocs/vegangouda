import { Tooltip, TooltipProps } from '../../core/Tooltip/Tooltip'
import { formatFullName } from '../../helpers'
import { PersonOutlineIcon } from '../../icons'
import { AvatarLabel, AvatarLabelProps } from '../AvatarLabel/AvatarLabel'

export interface AvatarUserProps extends Omit<AvatarLabelProps, 'label' | 'icon'> {
  /** @default false */
  tooltip?: boolean
  /** @default top */
  tooltipPlacement?: TooltipProps['placement']
  /** first, last name, email and hasAccount that will be turned into a label */
  user: {
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    hasAccount: boolean
  }
  /** @default false */
  isSelected?: boolean
  /** @default false */
  isHoverdable?: boolean
  onOpenTooltip?: VoidFunction
  onCloseTooltip?: VoidFunction
}

export function AvatarUser({
  tooltip,
  tooltipPlacement = 'top',
  type = 'primary',
  user,
  isSelected = false,
  isHoverdable = false,
  onOpenTooltip,
  onCloseTooltip,
  ...props
}: AvatarUserProps) {
  const name = formatFullName(user)
  const label = name || user.emailAddress

  const textTransform = name ? 'capitalize' : undefined

  return (
    <Tooltip
      title={tooltip ? label : ''}
      placement={tooltipPlacement}
      PopperProps={{ sx: { textTransform } }}
      onOpen={onOpenTooltip}
      onClose={onCloseTooltip}
    >
      <AvatarLabel
        label={label}
        icon={user.hasAccount ? undefined : PersonOutlineIcon}
        isSelected={isSelected}
        isHoverdable={isHoverdable}
        {...props}
      />
    </Tooltip>
  )
}
