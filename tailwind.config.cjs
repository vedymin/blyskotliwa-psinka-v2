/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontSize: {
        '18': '18px',
      },
      fontFamily: {
        newSpirit: ['New Spirit'],
        gilroy: ['Gilroy'],
        gilroyMedium: ['Gilroy Medium']
      },
      colors: {
        yellow: '#F5EC07',
        blue: '#067CA8'
      }
    }
  },

  plugins: []
};

module.exports = config;
