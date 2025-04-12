/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F5F2ED',
          dark: '#1A1614'
        },
        secondary: {
          light: '#EDEAE5',
          dark: '#242020'
        },
        accent: {
          light: '#4A5D4F',
          dark: '#7C9982'
        },
        text: {
          light: '#2C2420',
          dark: '#E5E2DE'
        }
      }
    },
  },
  plugins: [],
};