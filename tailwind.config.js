/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                colorMain: "rgb(237,41,66)",
                colorOscuro :"rbg(23,23,23)",
                colorAgua : "rbg(59,143,203)",
                colorMontaña : "rbg(245,117,46)",
                colorCalido :"rgb(237,41,66)",
            },
            fontFamily: {
                roboto: "roboto",
            },
        },
    },
    plugins: [],
};
