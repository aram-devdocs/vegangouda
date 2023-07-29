import { useRef } from 'react'
import { Divider } from '../../core/Divider/Divider'
import { Menu } from '../../core/Menu/Menu'
import { useMenu } from '../../hooks'
import { MenuItem } from '../Menu/MenuItem/MenuItem'
import { FilterButton, FilterButtonProps } from '../FilterButton/FilterButton'

export interface FilterMenuItem<T> {
  id: T
  label: string
  count: number
}

export interface FilterMenuProps<T>
  extends Omit<FilterButtonProps, 'count' | 'tooltip' | 'onClick'> {
  items: FilterMenuItem<T>[]
  selected: T[]
  menuId: string
  buttonTooltip: string
  allLabel: string
  onChange(selected: T[]): void
}

export function FilterMenu<T>({
  items,
  selected,
  menuId,
  buttonTooltip,
  allLabel,
  onChange,
  ...props
}: FilterMenuProps<T>) {
  const menu = useMenu(menuId)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleChange = (selected: T[]) => {
    onChange(selected)
    menu.close()
    setTimeout(() => {
      buttonRef.current?.blur()
    })
  }

  const selectAll = () => {
    if (selected.length > 0) {
      handleChange([])
    }
  }

  const toggle = (item: T) => () => {
    if (selected.includes(item)) {
      handleChange(selected.filter(i => i !== item))
    } else {
      handleChange([...selected, item])
    }
  }

  return (
    <>
      <FilterButton
        ref={buttonRef}
        count={selected.length}
        tooltip={buttonTooltip}
        {...menu.buttonProps}
        {...props}
      />
      <Menu {...menu.menuProps}>
        <MenuItem checked={selected.length === 0} onClick={selectAll}>
          {allLabel}
        </MenuItem>
        <Divider />
        {items.map(({ id, label, count }) => (
          <MenuItem
            key={label}
            checked={selected.includes(id)}
            onClick={toggle(id)}
          >{`${label} (${count})`}</MenuItem>
        ))}
      </Menu>
    </>
  )
}
