import { Components, Theme } from '@mui/material'

export const createMenuItemTheme = (theme: Theme): Components['MuiMenuItem'] => {
  return {
    styleOverrides: {
      root: {
        ...theme.typography.body2,
        padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
        '&:hover': {
          backgroundColor: theme.palette.state.surface.hovered,
        },
        '&.Mui-selected': {
          backgroundColor: theme.palette.state.surface.selected,
          '&:hover': {
            backgroundColor: theme.palette.state.surface.hovered,
          },
        },
      },
    },
  }
}
