import { Typography } from '@vegangouda/design-system'
import { AttributeOriginLabelProps } from './types'
export const AttributeOriginLabel = ({
  clusterSelected,
  originLabel,
  sortedBubbles,
}: AttributeOriginLabelProps) => {
  const textColor = clusterSelected
    ? sortedBubbles[0].position < 49
      ? 'on.background.highEmphasis'
      : sortedBubbles[0].position < 51
      ? 'on.background.highEmphasis'
      : 'on.background.disabled'
    : 'on.background.highEmphasis'

  return (
    <Typography
      textAlign={clusterSelected ? 'left' : 'right'}
      variant="caption"
      sx={{
        width: clusterSelected ? '50%' : 96,
        color: textColor,
      }}
    >
      {originLabel}
    </Typography>
  )
}
