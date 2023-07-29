import React from 'react'
import { ButtonProps } from '../../core/Button/Button'
import { Stack } from '../../core/Stack/Stack'
import { OnUnderlying } from '../../themes/types'
import { ButtonBaseBarProps } from '../ButtonBaseBar/ButtonBaseBar'

export interface ButtonBarProps {
  /** Array of buttons to render in the bar. */
  buttons: React.ReactElement<ButtonBaseBarProps>[]
  /** Set true to disable all buttons in the bar.
   * @default false */
  disabled?: boolean
  /** Background where the button bar is rendered. This handle colors of the buttons
   * @default background */
  on?: ButtonProps['on']
}

export const ButtonBar = ({ on = 'background', disabled, buttons }: ButtonBarProps) => {
  const borderColor = disabled ? `${OnUnderlying[on]}.disabled` : `${OnUnderlying[on]}.highEmphasis`

  return (
    <Stack
      direction="row"
      sx={{
        display: 'inline-flex',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        borderRight: 'none',
        '>.MuiButton-root': {
          borderRightWidth: 1,
          borderRightStyle: 'solid',
          borderRightColor: borderColor,
        },
      }}
    >
      {buttons.map((btn, i) => {
        return (
          <React.Fragment key={btn.props.label}>
            {React.cloneElement(btn, {
              disabled: disabled ? disabled : btn.props.disabled,
              on,
            })}
          </React.Fragment>
        )
      })}
    </Stack>
  )
}
