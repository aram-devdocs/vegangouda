import { Underlying } from '../../../themes/types'
import { ButtonProps } from '../Button'

export interface ButtonStoryProps extends ButtonProps {
  on: keyof typeof Underlying
}
