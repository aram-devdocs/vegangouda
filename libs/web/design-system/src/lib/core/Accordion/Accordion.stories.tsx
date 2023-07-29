import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button/Button'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Accordion',
  tags: ['autodocs'],
  component: Accordion,
}
export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    children: [
      <AccordionSummary>Accordion Summary</AccordionSummary>,
      <AccordionDetails>Accordion Details</AccordionDetails>,
    ],
  },
}
export const WithAction: Story = {
  args: {
    children: [
      <AccordionSummary>Accordion Summary</AccordionSummary>,
      <AccordionDetails>Accordion Details</AccordionDetails>,
      <AccordionActions>
        <Button variant="outlined" label="Accordion Action 1" />
      </AccordionActions>,
    ],
  },
}
