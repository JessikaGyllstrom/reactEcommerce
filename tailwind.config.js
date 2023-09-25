/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bgAnimate: {
          '0%, 100%': { backgroundColor: '#56a687' }, 
        }
      },
      animation: {
        bgAnimate: "bgAnimate 1.5s ease-in-out"
      },
      colors: {
        petrol: {
          50: '#374151',
          100: '#1f2937',
          200: '#16181c',
          300: '#0b0c0f',
          400: '#181b21',
          500: '#181b21',
          600: '#222529',
          700: '#020203',
          800: '#090d15', 
          },
        teal: {
          50: '#14b8a6',
          100: '#61f2d4'
          },
        light: {
          50: '#fafbfe'
        }
      }
    },
  },
  plugins: [],
}