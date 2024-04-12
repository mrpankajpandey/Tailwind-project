/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2'
      },
      fontFamily:{
        'display':['Poppins', 'sans-sarif '],
        'body':['Inter', 'sans-sarif']
      }
    },
   
  },
  plugins: [],
}

