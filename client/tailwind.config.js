module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          main: "#282a36",
          light: "#44475a",
          lighter: "#B084CC",
          accent: {
            DEFAULT: "#8be9fd",
            light: "#50fa7b"
          },
          pink: "#ff79c6",
          purple: "#bd93f9"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
