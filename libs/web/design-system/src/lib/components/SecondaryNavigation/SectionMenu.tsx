import { ButtonBase } from '@mui/material'
import { SvgIconComponent } from '../../icons'
import { useState } from 'react'
import { Box } from '../../core/Box/Box'
import { Menu } from '../../core/Menu/Menu'
import { MenuItem } from '../Menu/MenuItem/MenuItem'
import { Stack } from '../../core/Stack/Stack'
import { NavLink } from 'react-router-dom'
import { CaretDownIcon, CaretUpIcon } from '../../icons'
import { SectionItem } from './SectionItem'

export interface SectionMenuProps {
  label: string
  icon: React.ElementType
  items?: SecondaryNavigationMenuItem[]
}
export interface SecondaryNavigationMenuItem {
  /** Unique id of the nav item */
  id: string
  /** Label to display */
  label: string
  /** Icon to show as a React node */
  icon?: SvgIconComponent
  /** React router to link */
  to?: string
  /** External href to link */
  href?: string
  /** Item is locked */
  locked?: boolean
  /** Set to true if item is selected */
  selected?: boolean
}

export function SectionMenu({ label, icon: Icon, items }: SectionMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const onClickSection = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const renderItem = (item: SecondaryNavigationMenuItem) => {
    return (
      <MenuItem
        key={item.id}
        to={item.to}
        href={item.href}
        component={item.to ? NavLink : 'a'}
        selected={item.selected}
        icon={item.icon}
        titleProps={{
          color: item.locked ? 'on.surface.disabled' : 'on.background.highEmphasis',
        }}
        iconProps={{
          sx: {
            color: item.locked ? 'on.surface.disabled' : 'on.background.highEmphasis',
          },
        }}
      >
        {item.label}
      </MenuItem>
    )
  }

  if (!items || !items.length || (items.length === 1 && items[0].label === label)) {
    return <SectionItem label={label} icon={Icon} />
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.25}
      sx={{
        '.NavigationButton:hover': {
          backgroundColor: 'state.background.hovered',
        },
      }}
    >
      <ButtonBase
        onClick={onClickSection}
        disableRipple
        className="NavigationButton"
        aria-controls={open ? 'navigation-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          typography: {
            xs: 'body2',
            sm: 'h6',
          },
          paddingLeft: 1,
          paddingRight: 0.5,
          color: 'on.background.highEmphasis',
        }}
      >
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Icon
            sx={{
              fontSize: {
                xs: '2.0rem',
                sm: '2.4rem',
              },
            }}
          />
          <Box>{label}</Box>
          {open ? <CaretUpIcon /> : <CaretDownIcon />}
        </Stack>
      </ButtonBase>
      <Menu id="navigation-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items?.map(renderItem)}
      </Menu>
    </Stack>
  )
}
