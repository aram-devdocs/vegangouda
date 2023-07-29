import { FC, forwardRef } from 'react'
import { Slider as MuiSlider, SliderProps as MuiSliderProps, Box } from '@mui/material'

export interface SliderProps extends MuiSliderProps {
  /** Allows inserting a leading component, which is typically text.  If just text, the text will be styled correctly */
  leading?: React.ReactNode
  /** Trailing node, which is typically an icon or a text input */
  trailing?: React.ReactNode
}

export const Slider: FC<SliderProps> = forwardRef(({ leading, trailing, ...restProps }, ref) => {
  if (leading || trailing) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {leading && (
          <Box
            sx={{
              typography: 'body1',
              color: 'on.background.mediumEmphasis',
              marginRight: 2,
            }}
          >
            {leading}
          </Box>
        )}
        <MuiSlider {...restProps} />
        {trailing && (
          <Box
            sx={{
              typography: 'body1',
              color: 'on.background.mediumEmphasis',
              marginLeft: 2,
            }}
          >
            {trailing}
          </Box>
        )}
      </Box>
    )
  }
  return <MuiSlider {...restProps} ref={ref} />
})
