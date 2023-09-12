/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fa8128",secondary: "#662E17",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
});
