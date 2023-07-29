import { Components, Theme } from '@mui/material'

export const createContainerTheme = (theme: Theme): Components['MuiContainer'] => {
  return {
    defaultProps: {
      maxWidth: 'xxl',
    },
  }
}
