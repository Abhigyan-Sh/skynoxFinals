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
  },
  plugins: [],
}