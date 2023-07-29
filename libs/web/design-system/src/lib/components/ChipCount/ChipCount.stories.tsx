import type { Meta, StoryObj } from '@storybook/react'
import { ChipCount } from './ChipCount'
import { Chip } from '../../core/Chip/Chip'
import React from 'react'

const meta: Meta<typeof ChipCount> = {
  title: 'Design System/Chip/Count',
  tags: ['autodocs'],
  component: ChipCount,
}
export default meta

type Story = StoryObj<typeof ChipCount>

export const Default: Story = {
  render: args => <Chip label="My Chip" avatar={<ChipCount {...args} />} />,
  args: {
    label: '1',
  },
}

export const ChipCounter: Story = {
  render: args => (
    <Chip
      label="My Chip"
      avatar={<ChipCount {...args} />}
      onDelete={() => {
        console.log('Delete')
      }}
    />
  ),
  args: {
    label: '99999',
  },
}
