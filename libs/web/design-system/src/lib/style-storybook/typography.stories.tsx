import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../core/Typography/Typography'
import { Stack } from '../core/Stack/Stack'

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
}
export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  render: ({ children: text }) => (
    <Stack spacing={2}>
      <Typography variant="h1">{text} h1</Typography>
      <Typography variant="h2">{text} h2</Typography>
      <Typography variant="h3">{text} h3</Typography>
      <Typography variant="h4">{text} h4</Typography>
      <Typography variant="h5">{text} h5</Typography>
      <Typography variant="h6">{text} h6</Typography>
      <Typography variant="subtitle1">{text} subtitle1</Typography>
      <Typography variant="subtitle2">{text} subtitle2</Typography>
      <Typography variant="body1">{text} body1</Typography>
      <Typography variant="body2">{text} body2</Typography>
      <Typography variant="button">{text} button</Typography>
      <Typography variant="caption">{text} caption</Typography>
      <Typography variant="overline">{text} overline</Typography>
    </Stack>
  ),
  args: {
    children: 'This is my text',
  },
}
