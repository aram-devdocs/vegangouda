import type { Meta, StoryObj } from '@storybook/react'
import { DateTimeDistance } from './DateTimeDistance'

const meta: Meta<typeof DateTimeDistance> = {
  title: 'Design System/DateTimeDistance',
  tags: ['autodocs'],
  component: DateTimeDistance,
}
export default meta

type Story = StoryObj<typeof DateTimeDistance>

export const Default: Story = {
  args: {
    dateTime: '2013-04-09T15:42:23Z',
  },
}
