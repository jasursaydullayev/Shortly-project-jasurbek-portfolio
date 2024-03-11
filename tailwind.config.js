/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'developer': "url('/bg-img.png')",
        'picture': "url('/b-bg.png')"
      }
    },
  },
  plugins: [],
}

