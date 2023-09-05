/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'transparent': 'transparent',
      'light-blue': '#E1EFEF',
      'medium-blue': '#D1E0E0',
      'dark-purple': '#1A1921',
      'medium-gray': '#2B2A36',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      zinc: colors.zinc,
      cyan: colors.cyan,
      rose: colors.rose,
      red: colors.red
    },
    fontFamily: {
      'number': ['Poppins', 'sans-serif']
    },
    screens: {
      'sm': {'min': '0px', 'max': '450px'},
      'tablet': {'min': '451px', 'max': '768px'},
      'md-': {'min': '769px', 'max': '1024px'},
      'md': {'min': '451px', 'max': '1024px'}
    },
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'sans-serif']
      },
      strokeWidth: {
        '3': '3px',
      },
      gridTemplateRows: {
        'card': '30px minmax(0, 1fr)',
        'card-tablet': '30px 1fr 1fr',
        'card-sm': '28px repeat(3, 1fr)'
      },
      zIndex: {
        '1': '1',
      },
      width: {
        '49/50': '98%',
      },
      maxWidth: {
        'xs+': '21rem',
      },
      minWidth: {
        'sm': '24rem',
      }
    },
  },
  plugins: [],
}

