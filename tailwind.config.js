/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'light-blue': '#E1EFEF',
      'dark-purple': '#1A1921',
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
      }
    },
  },
  plugins: [],
}

