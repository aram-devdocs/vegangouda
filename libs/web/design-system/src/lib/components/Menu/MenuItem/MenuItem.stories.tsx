import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BellSolidIcon, HeartFillIcon } from '../../../icons'
import { MenuItem } from './MenuItem'
import { Avatar as AvatarComponent } from '../../../core/Avatar/Avatar'

const meta: Meta<typeof MenuItem> = {
  title: 'Design System/Menu/MenuItem',
  tags: ['autodocs'],
  component: MenuItem,
}
export default meta

type Story = StoryObj<typeof MenuItem>

export const Title: Story = {
  args: {
    children: 'Title',
  },
}

export const TitleSubtitle: Story = {
  args: {
    children: 'Title',
    subtitle: 'Subtitle',
  },
}

export const LongTitle: Story = {
  args: {
    children:
      'Title Vivamus hendrerit porttitor egestas. Vivamus eu arcu a ex laoreet hendrerit vel nec magna. Proin mattis nisl vitae congue bibendum. Proin mattis nisl vitae congue bibendum',
  },
}

export const LongTitleSubtitle: Story = {
  args: {
    children:
      'Title Vivamus hendrerit porttitor egestas. Vivamus eu arcu a ex laoreet hendrerit vel nec magna. Proin mattis nisl vitae congue bibendum',
    subtitle:
      'Subitle Nullam viverra nisi ac elit ullamcorper, et dignissim elit ornare. Suspendisse vel mauris mi. Sed pulvinar nulla in tellus consectetur vulputate.Vestibulum risus velit, imperdiet eu nulla et, interdum feugiat leo. Phasellus ut lectus dignissim nunc convallis bibendum',
  },
}

export const LongTitleSubtitleIcon: Story = {
  args: {
    children:
      'Title Vivamus hendrerit porttitor egestas. Vivamus eu arcu a ex laoreet hendrerit vel nec magna. Proin mattis nisl vitae congue bibendum',
    subtitle:
      'Subitle Nullam viverra nisi ac elit ullamcorper, et dignissim elit ornare. Suspendisse vel mauris mi. Sed pulvinar nulla in tellus consectetur vulputate.Vestibulum risus velit, imperdiet eu nulla et, interdum feugiat leo. Phasellus ut lectus dignissim nunc convallis bibendum',
    icon: HeartFillIcon,
  },
}

export const LongTitleSubtitleIconRight: Story = {
  args: {
    children:
      'Title Vivamus hendrerit porttitor egestas. Vivamus eu arcu a ex laoreet hendrerit vel nec magna. Proin mattis nisl vitae congue bibendum',
    subtitle:
      'Subitle Nullam viverra nisi ac elit ullamcorper, et dignissim elit ornare. Suspendisse vel mauris mi. Sed pulvinar nulla in tellus consectetur vulputate.Vestibulum risus velit, imperdiet eu nulla et, interdum feugiat leo. Phasellus ut lectus dignissim nunc convallis bibendum',
    iconRight: BellSolidIcon,
  },
}

export const LongTitleSubtitleIconBoth: Story = {
  args: {
    children:
      'Title Vivamus hendrerit porttitor egestas. Vivamus eu arcu a ex laoreet hendrerit vel nec magna. Proin mattis nisl vitae congue bibendum',
    subtitle:
      'Subitle Nullam viverra nisi ac elit ullamcorper, et dignissim elit ornare. Suspendisse vel mauris mi. Sed pulvinar nulla in tellus consectetur vulputate.Vestibulum risus velit, imperdiet eu nulla et, interdum feugiat leo. Phasellus ut lectus dignissim nunc convallis bibendum',
    icon: HeartFillIcon,
    iconRight: BellSolidIcon,
  },
}

export const LongTitleSubtitleAvatar: Story = {
  args: {
    children:
      'Title Vivamus hendrerit porttitor egestas. Vivamus eu arcu a ex laoreet hendrerit vel nec magna. Proin mattis nisl vitae congue bibendum',
    subtitle:
      'Subitle Nullam viverra nisi ac elit ullamcorper, et dignissim elit ornare. Suspendisse vel mauris mi. Sed pulvinar nulla in tellus consectetur vulputate.Vestibulum risus velit, imperdiet eu nulla et, interdum feugiat leo. Phasellus ut lectus dignissim nunc convallis bibendum',
    avatar: <AvatarComponent size="large">B</AvatarComponent>,
  },
}

export const IconLeft: Story = {
  args: {
    children: 'Title',
    icon: HeartFillIcon,
  },
}

export const IconLeftSubtitle: Story = {
  args: {
    children: 'Title',
    subtitle: 'Subtitle',
    icon: HeartFillIcon,
  },
}

export const IconRight: Story = {
  args: {
    children: 'Title',
    iconRight: BellSolidIcon,
  },
}

export const IconRightSubtitle: Story = {
  args: {
    children: 'Title',
    subtitle: 'Subtitle',
    iconRight: BellSolidIcon,
  },
}

export const IconBoth: Story = {
  args: {
    children: 'Title',
    icon: HeartFillIcon,
    iconRight: BellSolidIcon,
  },
}

export const IconBothSubtitle: Story = {
  args: {
    children: 'Title',
    subtitle: 'Subtitle',
    icon: HeartFillIcon,
    iconRight: BellSolidIcon,
  },
}

export const Avatar: Story = {
  args: {
    children: 'Title',
    avatar: <AvatarComponent size="large">B</AvatarComponent>,
  },
}

export const AvatarSubtitle: Story = {
  args: {
    children: 'Title',
    subtitle: 'Subtitle',
    avatar: <AvatarComponent size="large">B</AvatarComponent>,
  },
}

export const AvatarIconRight: Story = {
  args: {
    children: 'Title',
    iconRight: BellSolidIcon,
    avatar: <AvatarComponent size="large">B</AvatarComponent>,
  },
}

export const AvatariconRightSubtitle: Story = {
  args: {
    children: 'Title',
    subtitle: 'Subtitle',
    iconRight: BellSolidIcon,
    avatar: <AvatarComponent size="large">B</AvatarComponent>,
  },
}

export const Checkable: Story = {
  args: {
    children: 'Title',
    checked: true,
  },
}

export const CheckableUncheck: Story = {
  args: {
    children: 'Title',
    checked: false,
  },
}

export const CheckableAvatar: Story = {
  args: {
    children: 'Title',
    checked: true,
    avatar: <AvatarComponent size="large">B</AvatarComponent>,
  },
}

export const CheckableRight: Story = {
  args: {
    children: 'Title',
    checked: true,
    checkPosition: 'right',
    avatar: <AvatarComponent size="large">B</AvatarComponent>,
  },
}

export const OverrideTitle: Story = {
  args: {
    children: 'Title',
    icon: HeartFillIcon,
    titleProps: { color: 'error.main' },
  },
}

export const OverrideTitleIcon: Story = {
  args: {
    children: 'Title',
    icon: HeartFillIcon,
    titleProps: { color: 'on.surface.disabled' },
    iconProps: { sx: { color: 'on.surface.disabled' } },
  },
}
