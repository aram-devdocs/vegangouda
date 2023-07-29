import { range } from 'lodash'
import type { Meta, StoryObj } from '@storybook/react'
import { AvatarOverflow } from './AvatarOverflow'

const meta: Meta<typeof AvatarOverflow> = {
  title: 'Design System/Avatar Overflow',
  tags: ['autodocs'],
  component: AvatarOverflow,
}
export default meta

type Story = StoryObj<typeof AvatarOverflow>

const items = range(0, 15).map(i => `Item ${i + 1}`)

export const Default: Story = {
  args: {
    items: items.slice(0, 5),
  },
}

export const DoubleDigit: Story = {
  args: {
    items,
  },
}
