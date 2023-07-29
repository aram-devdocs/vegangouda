import { Components, Theme } from '@mui/material'
import { ForwardSlashIcon } from '../../icons'

export const createBreadcrumbsTheme = (theme: Theme): Components['MuiBreadcrumbs'] => {
  return {
    defaultProps: {
      separator: <ForwardSlashIcon />,
    },
    styleOverrides: {
      root: {
        color: theme.palette.on.background.highEmphasis,
        a: {
          ...theme.typography.h6,
          color: theme.palette.on.background.highEmphasis,
        },
        '.MuiBreadcrumbs-separator': {
          color: theme.palette.primary.variant,
        },
      },
    },
  }
}
