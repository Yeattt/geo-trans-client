/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0891b2",
                primaryHover: "#161645",
                secondary: "#22222b",
                secondaryHover: "#c42339",
                greenPz: "#1ee632",
                redPz: "#e61e1e",
                pinkPz: "#a92ef0",
                pinkPzHover: "#eac7ff",
                orangePz: "#f04929",
                orangePzHover: "#f77d65",
                red: "#dc2626",
            },
        },
    },
    plugins: [],
}