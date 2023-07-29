import { Components, Theme } from '@mui/material/styles'

export const createContainerTheme = (theme: Theme): Components['MuiContainer'] => {
  return {
    defaultProps: {
      maxWidth: 'xxl',
    },
  }
}
