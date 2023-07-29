import { Components, Theme } from '@mui/material'

export const createFabTheme = (theme: Theme): Components['MuiFab'] => {
  return {
    defaultProps: {
      size: 'medium',
    },
    styleOverrides: {
      root: {
        boxShadow: theme.shadows[6],
        '.Fab-hover-overlay': {
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
      },
    },
    variants: [
      {
        props: { disabled: true },
        style: {
          color: theme.palette.on.button.disabled,
          backgroundColor: theme.palette.button.disabled,
        },
      },
      {
        props: { color: 'secondary' },
        style: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.on.secondary.main.highEmphasis,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            '.Fab-hover-overlay': {
              backgroundColor: theme.palette.state.main.hovered,
            },
          },
        },
      },
      {
        props: { color: 'default' },
        style: {
          backgroundColor: theme.palette.surface.main,
          color: theme.palette.on.surface.highEmphasis,
          '&:hover': {
            backgroundColor: theme.palette.surface.main,
            '.Fab-hover-overlay': {
              backgroundColor: theme.palette.state.surface.hovered,
            },
          },
        },
      },
      {
        props: { variant: 'circular', size: 'medium' },
        style: {
          height: 56,
          width: 56,
        },
      },
      {
        props: { variant: 'circular', size: 'small' },
        style: {
          height: 40,
          width: 40,
        },
      },
    ],
  }
}
