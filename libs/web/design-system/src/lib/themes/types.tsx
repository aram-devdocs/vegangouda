import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Shadows } from '@mui/material/styles/shadows';

export type State = {
  hovered: string;
  focused: string;
  pressed: string;
  dragged: string;
  selected: string;
};

export type OnColor = {
  highEmphasis: string;
  mediumEmphasis: string;
  disabled: string;
};

export type PaletteColorTheme = {
  main: string;
  variant: string;
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
};

export interface PaletteTheme {
  common: {
    white: string;
    black: string;
    gray: string;
  };
  background: {
    paper: string;
    default: string;
    main: string;
  };
  button: {
    main: string;
    disabled: string;
  };
  error: {
    main: string;
  };
  primary: PaletteColorTheme;
  secondary: PaletteColorTheme;
  surface: {
    main: string;
  };
  state: {
    main: State;
    surface: State;
    background: State;
    button: State;
  };
  on: {
    primary: {
      main: OnColor;
      variant: OnColor;
      900: OnColor;
      800: OnColor;
      700: OnColor;
      600: OnColor;
      500: OnColor;
      400: OnColor;
      300: OnColor;
      200: OnColor;
      100: OnColor;
      50: OnColor;
    };
    secondary: {
      main: OnColor;
      variant: OnColor;
      900: OnColor;
      800: OnColor;
      700: OnColor;
      600: OnColor;
      500: OnColor;
      400: OnColor;
      300: OnColor;
      200: OnColor;
      100: OnColor;
      50: OnColor;
    };
    error: {
      highEmphasis: string;
      mediumEmphasis: string;
    };
    surface: OnColor & {
      error: string;
      accent: string;
    };
    background: OnColor & {
      error: string;
      accent: string;
    };
    button: {
      highEmphasis: string;
      disabled: string;
    };
    accent: OnColor;
  };
  accent: {
    main: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
  };
}

export interface BrandTheme {
  palette: PaletteTheme;
  typography: TypographyOptions;
  shadows: Shadows;
}

export type IUnderlying = {
  primary: string;
  primaryVariant: string;
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
  secondary: string;
  secondaryVariant: string;
  secondary50: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;
  surface: string;
  background: string;
  error: string;
};
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
};

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
};

/** Extract available sx props related to position */
export type SxPosition = {
  marginTop?: number;
};
