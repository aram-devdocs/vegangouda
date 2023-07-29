import { Components, Theme } from '@mui/material'

export const createTooltipTheme = (theme: Theme): Components['MuiTooltip'] => {
  return {
    defaultProps: {
      placement: 'top',
    },
    styleOverrides: {
      tooltip: {
        ...theme.typography.caption,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      },
    },
  }
}
