import { Components, Theme } from '@mui/material'

export const createTableCellTheme = (theme: Theme): Components['MuiTableCell'] => {
  return {
    styleOverrides: {
      root: {
        '&:first-of-type': {
          paddingLeft: 0,
        },
        '&:last-of-type': {
          paddingRight: 0,
        },
      },
      body: {
        ...theme.typography.body2,
        borderColor: theme.palette.on.background.highEmphasis,
        boxSizing: 'content-box',
        height: 56,
        paddingBottom: 0,
        paddingTop: 0,
      },
      head: {
        ...theme.typography.subtitle2,
        border: 0,
        color: theme.palette.on.background.accent,
        paddingBottom: 0,
        paddingTop: 0,
      },
    },
  }
}

export const createTableRowTheme = (theme: Theme): Components['MuiTableRow'] => {
  return {
    styleOverrides: {
      root: {
        '&:last-child td': {
          border: 0,
        },
      },
    },
  }
}
