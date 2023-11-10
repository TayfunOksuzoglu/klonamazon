/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amazonClone: {
          background: '#EAEDED',
          light_blue: '#232f3a',
          yellow: '#FEBD69',
          DEFAULT: '#131921',
        },
      },
    },
  },
  plugins: [],
};
