import type { Meta, StoryObj } from '@storybook/react'
import { SearchDropdown } from './SearchDropdown'

const meta: Meta<typeof SearchDropdown> = {
  title: 'Design System/SearchDropdown',
  tags: ['autodocs'],
  component: SearchDropdown,
}
export default meta

type Story = StoryObj<typeof SearchDropdown>

export const Default: Story = {}
