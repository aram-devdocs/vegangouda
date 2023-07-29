import { Components, Theme } from '@mui/material'
import { PersonOutlineIcon } from '../../icons'

export const createAvatarTheme = (theme: Theme): Components['MuiAvatar'] => {
  return {
    defaultProps: {
      children: <PersonOutlineIcon />,
    },
  }
}
