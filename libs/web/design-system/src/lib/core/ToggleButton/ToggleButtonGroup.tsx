import { useState } from 'react'
import {
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButtonGroupProps as MUIToggleButtonGroupProps,
} from '@mui/material'

export interface ToggleButtonGroupProps
  extends Pick<
    MUIToggleButtonGroupProps,
    'children' | 'disabled' | 'exclusive' | 'onChange' | 'orientation' | 'size'
  > {
  /** @default 0 */
  value?: number
}

export const ToggleButtonGroup = ({
  children,
  value = 0,
  disabled,
  exclusive = true,
  onChange,
  orientation,
  size,
}: ToggleButtonGroupProps) => {
  const [val, setVal] = useState<number | null>(value)

  const handleOnChange = (event: React.MouseEvent<HTMLElement>, newValue: number | null) => {
    if (newValue !== null) {
      setVal(newValue)
      onChange?.(event, newValue)
    }
  }

  return (
    <MUIToggleButtonGroup
      value={val}
      exclusive={exclusive}
      onChange={handleOnChange}
      disabled={disabled}
      orientation={orientation}
      size={size}
    >
      {children}
    </MUIToggleButtonGroup>
  )
}
