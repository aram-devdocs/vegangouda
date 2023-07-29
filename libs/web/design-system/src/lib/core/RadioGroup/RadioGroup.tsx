import MuiRadioGroup, {
  RadioGroupProps as MUIProps,
} from '@mui/material/RadioGroup'

export type RadioGroupProps = MUIProps

export const RadioGroup: React.FC<RadioGroupProps> = props => {
  return <MuiRadioGroup sx={{ alignItems:"start" }} {...props}>{props.children}</MuiRadioGroup>
}
