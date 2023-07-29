import { Components, Theme } from '@mui/material'

export const createSliderTheme = (theme: Theme): Components['MuiSlider'] => {
  return {
    styleOverrides: {
      valueLabel: {
        padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)} `,
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      colorPrimary: {
        color: theme.palette.accent.main,
        '.MuiSlider-rail': {
          opacity: 1,
          backgroundColor: theme.palette.state.background.focused,
        },
        '&.Mui-disabled': {
          '.MuiSlider-track': {
            '&::before': {
              backgroundColor: theme.palette.on.background.disabled,
            },
          },
        },
      },
      track: {
        '&::before': {
          content: '" "',
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: theme.palette.accent.main,
          borderRadius: 12,
          zIndex: -1,
        },
        height: 6,
        backgroundColor: theme.palette.state.background.focused,
        border: 'none',
        '&::after': {
          content: '" "',
          width: 20,
          height: 20,
          position: 'absolute',
          background: theme.palette.surface.main,
          borderRadius: '50%',
          zIndex: -1,
          right: -10,
          top: -7,
        },
      },
      thumb: {
        color: theme.palette.button.main,
        '&.Mui-active, &.Mui-focusVisible, &:hover': {
          boxShadow: `0px 0px 0px 14px ${theme.palette.state.surface.focused}`,
        },
        '&.Mui-disabled': {
          color: theme.palette.button.disabled,
        },
      },
      mark: {
        color: theme.palette.state.background.pressed,
      },
    },
  }
}
