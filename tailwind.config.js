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
          "@apply md:w-3/5 lg:w-2/5  mx-auto rounded-lg bg-slate-200 md:p-6 p-2 mt-12 shadow-lg":{}
        },
        ".input-field": {
          "@apply py-2 px-4 flex flex-col w-full":{}
        },
        input:{
          "@apply py-2 px-3 border-slate-300 border rounded-lg focus:outline-none text-sm focus:outline focus:outline-slate-400 outline-offset-1":{}
        },
        textarea:{
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
        ".dropdown-button": {
          "@apply py-2 px-3 rounded-lg  font-semibold hover:bg-slate-100" : {}
        },
        ".file-input": {
          "@apply bg-slate-200 block w-full border shadow-sm rounded-sm text-sm file:border-0 file:me-4 file:rounded-lg file:bg-white file:py-1 file:px-2 file:cursor-pointer" :{}
        }
      });
      addUtilities({});
    }),
  ],
};