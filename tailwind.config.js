/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xss: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '5xl': '2048px',
      '9xl': '3584px',
    },
    extend: {
      colors: {
        'purple-intense': '#4a28af',
        'purple-light': '#6e46e6',
        'soft-grey': '#e7e7ed',
        'purplish': '#717191',
        'alt-blue': "#2f00ff",
        'alt-grey': '#f3f3f6'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}