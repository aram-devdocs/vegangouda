import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableBody, TableCell, TableHead, TableRow } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Design System/Table',
  tags: ['autodocs'],
  component: Table,
}
export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell align="center">Column 2</TableCell>
            <TableCell align="right">Column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell align="center">Cell 2</TableCell>
            <TableCell align="right">Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 4</TableCell>
            <TableCell align="center">Cell 5</TableCell>
            <TableCell align="right">Cell 6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 7</TableCell>
            <TableCell align="center">Cell 8</TableCell>
            <TableCell align="right">Cell 9</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}
