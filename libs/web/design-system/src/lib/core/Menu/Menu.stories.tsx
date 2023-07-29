import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'
import { Button } from '../Button/Button'
import { MenuItem } from '../../components/Menu/MenuItem/MenuItem'
import { useMenu } from '../../hooks/useMenu'

const meta: Meta<typeof Menu> = {
  title: 'Design System/Menu',
  tags: ['autodocs'],
  component: Menu,
}
export default meta

type Story = StoryObj<typeof Menu>

export const WithMenuItem: Story = {
  render: args => (
    <Menu {...args}>
      <MenuItem>Item One</MenuItem>
      <MenuItem>Item Two</MenuItem>
      <MenuItem>Item Three</MenuItem>
    </Menu>
  ),
  args: {
    open: true,
  },
}

function Wrapper() {
  const menu = useMenu('storybook-menu')

  return (
    <div style={{ height: 900, minWidth: 500, border: 'solid 1px black' }}>
      <Button {...menu.buttonProps} label="Open Menu" variant="contained" size="small" />
      <Menu {...menu.menuProps}>
        <MenuItem>Item One</MenuItem>
        <MenuItem>Item Two</MenuItem>
        <MenuItem>Item Three</MenuItem>
      </Menu>
    </div>
  )
}
export const WithPageScroll: Story = {
  render: () => <Wrapper />,
}
