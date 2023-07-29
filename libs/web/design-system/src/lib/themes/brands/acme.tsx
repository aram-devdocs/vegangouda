import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import { Theme } from '@mui/material'
import { acmeTheme } from '@indr/shared/theme'
import { Theme as ThemeEnum } from '@indr/web/data-access'
import { createTheme } from '../utils/createTheme'

export const AcmeTheme: Theme = createTheme(acmeTheme, ThemeEnum.Acme)
