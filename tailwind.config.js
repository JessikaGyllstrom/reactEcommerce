/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bgAnimate: {
          '0%, 100%': { backgroundColor: '#749c63' }, 
        }
      },
      animation: {
        bgAnimate: "bgAnimate 1.5s ease-in-out"
      }
    },
  },
  plugins: [],
}