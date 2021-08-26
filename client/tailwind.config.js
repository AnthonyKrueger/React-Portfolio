module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
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
          purple: "#bd93f9",
          yellow: "#f1fa8c",
          orange: "#ffb86c"
        }
      },
      keyframes: {
        changeColor: {
          '0%': {
            background: "linear-gradient:(#008000, #00FF00)", "-webkit-background-clip": "text"
          },
          '100%': {
              background: "linear-gradient(#3CE7D7, #000FFF)", "-webkit-background-clip": "text"
          }
        }
      },
      animation: {
        changeColor: 'changeColor 1s ease-in-out infinite',
       }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
