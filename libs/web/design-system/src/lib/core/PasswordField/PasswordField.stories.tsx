import type { Meta, StoryObj } from '@storybook/react'
import { PasswordField } from './PasswordField'

const meta: Meta<typeof PasswordField> = {
  title: 'Design System/PasswordField',
  tags: ['autodocs'],
  component: PasswordField,
}
export default meta

type Story = StoryObj<typeof PasswordField>

export const Default: Story = {
  args: {
    label: 'Password',
    minLengthPassword: 8,
  },
}

export const DefaultWithValue: Story = {
  args: {
    label: 'Password',
    value: '12345678',
    minLengthPassword: 8,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Password',
    minLengthPassword: 8,
    disabled: true,
  },
}

export const DisabledWithValue: Story = {
  args: {
    label: 'Password',
    value: '12345678',
    minLengthPassword: 8,
    disabled: true,
  },
}

export const WithoutHelperText: Story = {
  args: {
    label: 'Password',
    minLengthPassword: 8,
    disableHelperText: true,
  },
}
