import { Components, Theme } from '@mui/material/styles'

export const createCardTheme = (theme: Theme): Components['MuiCard'] => {
  return {
    defaultProps: {
      elevation: 1,
    },
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  }
}

export const createCardActionAreaTheme = (theme: Theme): Components['MuiCardActionArea'] => {
  return {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: theme.palette.state.surface.hovered,
          '.MuiCardActionArea-focusHighlight': {
            opacity: 0,
          },
        },
      },
      focusHighlight: {
        opacity: 0,
      },
    },
  }
}
