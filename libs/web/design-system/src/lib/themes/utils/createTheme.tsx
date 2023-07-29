import { BrandTheme } from '@indr/shared/theme'
import { createTheme as createMuiTheme, Theme } from '@mui/material'
import { merge } from 'lodash'
import { createComponents } from './createComponents'

export const createTheme = (brandTheme: BrandTheme, name: Theme['name']): Theme => {
  const defaultTheme = createMuiTheme({
    name,
    breakpoints: {
      values: {
        xs: 0,
        sm: 481,
        md: 769,
        lg: 1025,
        xl: 1201,
        xxl: 1441,
        mobileDialog: 0,
        desktopDialog: 560,
      },
    },
    shadows: brandTheme.shadows,
    palette: brandTheme.palette,
    typography: brandTheme.typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            fontSize: '62.5%',
          },
        },
      },
    },
  })

  const components = createComponents(defaultTheme)
  const themeComponents = merge(defaultTheme.components, components)
  return createMuiTheme({
    ...defaultTheme,
    components: themeComponents,
  })
}
