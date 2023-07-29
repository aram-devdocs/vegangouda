import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UploadImageField } from './UploadImageField'

const meta: Meta<typeof UploadImageField> = {
  title: 'Design System/UploadImageField',
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
  component: UploadImageField,
}
export default meta

type Story = StoryObj<typeof UploadImageField>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    defaultValue: 'https://via.placeholder.com/150',
  },
}

export const WithError: Story = {
  args: {
    defaultValue: 'https://via.placeholder.com/150',
    error: true,
  },
}
