import {
  ToggleButton as MUIToggleButton,
  ToggleButtonProps as MUIToggleButtonProps,
} from '@mui/material'
import { Typography } from '../Typography/Typography'
import { SvgIconComponent } from '../../icons'

export interface ToggleButtonProps
  extends Pick<MUIToggleButtonProps, 'disabled' | 'onChange' | 'onClick' | 'selected' | 'size'> {
  value: number
  label: string
  /** Icon to show as a React node */
  startIcon?: SvgIconComponent
}

export const ToggleButton = ({
  value,
  label,
  startIcon: Icon,
  disabled,
  onChange,
  onClick,
  selected,
  size,
}: ToggleButtonProps) => {
  return (
    <MUIToggleButton
      value={value}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}
      selected={selected}
      size={size}
      sx={!selected ? { borderRadius: 16 } : {}}
    >
      {Icon && <Icon fontSize="medium" />}
      <Typography variant="body2" color="inherit">
        {label}
      </Typography>
    </MUIToggleButton>
  )
}
