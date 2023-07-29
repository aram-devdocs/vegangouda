/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Theme as ThemeDefinition,
  useMediaQuery,
  GlobalStyles,
} from '@mui/material'
import { THEMES } from '../brands'
import { Theme } from '@indr/web/data-access'

export interface ThemeProviderProps {
  noBaseline?: boolean
  children?: React.ReactNode
  themeName?: Theme
}

export interface IThemeContext {
  currentTheme: Theme
  setTheme: (name: Theme) => void
}

export const ThemeContext = React.createContext<IThemeContext>({
  currentTheme: Theme.Indr,
  setTheme: () => {},
})

function getTheme(name: Theme): ThemeDefinition {
  const found = THEMES.find(theme => theme.name === name)
  if (!found) {
    console.error('Invalid theme name specified: ', name)
    return THEMES[0]
  }
  return found
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [currentTheme, setTheme] = useState<Theme>(props.themeName || Theme.Indr)
  const contextValue = {
    currentTheme,
    setTheme,
  }
  const isPrint = useMediaQuery('print')

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={getTheme(props.themeName || currentTheme)}>
        <GlobalStyles
          styles={{
            '@page': {
              margin: 0,
            },
            body: {
              margin: isPrint ? '48px' : 0,
            },
          }}
        />
        {props.noBaseline ? null : <CssBaseline />}
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
