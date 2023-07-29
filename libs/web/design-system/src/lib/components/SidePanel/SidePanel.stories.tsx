import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SidePanel, SidePanelContent, SidePanelFooter, SidePanelHeader } from './SidePanel'

const meta: Meta<typeof SidePanel> = {
  title: 'Design System/SidePanel',
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'close' },
  },
  component: SidePanel,
}
export default meta

type Story = StoryObj<typeof SidePanel>

const children = (
  <h1>
    {' '}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed tortor non orci ultricies
    posuere in quis quam. Donec augue justo, feugiat quis dui ac, consequat accumsan sem. Donec leo
    velit, hendrerit placerat erat sit amet, luctus ornare magna. Morbi mattis quis ligula ut
    maximus. Sed eu enim fermentum, rhoncus leo quis, egestas est. Proin tincidunt sem interdum
    felis dignissim posuere. Vestibulum pretium lorem sed dapibus sollicitudin. Pellentesque
    ultrices ligula a magna tincidunt, vitae luctus lorem euismod. Integer ac nulla quis leo
    eleifend egestas. Suspendisse bibendum interdum est, et congue quam. Suspendisse leo mauris,
    tincidunt id ipsum vel, consequat rutrum odio. Phasellus at enim imperdiet, ultrices ligula in,
    fermentum urna. Phasellus tincidunt nisi lacus, sit amet faucibus risus maximus eget.{' '}
  </h1>
)

export const Default: Story = {
  args: {
    open: true,
    children,
  },
}
export const Subheader: Story = {
  args: {
    open: true,
    children,
  },
}

export const Medium: Story = {
  args: {
    open: true,
    children,
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    open: true,
    children,
    size: 'large',
  },
}

export const WithHeader: Story = {
  args: {
    open: true,
    children: (
      <>
        <SidePanelHeader>This is the content for the header</SidePanelHeader>
        <SidePanelContent>{children}</SidePanelContent>
      </>
    ),
    size: 'large',
  },
}

export const WithFooter: Story = {
  args: {
    open: true,
    children: (
      <>
        <SidePanelContent>{children}</SidePanelContent>
        <SidePanelFooter>Footer content</SidePanelFooter>
      </>
    ),
    size: 'large',
  },
}

export const WithHeaderFooter: Story = {
  args: {
    open: true,
    children: (
      <>
        <SidePanelHeader>This is the content for the header</SidePanelHeader>
        <SidePanelContent>{children}</SidePanelContent>
        <SidePanelFooter>Footer content</SidePanelFooter>
      </>
    ),
    size: 'large',
  },
}

export const WithHeaderFooterSmallContent: Story = {
  args: {
    open: true,
    children: (
      <>
        <SidePanelHeader>This is the content for the header</SidePanelHeader>
        <SidePanelContent>Content</SidePanelContent>
        <SidePanelFooter>Footer content</SidePanelFooter>
      </>
    ),
    size: 'large',
  },
}

export const DrillDown: Story = {
  args: {
    open: true,
    children: (
      <>
        <SidePanelHeader>This is the content for the header</SidePanelHeader>
        <SidePanelContent>Content</SidePanelContent>
        <SidePanelFooter>Footer content</SidePanelFooter>
      </>
    ),
    size: 'large',
  },
}
