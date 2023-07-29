import { Components, Theme } from '@mui/material/styles'

export const createFormControlLabelTheme = (theme: Theme): Components['MuiFormControlLabel'] => {
  return {
    styleOverrides: {
      root: {
        color: theme.palette.on.background.highEmphasis,
      },
      label: {
        '&.Mui-disabled': {
          color: theme.palette.on.background.highEmphasis,
        },
      },
    },
  }
}
