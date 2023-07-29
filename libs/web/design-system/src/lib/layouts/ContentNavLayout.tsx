import { forwardRef } from 'react'

import { Grid } from '../core/Grid/Grid'

export interface ContentNavLayoutProps {
  breadcrumbs: React.ReactNode
  actions: React.ReactNode
}

export const ContentNavLayout = forwardRef(function ContentNavLayout(
  { breadcrumbs, actions }: ContentNavLayoutProps,
  ref: React.Ref<HTMLDivElement> | undefined,
) {
  return (
    <Grid container alignItems="center" ref={ref}>
      <Grid item xs={4} sm>
        {breadcrumbs}
      </Grid>
      <Grid item sx={{ width: { xs: '100%', lg: 'auto' } }}>
        {actions}
      </Grid>
    </Grid>
  )
})

export default ContentNavLayout
