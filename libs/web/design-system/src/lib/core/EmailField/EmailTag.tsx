import { PencilIcon, CloseCircleIcon } from '../../icons'
import { Stack } from '../Stack/Stack'
import { Tooltip } from '../Tooltip/Tooltip'
import { Typography } from '../Typography/Typography'
import { isValidEmail } from '@indr/web/util-validators'

export interface EmailTagProps {
  value: string
  error: boolean
  index: number
  onEdit: (value: string, index: number) => void
  onDelete: (index: number) => void
}

export const EmailTag = ({ error, onEdit, onDelete, value, index }: EmailTagProps) => {
  const color = error ? 'on.background.error' : 'on.primary.50.highEmphasis'
  const backgroundColor = error ? 'background.main' : 'primary.50'
  const borderColor = error ? 'on.background.error' : 'primary.50'
  const borderRadius = error ? 23 : 21

  return (
    <Stack
      direction="row"
      alignItems={'center'}
      flexWrap="nowrap"
      maxWidth="100%"
      height="auto"
      key={value}
      spacing={1}
      sx={{
        backgroundColor,
        borderColor,
        color,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius,
        paddingY: 1,
        paddingX: 1.25,
        '&:hover': {
          cursor: 'default',
        },
      }}
    >
      <Tooltip title="Edit">
        <PencilIcon
          fontSize="small"
          color="inherit"
          onClick={() => onEdit(value, index)}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        />
      </Tooltip>
      <Tooltip title={error ? (isValidEmail(value) ? "Duplicated email" : "Invalid email") : value}>
        <Typography noWrap sx={{ typography: 'h6' }}>
          {value}
        </Typography>
      </Tooltip>
      <Tooltip title="Delete">
        <CloseCircleIcon
          fontSize="small"
          color="inherit"
          onClick={() => onDelete(index)}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        />
      </Tooltip>
    </Stack>
  )
}
