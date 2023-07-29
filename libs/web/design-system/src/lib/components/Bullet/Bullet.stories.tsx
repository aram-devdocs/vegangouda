import type { Meta, StoryObj } from '@storybook/react'
import { Bullet } from './Bullet'

const meta: Meta<typeof Bullet> = {
  title: 'Design System/Bullet',
  tags: ['autodocs'],
  component: Bullet,
}
export default meta

type Story = StoryObj<typeof Bullet>

export const Default: Story = {
  args: {
    children: 0,
  },
}

export const TwoDigits: Story = {
  args: {
    children: 99,
  },
}

export const Overflow: Story = {
  args: {
    children: 'Overflow',
  },
}
