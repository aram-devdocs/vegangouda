import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/client-api'
import { Stepper } from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Design System/Stepper',
  tags: ['autodocs'],
  component: Stepper,
}
export default meta

type Story = StoryObj<typeof Stepper>

export const Default: Story = {
  render: args => {
    const [, updateArgs] = useArgs()

    const handleChange = (value: number) => {
      updateArgs({ ...args, value })
    }

    return <Stepper {...args} onChangeStep={handleChange} />
  },
  args: {
    orientation: 'horizontal',
    nonLinear: true,
    alternativeLabel: true,
    activeStep: 1,
    steps: [
      { label: 'Can we do this?', isCompleted: true },
      { label: 'What will it take?', isCompleted: true },
      { label: 'What will it save?', isCompleted: false },
      { label: 'Who is impacted?', isCompleted: false },
      { label: 'How will they feel?', isCompleted: false },
    ],
  },
}
