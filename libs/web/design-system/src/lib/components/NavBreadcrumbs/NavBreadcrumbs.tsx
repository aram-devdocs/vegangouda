/* eslint-disable @typescript-eslint/ban-types */
import { FC } from 'react'
import { Box } from '../../core/Box/Box'
import { NavBreadcrumb } from './NavBreadcrumb'
import { MobileLabel } from './MobileLabel'
import { Link } from '../../core/Link/Link'
import { SvgIconComponent } from '../../icons'

export interface NavBreadcrumbsItem {
  /** Unique id of the nav item */
  id: string
  /** Label to display */
  label: string
  /** Icon to show as a React node */
  icon: SvgIconComponent
  /** React router to link */
  to?: string
  /** External href to link to in case of wemvula */
  href?: string
  /** Item is locked */
  locked?: boolean
  /** Set to true if item is selected */
  selected?: boolean
}

export interface NavBreadcrumbsProps {
  /** Aria label to use */
  'aria-label'?: string
  /** Nav items to display */
  items?: Array<NavBreadcrumbsItem>
}

export const NavBreadcrumbs: FC<NavBreadcrumbsProps> = props => {
  // Find our currently selected item
  const renderSelectedItem = () => {
    const found = (props.items || []).find(item => item.selected)
    if (!found) {
      return null
    }
    return (
      <Box
        sx={{
          display: {
            xs: 'flex',
            lg: 'none',
          },
          flexDirection: 'row',
          alignItems: 'center',
          mt: '10px',
        }}
      >
        <MobileLabel {...found} />
      </Box>
    )
  }

  const renderItem = (item: NavBreadcrumbsItem, index: number) => {
    const length = props.items ? props.items.length : 0
    return (
      <Box
        key={item.id}
        component="li"
        sx={{
          display: 'flex',
          flex: '1',
          zIndex: length - index, // Use the z-index to overlay the items to cause overlap to occur from left to right
        }}
      >
        <Link to={item.to} href={item.href} sx={{ display: 'flex', flex: '1' }}>
          <NavBreadcrumb {...item} first={index === 0} last={index === length - 1} />
        </Link>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        component="ol"
        aria-label={props['aria-label'] || 'Navigation'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          listStyleType: 'none',
          p: 0,
          m: 0,
        }}
      >
        {props.items?.map(renderItem)}
      </Box>
      {renderSelectedItem()}
    </Box>
  )
}
