import React from 'react'
import { Divider } from '@mui/material'
import { Typography } from '../core/Typography/Typography'
import { Stack } from '../core/Stack/Stack'
import * as CorporateStickers from './corporate'
import * as HeatMapStickers from './heatMap'
import * as EmojiStickers from './emoji'
import { SvgStickerProps, SvgStickerComponent } from './index'

interface IconsShowCaseProps extends SvgStickerProps {
  iconsToDisplay: 'corporate' | 'heatMap' | 'emoji'
}

function CorporateStickersShowCase() {
  type iconNames = keyof typeof CorporateStickers
  const names: iconNames[] = Object.keys(CorporateStickers) as iconNames[]
  const renderIcons = () => {
    return names.map(name => {
      const Component = CorporateStickers[name] as SvgStickerComponent
      return (
        <React.Fragment key={name}>
          <Stack direction="row" spacing={2}>
            <Component />
            <Typography>{name}</Typography>
          </Stack>
        </React.Fragment>
      )
    })
  }
  return (
    <Stack spacing={2} divider={<Divider />}>
      {renderIcons()}
    </Stack>
  )
}

function HeatMapStickersShowCase() {
  type iconNames = keyof typeof HeatMapStickers
  const names: iconNames[] = Object.keys(HeatMapStickers) as iconNames[]
  const renderIcons = () => {
    return names.map(name => {
      const Component = HeatMapStickers[name] as SvgStickerComponent
      return (
        <React.Fragment key={name}>
          <Stack direction="row" spacing={2}>
            <Component />
            <Typography>{name}</Typography>
          </Stack>
        </React.Fragment>
      )
    })
  }
  return (
    <Stack spacing={2} divider={<Divider />}>
      {renderIcons()}
    </Stack>
  )
}

function EmojiStickersShowCase() {
  type iconNames = keyof typeof EmojiStickers
  const names: iconNames[] = Object.keys(EmojiStickers) as iconNames[]
  const renderIcons = () => {
    return names.map(name => {
      const Component = EmojiStickers[name] as SvgStickerComponent
      return (
        <React.Fragment key={name}>
          <Stack direction="row" spacing={2}>
            <Component />
            <Typography>{name}</Typography>
          </Stack>
        </React.Fragment>
      )
    })
  }
  return (
    <Stack spacing={2} divider={<Divider />}>
      {renderIcons()}
    </Stack>
  )
}

function IconsShowCase({ iconsToDisplay }: IconsShowCaseProps) {
  if (iconsToDisplay === 'corporate') return <CorporateStickersShowCase />
  if (iconsToDisplay === 'emoji') return <EmojiStickersShowCase />
  return <HeatMapStickersShowCase />
}

export default {
  title: 'Assets/Stickers',
  component: IconsShowCase,
  argTypes: {},
}

const Template = args => <IconsShowCase {...args} />

export const Corporate = Template.bind({})
Corporate.args = {
  iconsToDisplay: 'corporate',
}

export const HeatMap = Template.bind({})
HeatMap.args = {
  iconsToDisplay: 'heatMap',
}

export const Emoji = Template.bind({})
Emoji.args = {
  iconsToDisplay: 'emoji',
}
