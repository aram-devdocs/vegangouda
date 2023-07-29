import { Components, Theme } from '@mui/material/styles'

export const createAlertTheme = (theme: Theme): Components['MuiAlert'] => {
  return {
    defaultProps: {
      icon: false,
      elevation: 2,
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        const backgroundColor =
          ownerState?.severity === 'info'
            ? theme.palette.secondary[200]
            : ownerState?.severity === 'error'
            ? theme.palette.error.main
            : theme.palette.secondary.main
        const color =
          ownerState?.severity === 'info'
            ? theme.palette.on.secondary[200].highEmphasis
            : ownerState?.severity === 'error'
            ? theme.palette.on.error.highEmphasis
            : theme.palette.on.secondary.main.highEmphasis

        return {
          ...theme.typography.body1,
          width: '100%',
          alignItems: 'center',
          color,
          backgroundColor,
          borderRadius: 0,
          boxShadow: theme.shadows[2],
        }
      },
      action: {
        paddingTop: 0,
      },
    },
  }
}
