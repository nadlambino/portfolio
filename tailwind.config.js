const { join } = require('path');

module.exports = {
  content: [
    "./index.html",
    join(__dirname, 'src/**/*.{js,ts,tsx,vue}'),
  ],
  theme: {
    extend: {
      colors: {
        'green-neon': '#00ff8d'
      }
    },
  },
  plugins: [],
}
