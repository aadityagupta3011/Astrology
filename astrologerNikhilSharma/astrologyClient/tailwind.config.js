/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-md": "900px",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideDown: "slideDown 0.3s ease-in-out",
        slide: "slide 4s infinite alternate ease-in-out",
        slideIn: "slideInFromLeft 0.5s ease-out forwards ",
        slideInRight: "slideInFromRight 0.5s ease-out forwards", // New slide in from right animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(-250px)" },
          "100%": { transform: "translateX(200px)" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" }, // Starts off-screen to the right
          "100%": { transform: "translateX(0)", opacity: "1" },   // Ends at original position
        },
      },
    },
  },
  plugins: [],
};
