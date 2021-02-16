module.exports = {
  purge: [
    './views/**/*.liquid',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'serif': ['lato', 'sans-serif'],
      },
      colors: {
        primary: '#0F4C81'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
