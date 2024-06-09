/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/shared-components/.{jsx, css}',
    './src/.{jsx, css}',
  ],
  theme: {
    extend: {      
      height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      main:'64px',
    },},
  },
  plugins: [],
}

