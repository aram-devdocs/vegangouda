import { useState } from 'react'

export type MoreMenu = ReturnType<typeof useMenu>

export function useMenu(id?: string) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = !!anchorEl

  const menuId = `${id}-menu`
  const buttonId = `${id}-button`

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuProps = {
    anchorEl,
    open,
    onClose: handleClose,
    ...(id
      ? {
          id: menuId,
          'aria-labelledby': buttonId,
        }
      : {}),
  }

  const buttonProps = {
    onClick: handleOpen,
    ...(id
      ? {
          id: buttonId,
          'aria-controls': open ? menuId : undefined,
          'aria-haspopup': true,
          'aria-expanded': open ? true : undefined,
        }
      : {}),
  }

  return {
    open,
    close: handleClose,
    menuProps,
    buttonProps,
  }
}
