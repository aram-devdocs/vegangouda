import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Tooltip',
  tags: ['autodocs'],
  component: Tooltip,
}
export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: args => (
    <div style={{ margin: '4em' }}>
      <Tooltip {...args} />
    </div>
  ),
  args: {
    title: 'Respondents completed the survey and signed up for an account',
    open: true,
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc tortor, eleifend sit
        amet dapibus vel, luctus sed nisl. Quisque pretium varius imperdiet. Quisque sit amet magna
        nisi. Pellentesque eget nisl eget eros condimentum eleifend. Sed vel nisi leo. Nulla lectus
        ante, ornare sit amet semper in, commodo nec quam. Curabitur varius magna eu mauris aliquam
        placerat. Pellentesque ut risus eu mauris eleifend vestibulum. Donec maximus felis et
        vestibulum dignissim. Fusce feugiat at ex eget rhoncus. Cras finibus tortor nisl, et
        ullamcorper odio volutpat non. Integer porta neque quis risus dapibus tincidunt. Praesent
        finibus rutrum sagittis.
      </div>
    ),
  },
}
