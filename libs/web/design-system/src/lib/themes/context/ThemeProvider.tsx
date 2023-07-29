/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Theme as ThemeDefinition,
  useMediaQuery,
  GlobalStyles,
} from '@mui/material';

type Theme = 'dark' | 'light';

export interface ThemeProviderProps {
  noBaseline?: boolean;
  children?: React.ReactNode;
  themeName?: Theme;
}

export interface IThemeContext {
  currentTheme: Theme;
  setTheme: (name: Theme) => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  currentTheme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [currentTheme, setTheme] = useState<Theme>(props.themeName || 'light');
  const contextValue = {
    currentTheme,
    setTheme,
  };
  const isPrint = useMediaQuery('print');

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={currentTheme}>
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
  );
};
