/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-md": "900px", // Your custom breakpoint at 900px
      },
    },
  },
  plugins: [],
};
