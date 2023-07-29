import type { Meta, StoryObj } from '@storybook/react'
import { AvatarUser } from './AvatarUser'

const meta: Meta<typeof AvatarUser> = {
  title: 'Design System/Chip/AvatarUser',
  tags: ['autodocs'],
  component: AvatarUser,
}
export default meta

type Story = StoryObj<typeof AvatarUser>

export const Default: Story = {
  args: {
    user: {
      firstName: 'Benecio',
      lastName: 'Del Toro',
      emailAddress: 'benecio@gmail.com',
      hasAccount: true,
    },
  },
}

export const NoName: Story = {
  args: {
    user: {
      emailAddress: 'benecio@gmail.com',
      hasAccount: true,
    },
  },
}

export const Invitee: Story = {
  args: {
    user: {
      emailAddress: 'benecio@gmail.com',
      hasAccount: false,
    },
  },
}

export const Selected: Story = {
  args: {
    user: {
      emailAddress: 'benecio@gmail.com',
      hasAccount: false,
    },
    isSelected: true,
  },
}
