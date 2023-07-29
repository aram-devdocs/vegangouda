import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormControlLabel } from '../FormControl/FormControl'
import { Uncontrolled } from '../Radio/Radio.stories'
import { RadioGroup } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Design System/RadioGroup',
  tags: ['autodocs'],
  component: RadioGroup,
}
export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    defaultValue: 'Radio1',
    name: 'radioButtonsGroup',
    children: (
      <>
        <FormControlLabel label="Radio 1" value="Radio1" control={<Uncontrolled />} />
        <FormControlLabel label="Radio 2" value="Radio2" control={<Uncontrolled />} />
      </>
    ),
  },
}
