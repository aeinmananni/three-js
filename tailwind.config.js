/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:"380px",
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }
    },
  },
  plugins: [],
}

