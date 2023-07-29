import React from 'react'
import { Typography } from '../../core/Typography/Typography'
import { Box } from '../../core/Box/Box'
import { Stack } from '../../core/Stack/Stack'
import { useMediaQuery } from '@vegangouda/design-system'

const DEFAULT_RIGHTS = '© Indr, Inc. 2022 All Rights Reserved.'

export interface FooterProps {
  /** Copyright text */
  rights?: string
  /** Text and href for links */
  links?: Array<React.ReactNode>
  /** Build information that is shown in the corner */
  buildInfo?: string
  /** Disable Footer interactivity in the links
   * @default false
   */
  isInteractivityDisabled?: boolean
}

export const Footer: React.FC<FooterProps> = ({
  rights = DEFAULT_RIGHTS,
  links,
  buildInfo,
  isInteractivityDisabled,
}) => {
  const isPrint = useMediaQuery('print')
  const printStyles = isPrint
    ? {
        color: 'on.background.mediumEmphasis',
        backgroundColor: 'common.white',
        position: 'fixed',
        bottom: '24px',
        left: '48px',
        padding: 0,
        justifyContent: 'flex-start',
        breakAfter: 'always',
      }
    : {}

  return (
    <Box
      sx={{
        typography: 'caption',
        position: 'sticky',
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        padding: 3,
        flexWrap: 'wrap',
        rowGap: 2.5,
        columnGap: 1.25,
        color: 'common.white',
        backgroundColor: 'common.black',
        marginTop: 'auto',
        justifyContent: {
          xs: 'center',
          md: 'space-between',
        },
        a: {
          color: 'common.white',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        ...printStyles,
        pointerEvents: isInteractivityDisabled ? 'none' : 'auto',
      }}
    >
      <Typography component="span" variant="caption">
        {isPrint ? `${rights} Confidential. Do not distribute.` : rights}
      </Typography>
      {!isPrint && (
        <Stack spacing={2.5} direction="row">
          {links}
        </Stack>
      )}
      {buildInfo && !isPrint && (
        <Typography
          component="span"
          typography="caption"
          color="common.white"
          sx={{
            position: 'absolute',
            right: 24,
            bottom: 4,
            opacity: 0.6,
          }}
        >
          {buildInfo}
        </Typography>
      )}
    </Box>
  )
}
