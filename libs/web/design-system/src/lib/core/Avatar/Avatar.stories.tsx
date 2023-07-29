import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Chip/Avatar',
  tags: ['autodocs'],
  component: Avatar,
}
export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    children: 'B',
    type: 'default',
    size: 'medium',
  },
}

export const Primary: Story = {
  args: {
    children: 'B',
    type: 'primary',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    children: 'B',
    type: 'primary',
    size: 'small',
  },
}

export const Image: Story = {
  args: {
    children: 'B',
    src: 'hp-logo.png',
    type: 'primary',
    size: 'medium',
  },
}

export const Empty: Story = {
  args: {
    type: 'primary',
    size: 'medium',
  },
}

export const Selected: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    isSelected: true,
  },
}

export const Hoverdable: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    isHoverdable: true,
  },
}
