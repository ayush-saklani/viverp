/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#142c31',
        'primary-accent': '#099094',
        'primary-light': '#e0dfe2',
      },
    },
  },
  plugins: [],
};