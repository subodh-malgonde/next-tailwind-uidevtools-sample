const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ['./tailwind.scss', './src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xsm': '340px'
      },
      colors: {
        blue: {
          '100': '#F7F9FC',
          '200': '#E6E9F0',
          '300': '#C5CEE0',
          '400': '#B3BCD1',
          '500': '#9BACCA',
          '600': '#6679A3',
          '700': '#334C85',
          '800': '#001F66',
          '900': '#00133D',
        },
        red: {
          '100': '#FBEEED',
          '200': '#F9E3E3',
          '300': '#EDA9A7',
          '400': '#E8918E',
          '500': '#E27571',
          '600': '#DB524E',
          '700': '#C54A46',
          '800': '#993937',
          '900': '#6E2927',
        },
        green: {
          ...colors.green,
          '600': '#27AE60',
        },
        gradientColorStops: {
          'starting': '#001F66',
          'ending': '#1F49AD'
        },
        hover: "#1F49AD",
        link: "#18A0FB",
      },
      inset: {
        '1/2': '50%',
        '-8': '-2rem',
      }
    }
  },
  variants: {},
  plugins: []
}
