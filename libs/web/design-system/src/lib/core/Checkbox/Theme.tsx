import { Components, Theme } from '@mui/material'

export const createCheckboxTheme = (theme: Theme): Components['MuiCheckbox'] => {
  return {
    styleOverrides: {
      root: {
        marginRight: '11px',
        marginTop: '-2px',
        marginBottom: '-2px',
        color: theme.palette.button.main,
        '&:hover': {
          backgroundColor: theme.palette.state.surface.hovered,
        },
        '.MuiTouchRipple-root': {
          color: theme.palette.on.surface.highEmphasis,
        },
        '&.Mui-checked': {
          color: theme.palette.button.main,
        },
        '&.Mui-disabled': {
          color: theme.palette.on.button.disabled,
        },
      },
    },
  }
}
