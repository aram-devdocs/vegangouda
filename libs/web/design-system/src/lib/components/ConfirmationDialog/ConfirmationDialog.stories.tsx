import type { Meta, StoryObj } from '@storybook/react'
import { ConfirmationDialog, ConfirmationDialogProps } from './ConfirmationDialog'

const meta: Meta<typeof ConfirmationDialog> = {
  title: 'Design System/ConfirmationDialog',
  argTypes: { onCancel: { action: 'onCancel' }, onConfirm: { action: 'onConfirm' } },
  component: ConfirmationDialog,
}
export default meta

type Story = StoryObj<typeof ConfirmationDialog>

export const Default: Story = {
  args: {
    open: true,
    title: 'Title',
    message: 'Message',
    confirmLabel: 'Confirm',
  },
}
