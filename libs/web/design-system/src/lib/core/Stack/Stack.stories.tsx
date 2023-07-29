import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'

const meta: Meta<typeof Stack> = {
  title: 'Spacing/Stack',
  tags: ['autodocs'],
  component: Stack,
}
export default meta

type Story = StoryObj<typeof Stack>

export const Column: Story = {
  args: {
    children: [<div>Item</div>, <div>Item</div>, <div>Item</div>, <div>Item</div>, <div>Item</div>],
    spacing: 2,
  },
}

export const Row: Story = {
  args: {
    children: [<div>Item</div>, <div>Item</div>, <div>Item</div>, <div>Item</div>, <div>Item</div>],
    direction: 'row',
    spacing: 2,
    alignItems: 'center',
  },
}
