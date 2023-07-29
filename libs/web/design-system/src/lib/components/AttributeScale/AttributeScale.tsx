import { useMediaQuery } from '@vegangouda/design-system'
import { sortBy } from 'lodash'
import { forwardRef, useMemo } from 'react'
import { AttributeScaleBelowLabels } from './AttributeScaleBelowLabels'
import { AttributeScaleSideLabels } from './AttributeScaleSideLabels'
import { AttributeScaleProps } from './types'

export const AttributeScale = forwardRef<unknown, AttributeScaleProps>(
  ({ originLabel, destinationLabel, bubbles, clusterSelected, ...stackProps }, ref) => {
    const sortedBubbles = useMemo(
      () =>
        sortBy(bubbles, bubble => bubble.position).filter(
          ({ position }) => position >= 0 && position <= 100,
        ),
      [bubbles],
    )

    const verticalPositions = useMemo(() => {
      // Controls the y position of bubbles so that we can prevent bubbles to be overriden
      let current = 0
      let symbol = 1

      return sortedBubbles.map((bubble, index) => {
        if (index >= 1 && sortedBubbles[index - 1].position === bubble.position) {
          current += 1
        } else {
          current = 0
        }
        symbol = -symbol

        return Math.floor((current + 1) / 2) * symbol
      })
    }, [sortedBubbles])

    const isPrint = useMediaQuery('print')
    const bubblePrintStyles = isPrint
      ? {
          width: '8px',
          height: '8px',
          backgroundColor: 'on.background.highEmphasis',
        }
      : {}

    if (!sortedBubbles.length) {
      return null
    }

    const AttributeScale = clusterSelected ? AttributeScaleBelowLabels : AttributeScaleSideLabels
    return (
      <AttributeScale
        isPrint={isPrint}
        sortedBubbles={sortedBubbles}
        originLabel={originLabel}
        destinationLabel={destinationLabel}
        clusterSelected={clusterSelected}
        bubblePrintStyles={bubblePrintStyles}
        verticalPositions={verticalPositions}
        ref={ref}
        {...stackProps}
      />
    )
  },
)
