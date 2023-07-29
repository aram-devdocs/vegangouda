import { Box } from '../../core/Box/Box'
import { Stack } from '../../core/Stack/Stack'
import { Button } from '../../core/Button/Button'
import { Typography } from '../../core/Typography/Typography'
import { CloseIcon } from '../../icons'

export interface SidePanelHeaderTitleProps {
  title: string
  onClose: VoidFunction
}

export function SidePanelHeaderTitle({ title, onClose }: SidePanelHeaderTitleProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        marginRight={1}
        marginLeft={3}
        sx={{
          height: 64,
          color: 'on.secondary.main.highEmphasis',
        }}
      >
        <Stack direction="row" alignItems="center" flexGrow={1}>
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Button
          tooltip="Close"
          variant="text"
          on="secondary"
          icon={<CloseIcon />}
          size="small"
          onClick={onClose}
          label="Close"
        />
      </Stack>
    </Box>
  )
}
