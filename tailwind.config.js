/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
          "martian":['Martian'],
          "ubuntu":['Ubuntu'],
          "nunito":['Nunito']

      },
    },
  },
  plugins: [],
}