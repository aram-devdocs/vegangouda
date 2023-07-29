import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { Theme } from '@mui/material'
import { indrTheme } from '@indr/shared/theme'
import { Theme as ThemeEnum } from '@indr/web/data-access'
import { createTheme } from '../utils/createTheme'

export const IndrTheme: Theme = createTheme(indrTheme, ThemeEnum.Indr)
