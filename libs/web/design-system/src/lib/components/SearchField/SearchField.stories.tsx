import type { Meta, StoryObj } from '@storybook/react'
import { SearchField } from './SearchField'

const meta: Meta<typeof SearchField> = {
  title: 'Design System/SearchField',
  tags: ['autodocs'],
  component: SearchField,
}
export default meta

type Story = StoryObj<typeof SearchField>

export const Default: Story = {}
