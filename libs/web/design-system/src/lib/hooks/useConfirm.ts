import { useState } from 'react'

export function useConfirm(
  onConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  onCancel?: () => void
) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    onConfirm?.(event)
    handleClose()
  }

  const handleCancel = () => {
    onCancel?.()
    handleClose()
  }

  return {
    buttonProps: { onClick: handleOpen, onClose: handleClose },
    dialogProps: { open, onConfirm: handleConfirm, onCancel: handleCancel }
  }
}
