import { forwardRef, PropsWithChildren, useCallback, useEffect } from 'react'
import { useIntercom } from 'react-use-intercom'
import { Drawer } from '../../core/Drawer/Drawer'
import { Stack } from '../../core/Stack/Stack'
import { SidePanelHeaderTitle } from './SidePanelHeaderTitle'
export { SidePanelHeader } from './SidePanelHeader'
export { SidePanelFooter } from './SidePanelFooter'
export { SidePanelContent } from './SidePanelContent'

export type SidePanelProps = PropsWithChildren<{
  open: boolean
  /** @default ShellContainer */
  containerClassName?: string
  /** @default medium */
  size?: 'small' | 'medium' | 'large'
  title: string
  onClose: VoidFunction
}>

const widthSize = {
  small: 320,
  medium: 400,
  large: 500,
}

export const SidePanel = forwardRef<HTMLDivElement, SidePanelProps>(
  (
    { children, containerClassName = 'ShellContainer', size = 'medium', open, title, onClose },
    ref,
  ) => {
    const width = widthSize[size]
    const { update: updateIntercom } = useIntercom()
    const handleContainerPadding = useCallback(
      (isSidePanelVisible: boolean) => {
        const shellContainer = document.querySelector(
          `div.${containerClassName}`,
        ) as HTMLDivElement | null
        const blueprintContainer = document.querySelector('#blueprintView') as HTMLDivElement | null
        if (shellContainer) {
          shellContainer.style.paddingRight = isSidePanelVisible ? `${width}px` : ''
          shellContainer.style.width = isSidePanelVisible ? `calc(100% + ${width}px)` : ''
        }
        if (blueprintContainer) {
          blueprintContainer.style.paddingRight = isSidePanelVisible ? `${width}px` : ''
        }
      },
      [containerClassName, width],
    )

    useEffect(() => {
      handleContainerPadding(open)
      if (open) {
        updateIntercom({ horizontalPadding: width + 20 })
      }
      return () => {
        handleContainerPadding(false)
        updateIntercom({ horizontalPadding: 20 })
      }
    }, [handleContainerPadding, open])

    return (
      <Drawer
        sx={{
          backgroundColor: 'surface.main',
        }}
        anchor={'right'}
        open={open}
        onClose={onClose}
        variant="temporary"
        BackdropProps={{ invisible: true }}
        ModalProps={{
          disableEnforceFocus: true,
          hideBackdrop: true,
          disableScrollLock: true,
          sx: {
            left: 'auto',
            width: {
              xs: '100%',
              md: width,
            },
            '>.MuiPaper-root': {
              width: {
                xs: '100%',
                md: width,
              },
            },
          },
        }}
        PaperProps={{ ref }}
      >
        <SidePanelHeaderTitle onClose={onClose} title={title} />
        <Stack sx={{ overflow: 'auto', height: '100%' }}>{children}</Stack>
      </Drawer>
    )
  },
)
