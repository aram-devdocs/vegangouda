import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogContent, DialogActions, DialogTitle } from './Dialog'
import { Button } from '../Button/Button'
import { Loader } from '../../components/Loader/Loader'
import { Typography } from '../Typography/Typography'
import { useEffect, useState } from 'react'

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Dialog',
  tags: ['autodocs'],
  component: Dialog,
}
export default meta

type Story = StoryObj<typeof Dialog>

const overflowData = Array(4).fill('')

export const Default: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogTitle>Modal title</DialogTitle>
        <DialogContent>Body message</DialogContent>
        <DialogActions>
          <Button
            label="Confirm"
            variant="contained"
            onClick={() => {
              console.log('confirm')
            }}
          />
          <Button
            label="Cancel"
            variant="outlined"
            onClick={() => {
              console.log('cancel')
            }}
          />
        </DialogActions>
      </>
    ),
  },
}

export const NoTitle: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogContent>Body message</DialogContent>
        <DialogActions>
          <Button
            label="Confirm"
            variant={'contained'}
            onClick={() => {
              console.log('confirm')
            }}
          />
          <Button
            label="Cancel"
            variant={'outlined'}
            onClick={() => {
              console.log('cancel')
            }}
          />
        </DialogActions>
      </>
    ),
  },
}

export const OneAction: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogContent>Body message</DialogContent>
        <DialogActions>
          <Button
            label="Cancel"
            variant={'outlined'}
            onClick={() => {
              console.log('cancel')
            }}
          />
        </DialogActions>
      </>
    ),
  },
}

export const Overflow: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogTitle>Modal title</DialogTitle>
        <DialogContent>
          {overflowData.map((a, index) => (
            <Typography key={index}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            label="Confirm"
            variant={'contained'}
            onClick={() => {
              console.log('confirm')
            }}
          />
          <Button
            label="Cancel"
            variant={'outlined'}
            onClick={() => {
              console.log('cancel')
            }}
          />
        </DialogActions>
      </>
    ),
  },
}

export const OverflowNoTitle: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogContent>
          {overflowData.map((a, index) => (
            <Typography key={index}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            label="Confirm"
            variant={'contained'}
            onClick={() => {
              console.log('confirm')
            }}
          />
          <Button
            label="Cancel"
            variant={'outlined'}
            onClick={() => {
              console.log('cancel')
            }}
          />
        </DialogActions>
      </>
    ),
  },
}

export const OverflowNoActions: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogTitle>Modal title</DialogTitle>
        <DialogContent>
          {overflowData.map((a, index) => (
            <Typography key={index}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </Typography>
          ))}
        </DialogContent>
      </>
    ),
  },
}

export const OverflowDelay: Story = {
  render: args => {
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoadingData(false)
      }, 5000)
      return () => clearTimeout(timer)
    }, [])

    return (
      <Dialog open={args.open}>
        <DialogTitle>Modal title</DialogTitle>
        <DialogContent>{loadingData ? <Loader /> : args.children} </DialogContent>
        <DialogActions>
          <Button
            label="Confirm"
            variant={'contained'}
            disabled={loadingData}
            onClick={() => {
              console.log('confirm')
            }}
          />
          <Button
            label="Cancel"
            variant={'outlined'}
            onClick={() => {
              console.log('cancel')
            }}
          />
        </DialogActions>
      </Dialog>
    )
  },
  args: {
    open: true,
    children: (
      <>
        {overflowData.map((a, index) => (
          <Typography key={index}>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>
        ))}
        <DialogContent>Body message</DialogContent>
      </>
    ),
  },
}
