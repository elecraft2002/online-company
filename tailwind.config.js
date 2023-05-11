module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },

    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        lightSlate: {
          light: "rgba(200, 200, 200, 0.18)",
          DEFAULT: "rgba(200, 200, 200, 0.38)",
          dark: "rgba(200, 200, 200, 0.58)",
        },
      },
      animation: {
        fadeIn: "fadeIn 1s",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
