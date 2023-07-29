import { Components, Theme } from '@mui/material'

export const createTextFieldTheme = (theme: Theme): Components['MuiTextField'] => {
  return {
    defaultProps: {
      variant: 'standard',
      fullWidth: true,
    },
    styleOverrides: {
      root: {
        width: '328px',
        [theme.breakpoints.only('xs')]: {
          width: '100%',
        },
        '.MuiFormHelperText-root': {
          marginTop: '5px',
        },
        '.TextField-MaxLength': {
          color: theme.palette.on.background.mediumEmphasis,
          whiteSpace: 'nowrap',
        },
        '.MuiInput-root': {
          marginTop: '0',
          '&.Mui-disabled': {
            paddingLeft: '8px',
          },
        },
        '.MuiInputLabel-root': {
          '&.Mui-disabled': {
            left: '8px',
          },
        },
        '.MuiInputLabel-standard': {
          top: '-6px',
          zIndex: 1,
          cursor: 'text',
          '&.Mui-disabled': {
            left: '8px',
            cursor: 'default',
          },
          '&.MuiInputLabel-shrink': {
            top: '5px',
          },
        },
        '.MuiInput-input': {
          padding: 0,
          height: 'auto',
        },
        '.MuiButton-Wrapper-Disabled': {
          backgroundColor: 'transparent',
        },
      },
    },
    variants: [
      {
        props: { variant: 'standard', disabled: true },
        style: {
          '.MuiInput-root': {
            backgroundColor: theme.palette.button.disabled,
          },
          '.MuiInputAdornment-positionEnd': {
            marginRight: '10px',
          },
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.on.surface.highEmphasis,
          },
          '.MuiOutlinedInput-root': {
            borderRadius: 0,
          },
          '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.variant,
            borderWidth: 1,
          },
        },
      },
      {
        props: { variant: 'outlined', disabled: true },
        style: {
          '.MuiOutlinedInput-root': {
            backgroundColor: theme.palette.button.disabled,
          },
        },
      },
      {
        props: { fullWidth: true },
        style: {
          width: '100%',
        },
      },
    ],
  }
}
