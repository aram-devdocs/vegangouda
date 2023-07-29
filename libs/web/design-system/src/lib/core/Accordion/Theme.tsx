import { Components, Theme } from '@mui/material/styles'
import { CaretRightIcon } from '../../icons'

export const createAccordionTheme = (theme: Theme): Components['MuiAccordion'] => {
  return {
    defaultProps: {
      disableGutters: true,
      elevation: 0,
      square: true,
    },
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        '&:before': {
          display: 'none',
        },
      },
    },
  }
}

export const createAccordionActionsTheme = (theme: Theme): Components['MuiAccordionActions'] => {
  return {
    styleOverrides: {
      root: {
        justifyContent: 'flex-start',
        padding: 0,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
    },
  }
}

export const createAccordionDetailsTheme = (theme: Theme): Components['MuiAccordionDetails'] => {
  return {
    styleOverrides: {
      root: {
        padding: 0,
        paddingTop: theme.spacing(2.5),
      },
    },
  }
}

export const createAccordionSummaryTheme = (theme: Theme): Components['MuiAccordionSummary'] => {
  return {
    defaultProps: {
      expandIcon: <CaretRightIcon sx={{ color: theme.palette.on.background.mediumEmphasis }} />,
    },
    styleOverrides: {
      root: {
        color: theme.palette.on.background.mediumEmphasis,
        flexDirection: 'row-reverse',
        minHeight: 0,
        padding: 0,
      },
      content: {
        margin: 0,
        marginLeft: theme.spacing(2),
      },
      expandIconWrapper: {
        '&.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
      },
    },
  }
}
