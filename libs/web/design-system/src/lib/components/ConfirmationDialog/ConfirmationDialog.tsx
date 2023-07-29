import { Button } from '../../core/Button/Button'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '../../core/Dialog/Dialog'

export interface ConfirmationDialogProps {
  /** @default false */
  disableEscapeKeyDown?: boolean
  /** @default Cancel */
  cancelLabel?: string
  confirmLabel: string
  isConfirmDisabled?: boolean
  isProcessingConfirm?: boolean
  message: React.ReactNode
  open: boolean
  /** @default Confirmation Required */
  title?: string
  onConfirm(event: React.MouseEvent<HTMLButtonElement>): void
  onCancel(): void
}

export function ConfirmationDialog({
  disableEscapeKeyDown = false,
  cancelLabel = 'Cancel',
  confirmLabel,
  isConfirmDisabled,
  isProcessingConfirm,
  message,
  open,
  title = 'Confirmation Required',
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  const titleId = 'confirmation-dialog-title'

  const handleClose = (event: unknown, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (reason && reason === 'backdropClick') return
    onCancel()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby={titleId}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >
      <DialogTitle id={titleId}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText component="div">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          label={confirmLabel}
          variant="contained"
          disabled={isConfirmDisabled}
          loading={isProcessingConfirm}
          onClick={onConfirm}
        />
        <Button
          label={cancelLabel}
          variant="outlined"
          disabled={isProcessingConfirm}
          autoFocus
          onClick={onCancel}
          on="surface"
        />
      </DialogActions>
    </Dialog>
  )
}
