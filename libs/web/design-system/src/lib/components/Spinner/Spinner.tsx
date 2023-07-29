import { keyframes } from '@mui/material'
import { LoadingIcon } from '../../icons'
import { IUnderlying, OnUnderlying } from '../../themes'

export type SpinnerProps = {
  /**
   * Override the icon using highEmphases based on the background color.
   */
  highEmphasisOn?: keyof IUnderlying
}

const iconAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

export const Spinner = ({ highEmphasisOn }: SpinnerProps) => {
  return (
    <LoadingIcon
      sx={{
        animation: `${iconAnimation} 1.5s linear infinite`,
        color: highEmphasisOn ? `${OnUnderlying[highEmphasisOn]}.highEmphasis` : 'primary.main',
        width: 40,
        height: 40,
      }}
    />
  )
}
