/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                colorMain: "rgb(237,41,66)",
            },
            fontFamily: {
                roboto: "roboto",
            },
        },
    },
    plugins: [],
};
