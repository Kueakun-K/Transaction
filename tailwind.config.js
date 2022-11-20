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

        'green-bg-logo' : '#61A592',
        'green-cf' : '#8DD0BD',
        'green-trans' : '#CDE1D5',

        'tao': '#E1D8D8',
        'red-onn': '#FD6565',
        'base' : '#F1EEE6',
        'yellowonn' : '#F6D8A9',
        'red-ja' : '#E80000'
      },
      fontFamily: {
        noto : ['NotoSans-Regular'],
        notoMedium : ['NotoSans-Medium'],
        notobold : ['NotoSans-Bold'],
      },
      boxShadow: {
        'logo' : '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      margin: {
        'ar' : '4.25rem'
      },
    },
  },
  plugins: [],
};
