/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    './src/**/*.{html,js}', // Include JavaScript files
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#f7f7f7',
      },
      backgroundImage: {
        'custom-bg': "url('/assets/outer-bg.321110dec68f8427.svg')",
      },
    },
  },
  plugins: [],
}