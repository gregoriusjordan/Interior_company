/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ]
  ,
  theme: {
    extend: {
      colors: {
        ivory : '#fffbf8',
        black : '#190d08',
        coffee : '#605446',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmser : ['DM Serif Text'],
        dmsan : ['DM Sans'],
      }
    },
  },
  plugins: [],
}

