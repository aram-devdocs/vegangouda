import { Box } from '../../core/Box/Box'
import { Typography } from '../../core/Typography/Typography'
import { SvgIconComponent } from '../../icons'

export type KeyIndicatorProps = {
  label?: string
  icon?: SvgIconComponent
}

export function KeyIndicator({ label, icon: Icon }: KeyIndicatorProps) {
  if (!label && !Icon) return null
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingY: label ? 0.25 : 0.5,
        paddingX: 0.5,
        backgroundColor: 'surface.main',
        borderRadius: '2px',
      }}
    >
      {label ? (
        <Typography variant="caption" color="on.surface.highEmphasis">
          {label}
        </Typography>
      ) : (
        Icon && <Icon sx={{ color: 'on.surface.highEmphasis', width: 12, height: 12 }} />
      )}
    </Box>
  )
}
