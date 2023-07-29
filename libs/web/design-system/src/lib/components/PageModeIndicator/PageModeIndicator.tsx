import { forwardRef } from 'react'
import { Stack } from '../../core/Stack/Stack'
import { DroppingMessage } from './DroppingMessage'
import { UndoMessage } from './UndoMessage'

export enum PageModeStatus {
  Dropping = 'dropping',
  Editing = 'editing',
}
export interface PageModeIndicatorProps {
  isFixed?: boolean
  status?: PageModeStatus | null
  onClick?: VoidFunction
}

export const PageModeIndicator = forwardRef<HTMLDivElement, PageModeIndicatorProps>(
  ({ isFixed, status, onClick }, ref) => {
    if (status === undefined) return null

    return (
      <Stack
        spacing={3}
        alignItems="center"
        width="fit-content"
        ref={ref}
        sx={
          isFixed
            ? {
                position: 'fixed',
                transform: 'translateX(-50%)',
                left: '50%',
                top: 28,
                zIndex: 300,
              }
            : undefined
        }
      >
        {status === PageModeStatus.Dropping && <DroppingMessage onClick={onClick} />}
        {status === PageModeStatus.Editing && <UndoMessage onClick={onClick} />}
      </Stack>
    )
  },
)
