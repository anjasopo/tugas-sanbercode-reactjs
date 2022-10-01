const { Flowbite } = require("flowbite-react");
const { default: plugin } = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [require("Flowbite/plugin")],
};
