import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  css,
  styled,
  globalCss,
  getCssText,
  keyframes,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray500: '#8D8D99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },

    fontSizes: {
      sd: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
    },
  },
  media: {
    bp1: '(max-width: 1180px)',
    bp2: '(max-width: 900px)',
  },
})
