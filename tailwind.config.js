module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                futura: ["Futura", "sans-serif"],
                futuraItalic: ["Futura-Italic", "sans-serif"],
                futuraBold: ["Futura-Bold", "sans-serif"],
            },
            colors: {
                truhuisWhite: "#FFFFFF",
                truhuisGrey: "#C3C2C2",
                truhuisBlue: "#568AC1",
            },
        },
    },
    plugins: [],
};
