/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontSize: {
      '6xl': ['2.8rem', {
        lineHeight: '3rem',
       
      }],
    },
    
    extend: {},
   
  },
  plugins: [],
}

