/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        amaticSC: ["Amatic SC", "cursive"],
      },
      backgroundImage: {
        burger: "url(/images/burger-background.jpg)",
      },
      colors: {
        dark: "#17161a",
        incognito: "#333",
        white: "#fff",
        background_white: "#f5f5f7",
        background_dark: "#292729",
        primary: "#ffa01b",
        primary_burger: "#ff9f1b",
        green: "green",
        success: "#60bd4f",
        red: "#e25549",
        redSecondary: "#c4151c",
        blue: "#51a7e1",
        greyLight: "#e4e5e9",
        greyMedium: "#a7a8ad",
        greySemiDark: "#93a2b1",
        greyDark: "#6f737e",
        greyBlue: "#747b91",
      },
    },
  },
  plugins: [],
};
