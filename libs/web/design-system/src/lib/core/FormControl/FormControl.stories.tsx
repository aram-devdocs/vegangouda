import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormControlLabel } from './FormControl'

const meta: Meta<typeof FormControlLabel> = {
  title: 'Design System/FormControlLabel',
  tags: ['autodocs'],
  component: FormControlLabel,
}
export default meta

type Story = StoryObj<typeof FormControlLabel>

export const ControlWithLabel: Story = {
  args: {
    label: 'label',
    control: <input type="radio" />,
  },
}
