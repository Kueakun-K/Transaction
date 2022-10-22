/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-kem': '#76978E',
        'green-sod' : '#387766',
        'green-oon' : '#8DD0BD',
        'green-green' : '#61A592',
        'tao': '#E1D8D8',
        'red-onn': '#FD6565',
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
