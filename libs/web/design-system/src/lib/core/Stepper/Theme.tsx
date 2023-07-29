import { Components, Theme } from '@mui/material'

export const createStepperTheme = (theme: Theme): Components['MuiStepper'] => {
  return {
    styleOverrides: {
      root: {
        '.MuiStepIcon-root': {
          color: theme.palette.secondary[200],
          '&.Mui-active': {
            color: theme.palette.on.background.accent,
          },
          '&.Mui-completed': {
            color: theme.palette.on.background.accent,
          },
          '& text': {
            fontSize: theme.typography.body2.fontSize,
          },
        },
        '.MuiStepLabel-label': {
          color: theme.palette.on.background.mediumEmphasis,
          fontSize: theme.typography.body1.fontSize,
          '&.Mui-active': {
            color: theme.palette.on.background.highEmphasis,
          },
          '&.Mui-completed:not(.Mui-active)': {
            color: theme.palette.on.background.mediumEmphasis,
          },
        },
      },
    },
  }
}
