import '@fontsource/be-vietnam-pro/300.css'
import '@fontsource/be-vietnam-pro/400.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/700.css'
import { Theme } from '@mui/material'
import { hpTheme } from '@indr/shared/theme'
import { Theme as ThemeEnum } from '@indr/web/data-access'
import { createTheme } from '../utils/createTheme'

export const HpTheme: Theme = createTheme(hpTheme, ThemeEnum.Hp)
