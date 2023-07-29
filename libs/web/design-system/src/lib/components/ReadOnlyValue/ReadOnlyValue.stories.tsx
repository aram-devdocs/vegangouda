import type { Meta, StoryObj } from '@storybook/react'
import { ReadOnlyValue } from './ReadOnlyValue'

const meta: Meta<typeof ReadOnlyValue> = {
  title: 'Design System/ReadOnlyValue',
  tags: ['autodocs'],
  component: ReadOnlyValue,
}
export default meta

type Story = StoryObj<typeof ReadOnlyValue>

export const Default: Story = {
  args: {
    label: 'Name',
    value: 'Johnny B. Good',
  },
}

export const WithLink: Story = {
  args: {
    label: 'URL',
    value: 'https://demo.indr.com',
    href: 'https://demo.indr.com',
  },
}

export const WithLongText: Story = {
  args: {
    label: 'Name',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales nunc eleifend purus sagittis, nec tristique nulla auctor. Donec eleifend.',
  },
}
