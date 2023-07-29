import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ExpandablePanel } from './ExpandablePanel'
import { Button } from '../../core/Button/Button'

const meta: Meta<typeof ExpandablePanel> = {
  title: 'Design System/ExpandablePanel',
  tags: ['autodocs'],
  component: ExpandablePanel,
}
export default meta

type Story = StoryObj<typeof ExpandablePanel>

export const Default: Story = {
  args: {
    actions: <Button label="Action" variant="contained" />,
    title: 'Title',
    children: 'Body',
  },
}
