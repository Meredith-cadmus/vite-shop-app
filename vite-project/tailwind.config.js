/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    // fontFamily: {
    //   sans: ["Montserrat", "sana-serif"],
    // },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
