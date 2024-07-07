import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './blogs/**/*.vue'],
  darkMode: 'class',
  plugins: [daisyui],
  theme: {
    extend: {}
  }
}
