/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
        primary: "#E2E8F0",
        secondary: "#CBD5E0",
        accent: "#A0AEC0",
        neutral: "#EDF2F7",
        gray: "#F7FAFC",
        "bg-color": "#EDF2F7",
        "base-100": "#ffffff",
      },
    },
  ],
  theme: {
    extend: {

    }
  },
  plugins: [require("daisyui")],
}