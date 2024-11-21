/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px", // Small devices (phones)
      md: "768px", // Medium devices (tablets)
      lg: "992px", // Large devices (desktops)
      xl: "1200px", // Extra large devices (larger desktops)
      "2xl": "1400px", // Double extra large (extra-wide screens)
    },
    fontFamily: {
      primary: "Tajawal",
      secondary: "Jost",
      slogan: "JetBrains Mono",
      sora: "Sora",
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
          foreground: "hsl(var(--primary-foreground))",
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
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "#FFFFFF",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "#4d7fd1",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
