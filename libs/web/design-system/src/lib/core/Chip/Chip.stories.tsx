import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'
import { Avatar } from '../Avatar/Avatar'
import { ChipCount } from '../../components/ChipCount/ChipCount'
import { HeartFillIcon } from '../../icons'
import { useMenu } from '../../hooks'
import { Menu } from '@mui/material'
import { MenuItem } from '../../components/Menu/MenuItem/MenuItem'

const meta: Meta<typeof Chip> = {
  title: 'Design System/Chip/Tag',
  tags: ['autodocs'],
  component: Chip,
}
export default meta

type Story = StoryObj<typeof Chip>

export const WithLabel: Story = {
  args: {
    label: 'My Chip',
  },
}

export const WithLabelIsAlert: Story = {
  args: {
    ...WithLabel.args,
    isAlert: true,
  },
}

export const WithLabelSelected: Story = {
  args: {
    ...WithLabel.args,
    isSelected: true,
  },
}

export const Removable: Story = {
  args: {
    ...WithLabel.args,
    onDelete: () => {
      console.log('Delete')
    },
  },
}

export const RemovableSelected: Story = {
  args: {
    ...WithLabelSelected.args,
    onDelete: () => {
      console.log('Delete')
    },
  },
}

export const withDropdown: Story = {
  render: args => {
    const menu = useMenu()

    return (
      <>
        <Chip label="Other" {...menu.buttonProps} isMenuOpen={menu.open} {...args} />
        <Menu {...menu.menuProps}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </>
    )
  },
  args: {
    ...WithLabel.args,
  },
}

export const withDropdownLeadingIcon: Story = {
  ...withDropdown,
  args: {
    ...WithLabel.args,
    icon: <HeartFillIcon />,
  },
}

export const withDropdownWithAvatar: Story = {
  ...withDropdown,
  args: {
    ...WithLabel.args,
    avatar: <ChipCount label="99" />,
  },
}

export const LeadingIcon: Story = {
  args: {
    ...WithLabel.args,
    icon: <HeartFillIcon />,
  },
}

export const WithAvatar: Story = {
  args: {
    ...WithLabel.args,
    avatar: <Avatar>H</Avatar>,
  },
}

export const WithAvatarRemovable: Story = {
  args: {
    ...WithLabel.args,
    avatar: <Avatar>H</Avatar>,
    onDelete: () => {
      console.log('Delete')
    },
  },
}

export const WithCounter: Story = {
  args: {
    ...WithLabel.args,
    avatar: <ChipCount label="99" />,
    onDelete: () => {
      console.log('Delete')
    },
  },
}

export const Clickable: Story = {
  args: {
    ...WithLabel.args,
    avatar: <ChipCount label="99" />,
    onClick: () => {
      console.log('onClick')
    },
  },
}
