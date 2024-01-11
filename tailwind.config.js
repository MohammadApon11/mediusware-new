/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // extra extra small
        xxs: "0px",

        // // extra small
        xs: "250px",

        // regular mobile
        mobile: "380px",

        // => @media (min-width: 640px) { ... }
        tablet: "640px",

        // => @media (min-width: 1024px) { ... }
        laptop: "1024px",

        // => @media (min-width: 1280px) { ... }
        bigMon: "1700px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
