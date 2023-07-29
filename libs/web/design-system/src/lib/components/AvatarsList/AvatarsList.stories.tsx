import type { Meta, StoryObj } from '@storybook/react'

import { AvatarsList } from './AvatarsList'

const meta: Meta<typeof AvatarsList> = {
  title: 'Design System/Chip/AvatarsList',
  tags: ['autodocs'],
  component: AvatarsList,
}
export default meta

type Story = StoryObj<typeof AvatarsList>

const avatarsList = [
  {
    id: '1',
    src: 'avatars/avatar_01.png',
  },
  {
    id: '3',
    src: 'avatars/avatar_01.png',
  },
  {
    id: '4',
    src: 'avatars/avatar_01.png',
  },
  {
    id: '2',
    label: 'A',
  },
]

export const Default: Story = {
  args: {
    avatarProps: {},
    limit: 3,
    avatars: avatarsList,
  },
}

export const WithoutCounter: Story = {
  args: {
    avatarProps: {},
    limit: 5,
    avatars: avatarsList,
  },
}

export const Primary: Story = {
  args: {
    avatarProps: {
      type: 'primary',
    },
    limit: 3,
    avatars: avatarsList,
  },
}

export const Large: Story = {
  args: {
    avatarProps: {
      size: 'large',
    },
    limit: 3,
    avatars: avatarsList,
  },
}
