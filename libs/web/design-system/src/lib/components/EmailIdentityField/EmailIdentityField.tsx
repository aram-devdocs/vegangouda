import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { Stack, TextField, TextFieldProps } from '../../../index'

type EmailIdentityFieldProps = {
  error?: FieldError
} & Pick<TextFieldProps, 'onChange' | 'onBlur' | 'value' | 'name' | 'ref' | 'onFocus'>

export const EmailIdentityField = forwardRef(function EmailIdentityField({
  error,
  ...field
}: EmailIdentityFieldProps) {
  const helperText = error?.message ?? 'Must be a valid email address'

  return (
    <Stack spacing={1}>
      <TextField
        {...field}
        label="Email sender address"
        error={!!error?.message}
        helperText={helperText}
        required
      />
    </Stack>
  )
})
