/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**', './src/layouts/**', './src/components/**'],
  theme: {
    extend: {
      colors: {
        'mia-blue': '#65B5D5',
        'mia-orange': '#DC9247',
        'mia-green': '#7DD55B',
      },
    },
  },
  plugins: [],
};
