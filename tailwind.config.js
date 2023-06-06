/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4.35199px 134.912px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#5D5FEF",
        },
        secondary: {
          200: "#757095",
        },
        dark: "#1B1C31",
      },
      borderRadius: {
        custom: "10px",
      },
    },
  },
  plugins: [],
};
