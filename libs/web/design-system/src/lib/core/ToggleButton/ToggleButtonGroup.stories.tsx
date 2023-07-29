import React, { SyntheticEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { ToggleButtonGroup } from './ToggleButtonGroup'
import { ToggleButton } from './ToggleButton'
import { HeartFillIcon } from '../../icons'

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Design System/ToggleButtonGroup',
  tags: ['autodocs'],
  component: ToggleButtonGroup,
}
export default meta

type Story = StoryObj<typeof ToggleButtonGroup>

export const Default: Story = {
  render: args => {
    const [, updateArgs] = useArgs()

    const handleChange = (_event: SyntheticEvent, value: number) => {
      updateArgs({ ...args, value })
    }

    return <ToggleButtonGroup {...args} onChange={handleChange} />
  },
  args: {
    children: [
      <ToggleButton value={0} label="Label 1" />,
      <ToggleButton value={1} label="Label 2" />,
    ],
  },
}

export const WithStartIcon: Story = {
  ...Default,
  args: {
    children: [
      <ToggleButton value={0} label="Label 1" startIcon={HeartFillIcon} />,
      <ToggleButton value={1} label="Label 2" startIcon={HeartFillIcon} />,
      <ToggleButton value={2} label="Label 3" startIcon={HeartFillIcon} />,
    ],
  },
}
