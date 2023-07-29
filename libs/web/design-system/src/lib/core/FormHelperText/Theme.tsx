import { Components, Theme } from '@mui/material/styles'

export const createFormHelperTextTheme = (theme: Theme): Components['MuiFormHelperText'] => {
  return {
    styleOverrides: {
      root: {
        color: theme.palette.on.background.mediumEmphasis,
        '.Mui-error': {
          color: theme.palette.on.background.error,
        },
      },
    },
  }
}
