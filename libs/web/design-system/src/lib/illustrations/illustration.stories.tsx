import React from 'react'
import {
  DoneIllustration,
  EmailSentIllustration,
  WelcomeIllustration,
} from './index'
import { Divider } from '../core/Divider/Divider'
import { Stack } from '../core/Stack/Stack'
import { Typography } from '@mui/material'

export default {
  title: 'Assets/Illustrations',
  component: DoneIllustration,
  argTypes: {
    color: {
      options: [
        'inherit',
        'action',
        'disabled',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
  },
}

const Template = args => (
  <Stack spacing={2} divider={<Divider />}>
    <Stack direction="row" spacing={2} alignItems="center">
      <DoneIllustration {...args} />
      <Typography> Done</Typography>
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <EmailSentIllustration {...args} />
      <Typography> EmailSent</Typography>
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <WelcomeIllustration {...args} />
      <Typography> Welcome</Typography>
    </Stack>
  </Stack>
)

export const Default = Template.bind({})
Default.args = {}
