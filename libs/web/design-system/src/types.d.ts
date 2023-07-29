declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
    mobileDialog: true
    desktopDialog: true
  }

  interface Theme {
    name: ThemeEnum
  }

  interface ThemeOptions {
    name: ThemeEnum
  }

  interface Palette {
    button: PaletteTheme['button']
    surface: PaletteTheme['surface']
    state: PaletteTheme['state']
    on: PaletteTheme['on']
    accent: PaletteTheme['accent']
  }
  interface TypeBackground {
    main: PaletteTheme['background']['main']
  }
  interface PaletteColor {
    variant: PaletteColorTheme['variant']
    900: PaletteColorTheme['900']
    800: PaletteColorTheme['800']
    700: PaletteColorTheme['700']
    600: PaletteColorTheme['600']
    500: PaletteColorTheme['500']
    400: PaletteColorTheme['400']
    300: PaletteColorTheme['300']
    200: PaletteColorTheme['200']
    100: PaletteColorTheme['100']
    50: PaletteColorTheme['50']
  }

  interface PaletteOptions {
    button: PaletteTheme['button']
    surface: PaletteTheme['surface']
    state: PaletteTheme['state']
    on: PaletteTheme['on']
    accent: PaletteTheme['accent']
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    gray: PaletteTheme['common']['gray']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ghost: true
  }
}
