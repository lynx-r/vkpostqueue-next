import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
// import plugin from 'windicss/plugin'

export default defineConfig({
  // darkMode: 'class', // or 'media'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: colors.blue,
      secondary: colors.green,
      danger: colors.red,
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: colors.blue,
      secondary: colors.green,
      danger: colors.red,
    }),
  },
  plugins: [require('windicss/plugin/forms')],

  //   extend: {
  //     screens: {
  //       sm: '640px',
  //       md: '768px',
  //       lg: '1024px',
  //       xl: '1280px',
  //       '2xl': '1536px',
  //     },
  //     colors: {
  //       gray: colors.coolGray,
  //       blue: colors.lightBlue,
  //       red: colors.rose,
  //       pink: colors.fuchsia,
  //     },
  //     fontFamily: {
  //       sans: ['Graphik', 'sans-serif'],
  //       serif: ['Merriweather', 'serif'],
  //     },
  //     extend: {
  //       spacing: {
  //         128: '32rem',
  //         144: '36rem',
  //       },
  //       borderRadius: {
  //         '4xl': '2rem',
  //       },
  //     },
  //   },
  // },
  // plugins: [
  //   plugin(({ addUtilities }) => {
  //     const newUtilities = {
  //       '.skew-10deg': {
  //         transform: 'skewY(-10deg)',
  //       },
  //       '.skew-15deg': {
  //         transform: 'skewY(-15deg)',
  //       },
  //     }
  //     addUtilities(newUtilities)
  //   }),
  //   plugin(({ addComponents }) => {
  //     const buttons = {
  //       '.btn': {
  //         padding: '.5rem 1rem',
  //         borderRadius: '.25rem',
  //         fontWeight: '600',
  //       },
  //       '.btn-blue': {
  //         backgroundColor: '#3490dc',
  //         color: '#fff',
  //         '&:hover': {
  //           backgroundColor: '#2779bd',
  //         },
  //       },
  //       '.btn-red': {
  //         backgroundColor: '#e3342f',
  //         color: '#fff',
  //         '&:hover': {
  //           backgroundColor: '#cc1f1a',
  //         },
  //       },
  //     }
  //     addComponents(buttons)
  //   }),
  //   plugin(({ addDynamic, variants }) => {
  //     addDynamic(
  //       'skew',
  //       ({ Utility, theme }) => {
  //         return Utility.handler
  //           .handleStatic(theme('skew'))
  //           .handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
  //           .createProperty('transform')
  //       },
  //       variants('skew'),
  //     )
  //   }),
  //   require('windicss/plugin/filters'),
  //   require('windicss/plugin/forms'),
  //   require('windicss/plugin/aspect-ratio'),
  //   require('windicss/plugin/line-clamp'),
  //   require('windicss/plugin/typography')({
  //     modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
  //   }),
  // ],
  // extract: {
  //   // accepts globs and file paths relative to project root
  //   include: ['pages/**/*.{jsx,tsx}', 'components/**/*.{jsx,tsx}'],
  //   exclude: ['node_modules/**/*', '.git/**/*'],
  // },
})
