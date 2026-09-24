/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        basalt: {
          DEFAULT: "#1C1A17",
          soft: "#26231F",
          line: "#3A362F",
        },
        travertine: {
          DEFAULT: "#F4EEE3",
          deep: "#E8DFCC",
        },
        stone: {
          DEFAULT: "#8A7A63",
          dark: "#6B5D49",
        },
        brass: "#B08D3E",
        ink: "#EDE7DC",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};
