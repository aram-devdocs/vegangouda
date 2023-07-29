import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OpportunityCursor } from './OpportunityCursor'
import { OppportunityDisallowedCursor } from './OpportunityDisallowedCursor'
import { Box, Stack } from '@mui/material'

type CursorContainerProps = {
  cursor: string
}

const CursorContainer = ({ cursor }: CursorContainerProps) => {
  return (
    <Box
      sx={{
        cursor: cursor,
        width: '750px',
        height: '750px'
      }}
    ></Box>
  )
}

const meta: Meta<typeof CursorContainer> = {
  title: 'Design System/Cursor',
  tags: ['autodocs'],

  component: CursorContainer,
}
export default meta

type Story = StoryObj<typeof CursorContainer>

export const Default: Story = {
  args: {
    cursor: 'auto',
  },
}

export const AllowedOpportunity: Story = {
  args: {
    cursor: OpportunityCursor,
  },
}

export const DisallowedOpportunity: Story = {
  args: {
    cursor: OppportunityDisallowedCursor,
  },
}
