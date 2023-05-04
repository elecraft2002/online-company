module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },

    extend: {
      colors: {
        lightSlate: {
          light: "rgba(200, 200, 200, 0.18)",
          DEFAULT: "rgba(200, 200, 200, 0.38)",
          dark: "rgba(200, 200, 200, 0.58)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
