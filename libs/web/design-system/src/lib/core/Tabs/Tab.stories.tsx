import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tabs'
import { TabLabelCounter } from '../../components/TabLabelCounter/TabLabelCounter'

const meta: Meta<typeof Tab> = {
  title: 'Design System/Tab',
  tags: ['autodocs'],
  component: Tab,
}
export default meta

type Story = StoryObj<typeof Tab>

export const OnlyLabel: Story = {
  args: {
    label: 'This is my tab',
  },
}

export const WithCounter: Story = {
  args: {
    label: <TabLabelCounter label="Label" count={0} />,
  },
}
