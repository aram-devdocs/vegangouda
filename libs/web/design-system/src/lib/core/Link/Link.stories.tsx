import { NavLink } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Design System/Link',
  tags: ['autodocs'],
  component: Link,
}
export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    to: '#',
    component: NavLink,
    children: 'Link',
  },
}
