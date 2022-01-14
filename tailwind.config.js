module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'subtle-blue': '#6a7db7',
        'baby-blue' : '#6382C4',
        'dark-red' : '#bb3352',
        'dark-blue' : '#415096',
        'salmon' : '#c78585',
        'sand' :'#e2dcde',
        'elephant' : '#8e96b7',
        'light-gray': '#9aa4d2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
