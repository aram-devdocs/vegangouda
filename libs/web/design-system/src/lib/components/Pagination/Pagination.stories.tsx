import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Design System/Pagination',
  tags: ['autodocs'],
  argTypes: { onPageChange: { action: 'onPageChange' } },
  component: Pagination,
}
export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    selectedPage: 1,
  },
}

export const Two: Story = {
  args: {
    ...Default,
    numberOfPages: 2,
  },
}

export const Three: Story = {
  args: {
    ...Default,
    numberOfPages: 3,
  },
}

export const MoreThanThree: Story = {
  args: {
    ...Default,
    numberOfPages: 9,
  },
}
