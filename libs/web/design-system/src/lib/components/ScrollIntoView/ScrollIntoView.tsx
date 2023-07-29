import { Box, BoxProps } from '@vegangouda/design-system'
import { useLayoutEffect, useState } from 'react'

export interface ScrollIntoViewProps extends BoxProps, ScrollIntoViewOptions {
  shouldScrollIntoView: boolean
}

export function ScrollIntoView({
  shouldScrollIntoView,
  behavior,
  inline,
  block,
  ...boxProps
}: ScrollIntoViewProps) {
  const ref = useScrollIntoView(shouldScrollIntoView, { behavior, inline, block })
  return <Box ref={ref} {...boxProps} />
}

export function useScrollIntoView(shouldScrollIntoView: boolean, options?: ScrollIntoViewOptions) {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (ref && shouldScrollIntoView) {
      ref.scrollIntoView(options)
    }
  }, [options, ref, shouldScrollIntoView])

  return setRef
}
