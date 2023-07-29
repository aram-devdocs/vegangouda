import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { FormControlLabel } from '../FormControl/FormControl'

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Checked: Story = {
  args: {
    name: 'Checkbox',
    checked: true,
    disabled: false,
  },
}

export const CheckedDisabled: Story = {
  args: {
    name: 'Checkbox',
    checked: true,
    disabled: true,
  },
}

export const Unchecked: Story = {
  args: {
    name: 'Checkbox',
    checked: false,
    disabled: false,
  },
}

export const UncheckedDisabled: Story = {
  args: {
    name: 'Checkbox',
    checked: false,
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: args => <FormControlLabel label="Radio Checkbox" control={<Checkbox />} />,
  args: {},
}
