import MuiButtonGroup, { ButtonGroupProps as MUIProps } from '@mui/material/ButtonGroup'

export type ButtonGroupProps = MUIProps

export const ButtonGroup: typeof MuiButtonGroup = (props: MUIProps) => <MuiButtonGroup {...props} />