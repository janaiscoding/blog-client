/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#18728b",
      grey: "#586565",
      purewhite: "#f9fbfd",
      white: "#F8F7F7",
      black: "#030408",
      orange: "#ED7372",
      red: "#7e1010",
      softgrey: "#58656570",
      softblack: "#222326",
      softblue: "#2d8aa498",
      hardblue: "#1f2f3c",
    },
    boxShadow: {
      md: "4px 4px 17px -1px rgba(45 138 164 / 0.10)",
    },
    dropShadow: {
      xl: "0px 4px 10px rgba(45 138 164 / 0.5) ",
    },
  },
  plugins: [],
};
