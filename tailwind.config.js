/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Tajawal",
      secondary: "Jost",
      slogan: "JetBrains Mono",
    },

    extend: {
      // cursor: {
      //   default: 'url(/images/cursor.png), default',
      // },
      inset: {
        100: "100%",
      },
      colors: {
        primary: {
          DEFAULT: " #14315b",
          hover: "#E4A31B",
        },
        secondary: {
          DEFAULT: "#111827",
          hover: "#1F2937",
        },
        accent: {
          // DEFAULT: '#c5c7c8',
          DEFAULT: "#dbeafe",
          // DEFAULT: '#1e7bb2',
          secondary: "#f4f0ec",
          tertiary: "#E6F0FF",
          // hover: '#b88c5d',
          hover: "#4b62b3",
        },
      },
      display: ["responsive", "group-hover", "group-focus"], // Ensure necessary variants are enabled
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
