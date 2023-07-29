import { Breadcrumbs } from '../../core/Breadcrumbs/Breadcrumbs'
import { HomeItem } from './HomeItem'
export { SectionItem } from './SectionItem'
export { SectionItemLink } from './SectionItemLink'
export { SectionMenu } from './SectionMenu'
export { SectionDetailItem } from './SectionDetailItem'
export type { SecondaryNavigationMenuItem } from './SectionMenu'
export interface SecondaryNavigationProps {
  children: React.ReactNode
}

export function SecondaryNavigation({ children }: SecondaryNavigationProps) {
  return (
    <Breadcrumbs
      aria-label="navigation"
      sx={{
        maxWidth: '100%',
        ol: {
          flexWrap: 'nowrap',
          minWidth: 0,
        },
        li: {
          maxWidth: '100%',
        },
        '.MuiBreadcrumbs-separator': {
          marginLeft: 1.25,
          marginRight: 1.25,
        },
        '.MuiBreadcrumbs-li:first-of-type': {
          display: {
            xs: 'none',
            sm: 'list-item',
          },
        },
        '.MuiBreadcrumbs-separator:nth-of-type(2)': {
          display: {
            xs: 'none',
            sm: 'flex',
          },
        },
        '.MuiBreadcrumbs-li:last-child': {
          overflow: 'hidden',
        },
      }}
    >
      <HomeItem />
      {children}
    </Breadcrumbs>
  )
}
