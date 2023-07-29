import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { QuestionBoxHeader } from './QuestionBoxHeader'
import { QuestionBoxRow } from './QuestionBoxRow'
import { QuestionBox } from './QuestionBox'
import { Switch } from '../../core/Switch/Switch'

const meta: Meta<typeof QuestionBox> = {
  title: 'Design System/QuestionBox',
  tags: ['autodocs'],
  component: QuestionBox,
}
export default meta

type Story = StoryObj<typeof QuestionBox>

export const Default: Story = {
  args: {
    children: (
      <>
        <QuestionBoxHeader
          questionNumber={1}
          questionText="When was the first time you experienced this?"
          rightContent="My Other Content"
        />
        <QuestionBoxRow questionText="Did this work for you?" rightContent="My Other Content" />
        <QuestionBoxRow questionText="Did this work for you?" chipLabel="Less than 50%" />
      </>
    ),
  },
}

export const QuestionWithToggle: Story = {
  args: {
    children: (
      <>
        <QuestionBoxHeader
          questionNumber={1}
          questionText="When was the first time you experienced this?"
          rightContent="My Other Content"
          toggle={<Switch value={false} />}
        />
        <QuestionBoxRow questionText="Did this work for you?" paddingLeft={13} />
        <QuestionBoxRow
          questionText="Did this work for you?"
          chipLabel="Less than 50%"
          paddingLeft={13}
        />
      </>
    ),
  },
}
