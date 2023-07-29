import { useToast } from '../../context/ToastProvider'
import { useEffect, useState } from 'react'
import { Snackbar } from '../../core/Snackbar/Snackbar'
import { Alert } from '../../core/Alert/Alert'
import { useIntercom } from 'react-use-intercom'

export function Toast() {
  const { toast } = useToast()
  const { update: updateIntercom} = useIntercom()
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (toast){  
      updateIntercom({ hideDefaultLauncher: true })   
      setOpen(true)
    }
    return () => {
      setHovered(false)
    }
  }, [toast])

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    updateIntercom({ hideDefaultLauncher: false })
  }

  const handleMouseEnter = () => {
    setHovered(true)
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={
        toast?.position === 'top-middle'
          ? { vertical: 'top', horizontal: 'center' }
          : { vertical: 'bottom', horizontal: 'right' }
      }
      disableWindowBlurListener
      onClose={handleClose}
      autoHideDuration={hovered ? null : 10000}
      onMouseEnter={handleMouseEnter}
      sx={{
        '.MuiAlert-root': { paddingX: 3, paddingY: 2 },
      }}
    >
      <Alert severity={toast?.type ?? 'info'} onClose={handleClose} action={toast?.action}>
        {toast?.message}
      </Alert>
    </Snackbar>
  )
}
