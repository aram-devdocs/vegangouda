import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { navItems, navOptions } from '../../mock/'

import { NavBreadcrumbs } from './NavBreadcrumbs'

type StoryProps = {
  selected?: string
}

const meta: Meta<StoryProps> = {
  title: 'Design System/NavBreadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    selected: {
      options: navOptions,
      control: { type: 'select' },
    },
  },
}
export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  render: args => <NavBreadcrumbs aria-label="Navigation" items={navItems(args)} />,
}
