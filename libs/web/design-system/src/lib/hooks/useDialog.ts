import { useState } from 'react'

export function useDialog() {
  const [open, setOpen] = useState(false)

  return {
    buttonProps: { onClick: () => setOpen(true) },
    dialogProps: { open, onClose: () => setOpen(false) },
  }
}
