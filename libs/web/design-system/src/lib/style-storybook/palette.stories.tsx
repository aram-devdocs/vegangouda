/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Box, ColorObject, Stack, List, ListItem, useTheme } from '@mui/material'
import { Typography } from '../core/Typography/Typography'
import { Meta } from '@storybook/react'

interface SwatchProps {
  value: string
}

const Swatch: React.FC<SwatchProps> = ({ value }) => {
  return (
    <Box sx={{ width: '25px', height: '25px', border: '1px solid black', background: value }} />
  )
}

interface ColorValueProps {
  name: string
  value: string | ColorObject
}

const ColorValue: React.FC<ColorValueProps> = ({ name, value }) => {
  const type = typeof value
  if (!value || type === 'function') {
    return null
  }
  if (type === 'string') {
    return (
      <>
        <Typography component="h4" variant={'h4'} sx={{ color: 'black' }}>
          {name}
        </Typography>
        <List>
          <ListItem>
            <Stack alignItems={'center'} direction={'row'} spacing={'5px'}>
              <Swatch value={value as string} />
              <Typography component={'span'} sx={{ color: 'black' }}>
                SINGLE VALUE
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </>
    )
  }
  return (
    <>
      <Typography variant={'h4'} sx={{ color: 'black' }}>
        {name}
      </Typography>
      <List>
        {Object.keys(value).map(color => {
          return (
            <ListItem key={color}>
              <Stack alignItems={'center'} direction={'row'} spacing={'5px'}>
                <Swatch value={(value as any)[color] as string} />
                <Typography component={'span'} sx={{ color: 'black' }}>
                  {color}
                </Typography>
              </Stack>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

const PaletteRenderer: React.FC<Record<string, never>> = () => {
  const theme = useTheme()
  return (
    <Stack>
      {Object.keys(theme.palette).map(color => {
        const value = (theme.palette as any)[color]
        return <ColorValue key={color} name={color} value={value} />
      })}
    </Stack>
  )
}

export default {
  component: PaletteRenderer,
  title: 'Palette',
} as Meta

export const Default = () => <PaletteRenderer />
