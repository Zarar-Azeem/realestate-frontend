/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".form-container":{
          "@apply w-3/5 mx-auto rounded-lg bg-slate-100 p-6 mt-12":{}
        },
        ".input-field": {
          "@apply py-2 px-4 flex flex-col w-full":{}
        },
        input:{
          "@apply py-2 px-3 border-slate-300 border rounded-lg focus:outline-none text-sm":{}
        },
        ".type-btn":{
          "@apply py-2 px-4":{}
        },
        ".button-cta": {
          "@apply py-2 px-3 text-white rounded-lg bg-slate-700 font-semibold  hover:bg-slate-600" : {}
        },
        ".button": {
          "@apply py-2 px-3 bg-slate-200 rounded-lg  font-semibold hover:bg-slate-100" : {}
        },
      });
      addUtilities({});
    }),
  ],
};