/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
      display: ['group-focus']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}