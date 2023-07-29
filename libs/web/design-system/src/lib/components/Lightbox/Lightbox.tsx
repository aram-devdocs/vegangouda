import { Dialog } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Box } from '../../core/Box/Box'
import { Button } from '../../core/Button/Button'
import { CloseIcon } from '../../icons'

export type LightboxProps = PropsWithChildren<{
  open: boolean
  maxHeight?: string | number
  onClose(): void
}>

export function Lightbox({ children, open, maxHeight, onClose, ...props }: LightboxProps) {
  const handleClose = (event: Event, reason?: string) => {
    if (reason === 'backdropClick') {
      return
    }

    onClose()
  }

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      onClose={handleClose}
      PaperProps={{
        square: true,
        sx: {
          marginX: 0,
          width: '100%',
          maxWidth: '100%',
          ...(maxHeight != null
            ? {
                height: 'calc(100% - 64px)',
                maxHeight,
              }
            : {}),
        },
      }}
      {...props}
    >
      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <Button label="Close" variant="contained" onClick={onClose} icon={<CloseIcon />} />
      </Box>
      {children}
    </Dialog>
  )
}

export default Lightbox
