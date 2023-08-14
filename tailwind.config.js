/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
