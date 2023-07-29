import { Paper } from '@vegangouda/design-system'

export const shadowOffset = 3.5
export function CardShadow() {
  return (
    <Paper
      variant="outlined"
      square
      sx={theme => ({
        backgroundColor: 'state.background.hovered',
        borderColor: 'common.black',
        position: 'absolute',
        top: theme.spacing(shadowOffset),
        left: theme.spacing(shadowOffset),
        bottom: theme.spacing(-shadowOffset),
        right: theme.spacing(-shadowOffset),
      })}
    />
  )
}
