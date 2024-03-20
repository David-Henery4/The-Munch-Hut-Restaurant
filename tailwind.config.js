/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blackHover: "#141414",
      gold: "#CC7800",
      red: "#CC2626",
      redHover: "#FE4A51",
    },
    gridTemplateColumns: {
      mob: "24px repeat(10,1fr) 24px",
      tab: "40px repeat(10,1fr) 40px",
      // lap: "105px repeat(10,1fr) 105px",
      desk: "140px repeat(10,1fr) 140px",
      basic12: "repeat(12, 1fr)",
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      pompiere: ["var(--font-pompiere)"],
    },
    backgroundImage: {
      "hero-pattern": "url('/images/home-header/table-of-food.jpg')",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
