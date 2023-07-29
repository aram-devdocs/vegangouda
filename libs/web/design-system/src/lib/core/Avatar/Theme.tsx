import { Components, Theme } from '@mui/material/styles'
import { PersonOutlineIcon } from '../../icons'

export const createAvatarTheme = (theme: Theme): Components['MuiAvatar'] => {
  return {
    defaultProps: {
      children: <PersonOutlineIcon />,
    },
  }
}
