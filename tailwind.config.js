/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-kem': '#76978E',
        'tao': '#E1D8D8',
        'pinkonn': '#D3AD9F',
        'base' : '#F1EEE6',
        'yellowonn' : '#F6D8A9',
      },
      fontFamily: {
        noto : ['NotoSans-Regular'],
        notoMedium : ['NotoSans-Medium'],
        notobold : ['NotoSans-Bold'],
      }
    },
  },
  plugins: [],
};
