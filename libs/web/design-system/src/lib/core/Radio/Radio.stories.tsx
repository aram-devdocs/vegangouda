import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormControlLabel } from '../FormControl/FormControl'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Design System/Radio',
  tags: ['autodocs'],
  component: Radio,
}
export default meta

type Story = StoryObj<typeof Radio>

export const Uncontrolled: Story = {
  args: {
    name: 'Uncontrolled',
  },
}

export const Unchecked: Story = {
  args: {
    name: 'Radio',
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    name: 'Checked',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    name: 'Disabled',
    checked: false,
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    name: 'DisabledChecked',
    checked: true,
    disabled: true,
  },
}
export const RadioWithLabel: Story = {
  render: () => <FormControlLabel label="Radio Label" control={<Radio />} />,
}
