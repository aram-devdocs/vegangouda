import type { Meta, StoryObj } from '@storybook/react'
import { AttributeScale } from './AttributeScale'

const meta: Meta<typeof AttributeScale> = {
  title: 'Design System/Attribute Scale',
  tags: ['autodocs'],
  component: AttributeScale,
}
export default meta

type Story = StoryObj<typeof AttributeScale>

export const Default: Story = {
  args: {
    originLabel: 'Origin',
    destinationLabel: 'Destination',
    bubbles: [{ color: '#FDFF6E', position: 50, tooltip: 'Undecided' }],
  },
}

export const Two: Story = {
  args: {
    originLabel: 'Agree',
    destinationLabel: 'Desagree',
    bubbles: [
      { color: '#FDFF6E', position: 33, tooltip: 'Happy' },
      { color: '#EF82F9', position: 66, tooltip: 'Discontent' },
    ],
  },
}

export const OutOfRange: Story = {
  args: {
    originLabel: 'Agree',
    destinationLabel: 'Desagree',
    bubbles: [
      { color: '#FDFF6E', position: -1, tooltip: 'Super Happy' },
      { color: '#EF82F9', position: 101, tooltip: 'Super Discontent' },
    ],
  },
}

export const Superposed: Story = {
  args: {
    originLabel: 'Agree',
    destinationLabel: 'Desagree',
    bubbles: [
      { color: '#FDFF6E', position: 33, tooltip: 'Happy' },
      { color: '#EF82F9', position: 33, tooltip: 'Also Happy' },
    ],
  },
}
