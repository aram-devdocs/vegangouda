import { AttributeScaleLabelProps } from './types'
import { AttributeDestinationLabel } from './AttributeDestinationLabel'
import { AttributeOriginLabel } from './AttributeOriginLabel'
import { BubbleScale } from './BubbleScale'
import { Stack } from '../../core/Stack/Stack'

export const AttributeScaleBelowLabels = ({
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
      sx={{
        marginLeft: 6,
        paddingRight: 0,
        width: 'calc(100% - 48px)',
      }}
    >
      <Stack
        ref={ref}
        display="inline-flex"
        direction="row"
        alignItems="center"
        flexShrink={5}
        spacing={2}
        sx={{
          width: '100%',
        }}
        paddingY={isPrint ? 0.5 : 1}
        {...stackProps}
      >
        <BubbleScale
          sortedBubbles={sortedBubbles}
          verticalPositions={verticalPositions}
          bubblePrintStyles={bubblePrintStyles}
        />
      </Stack>
      <Stack
        ref={ref}
        display="inline-flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{
          width: '100%',
        }}
        paddingY={isPrint ? 0.5 : 1}
        {...stackProps}
      >
        <AttributeOriginLabel
          clusterSelected={clusterSelected}
          originLabel={originLabel}
          sortedBubbles={sortedBubbles}
        />
        <AttributeDestinationLabel
          clusterSelected={clusterSelected}
          destinationLabel={destinationLabel}
          sortedBubbles={sortedBubbles}
        />
      </Stack>
    </Stack>
  )
}
