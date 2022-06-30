module.exports = {
  content: ["./public/**/*.{html,js}", "./src/js/theme.js"],
  darkMode:'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', 
      strategy: 'class', 
    }),
  ],
}
