/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#2831ad",
            primaryHover: "#131642",
            secondary: "#19b80b",
            secondaryHover: "#5fcc56",
            purplePz: "#2831ad",
            purplePzHover: "#807af5",
            pinkPz: "#a92ef0",
            pinkPzHover: "#eac7ff",
            orangePz: "#f04929",
            orangePzHover: "#f77d65"
         },
      },
   },
   plugins: [],
}