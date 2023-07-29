import React from 'react'
import { LinearProgress, LinearProgressProps } from '../../core/LinearProgress/LinearProgress'

export interface ProgressBarProps {
  /**
   * The value of the progress
   * Value between 0 and 100.
   */
  value: LinearProgressProps['value']

  /* Whether the progress bar should be error colored */
  isError?: boolean
}

export const ProgressBar = ({ value, isError }: ProgressBarProps) => {
  return (
    <LinearProgress
      sx={{
        height: '6px',
        backgroundColor: 'primary.50',
        '.MuiLinearProgress-bar': {
          backgroundColor: isError ? 'error.main' : 'primary.900',
        },
      }}
      variant="determinate"
      value={value === 0 ? 1 : value}
    />
  )
}
