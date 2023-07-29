import { Components, Theme } from '@mui/material'

export const createDialogActionsTheme = (theme: Theme): Components['MuiDialogActions'] => {
  return {
    styleOverrides: {
      root: {
        [theme.breakpoints.up('desktopDialog')]: {
          padding: `${theme.spacing(4.5)} ${theme.spacing(5)}`,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        },
        [theme.breakpoints.only('mobileDialog')]: {
          padding: theme.spacing(3),
          flexDirection: 'column',
          '.MuiButton-Wrapper': {
            width: '100%',
          },
          button: {
            width: '100%',
          },
        },
        gap: theme.spacing(2),
        '>:not(:first-of-type)': {
          marginLeft: 0,
        },
      },
    },
  }
}

export const createDialogContentTheme = (theme: Theme): Components['MuiDialogContent'] => {
  return {
    styleOverrides: {
      root: {
        ...theme.typography.body1,
        [theme.breakpoints.up('desktopDialog')]: {
          paddingRight: theme.spacing(5),
          paddingLeft: theme.spacing(5),
        },
        [theme.breakpoints.only('mobileDialog')]: {
          paddingRight: theme.spacing(3),
          paddingLeft: theme.spacing(3),
        },
        margin: 0,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        color: theme.palette.on.surface.mediumEmphasis,
      },
    },
  }
}
export const createDialogContentTextTheme = (theme: Theme): Components['MuiDialogContentText'] => {
  return {
    styleOverrides: {
      root: {
        ...theme.typography.body1,
        color: theme.palette.on.surface.mediumEmphasis,
      },
    },
  }
}

export const createDialogTitleTheme = (theme: Theme): Components['MuiDialogTitle'] => {
  return {
    styleOverrides: {
      root: {
        ...theme.typography.h4,
        color: theme.palette.on.surface.highEmphasis,
        [theme.breakpoints.up('desktopDialog')]: {
          paddingRight: theme.spacing(5),
          paddingLeft: theme.spacing(5),
        },
        [theme.breakpoints.only('mobileDialog')]: {
          paddingRight: theme.spacing(3),
          paddingLeft: theme.spacing(3),
        },
        paddingTop: theme.spacing(4.5),
        paddingBottom: theme.spacing(2),
      },
    },
  }
}
