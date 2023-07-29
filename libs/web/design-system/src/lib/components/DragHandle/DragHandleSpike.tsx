import { DraggableAttributes } from '@dnd-kit/core'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { Box } from '../../core/Box/Box'
import { Tooltip } from '../../core/Tooltip/Tooltip'
import { DragIcon } from '../../icons'
import { OnUnderlying } from '../../themes'

export type DragHandleSpikeProps = {
  attributes?: DraggableAttributes
  listeners?: SyntheticListenerMap
}

type Props = {
  /** @default true */
  allowKeyboardNavigation?: boolean
  position?: 'top' | 'left'
  dragHandleProps?: DragHandleSpikeProps
  canDrag?: boolean
  show?: boolean
  /** @default false */
  showParentTooltip?: boolean
  label?: string
  parentTooltip?: string
  /**
   * @default 'primary50'
   */
  on?: keyof typeof OnUnderlying
}

export function DragHandleSpike({
  allowKeyboardNavigation = true,
  position = 'top',
  on = 'primary50',
  dragHandleProps,
  canDrag = true,
  show = true,
  showParentTooltip = false,
  label = 'Drag',
  parentTooltip,
}: Props) {
  const isTop = position === 'top'

  return (
    <Tooltip title={parentTooltip || ''} open={showParentTooltip}>
      <Box
        {...dragHandleProps?.attributes}
        {...dragHandleProps?.listeners}
        tabIndex={allowKeyboardNavigation ? 0 : -1}
        className="drag-handle"
        sx={{
          position: 'absolute',
          top: 0,
          bottom: isTop ? undefined : 0,
          left: 0,
          right: isTop ? 0 : undefined,
          mx: isTop ? 'auto' : undefined,
          my: isTop ? undefined : 'auto',
          visibility: show ? undefined : 'hidden',
          zIndex: 999,
          width: isTop ? '1.7em' : '1em',
          height: isTop ? '1em' : '1.7em',
        }}
      >
        {!showParentTooltip && (
          <Tooltip title={canDrag ? label : ''}>
            <DragIcon
              sx={{
                color: canDrag
                  ? `${OnUnderlying[on]}.highEmphasis`
                  : `${OnUnderlying[on]}.disabled`,
                transform: isTop ? 'rotate(90deg)' : undefined,
              }}
            />
          </Tooltip>
        )}
      </Box>
    </Tooltip>
  )
}
