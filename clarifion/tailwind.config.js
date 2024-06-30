/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'clarifion-dark-blue': '#252F3D',
        'clarifion-gray': '#4D5254',
        'clarifion-black': '#000000',
        'clarifion-white': '#FFFFFF',
        'clarifion-light-blue': '#2C7EF8',
        'clarifion-dark-green': '#59AE43',
        'clarifion-light-green': '#5BB59A',
        'clarifion-light-gray': '#FAFAFA',
        'clarifion-gray-text': '#969696',
        'clarifion-red': '#F82C2C',
      },

    },
  },
  plugins: [],
}
