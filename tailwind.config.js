/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        popxPurpleStart: '#6C25FF',
        popxPurpleEnd: '#5A1EDC',
      },
    },
  },
  plugins: [],
}
