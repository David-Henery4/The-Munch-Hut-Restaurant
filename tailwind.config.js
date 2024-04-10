/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lgMob: "26.25em", // 420px
      XtraSmTab: "38.75em", // 620px
      smTab: "45em", // 720px
      tab: "47.5em", // 760px
      smLap: "57.5em", // 920px
      lap: "64em", // 1024px
      lgLap: "70.25em", // 1124px
      smDesk: "72.5em", // 1160px
      desk: "80em", // 1280px
      lgDesk: "90em", // 1440px
    },
    colors: {
      white: "#FFFFFF",
      offWhite: "#F3F5F8",
      black: "#000000",
      blackHover: "#141414",
      gold: "#CC7800",
      red: "#CC2626",
      redHover: "#FE4A51",
    },
    gridTemplateColumns: {
      mob: "24px repeat(10,1fr) 24px",
      tab: "40px repeat(10,1fr) 40px",
      lap: "105px repeat(10,1fr) 105px",
      desk: "140px repeat(10,1fr) 140px",
      basic12: "repeat(12, 1fr)",
      flexible: "repeat(auto-fit, minmax(100px, 1fr))",
      flexibleMedium: "repeat(auto-fit, minmax(125px, 1fr))",
      teamGridColsTab: "1fr 1fr",
      teamGridColsLap: "repeat(4, 1fr)",
      drinksContainerTab: "1fr 30%",
      drinksCardsContainerTab: "repeat(auto-fit, minmax(250px, 1fr))",
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
      maxWidth: {
        maxSectionWidth: "1110px",
      },
    },
  },
  plugins: [],
};
