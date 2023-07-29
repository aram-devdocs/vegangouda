import React from 'react'
import { SvgIcon } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon'
import { Story } from '@storybook/react'
import { ListItem, ListItemAvatar, ListItemText, List, Divider } from '@mui/material'
import * as Icons from './index'
import * as ActionIcons from './action'
import * as AlertIcons from './alert'
import * as ArtifactIcons from './artifact'
import * as ContentIcons from './content'
import * as KeyboardIcons from './keyboard'
import * as NavigationIcons from './navigation'
import * as SocialIcons from './social'
import * as OtherIcons from './other'

type IconsType = typeof Icons

interface IconsShowCaseProps extends SvgIconProps {
  iconsToDisplay: Partial<IconsType>
}

function IconsShowCase({ color, iconsToDisplay }: IconsShowCaseProps) {
  type iconNames = keyof typeof iconsToDisplay
  const names: iconNames[] = Object.keys(iconsToDisplay) as iconNames[]
  const renderIcons = () => {
    return names.map(name => {
      const Component = iconsToDisplay[name] as typeof SvgIcon
      return (
        <React.Fragment key={name}>
          <ListItem>
            <ListItemAvatar>
              <Component color={color} />
            </ListItemAvatar>
            <ListItemText>{name}</ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      )
    })
  }
  return <List>{renderIcons()}</List>
}

export default {
  title: 'Assets/Icons',
  component: IconsShowCase,
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

const Template: Story<IconsShowCaseProps> = args => <IconsShowCase {...args} />

export const Default = Template.bind({})
Default.args = {
  iconsToDisplay: Icons,
}

export const Action = Template.bind({})
Action.args = {
  iconsToDisplay: ActionIcons,
}

export const Alert = Template.bind({})
Alert.args = {
  iconsToDisplay: AlertIcons,
}

export const Artifact = Template.bind({})
Artifact.args = {
  iconsToDisplay: ArtifactIcons,
}

export const Content = Template.bind({})
Content.args = {
  iconsToDisplay: ContentIcons,
}

export const Keyboard = Template.bind({})
Keyboard.args = {
  iconsToDisplay: KeyboardIcons,
}

export const Navigation = Template.bind({})
Navigation.args = {
  iconsToDisplay: NavigationIcons,
}

export const Social = Template.bind({})
Social.args = {
  iconsToDisplay: SocialIcons,
}

export const Other = Template.bind({})
Other.args = {
  iconsToDisplay: OtherIcons,
}
