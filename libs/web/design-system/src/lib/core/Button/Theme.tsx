import { Components, Theme } from '@mui/material'

export const createButtonTheme = (theme: Theme): Components['MuiButton'] => {
  return {
    defaultProps: {
      disableElevation: true,
      size: 'medium',
    },
    styleOverrides: {
      root: {
        minWidth: 0,
        '.Button-hover-overlay': {
          overflow: 'hidden',
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: 'inherit',
        },
        '.MuiButton-startIcon>*:nth-of-type(1), .MuiButton-endIcon>*:nth-of-type(1), svg': {
          fontSize: '2rem',
        },
      },
    },
    variants: [
      {
        props: { size: 'small' },
        style: {
          ...theme.typography.button,
          padding: `${theme.spacing(1.25)} ${theme.spacing(3.25)}`,
        },
      },
      {
        props: { size: 'medium' },
        style: {
          padding: `${theme.spacing(2.25)} ${theme.spacing(5.25)}`,
        },
      },
      {
        props: { size: 'small', variant: 'outlined' },
        style: {
          padding: `${theme.spacing(1.125)} ${theme.spacing(3.125)}`,
        },
      },
      {
        props: { size: 'medium', variant: 'outlined' },
        style: {
          padding: `${theme.spacing(2.125)} ${theme.spacing(5.125)}`,
        },
      },
      {
        props: { color: 'error' },
        style: {
          color: theme.palette.error.main,
          borderColor: theme.palette.error.main,
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: theme.palette.error.main,
          },
        },
      },
      {
        props: { variant: 'contained' },
        style: {
          color: theme.palette.on.button.highEmphasis,
          backgroundColor: theme.palette.button.main,
          '&:hover': {
            backgroundColor: theme.palette.button.main,
            '&.MuiLoadingButton-root .Button-hover-overlay': {
              backgroundColor: theme.palette.state.button.hovered,
            },
          },
        },
      },
      {
        props: { variant: 'contained', disabled: true },
        style: {
          color: theme.palette.on.button.disabled,
          backgroundColor: theme.palette.button.disabled,
          '&.MuiLoadingButton-root.Mui-disabled': {
            backgroundColor: theme.palette.button.disabled,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'error' },
        style: {
          color: theme.palette.on.error.highEmphasis,
          backgroundColor: theme.palette.error.main,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
          },
        },
      },
      {
        props: { variant: 'ghost' },
        style: {
          padding: 0,
          '.MuiButton-startIcon': {
            marginLeft: 0,
            marginRight: 0.5,
          },
          '.MuiButton-endIcon': {
            marginLeft: 0.5,
            marginRight: 0,
          },
        },
      },
    ],
  }
}
