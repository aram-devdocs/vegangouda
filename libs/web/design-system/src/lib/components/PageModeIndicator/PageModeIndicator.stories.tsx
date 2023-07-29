import type { Meta, StoryObj } from '@storybook/react'
import { PageModeIndicator, PageModeStatus } from './PageModeIndicator'

const meta: Meta<typeof PageModeIndicator> = {
  title: 'Design System/PageModeIndicator',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'on click' },
  },
  component: PageModeIndicator,
}
export default meta

type Story = StoryObj<typeof PageModeIndicator>

export const Dropping: Story = {
  args: {
    status: PageModeStatus.Dropping,
  },
}
export const Editing: Story = {
  args: {
    status: PageModeStatus.Editing,
  },
}
