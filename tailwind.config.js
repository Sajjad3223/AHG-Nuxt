/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      inter: ['"Inter"'],
    },
    extend: {
      colors: {
        blackColor: "#1A1B1D",
        lightColor: "#E1E9ED",
        borderColor: "rgb(26, 27, 29)",
      },
      container: {
        center: true,
        padding: "5rem",
      },
    },
  },
  plugins: [],
};
