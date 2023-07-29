import React, { SyntheticEvent } from 'react'
import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tabs'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Tabs',
  tags: ['autodocs'],
  component: Tabs,
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: args => {
    const [, updateArgs] = useArgs()

    const handleChange = (_event: SyntheticEvent, value: number) => {
      updateArgs({ ...args, value })
    }

    return (
      <Tabs {...args} onChange={handleChange}>
        <Tab label="First" />
        <Tab label="Second" />
      </Tabs>
    )
  },
  args: {
    value: 0,
  },
}
