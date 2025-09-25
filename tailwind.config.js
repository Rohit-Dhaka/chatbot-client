/** @type {import('tailwindcss').Config} */
module.exports = {
   plugins: [
    require('tailwind-scrollbar-hide')
  ],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:"true",
        padding:"12px"
      },
      boxShadow:{
          input: '0px 30px 20px 10px rgba(40,39,39,0.9)',
      },
    },
  },
  plugins: [],
}

