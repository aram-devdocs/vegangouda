import { CircularProgress, Dialog, DialogContent, Typography } from '@vegangouda/web/design-system'

export interface LoadingDialogProps {
  message: string
  open: boolean
}

export function LoadingDialog({ message, open }: LoadingDialogProps) {
  return (
    <Dialog open={open} aria-labelledby="loading-dialog-message">
      <DialogContent sx={{ textAlign: 'center', color: 'on.surface.highEmphasis' }}>
        <CircularProgress size={48} sx={{ marginBottom: 2, color: 'primary.900' }} />
        <Typography id="loading-dialog-message" typography="h5">
          {message}
        </Typography>
      </DialogContent>
    </Dialog>
  )
}
