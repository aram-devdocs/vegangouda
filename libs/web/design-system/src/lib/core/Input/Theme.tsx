import { Components, Theme } from '@mui/material'

export const createInputTheme = (theme: Theme): Components['MuiInput'] => {
  return {
    styleOverrides: {
      root: {
        ...theme.typography.body1,
        color: theme.palette.on.background.highEmphasis,
        '&.Mui-disabled:before': {
          borderBottomStyle: 'solid',
        },
        '&:before': {
          borderBottomColor: theme.palette.on.background.highEmphasis,
        },
        '&:after': {
          borderBottomColor: theme.palette.primary.variant,
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottomColor: theme.palette.on.background.highEmphasis,
          borderBottomWidth: 1,
        },
        '&.Mui-error': {
          '&:after': {
            borderBottomWidth: 1,
            borderBottomColor: theme.palette.on.background.error,
          },
          '&.Mui-focused': {
            '&:after': {
              borderBottomWidth: 2,
            },
          },
        },
        '&.Mui-disabled': {
          color: theme.palette.on.button.disabled,
          '&:after, &:before': {
            borderBottomColor: theme.palette.on.button.disabled,
          },
          '&:after': {
            borderBottomWidth: 0,
          },
        },
      },
    },
    variants: [
      {
        props: { disabled: true },
        style: {
          WebkitTextFillColor: theme.palette.on.button.disabled,
          '&:before': {
            borderBottomColor: theme.palette.on.button.disabled,
          },
        },
      },
    ],
  }
}

export const createInputLabelTheme = (theme: Theme): Components['MuiInputLabel'] => {
  return {
    styleOverrides: {
      root: {
        ...theme.typography.body1,
        color: theme.palette.on.background.mediumEmphasis,
        '&.Mui-error': {
          color: theme.palette.error.main,
        },
        '&.Mui-focused': {
          color: theme.palette.on.background.mediumEmphasis,
        },
        '&.Mui-disabled': {
          color: theme.palette.on.background.disabled,
        },
      },
      shrink: {
        ...theme.typography.body2,
        color: theme.palette.on.background.mediumEmphasis,
        '&.Mui-error': {
          color: theme.palette.error.main,
        },
        '&.Mui-disabled': {
          color: theme.palette.on.background.disabled,
        },
      },
      asterisk: {
        color: theme.palette.on.background.error,
      },
    },
  }
}
