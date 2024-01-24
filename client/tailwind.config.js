/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "xs": "460px",
    },
    colors: {
      "colorPrimary": "#3b5998",
      "colorSecondary": "#8b9dc3",
      "colorTertiary": "#dfe3ee",
      "bgPrimary": "#18191a",
      "bgSecondary": "#242526",
      "bgTertiary": "#3a3b3c",
      "textPrimary": "#e4e6eb",
      "textSecondary": "#b0b3b8",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    styled: false,
  }
};
