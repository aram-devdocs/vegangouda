import { Box, BoxProps } from '../../core/Box/Box'
import { Chip } from '../../core/Chip/Chip'
import { Stack } from '../../core/Stack/Stack'
import { Typography } from '../../core/Typography/Typography'
import { SubdirectoryArrowIcon } from '../../icons'

export interface QuestionBoxRowProps extends Omit<BoxProps, 'children'> {
  chipLabel?: string
  questionText: string
  rightContent?: React.ReactNode
}

export const QuestionBoxRow = ({
  chipLabel,
  questionText,
  rightContent,
  ...restProps
}: QuestionBoxRowProps) => (
  <Box paddingY={2} paddingX={5} {...restProps}>
    <Stack alignItems="center" direction="row" justifyContent="space-between" minHeight={32}>
      <Stack alignItems="center" direction="row" spacing={2} color="on.background.mediumEmphasis">
        <SubdirectoryArrowIcon sx={{ color: 'inherit' }} />
        <Typography variant="body1">{questionText}</Typography>
        {chipLabel && (
          <Chip
            label={chipLabel}
            sx={{ backgroundColor: 'primary.50', color: 'on.primary.50.highEmphasis' }}
          />
        )}
      </Stack>
      {rightContent}
    </Stack>
  </Box>
)
