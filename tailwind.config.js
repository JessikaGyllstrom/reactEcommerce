/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: '0', scale: '0.4' },
          '100%': { opacity: '1', scale: '1' }
        },
        flow: {
          '0%, 100%': { scale: '1', opacity: '0.8', transform: 'rotate(3deg)' },
          '50%': { scale: '1.2', opacity: '1', transform: 'rotate(-3deg)' }
        },
        bgAnimate: {
          '0%, 100%': { backgroundColor: '#2cbdb2', color: 'black' }, 
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        smoothInX: {
          '0%': { transform: 'translateX(30%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in", 
        flow: "flow 5s ease-in-out infinite", 
        bgAnimate: "bgAnimate 1.5s ease-in-out", 
        fadeIn: "fadeIn 2.8s ease", 
        smoothInX: "smoothInX 1s ease-in-out", 
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