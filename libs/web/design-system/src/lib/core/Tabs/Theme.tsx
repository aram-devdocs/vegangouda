import { Components, Theme } from '@mui/material'

export const createTabsTheme = (theme: Theme): Components['MuiTabs'] => {
  return {
    styleOverrides: {
      root: {
        minHeight: 'auto',
      },
      flexContainer: {
        gap: theme.spacing(2),
      },
      indicator: {
        display: 'none',
      },
    },
  }
}

export const createTabTheme = (theme: Theme): Components['MuiTab'] => {
  return {
    styleOverrides: {
      root: {
        borderRadius: 20,
        minHeight: 0,
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundColor: 'transparent',
        '&::after': {
          content: '" "',
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: 'theme.palette.primary[50]',
          borderRadius: 20,
          zIndex: -1,
          right: 0,
          top: 0,
        },
        '&:hover': {
          // backgroundColor: theme.palette.state.main.hovered,
        },
        '.MuiChip-root': {
          height: 20,
          minWidth: 20,
          color: 'inherit',
          cursor: 'pointer',
          // backgroundColor: theme.palette.primary[100],
          '.MuiChip-label': {
            padding: `0 ${theme.spacing(0.5)}`,
          },
        },
        '&.Mui-selected': {
          // color: theme.palette.on.primary[500].highEmphasis,
          // backgroundColor: theme.palette.primary[500],
          '&::after': {
            // background: theme.palette.primary[500],
          },
          '&:hover': {
            // backgroundColor: theme.palette.state.main.hovered,
          },
        },
      },
    },
  }
}
