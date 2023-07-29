import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { Button } from '../Button/Button'

const meta: Meta<typeof Alert> = {
  title: 'Design System/Alert',
  tags: ['autodocs'],
  component: Alert,
}
export default meta

type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'This is an info alert — check it out!',
  },
}
export const Success: Story = {
  args: {
    severity: 'success',
    children: 'This is a success alert — check it out!',
  },
}
export const Error: Story = {
  args: {
    severity: 'error',
    children: 'This is a error alert — check it out!',
  },
}
export const WithNoCloseButton: Story = {
  args: {
    severity: 'info',
    children: 'This is an alert with no close button!',
    onClose: undefined,
  },
}

export const AlertWithAction: Story = {
  args: {
    severity: 'error',
    children: 'This is an alert with an action',
    action: (
      <Button
        size="small"
        label="Button"
        on="error"
        variant="text"
        onClick={() => alert('action button clicked')}
      />
    ),
  },
}
