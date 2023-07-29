import type { Meta, StoryObj } from '@storybook/react'
import { ButtonBar } from './ButtonBar'
import { ButtonBaseBar } from '../ButtonBaseBar/ButtonBaseBar'
import { PencilIcon, MoreHorizontalIcon, PlusIcon } from '../../icons'
import { IUnderlying, Underlying } from '../../themes/types'
import React, { PropsWithChildren } from 'react'
import { Box } from '../../core/Box/Box'

type ButtonBarStoryProps = PropsWithChildren<{
  on?: keyof IUnderlying
}>

function BackgroundWrapper({ children, on }: ButtonBarStoryProps) {
  return (
    <Box
      sx={{
        padding: 5,
        backgroundColor: Underlying[on || 'background.main'],
      }}
    >
      {children}
    </Box>
  )
}

const meta: Meta<typeof ButtonBar> = {
  title: 'Design System/ButtonBar',
  tags: ['autodocs'],
  component: ButtonBar,
}
export default meta

type Story = StoryObj<typeof ButtonBar>

export const Default: Story = {
  render: args => (
    <BackgroundWrapper on={args.on}>
      <ButtonBar {...args} />
    </BackgroundWrapper>
  ),
  args: {
    buttons: [
      <ButtonBaseBar label="PencilIcon" icon={PencilIcon} counter={3} />,
      <ButtonBaseBar label="MoreHorizontalIcon" icon={MoreHorizontalIcon} />,
      <ButtonBaseBar label="PlusIcon" icon={PlusIcon} />,
    ],
  },
}

export const AllDisabled: Story = {
  ...Default,
  args: {
    disabled: true,
    buttons: [
      <ButtonBaseBar label="PencilIcon" icon={PencilIcon} counter={3} />,
      <ButtonBaseBar label="MoreHorizontalIcon" icon={MoreHorizontalIcon} />,
      <ButtonBaseBar label="PlusIcon" icon={PlusIcon} />,
    ],
  },
}

export const OneDisabled: Story = {
  ...Default,
  args: {
    buttons: [
      <ButtonBaseBar label="PencilIcon" icon={PencilIcon} counter={0} />,
      <ButtonBaseBar label="MoreHorizontalIcon" icon={MoreHorizontalIcon} disabled />,
      <ButtonBaseBar label="PlusIcon" icon={PlusIcon} />,
    ],
  },
}

export const Tooltip: Story = {
  ...Default,
  args: {
    buttons: [
      <ButtonBaseBar label="PencilIcon" tooltip="Edit" icon={PencilIcon} counter={3} />,
      <ButtonBaseBar label="MoreHorizontalIcon" tooltip="More" icon={MoreHorizontalIcon} />,
      <ButtonBaseBar label="PlusIcon" tooltip="Add" icon={PlusIcon} />,
    ],
  },
}
