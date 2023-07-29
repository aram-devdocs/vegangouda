import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Design System/Loader',
  tags: ['autodocs'],
  component: Loader,
}
export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {}
