/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx, css}",
    "./*.html",
  ],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        main: '64px',
      },
      width:{
        xl: '86%'
      }
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}

