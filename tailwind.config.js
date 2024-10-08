import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dim"],
    darkTheme: "dim",
  },
};
