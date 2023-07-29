import React from 'react'
import { Link } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography/Typography'
import { Card, CardContent, CardActionArea } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  tags: ['autodocs'],
  component: Card,
}
export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: args => (
    <div style={{ width: '400px' }}>
      <Card {...args} />
    </div>
  ),
  args: {
    variant: 'elevation',
    children: (
      <CardContent>
        <Typography variant="body1">My card content</Typography>
      </CardContent>
    ),
  },
}

export const Action: Story = {
  ...Default,
  args: {
    variant: 'elevation',
    children: (
      <CardActionArea component={Link} to="#">
        <CardContent>
          <Typography variant="body1">My card content action</Typography>
        </CardContent>
      </CardActionArea>
    ),
  },
}
