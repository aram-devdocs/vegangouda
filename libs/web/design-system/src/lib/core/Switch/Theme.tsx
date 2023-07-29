import { Components, Theme } from '@mui/material'

export const createSwitchTheme = (theme: Theme): Components['MuiSwitch'] => {
  return {
    styleOverrides: {
      switchBase: {
        color: theme.palette.on.background.highEmphasis,
        '&:hover': {
          backgroundColor: theme.palette.state.surface.hovered,
        },
        '.MuiTouchRipple-root': {
          color: theme.palette.on.surface.highEmphasis,
        },
        '+ .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.state.background.pressed,
        },
        '&.Mui-disabled': {
          color: theme.palette.on.background.highEmphasis,
          '+ .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.on.background.disabled,
          },
          '> .MuiSwitch-thumb': {
            backgroundColor: theme.palette.button.disabled,
            '&::before': {
              content: '" "',
              width: 20,
              height: 20,
              position: 'absolute',
              background: theme.palette.surface.main,
              borderRadius: '50%',
              zIndex: -1,
            },
          },
        },
        '&.Mui-checked': {
          color: theme.palette.button.main,
          '+ .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.accent.main,
          },
          '&.Mui-disabled': {
            color: theme.palette.button.disabled,
            '+ .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.on.background.disabled,
            },
          },
        },
      },
    },
  }
}
