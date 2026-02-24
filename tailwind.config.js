/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00FFBB', // Turquesa esmeralda (más verde)
                    dark: '#00CC96',
                },
                secondary: {
                    DEFAULT: '#FFD700', // Oro
                }
            },
        },
    },
    plugins: [],
}
