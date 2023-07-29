import type { Meta, StoryObj } from '@storybook/react'
import { ShowcaseTemplate } from './ShowcaseTemplate'

const meta: Meta<typeof ShowcaseTemplate> = {
  title: 'Design System/Button/Showcase/Contained',
  tags: ['autodocs'],
  component: ShowcaseTemplate,
}
export default meta

type Story = StoryObj<typeof ShowcaseTemplate>

export const Showcase: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    disabled: false,
    loading: false,
  },
}

export const ShowcaseDisabled: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    disabled: true,
    loading: false,
  },
}

export const ShowcaseLoading: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    disabled: false,
    loading: true,
  },
}
