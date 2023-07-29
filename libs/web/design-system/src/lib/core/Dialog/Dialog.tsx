import MuiDialog, { DialogProps as MUIDialogProps } from '@mui/material/Dialog'
import MuiDialogContent, {
  DialogContentProps as MUIDialogContentProps,
} from '@mui/material/DialogContent'
import { useOverflow } from '../../hooks'

export { DialogActions, DialogContentText, DialogTitle } from '@mui/material'
export type { DialogActionsProps, DialogContentTextProps, DialogTitleProps } from '@mui/material'
export type DialogContentProps = MUIDialogContentProps

export const Dialog = (props: MUIDialogProps) => {
  return (
    <MuiDialog
      disableEscapeKeyDown={true}
      {...props}
      PaperProps={{
        sx: {
          '.MuiDialogTitle-root+.MuiDialogContent-root': {
            paddingTop: 3,
          },
          margin: 0,
          borderRadius: 0,
          maxWidth: {
            mobileDialog: 'calc(100vw - 32px)',
            desktopDialog: '560px',
          },
          minWidth: {
            desktopDialog: '560px',
          },
          maxHeight: {
            mobileDialog: 'calc(100vh - 32px)',
            desktopDialog: 'calc(100vh - 128px)',
          },
        },
      }}
    />
  )
}

export const DialogContent = (props: MUIDialogContentProps) => {
  const { ref, hasOverflowY } = useOverflow()

  return <MuiDialogContent {...props} dividers={hasOverflowY} ref={ref} />
}
