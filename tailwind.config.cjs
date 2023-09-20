/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        newSpirit: ['New Spirit'],
        gilroy: ['Gilroy'],
        gilroyMedium: ['Gilroy Medium']
      },
      colors: {
        yellow: '#F5EC07'
      }
    }
  },

  plugins: []
};

module.exports = config;
