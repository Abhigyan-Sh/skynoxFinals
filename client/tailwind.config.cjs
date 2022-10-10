/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cstm_bg': '#edeef2',
        'cstm_txt1': '#243c5a',
        'cstm_bg2': '#f9fafc',
      },
    },
    screens: {
      'cstm_3': {'max': '1080px'},
      'cstm_4': {'max': '790px'},
      'cstm_1': {'max': '580px'},
      'cstm_2': {'max': '440px'},
    }
  },
  plugins: [],
}