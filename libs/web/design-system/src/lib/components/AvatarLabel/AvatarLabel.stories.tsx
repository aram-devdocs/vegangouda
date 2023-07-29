import type { Meta, StoryObj } from '@storybook/react'
import { AvatarLabel } from './AvatarLabel'
import { PersonOutlineIcon } from '../../icons'

const meta: Meta<typeof AvatarLabel> = {
  title: 'Design System/Chip/AvatarLabel',
  tags: ['autodocs'],
  component: AvatarLabel,
}
export default meta

type Story = StoryObj<typeof AvatarLabel>

export const Default: Story = {
  args: {
    label: 'Benecio del toro',
  },
}

export const Image: Story = {
  args: {
    label: 'Company',
    src: 'hp-logo.png',
  },
}

export const HideLabel: Story = {
  args: {
    label: 'Benecio del toro',
    hideLabel: true,
  },
}

export const Empty: Story = {
  args: {
    label: '',
  },
}

export const WithIcon: Story = {
  args: {
    icon: PersonOutlineIcon,
    label: 'Label',
  },
}

export const Small: Story = {
  args: {
    label: 'Benecio del toro',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    label: 'Benecio del toro',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    label: 'Benecio del toro',
    size: 'large',
  },
}

export const Selected: Story = {
  args: {
    label: 'Benecio del toro',
    isSelected: true,
  },
}
