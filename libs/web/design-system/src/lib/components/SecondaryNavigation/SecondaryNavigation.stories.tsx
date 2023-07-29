import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PersonaIcon } from '../../icons'
import { sectionItems, sectionItemsWithIcon } from '../../mock'
import {
  SecondaryNavigation,
  SectionItem,
  SectionItemLink,
  SectionDetailItem,
  SectionMenu,
} from './SecondaryNavigation'

const meta: Meta<typeof SecondaryNavigation> = {
  title: 'Design System/SecondaryNavigation',
  tags: ['autodocs'],
  component: SecondaryNavigation,
}
export default meta

type Story = StoryObj<typeof SecondaryNavigation>

export const WithSectionItem: Story = {
  args: {
    children: <SectionItem label="Site Settings" icon={PersonaIcon} />,
  },
}

export const WithSectionItemLink: Story = {
  args: {
    children: <SectionItemLink label="Site Settings" link="/" icon={PersonaIcon} />,
  },
}

export const WithSectionDetailItem: Story = {
  args: {
    children: <SectionDetailItem label="Site Settings" />,
  },
}

export const WithSectionMenuIcon: Story = {
  args: {
    children: <SectionMenu label="Personas" icon={PersonaIcon} items={sectionItemsWithIcon} />,
  },
}

export const WithSectionMenu: Story = {
  args: {
    children: <SectionMenu label="Personas" icon={PersonaIcon} items={sectionItems} />,
  },
}
