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
        gilroyMedium: ['Gilroy Medium'],
        gilroySemiBold: ['Gilroy SemiBold']
      },
      colors: {
        yellow: '#F5EC07',
        blue: '#067CA8',
        gold: '#E28C38',
        pink: '#F06A69',
        gray: '#E3E3E3'
      },
      boxShadow: {
        'button': '4px 5px 20px 0px rgba(0, 0, 0, 0.09)',
        'button-hover': '4px 5px 30px 0px rgba(0, 0, 0, 0.04)',
      }
    }
  },

  plugins: []
};

module.exports = config;
