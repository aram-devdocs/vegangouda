import type { Meta, StoryObj } from '@storybook/react'
import { LoadingDialog } from './LoadingDialog'

const meta: Meta<typeof LoadingDialog> = {
  title: 'Design System/LoadingDialog',
  tags: ['autodocs'],
  component: LoadingDialog,
}
export default meta

type Story = StoryObj<typeof LoadingDialog>

export const Default: Story = {
  args: {
    open: true,
    message: 'Loading...',
  },
}
