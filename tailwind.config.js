/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'light-blue': '#E1EFEF',
      'medium-blue': '#D1E0E0',
      'dark-purple': '#1A1921',
      'medium-gray': '#2B2A36',
      current: 'currentColor',
      black: colors.black,
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
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'sans-serif']
      },
      strokeWidth: {
        '3': '3px',
      },
      gridTemplateRows: {
        'card': '30px minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
}

