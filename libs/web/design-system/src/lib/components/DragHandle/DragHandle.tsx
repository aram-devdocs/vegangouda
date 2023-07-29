import { DraggableProvidedDragHandleProps } from '@hello-pangea/dnd'
import { Box } from '../../core/Box/Box'
import { Tooltip } from '../../core/Tooltip/Tooltip'
import { DragIcon } from '../../icons'
import { OnUnderlying } from '../../themes'

export interface DragHandleProps {
  position?: 'top' | 'left'
  dragHandleProps?: DraggableProvidedDragHandleProps | null
  canDrag?: boolean
  show?: boolean
  /** @default false */
  showParentTooltip?: boolean
  label?: string
  parentTooltip?: string
  left?: number
  /**
   * @default 'primary50'
   */
  on?: keyof typeof OnUnderlying
}

export function DragHandle({
  position = 'top',
  on = 'primary50',
  dragHandleProps,
  canDrag = true,
  show = true,
  showParentTooltip = false,
  label = 'Drag',
  parentTooltip,
  left = 0,
}: DragHandleProps) {
  const isTop = position === 'top'

  return (
    <Tooltip title={parentTooltip || ''} open={showParentTooltip}>
      <Box
        {...dragHandleProps}
        className="drag-handle"
        sx={{
          position: 'absolute',
          top: 0,
          bottom: isTop ? undefined : 0,
          left,
          right: isTop ? 0 : undefined,
          mx: isTop ? 'auto' : undefined,
          my: isTop ? undefined : 'auto',
          visibility: show ? undefined : 'hidden',
          zIndex: 999,
          width: '1.5em',
          height: isTop ? '1em' : '1.5em',
          cursor: canDrag ? 'grab' : 'default',
          '&:active': { cursor: canDrag ? 'grabbing' : 'default' },
        }}
      >
        {!showParentTooltip && (
          <Tooltip title={canDrag ? label : ''}>
            <DragIcon
              sx={{
                color: canDrag
                  ? `${OnUnderlying[on]}.highEmphasis`
                  : `${OnUnderlying[on]}.disabled`,
                transform: isTop ? undefined : 'rotate(90deg)',
              }}
            />
          </Tooltip>
        )}
      </Box>
    </Tooltip>
  )
}
