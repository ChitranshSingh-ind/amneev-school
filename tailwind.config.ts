import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f5",
          100: "#e2eee9",
          200: "#c4ddd3",
          300: "#99c3b4",
          400: "#6ba390",
          500: "#498572",
          600: "#366b5b",
          700: "#2d564a",
          800: "#27463d",
          900: "#1a322b",
          950: "#0c1b17",
        },
        sand: {
          50: "#faf8f4",
          100: "#f4efe4",
          200: "#e9dec9",
          300: "#d9c5a5",
          400: "#c5a77f",
          500: "#b58d60",
          600: "#a37651",
          700: "#865e43",
          800: "#6e4c39",
          900: "#5b3f30",
          950: "#322018",
        },
        brass: {
          50: "#fbf8ef",
          100: "#f5edd7",
          200: "#ecdaac",
          300: "#dec079",
          400: "#cfa64d",
          500: "#b68b35",
          600: "#996d29",
          700: "#7a5123",
          800: "#654122",
          900: "#553720",
          950: "#301d0f",
        },
        charcoal: {
          50: "#f6f7f8",
          100: "#eceef0",
          200: "#d6dade",
          300: "#b2b9c2",
          400: "#8894a1",
          500: "#697685",
          600: "#535f6e",
          700: "#444d5a",
          800: "#3a414b",
          900: "#1b1f24",
          950: "#101216",
        },
        ivory: "#FDFBF7",
        stonebg: "#F7F5EE",
        cream: "#F1ECE1",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.15em",
        editorial: "0.2em",
      },
      lineHeight: {
        editorial: "1.15",
        prose: "1.75",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 27, 23, 0.04), 0 1px 2px -1px rgba(16, 27, 23, 0.04)",
        elevated: "0 10px 30px -5px rgba(16, 27, 23, 0.07), 0 4px 10px -3px rgba(16, 27, 23, 0.04)",
        floating: "0 25px 50px -12px rgba(16, 27, 23, 0.15)",
        insetDark: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
