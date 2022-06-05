const { join } = require('path');

module.exports = {
  content: [
    "./index.html",
    join(__dirname, 'src/**/*.{js,ts,tsx,vue}'),
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'green-neon': '#00ff8d',
        'dark-100': '#3a3845',
        'dark-200': '#32303c'
      }
    },
  },
  plugins: [],
}
