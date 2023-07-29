import type { Meta, StoryObj } from '@storybook/react'

import { TabLabelCounter } from './TabLabelCounter'

const meta: Meta<typeof TabLabelCounter> = {
  title: 'Design System/Tab Label Counter',
  tags: ['autodocs'],
  component: TabLabelCounter,
}
export default meta

type Story = StoryObj<typeof TabLabelCounter>

export const Default: Story = {
  args: {
    label: 'Label',
    count: 0,
  },
}
