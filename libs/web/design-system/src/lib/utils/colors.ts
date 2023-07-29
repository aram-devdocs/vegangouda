import { PaletteTheme } from '@indr/shared/theme'

const colors = [
  'accent.10',
  'accent.4',
  'accent.13',
  'accent.7',
  'accent.2',
  'accent.8',
  'accent.12',
  'accent.1',
  'accent.6',
  'accent.11',
  'accent.3',
  'accent.5',
  'accent.9',
] as const

const colorsProperty = [10, 4, 13, 7, 2, 8, 12, 1, 6, 11, 3, 5, 9] as const

type Color = (typeof colors)[number]
type AccentKeys = keyof PaletteTheme['accent']

/**
 * Return property color.
 * Accent is repeated by 13.
 * This will allow to use in the theme object theme.palette.accent[PROPERTY]
 * @constructor
 * @param {number} number - Starting at 0
 */
export function findAccentColorProperty(number: number): AccentKeys {
  return colorsProperty[number % colors.length]
}

/**
 * Return color sorted as a string.
 * Accent is repeated by 13.
 * This will allow to use it in the SX prop of a
 * component and will be interpreted by the theme
 * @constructor
 * @param {number} number - Starting at 0
 */
export function findAccentColorString(number: number): Color {
  return colors[number % colors.length]
}
