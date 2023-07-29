import { Stack } from '../../core/Stack/Stack'
import { Typography, TypographyProps } from '../../core/Typography/Typography'
import { Bullet } from '../Bullet/Bullet'
import { Tooltip } from '../../core/Tooltip/Tooltip'

export interface QuestionBoxHeaderProps {
  questionText: string
  subQuestionText?: string | null
  questionNumber: string | number
  rightContent?: React.ReactNode
  tooltip?: string
  toggle?: React.ReactNode
  questionTextProps?: TypographyProps
}

export function QuestionBoxHeader({
  questionNumber,
  questionText,
  subQuestionText,
  questionTextProps,
  rightContent,
  tooltip = '',
  toggle,
}: QuestionBoxHeaderProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" padding={2}>
      <Stack spacing={2} direction="row" alignItems="center" color="on.background.highEmphasis">
        {toggle}
        <Tooltip title={tooltip}>
          <Bullet>{questionNumber}</Bullet>
        </Tooltip>
        <Typography variant="h6" marginRight="auto" {...questionTextProps}>
          {questionText}
        </Typography>
        {subQuestionText && (
          <Typography marginRight="auto" {...questionTextProps}>
            {subQuestionText}
          </Typography>
        )}
      </Stack>
      {rightContent}
    </Stack>
  )
}
