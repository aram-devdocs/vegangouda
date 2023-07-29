import { PropsWithChildren } from 'react'
import { Stack } from '../../core/Stack/Stack'
import { Paper } from '../../core/Paper/Paper'
export { QuestionBoxHeader } from './QuestionBoxHeader'
export { QuestionBoxRow } from './QuestionBoxRow'

export type QuestionBoxProps = {
  clusterSelected?: number | null
} & PropsWithChildren

export function QuestionBox({ clusterSelected, children }: QuestionBoxProps) {
  const stackStyle = {
    '>div:not(:last-child)': {
      borderWidth: 'thin',
      borderBottomStyle: 'solid',
      borderBottomColor: 'primary.50',
    },
  }
  const paperStyle = {
    borderColor: 'primary.100',
    backgroundColor: 'transparent',
  }
  return (
    <Paper
      variant={clusterSelected ? undefined : 'outlined'}
      square
      sx={
        clusterSelected
          ? {
              ...paperStyle,
              boxShadow: 'none',
            }
          : paperStyle
      }
    >
      <Stack sx={stackStyle}>{children}</Stack>
    </Paper>
  )
}
