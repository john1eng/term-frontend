module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#39A6A3",
        primary_light: "#DEEEEA",
        secondary: "#BF1363",
        dark: "#231E23",
        white: "#ffffff",
      },
      gridTemplateRows: {
        3: "repeat(3, minmax(0, min-content))",
      },
      theme: {
        minWidth: {
          460: "460px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
