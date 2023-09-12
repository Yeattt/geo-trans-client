/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2249c9",
                primaryHover: "#196173",
                secondary: "#22222b",
                secondaryHover: "#c42339",
                greenPz: "#0bbd1d",
                orangePz: "#f04929",
                orangePzHover: "#f77d65",
                greenPzHover: "#65f774",
                purplePz: "#0891b2",
                purplePzHover: "#196173",
                pinkPz: "#a92ef0",
                pinkPzHover: "#eac7ff",
                orangePz: "#f04929",
                orangePzHover: "#f77d65",
                redPz: "#dc2626",
            },
        },
    },
    plugins: [],
}