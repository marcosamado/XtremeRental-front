/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                colorMain: "rgb(237,41,46)",
                colorOscuro : "rgb(23,23,23)",
                colorAgua : "rgb(59,143,203)",
                colorMontaña : "rgb(245,117,46)",
                colorCalido :"rgb(237,41,66)",
            },
            fontFamily: {
                roboto: "roboto",
            },
        },
    },
    plugins: [],
};
