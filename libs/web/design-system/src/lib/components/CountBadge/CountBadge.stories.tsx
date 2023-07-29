import type { Meta, StoryObj } from '@storybook/react'
import { CountBadge } from './CountBadge'

const meta: Meta<typeof CountBadge> = {
  title: 'Design System/CountBadge',
  tags: ['autodocs'],
  component: CountBadge,
}
export default meta

type Story = StoryObj<typeof CountBadge>

export const Default: Story = {
  args: {
    children: 1,
  },
}
