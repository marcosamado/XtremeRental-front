/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                colorOscuro : "rgb(23,23,23)",
                colorAgua : "rgb(59,143,203)",
                colorMontaña : "rgb(245,117,46)",
                colorCalido :"rgb(237,41,66)",
                colorNeutro: "rgb(217,217,217)",
                colorClaro: "rgb(249,246,246)"
            },
            fontFamily: {
                roboto: "roboto",
            },
        },
    },
    plugins: [],
};
