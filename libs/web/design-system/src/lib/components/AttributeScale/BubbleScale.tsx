import { Box, Tooltip } from '@vegangouda/design-system'
import { AttributeScaleProps } from './types'

export interface BubbleScaleProps {
  sortedBubbles: AttributeScaleProps['bubbles']
  verticalPositions: number[]
  bubblePrintStyles: Record<string, unknown>
}
export const BubbleScale = ({ sortedBubbles, verticalPositions, bubblePrintStyles }: BubbleScaleProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '1px',
        backgroundColor: 'on.background.mediumEmphasis',
        position: 'relative',
        WebkitPrintColorAdjust: 'exact',
      }}
    >
      {sortedBubbles.map(({ color, id, position, tooltip }, index) => (
        <Tooltip title={tooltip} key={id || index}>
          <Box
            sx={theme => ({
              position: 'absolute',
              left: `${position}%`,
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: color,
              transform: `translate(-50%, calc(-50% + ${verticalPositions[index] * 5}px))`,
              outlineColor: theme.palette.on.background.highEmphasis,
              outlineWidth: 1,
              outlineStyle: 'solid',
              zIndex: verticalPositions[index],
              ...bubblePrintStyles,
            })}
          />
        </Tooltip>
      ))}
    </Box>
  )
}
