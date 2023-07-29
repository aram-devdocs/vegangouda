import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs'
import { Link } from '../Link/Link'
import { NavLink } from 'react-router-dom'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Design System/Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumbs,
}
export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    children: [
      <Link to="#" component={NavLink} children="Link" />,
      <Link to="#" component={NavLink} children="Link" />,
      <Link to="#" component={NavLink} children="Link" />,
    ],
  },
}
