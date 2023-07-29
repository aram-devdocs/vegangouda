import { Components, Theme } from '@mui/material'

export const createToggleButtonGroupTheme = (theme: Theme): Components['MuiToggleButtonGroup'] => {
  return {
    styleOverrides: {
      root: {
        borderRadius: 20,
        padding: 4,
        gap: 4,
        background: theme.palette.secondary[100],
        height: 40,
        width: 'fit-content',
      },
      grouped: {
        '&:not(:last-of-type)': {
          borderRadius: 20,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'transparent',
          },
        },
        '&:not(:first-of-type)': {
          margin: 'inherit',
          borderRadius: 20,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  }
}

export const createToggleButtonTheme = (theme: Theme): Components['MuiToggleButton'] => {
  return {
    styleOverrides: {
      root: {
        border: 0,
        color: theme.palette.on.secondary[100].highEmphasis,
        background: theme.palette.secondary[100],
        minWidth: 82,
        gap: 6,
        '&.Mui-selected': {
          color: theme.palette.on.button.highEmphasis,
          background: theme.palette.button.main,
          borderRadius: 16,
          boxShadow: theme.shadows[3],
          '&.Mui-selected:hover': {
            background: theme.palette.button.main,
            boxShadow: theme.shadows[3],
          },
        },
      },
    },
  }
}
