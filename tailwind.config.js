/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'arrowLeft': 'url("../../assets/img/leftarrow.png")',
        'arrowRight': 'url("../../assets/img/rightarrow.png")'
      }
    },
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