export type IUnderlying = {
  primary: string
  primaryVariant: string
  primary50: string
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary600: string
  primary700: string
  primary800: string
  primary900: string
  secondary: string
  secondaryVariant: string
  secondary50: string
  secondary100: string
  secondary200: string
  secondary300: string
  secondary400: string
  secondary500: string
  secondary600: string
  secondary700: string
  secondary800: string
  secondary900: string
  surface: string
  background: string
  error: string
}
export const Underlying: IUnderlying = {
  primary: 'primary.main',
  primaryVariant: 'primary.variant',
  primary50: 'primary.50',
  primary100: 'primary.100',
  primary200: 'primary.200',
  primary300: 'primary.300',
  primary400: 'primary.400',
  primary500: 'primary.500',
  primary600: 'primary.600',
  primary700: 'primary.700',
  primary800: 'primary.800',
  primary900: 'primary.900',
  secondary: 'secondary.main',
  secondaryVariant: 'secondary.variant',
  secondary50: 'secondary.50',
  secondary100: 'secondary.100',
  secondary200: 'secondary.200',
  secondary300: 'secondary.300',
  secondary400: 'secondary.400',
  secondary500: 'secondary.500',
  secondary600: 'secondary.600',
  secondary700: 'secondary.700',
  secondary800: 'secondary.800',
  secondary900: 'secondary.900',
  surface: 'surface.main',
  background: 'background.main',
  error: 'error.main',
}

export const OnUnderlying: IUnderlying = {
  primary: 'on.primary.main',
  primaryVariant: 'on.primary.variant',
  primary50: 'on.primary.50',
  primary100: 'on.primary.100',
  primary200: 'on.primary.200',
  primary300: 'on.primary.300',
  primary400: 'on.primary.400',
  primary500: 'on.primary.500',
  primary600: 'on.primary.600',
  primary700: 'on.primary.700',
  primary800: 'on.primary.800',
  primary900: 'on.primary.900',
  secondary: 'on.secondary.main',
  secondaryVariant: 'on.secondary.variant',
  secondary50: 'on.secondary.50',
  secondary100: 'on.secondary.100',
  secondary200: 'on.secondary.200',
  secondary300: 'on.secondary.300',
  secondary400: 'on.secondary.400',
  secondary500: 'on.secondary.500',
  secondary600: 'on.secondary.600',
  secondary700: 'on.secondary.700',
  secondary800: 'on.secondary.800',
  secondary900: 'on.secondary.900',
  surface: 'on.surface',
  background: 'on.background',
  error: 'on.error',
}

/** Extract available sx props related to position */
export type SxPosition = {
  marginTop?: number
}
