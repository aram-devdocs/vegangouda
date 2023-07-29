import { ForwardedRef, forwardRef, useState } from 'react';
import { TextField } from '../TextField/TextField';
import { InputAdornment } from '../Input/Input';
import { Button } from '../Button/Button';
import { HideIcon, VisibilityIcon } from '../../icons';
import { StandardTextFieldProps } from '@mui/material/TextField/TextField';

export interface PasswordFieldProps extends StandardTextFieldProps {
  minLengthPassword: number;
  /** @default false */
  disableHelperText?: boolean;
}

export const PasswordField = forwardRef(
  (props: PasswordFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [showPassword, setShowPassword] = useState(false);
    const { minLengthPassword, disableHelperText, ...restProps } = props;

    return (
      <TextField
        {...restProps}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        helperText={!disableHelperText ? props.helperText || 'TODO' : ''}
        InputProps={{
          sx: {
            'input::-ms-reveal': {
              display: 'none',
            },
          },
          endAdornment: (
            <InputAdornment position="end">
              <Button
                icon={showPassword ? <HideIcon /> : <VisibilityIcon />}
                tooltip={showPassword ? 'Hide Password' : 'Show Password'}
                disabled={props.disabled}
                variant="contained"
                type="button"
                corners="rounded"
                label="toggle password"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e: any) => e.preventDefault()} // TODO: fix type
              />
            </InputAdornment>
          ),
        }}
      />
    );
  }
);
