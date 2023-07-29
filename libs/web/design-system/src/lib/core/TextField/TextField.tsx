import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  StandardTextFieldProps,
  styled,
} from '@mui/material'
import { FC, forwardRef, useRef, useEffect } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { Stack } from '../Stack/Stack'

export type TextFieldProps = {
  maxLength?: number
  isMaxLengthHidden?: boolean
} & MuiTextFieldProps

export type { StandardTextFieldProps }

const TextFieldStyled = styled(MuiTextField)(({ theme, label }) => ({
  '.MuiInput-root': {
    paddingTop: label ? theme.spacing(2.875) : theme.spacing(1.75),
    paddingBottom: label ? theme.spacing(0.625) : theme.spacing(1.75),
    alignItems: 'end',
  },
  '.MuiInputAdornment-root': {
    '&.MuiInputAdornment-positionEnd': {
      marginBottom: theme.spacing(label ? 2.25 : 1.5),
    },
  },
}))

/** Added aria-label to delete errors on wave test for hidden and non-interactive input when is set to select or multiline  */
export const TextField: FC<TextFieldProps> = forwardRef(
  ({ maxLength, isMaxLengthHidden, ...props }, ref) => {
    const textFieldElement = useRef<HTMLDivElement>(null)

    function getValueLength(value: unknown): number {
      return typeof value === 'string'
        ? value.length
        : typeof value === 'number'
        ? value.toString().length
        : 0
    }

    useEffect(() => {
      if (textFieldElement.current !== null) {
        const label =
          props.label || props['aria-label'] || props.inputProps?.['aria-label'] || 'textfield'
        if (props.select) {
          textFieldElement.current
            .querySelector('input')
            ?.setAttribute('aria-label', `${label}-hidden`)
        } else if (props.multiline) {
          textFieldElement.current
            .querySelector('textarea[aria-hidden="true"]')
            ?.setAttribute('aria-label', `${label}-hidden`)
        }
      }
    }, [textFieldElement, props.select, props.multiline])

    return (
      <TextFieldStyled
        {...props}
        ref={mergeRefs([textFieldElement, ref])}
        inputProps={{
          maxLength: maxLength,
          ...props.inputProps,
        }}
        helperText={
          maxLength && !isMaxLengthHidden ? (
            <Stack
              component="span"
              justifyContent={props.helperText ? 'space-between' : 'flex-end'}
              direction="row"
            >
              <span className="TextField-HelperText" style={{ width: '75%' }}>
                {props.helperText}
              </span>
              <span
                className="TextField-MaxLength"
                style={{ width: '25%', textAlign: 'end' }}
              >{`${getValueLength(props.value)} / ${maxLength}`}</span>
            </Stack>
          ) : (
            props.helperText
          )
        }
      />
    )
  },
)
