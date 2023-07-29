import { Components, Theme } from '@mui/material'

export const createGridTheme = (theme: Theme): Components['MuiGrid'] => {
  return {
    defaultProps: {
      columns: { xs: 4, sm: 6, md: 8, lg: 12, xl: 12 },
      columnSpacing: theme.spacing(1.5),
    },
  }
}
