import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { PlusIcon } from '../../../icons'
import { Stack } from '../../Stack/Stack'
import { Typography } from '../../Typography/Typography'

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  tags: ['autodocs'],
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const Label: Story = {
  args: {
    label: 'Button',
  },
}

export const LeadingIcon: Story = {
  args: {
    label: 'Button',
    startIcon: <PlusIcon />,
  },
}

export const TrailingIcon: Story = {
  args: {
    label: 'Button',
    endIcon: <PlusIcon />,
  },
}

export const Icon: Story = {
  args: {
    label: 'Button',
    icon: <PlusIcon />,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    label: 'Button',
    loading: true,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

export const NoWrapText: Story = {
  render: args => (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      minHeight={32}
      border="1px solid blue"
    >
      <Typography variant="body1">Long text text text</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body1">Text</Typography>
        <Button {...args} />
      </Stack>
    </Stack>
  ),
  args: {
    label: 'No wrap text',
    variant: 'contained',
    wrapText: false,
  },
}
