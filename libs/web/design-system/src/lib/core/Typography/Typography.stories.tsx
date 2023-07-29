import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  component: Typography,
}
export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: 'This is my text',
    variant: 'body1',
  },
}
