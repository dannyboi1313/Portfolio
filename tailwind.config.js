/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          'body' : '#F4F4F4',
          'text-color': '#202034',
          'selected-text' : '#4A7EBC',
          'theme' : '#F77359',
          'nav' : '#404053',
          'secondary' : '#9191A4',
          'badge' : '#3F3F51',
          'input-border' : '#565666',
          'input' : '#2A2A35'
        },
        fontFamily: {
          'poppins': ["'Poppins'", 'sans-serif']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
