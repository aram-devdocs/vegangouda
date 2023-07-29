import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ControlWithLabel } from '../FormControl/FormControl.stories'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Design System/Switch',
  tags: ['autodocs'],
  component: Switch,
}
export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    name: 'Switch',
    value: false,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    name: 'Switch',
    value: false,
    disabled: true,
  },
}

export const DisabledWithValue: Story = {
  args: {
    name: 'Switch',
    value: true,
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: args => (
    <ControlWithLabel {...ControlWithLabel.args} key={args.name} control={<Switch {...args} />} />
  ),
  args: {
    name: 'Switch',
    value: false,
    disabled: false,
  },
}
