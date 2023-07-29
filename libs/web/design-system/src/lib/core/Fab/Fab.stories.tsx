import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PlusIcon } from '../../icons'
import { Fab } from './Fab'

const meta: Meta<typeof Fab> = {
  title: 'Design System/Button Floating Action',
  tags: ['autodocs'],
  component: Fab,
}
export default meta

type Story = StoryObj<typeof Fab>

export const Default: Story = {
  args: {
    children: <PlusIcon />,
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    children: <PlusIcon />,
    color: 'secondary',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    children: <PlusIcon />,
    color: 'secondary',
    disabled: true,
  },
}
