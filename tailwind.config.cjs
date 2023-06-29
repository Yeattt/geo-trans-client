/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#2c2c2e",
            primaryHover: "#67676b",
            secondary: "#e64056",
            secondaryHover: "#c42339",
            greenPz: "#1ee632",
            redPz: "#e61e1e",
            pinkPz: "#a92ef0",
            pinkPzHover: "#eac7ff",
            orangePz: "#f04929",
            orangePzHover: "#f77d65"
         },
      },
   },
   plugins: [],
}