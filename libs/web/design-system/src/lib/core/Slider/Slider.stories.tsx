import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Design System/Slider',
  tags: ['autodocs'],
  component: Slider,
}
export default meta

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: args => (
    <div style={{ width: '400px', margin: '50px' }}>
      <Slider {...args} />
    </div>
  ),
}
export const LeadingText: Story = {
  ...Default,
  args: {
    leading: '0%',
    trailing: '100%',
  },
}

export const Label: Story = {
  ...Default,
  args: {
    valueLabelDisplay: 'on',
  },
}
