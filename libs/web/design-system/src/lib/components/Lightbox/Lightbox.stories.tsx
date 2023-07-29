import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '../../core/Stack/Stack'
import { Typography } from '../../core/Typography/Typography'
import { Lightbox } from './Lightbox'

const meta: Meta<typeof Lightbox> = {
  title: 'Design System/Lightbox',
  argTypes: { onClose: { action: 'closed' } },
  component: Lightbox,
}
export default meta

type Story = StoryObj<typeof Lightbox>

export const Default: Story = {
  args: {
    open: true,
    children: (
      <Stack spacing={2} padding={3}>
        <Typography variant="h5">Heading</Typography>
        <Typography>Content</Typography>
      </Stack>
    ),
  },
}
