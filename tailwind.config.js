

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
      './node_modules/tw-elements/dist/js/**/*.js'

  ],
  theme: {
    extend: {
      colors: {
        'my': '#3CC2C3',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}