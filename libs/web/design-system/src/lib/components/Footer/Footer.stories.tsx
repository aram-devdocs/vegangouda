import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '../../core/Link/Link'
import { Footer } from './Footer'

const LINKS = [
  <Link key="terms" to="/terms">
    Terms of Service
  </Link>,
  <Link key="privacy" to="/privacy">
    Privacy
  </Link>,
  <Link key="attribution" to="/attribution">
    Attribution
  </Link>,
]

const meta: Meta<typeof Footer> = {
  title: 'Design System/Footer',
  tags: ['autodocs'],
  component: Footer,
}
export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    links: LINKS,
    buildInfo: '0.8.XXX',
  },
}
