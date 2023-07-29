import { useState } from 'react'
import { Box } from '../../core/Box/Box'
import { Button } from '../../core/Button/Button'
import { Stack } from '../../core/Stack/Stack'
import { Typography } from '../../core/Typography/Typography'
import { ChevronDownIcon, ChevronRightIcon } from '../../icons'

export interface ExpandablePanelProps {
  actions?: React.ReactNode
  children: React.ReactNode
  /**
   * @default true
   */
  defaultExpanded?: boolean
  disabled?: boolean
  title: string
  titleComponent?: React.ReactNode
  /** @default Show [title] */
  tooltipCollapsed?: string
  /** @default Hide [title] */
  tooltipExpanded?: string
}

export function ExpandablePanel({
  title,
  titleComponent,
  actions,
  children,
  tooltipCollapsed,
  tooltipExpanded,
  defaultExpanded = true,
  disabled = false,
}: ExpandablePanelProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  const tooltip = expanded
    ? tooltipExpanded || `Hide ${title}`
    : tooltipCollapsed || `Show ${title}`
  return (
    <Box className={`ExpandablePanel ExpandablePanel-${expanded ? 'expanded' : 'collapsed'}`}>
      <Stack justifyContent="space-between" direction="row" className="ExpandablePanel-Header">
        <Stack direction="row" alignItems="center" className="ExpandablePanel-Title">
          <Button
            label={expanded ? 'Collapse' : 'Expand'}
            icon={expanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
            size="small"
            tooltip={disabled ? '' : tooltip}
            disabled={disabled}
            corners="rounded"
            variant="outlined"
            onClick={() => {
              setExpanded(!expanded)
            }}
          />
          {titleComponent ? (
            titleComponent
          ) : (
            <Typography color="on.background.highEmphasis" variant="h4" marginLeft={1.25}>
              {title}
            </Typography>
          )}
        </Stack>
        <Box className="ExpandablePanel-Actions">{actions}</Box>
      </Stack>
      <Box
        className="ExpandablePanel-Content"
        sx={{
          minHeight: 0,
          height: expanded ? 'auto' : 0,
          overflow: expanded ? 'visible' : 'hidden',
          marginTop: expanded ? 1.25 : 0,
          transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
