import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Table, TableBody, TableRow, TableCell } from '../../Table/Table'
import { PlusIcon } from '../../../icons'
import { Underlying } from '../../../themes/types'
import { ButtonStoryProps } from './types'

const meta: Meta<typeof Button> = {
  title: 'Design System/Button/Showcase/Error',
  tags: ['autodocs'],
  component: Button,
}
export default meta

type Story = StoryObj<ButtonStoryProps>

export const Error: Story = {
  render: args => (
    <Table
      sx={{
        backgroundColor: Underlying[args.on],
      }}
    >
      <TableBody sx={{ td: { paddingY: 1 } }}>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>Leading Icon</TableCell>
          <TableCell>Trailing Icon</TableCell>
          <TableCell>Icon</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Contained</TableCell>
          <TableCell>
            <Button {...args} variant="contained" />
          </TableCell>
          <TableCell>
            <Button {...args} variant="contained" startIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} variant="contained" endIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} variant="contained" icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Outlined</TableCell>
          <TableCell>
            <Button {...args} variant="outlined" corners="rounded" />
          </TableCell>
          <TableCell>
            <Button {...args} variant="outlined" corners="rounded" startIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} variant="outlined" corners="rounded" endIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} variant="outlined" corners="rounded" icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>contained</TableCell>
          <TableCell>
            <Button {...args} variant="contained" size="small" />
          </TableCell>
          <TableCell>
            <Button {...args} variant="contained" size="small" startIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} variant="contained" size="small" endIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} variant="contained" size="small" icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Text</TableCell>
          <TableCell>
            <Button {...args} variant="text" size="small" corners="rounded" />
          </TableCell>
          <TableCell>
            <Button
              {...args}
              variant="text"
              size="small"
              corners="rounded"
              startIcon={<PlusIcon />}
            />
          </TableCell>
          <TableCell>
            <Button
              {...args}
              variant="text"
              size="small"
              corners="rounded"
              endIcon={<PlusIcon />}
            />
          </TableCell>
          <TableCell>
            <Button {...args} variant="text" size="small" corners="rounded" icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  args: {
    label: 'Button',
    color: 'error',
    disabled: false,
    loading: false,
  },
}

export const ErrorDisabled: Story = {
  ...Error,
  args: {
    label: 'Button',
    color: 'error',
    disabled: true,
    loading: false,
  },
}

export const ErrorLoading: Story = {
  ...Error,
  args: {
    label: 'Button',
    color: 'error',
    disabled: false,
    loading: true,
  },
}
