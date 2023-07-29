import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { getInvalidEmails } from '@indr/web/util-validators'
import { EmailField } from './EmailField'

const meta: Meta<typeof EmailField> = {
  title: 'Design System/EmailField',
  tags: ['autodocs'],
  component: EmailField,
}
export default meta

type Story = StoryObj<typeof EmailField>

export const Default: Story = {
  render: args => {
    const [errors, setErrors] = useState<string[]>(getInvalidEmails(args.defaultValue || []))
    return (
      <EmailField
        {...args}
        errors={errors}
        onChange={values => {
          setErrors(getInvalidEmails(values))
        }}
      />
    )
  },
}

export const WithDefaultValues: Story = {
  ...Default,
  args: {
    defaultValue: ['aapplegate@gmail.com', 'aardvark@gmail.com', 'aazerjan@yahoo.com'],
  },
}

export const WithInvalidValues: Story = {
  ...Default,
  args: {
    defaultValue: ['aapple', 'aardvark', 'aazerjan@yahoo.com'],
  },
}

export const WithManyEmails: Story = {
  ...Default,
  args: {
    defaultValue: [
      'aapple',
      'aardvark',
      'aazerjan@yahoo.com',
      'zxcvbnm@yahoo.com',
      'daveed@me.com',
      'kingjoshi@aol.com',
      'kronvold@outlook.com',
      'draper@outlook.com',
      'ardagna@att.net',
      'fwitness@live.com',
      'goerzen@me.com',
      'singh@me.com',
      'tmaek@verizon.net',
    ],
  },
}

export const WithLongValue: Story = {
  ...Default,
  args: {
    defaultValue: [
      'aapple',
      'aardvark',
      'aazerjan@yahoo.comaazerjan@yahoo.comaazerjan@yahoo.comaazerjan@yahoo.comaazerjan@yahoo.comaazerjan@yahoo.com',
      'zxcvbnm@yahoo.com',
      'daveed@me.com',
      'kingjoshi@aol.com',
      'kronvold@outlook.com',
      'draper@outlook.com',
      'ardagna@att.net',
      'fwitness@live.com',
      'goerzen@me.com',
      'singh@me.com',
      'tmaek@verizon.net',
    ],
  },
}

export const WithDuplicateValues: Story = {
  ...Default,
  args: {
    defaultValue: ['apple@gmail.com', 'abcd', 'apple@gmail.com'],
  },
}
