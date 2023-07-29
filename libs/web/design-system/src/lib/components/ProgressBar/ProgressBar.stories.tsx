import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Design System/ProgressBar',
  tags: ['autodocs'],
  component: ProgressBar,
}
export default meta

type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    value: 0,
  },
}

export const Fifty: Story = {
  args: {
    value: 50,
  },
}

export const Complete: Story = {
  args: {
    value: 100,
  },
}
