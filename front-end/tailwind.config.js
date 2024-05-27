/** @type {import('tailwindcss').Config} */
module.exports =  {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: {max : "1050px"}, sm: { max: "550px"}  },
    extend: {
      colors: {
        black: { 900: "#000000", "900_4c": "#0000004c",      "900_7f": "#0000007f"},
        white: { A700: "#ffffff"  },
        orange: { 400: "#fe9b19" },
        gray: { 300: "#eaddcd",  900: "#561d02", "900_cc" : "#561d02cc", "900_66": "#561d0266"}, 
      },
      boxShadow: {},
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

