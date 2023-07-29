import { Components, Theme } from '@mui/material'

export const createChipTheme = (theme: Theme): Components['MuiChip'] => {
  function getTextAndBackgroundColors(color?: string) {
    return {
      textColor:
        color === 'warning'
          ? theme.palette.on.error.highEmphasis
          : theme.palette.on.primary[100].highEmphasis,
      backgroundColor: color === 'warning' ? theme.palette.error.main : theme.palette.primary[300],
    }
  }

  return {
    styleOverrides: {
      root: ({ ownerState }) => {
        const { textColor, backgroundColor } = getTextAndBackgroundColors(ownerState.color)
        return {
          ...theme.typography.body2,
          backgroundColor: 'transparent',
          color: textColor,
          position: 'relative',
          '&::before': {
            content: '" "',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'transparent',
            borderRadius: 16,
            zIndex: 1,
          },
          '&::after': {
            content: '" "',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor,
            borderRadius: 16,
            zIndex: 0,
          },
          '&.MuiButtonBase-root:hover': {
            '&::before': {
              backgroundColor: theme.palette.state.main.hovered,
            },
          },
          '> *': {
            zIndex: 2,
          },
          '&:focus': {
            outlineColor: theme.palette.primary.variant,
            outlineStyle: 'solid',
            outlineWidth: 3,
          },
        }
      },
      avatar: {
        ...theme.typography.body2,
        backgroundColor: theme.palette.background.main,
        color: theme.palette.on.primary[50].highEmphasis,
        marginRight: '6px',
      },
      icon: ({ ownerState }) => {
        const { textColor } = getTextAndBackgroundColors(ownerState.color)

        return {
          color: textColor,
          width: 20,
          height: 20,
          marginRight: '6px',
          marginLeft: '6px',
        }
      },
      deleteIcon: ({ ownerState }) => {
        const { textColor } = getTextAndBackgroundColors(ownerState.color)

        return {
          width: 18,
          height: 18,
          marginRight: '6px',
          marginLeft: '6px',
          '&, &:hover': {
            color: textColor,
          },
        }
      },
    },
  }
}
