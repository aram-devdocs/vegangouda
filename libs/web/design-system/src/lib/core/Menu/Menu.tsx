import {
  ClickAwayListener,
  Grow,
  MenuList,
  MenuListProps,
  Paper,
  Popper,
  PopperProps,
} from '@mui/material'
import { forwardRef, useEffect, useRef } from 'react'
import { SxPosition, mergeSx } from '../../themes'

type ListProps = Pick<MenuListProps, 'children' | 'onKeyDown'>
type PopperPropsPick = Pick<PopperProps, 'placement' | 'modifiers'>

const menuWidth = {
  small: 112,
  medium: 168,
  large: 224,
  xlarge: 280,
}

export type MenuProps = ListProps &
  PopperPropsPick & {
    anchorEl: HTMLElement | null
    ariaLabel?: string
    ariaLabelledby?: string
    id?: string
    disablePointerEvents?: boolean
    open: boolean
    size?: 'small' | 'medium' | 'large' | 'xlarge'
    sx?: SxPosition
    /** @default 9999 */
    zIndex?: number
    onClose?: VoidFunction
  }

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      anchorEl,
      ariaLabel,
      ariaLabelledby,
      id,
      children,
      disablePointerEvents,
      modifiers,
      open,
      placement = 'bottom-start',
      size,
      sx,
      zIndex = 9999,
      onClose,
    },
    ref,
    ...rest
  ) => {
    const prevOpen = useRef(open)
    const minWidth = size ? menuWidth[size] : undefined

    const paperSx = sx || {}

    function handleListKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Tab') {
        event.preventDefault()
        onClose?.()
      } else if (event.key === 'Escape') {
        onClose?.()
      }
    }

    // return focus to the button when we transitioned from !open -> open
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorEl?.focus()
      }

      prevOpen.current = open
    }, [open, anchorEl])

    function handleClose() {
      onClose?.()
    }

    return (
      <Popper
        ref={ref}
        open={open}
        role={undefined}
        anchorEl={anchorEl}
        placement={placement}
        transition
        style={{ zIndex }}
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        modifiers={modifiers}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper sx={mergeSx({ minWidth }, paperSx)}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  style={{ pointerEvents: disablePointerEvents ? 'none' : undefined }}
                  autoFocusItem={open}
                  onKeyDown={handleListKeyDown}
                  id={id}
                  aria-labelledby={ariaLabelledby}
                  aria-label={ariaLabel}
                  {...rest}
                >
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    )
  },
)
