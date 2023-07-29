import type { Meta, StoryObj } from '@storybook/react'
import { EmptyRow } from './EmptyRow'

const meta: Meta<typeof EmptyRow> = {
  title: 'Design System/Table/Empty Row',
  tags: ['autodocs'],
  component: EmptyRow,
}
export default meta

type Story = StoryObj<typeof EmptyRow>

export const Default: Story = {
  args: {},
}

export const CustomLabel: Story = {
  args: {
    label: 'Empty',
  },
}
