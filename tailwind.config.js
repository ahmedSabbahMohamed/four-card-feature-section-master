/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      "colors": {
        Red: "hsl(0, 78%, 62%)",
        Cyan: "hsl(180, 62%, 55%)",
        Orange: "hsl(34, 97%, 64%)",
        Blue: "hsl(212, 86%, 64%)",
        vdblue: "hsl(234, 12%, 34%)",
        gblue: "hsl(229, 6%, 66%)",
        vlgray: "hsl(0, 0%, 98%)"
      },
      "fontSize": {
        root: "15px"
      }
    },
  },
  plugins: [],
}

