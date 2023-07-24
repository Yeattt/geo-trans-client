/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#5d0dde",
            primaryHover: "#853cfa",
            secondary: "#22222b",
            secondaryHover: "#c42339",
            greenPz: "#0bbd1d",
            orangePz: "#f04929",
            orangePzHover: "#f77d65",
            greenPzHover: "#65f774",
            purplePz: "#5d0dde",
            purplePzHover: "#853cfa",
            pinkPz: "#a92ef0",
            pinkPzHover: "#eac7ff",
         },
      },
   },
   plugins: [],
}