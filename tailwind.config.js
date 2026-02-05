/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sqs: {
          green: '#1a7a32',
          darkGreen: '#0f5132',
          header: '#f8f9fa',
          primary: '#2d8a3e',
        },
        card: {
          teal: '#2c9ca6',
          yellow: '#f4b23e',
          orange: '#f26848',
        }
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}