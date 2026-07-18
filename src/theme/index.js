import { extendTheme } from '@chakra-ui/react';

// Design system "Pesisir Institusional" — lihat DESIGN-SPEC.md
const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Plus Jakarta Sans', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  colors: {
    // Biru Watukarung
    brand: {
      50: '#F2F7FB',
      100: '#E1EDF7',
      200: '#C3DAEE',
      300: '#94BEDF',
      400: '#5E9CCB',
      500: '#3B7FB6',
      600: '#1F619B',
      700: '#174E80',
      800: '#123E66',
      900: '#0C2A47',
    },
    // Amber Mentari — teks di bg terang wajib accent.700 (AA)
    accent: {
      50: '#FFF8EB',
      100: '#FEEDC7',
      200: '#FBDA8C',
      300: '#F8C453',
      400: '#F5AE26',
      500: '#E89B0C',
      600: '#C77F06',
      700: '#9C6207',
      800: '#7A4D0B',
      900: '#653F0D',
    },
    // Slate dingin
    gray: {
      50: '#F7F9FB',
      100: '#EEF2F6',
      200: '#DEE5EC',
      300: '#C4CFDA',
      400: '#94A3B3',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E2A3A',
      900: '#0F1A28',
    },
  },
  semanticTokens: {
    colors: {
      'bg.canvas': { default: 'gray.50', _dark: '#0B1220' },
      'bg.surface': { default: 'white', _dark: '#101B2D' },
      'bg.subtle': { default: 'gray.100', _dark: '#16243A' },
      'bg.inverse': { default: 'brand.900', _dark: 'brand.900' },
      'border.default': { default: 'gray.200', _dark: '#24364F' },
      'border.hover': { default: 'brand.300', _dark: 'brand.500' },
      'border.active': { default: 'brand.600', _dark: 'brand.300' },
      'text.primary': { default: 'gray.800', _dark: '#E7EEF6' },
      'text.secondary': { default: 'gray.600', _dark: '#A7B7CB' },
      'text.muted': { default: 'gray.500', _dark: '#7C8DA3' },
      'text.link': { default: 'brand.700', _dark: 'brand.300' },
      'text.onInverse': { default: 'white', _dark: 'white' },
    },
  },
  shadows: {
    lift: '0 4px 12px rgba(12, 42, 71, 0.08)',
    raised: '0 8px 24px rgba(12, 42, 71, 0.10)',
  },
  styles: {
    global: {
      body: {
        bg: 'bg.canvas',
        color: 'text.primary',
      },
      // Anchor (#datawilayah dll.) tidak tertutup navbar sticky 72px
      '[id]': {
        scrollMarginTop: '88px',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: '-0.02em',
        color: 'text.primary',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 600,
        rounded: 'lg',
      },
      sizes: {
        md: { h: '44px', px: 6, fontSize: '15px' },
        lg: { h: '48px', px: 7, fontSize: '15px' },
      },
      variants: {
        solid: {
          bg: 'brand.600',
          color: 'white',
          _hover: { bg: 'brand.700', _disabled: { bg: 'brand.600' } },
          _active: { bg: 'brand.800' },
          _dark: {
            bg: 'brand.300',
            color: 'brand.900',
            _hover: { bg: 'brand.200' },
            _active: { bg: 'brand.400' },
          },
        },
        outline: {
          borderWidth: '1.5px',
          borderColor: 'brand.600',
          color: 'brand.700',
          _hover: { bg: 'brand.50' },
          _dark: {
            borderColor: 'brand.300',
            color: 'brand.300',
            _hover: { bg: 'whiteAlpha.100' },
          },
        },
        accent: {
          bg: 'accent.500',
          color: 'gray.900',
          _hover: { bg: 'accent.400' },
          _active: { bg: 'accent.600' },
        },
        onImage: {
          bg: 'white',
          color: 'brand.800',
          _hover: { bg: 'gray.100' },
        },
        onImageOutline: {
          borderWidth: '1.5px',
          borderColor: 'whiteAlpha.700',
          color: 'white',
          _hover: { bg: 'whiteAlpha.200' },
        },
      },
    },
    Badge: {
      baseStyle: {
        rounded: 'full',
        px: 3,
        py: 1,
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
      },
      variants: {
        pemerintahan: {
          bg: 'brand.50',
          color: 'brand.700',
          _dark: { bg: 'whiteAlpha.100', color: 'brand.300' },
        },
        pendidikan: {
          bg: 'accent.50',
          color: 'accent.700',
          _dark: { bg: 'whiteAlpha.100', color: 'accent.300' },
        },
        kesehatan: {
          bg: '#ECFDF3',
          color: '#15803D',
          _dark: { bg: 'whiteAlpha.100', color: '#4ADE80' },
        },
        sosialisasi: {
          bg: '#F5EEFF',
          color: '#6B21A8',
          _dark: { bg: 'whiteAlpha.100', color: '#C4B5FD' },
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
});

export default theme;
