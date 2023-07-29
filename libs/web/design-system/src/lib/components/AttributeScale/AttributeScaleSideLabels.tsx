import { Box, Stack, Tooltip, Typography } from '@vegangouda/design-system'
import { AttributeScaleLabelProps } from './types'
import { AttributeOriginLabel } from './AttributeOriginLabel'
import { AttributeDestinationLabel } from './AttributeDestinationLabel'
import { BubbleScale } from './BubbleScale'

export const AttributeScaleSideLabels = ({
  isPrint,
  sortedBubbles,
  originLabel,
  destinationLabel,
  clusterSelected,
  bubblePrintStyles,
  verticalPositions,
  ref,
  ...stackProps
}: AttributeScaleLabelProps) => {
  return (
    <Stack
      data-testid="AnswersAttributeScale"
      ref={ref}
      display="inline-flex"
      direction="row"
      alignItems="center"
      spacing={2}
      width="100%"
      minHeight={32}
      paddingY={isPrint ? 0.5 : 0}
      {...stackProps}
    >
      <AttributeOriginLabel
        clusterSelected={clusterSelected}
        originLabel={originLabel}
        sortedBubbles={sortedBubbles}
      />
      <BubbleScale
        sortedBubbles={sortedBubbles}
        verticalPositions={verticalPositions}
        bubblePrintStyles={bubblePrintStyles}
      />
      <AttributeDestinationLabel
        clusterSelected={clusterSelected}
        destinationLabel={destinationLabel}
        sortedBubbles={sortedBubbles}
      />
    </Stack>
  )
}
