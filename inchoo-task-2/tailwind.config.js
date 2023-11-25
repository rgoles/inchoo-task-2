/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        listStyleType: {
            none: 'none',
            disc: 'disc',
            square: 'square',
            decimal: 'decimal',
            roman: 'upper-roman',
        },

    },
    plugins: [],
}

