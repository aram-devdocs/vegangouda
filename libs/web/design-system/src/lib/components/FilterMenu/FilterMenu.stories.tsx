import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FilterMenu } from './FilterMenu'

const meta: Meta<typeof FilterMenu> = {
  title: 'Design System/FilterMenu',
  tags: ['autodocs'],
  component: FilterMenu,
}
export default meta

type Story = StoryObj<typeof FilterMenu>

export const Default: Story = {
  render: args => {
    const [, updateArgs] = useArgs()

    const handleChange = (selected: number[]) => {
      updateArgs({ ...args, selected })
    }

    return <FilterMenu {...args} onChange={handleChange} />
  },
  args: {
    selected: [],
    items: [
      { id: 1, label: 'Changemakers', count: 4 },
      { id: 2, label: 'Contributors', count: 3 },
      { id: 3, label: 'Reviewers', count: 2 },
      { id: 4, label: 'Respondents', count: 1 },
    ],
    menuId: 'menu',
    buttonTooltip: 'Member Filter',
    allLabel: 'All Members',
  },
}
