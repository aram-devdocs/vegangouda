import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem } from '../Menu/MenuItem/MenuItem'
import { FilterIcon } from '../../icons'
import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Design System/Dropdown',
  tags: ['autodocs'],
  component: Dropdown,
}
export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: args => (
    <Dropdown {...args}>
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
      <MenuItem value={4}>Option 4</MenuItem>
      <MenuItem value={5}>Option 5</MenuItem>
    </Dropdown>
  ),
  args: {
    defaultValue: 1,
  },
}

export const Error: Story = {
  ...Default,
  args: {
    defaultValue: 1,
    label: 'Label',
    required: true,
    error: true,
    helperText: 'Error text',
  },
}

export const LeftIcon: Story = {
  ...Default,
  args: {
    leftIcon: FilterIcon,
    defaultValue: 1,
  },
}
export const LeftIconLabel: Story = {
  ...Default,
  args: {
    leftIcon: FilterIcon,
    defaultValue: 1,
    label: 'Label',
  },
}

export const WithLabelDefaultValue: Story = {
  ...Default,
  args: {
    defaultValue: 1,
    label: 'Label',
  },
}

export const WithLabelMultiple: Story = {
  ...Default,
  args: {
    multiple: true,
    label: 'Label',
    defaultValue: [],
  },
}

export const WithLabel: Story = {
  ...Default,
  args: {
    label: 'Label',
    defaultValue: undefined,
  },
}

export const Disabled: Story = {
  ...Default,
  args: {
    label: 'Label',
    defaultValue: 1,
    disabled: true,
  },
}

export const Multiple: Story = {
  ...Default,
  args: {
    defaultValue: [1, 3],
    multiple: true,
  },
}
