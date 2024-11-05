/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    require('flowbite/plugin')

  ],
}