export interface AttributeScaleProps {
  /** Label to be shown before */
  originLabel: string
  /** Label to be shown after */
  destinationLabel: string
  /** Value to determine which label to darken based on bubble position */
  clusterSelected?: number | null
  /** Array of bubbles to be shown, each with a color and a position as a percentage between 0 and 100 */
  bubbles: Array<{
    /** UniqueId of the bubble
     * @default index
     */
    id?: string | number
    /** Color of the bubble */
    color: string
    /** Position of the bubble as a percentage between 0 and 100 */
    position: number
    //** Tooltip text to be shown when the bubble is hovered */
    tooltip: string
  }>
}

export interface AttributeScaleLabelProps extends Omit<AttributeScaleProps, 'bubbles'> {
  isPrint: boolean
  sortedBubbles: AttributeScaleProps['bubbles']
  bubblePrintStyles: {
    width?: string
    height?: string
    backgroundColor?: string
  }
  verticalPositions: Array<number>
  ref: React.ForwardedRef<unknown>
}

export interface AttributeDestinationLabelProps
  extends Omit<AttributeScaleProps, 'originLabel' | 'bubbles'> {
  sortedBubbles: AttributeScaleProps['bubbles']
}

export interface AttributeOriginLabelProps
  extends Omit<AttributeScaleProps, 'destinationLabel' | 'bubbles'> {
  sortedBubbles: AttributeScaleProps['bubbles']
}