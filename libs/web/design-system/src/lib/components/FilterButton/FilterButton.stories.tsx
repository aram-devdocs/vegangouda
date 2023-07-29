import type { Meta, StoryObj } from '@storybook/react'
import { FilterButton } from './FilterButton'

const meta: Meta<typeof FilterButton> = {
  title: 'Design System/FilterButton',
  tags: ['autodocs'],
  component: FilterButton,
}
export default meta

type Story = StoryObj<typeof FilterButton>

export const Default: Story = {
  args: {
    count: 0,
  },
}

export const WithFilters: Story = {
  args: {
    count: 3,
  },
}
