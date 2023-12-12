/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        //  Primary
        Orange: "hsl(25, 97%, 53%)",

        //  Neutral
        White: "hsl(0, 0%, 100%)",
        "Light-Grey": "hsl(217, 12%, 63%)",
        "Medium-Grey": "hsl(216, 12%, 54%)",
        "Dark-Blue": "hsl(213, 19%, 18%)",
        "Very-Dark-Blue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        Overpass: "'Overpass', sans-serif",
      },
    },
  },
  plugins: [],
};
