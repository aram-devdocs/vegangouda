import type { Meta, StoryObj } from '@storybook/react'
import { ChallengeStatementCard } from './ChallengeStatementCard'

const meta: Meta<typeof ChallengeStatementCard> = {
  title: 'Design System/Challenge Statement Card',
  tags: ['autodocs'],
  component: ChallengeStatementCard,
}
export default meta

type Story = StoryObj<typeof ChallengeStatementCard>

export const Default: Story = {}
