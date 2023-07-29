import { Components, Theme } from '@mui/material'

export const createFilledInputTheme = (theme: Theme): Components['MuiFilledInput'] => {
  return {
    styleOverrides: {
      root: {
        '&:after': {
          borderBottomColor: theme.palette.primary[500],
        },
      },
    },
  }
}
