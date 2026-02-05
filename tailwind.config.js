/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        sqsGreen: '#006400', // Dark green for logo
        sqsTeal: '#2d9da6', // Hero button & Card 1
        sqsGold: '#f0ad4e', // Card 2
        sqsOrange: '#ff6f43', // Card 3
        navHover: '#1a8a30',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}