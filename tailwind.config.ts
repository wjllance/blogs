import type { Config } from "tailwindcss";
import { colors, theme } from "./src/theme/constants";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        accent: colors.accent,
      },
      backgroundColor: {
        primary: {
          DEFAULT: theme.light.background.primary,
          dark: theme.dark.background.primary,
        },
        secondary: {
          DEFAULT: theme.light.background.secondary,
          dark: theme.dark.background.secondary,
        },
        card: {
          DEFAULT: theme.light.background.card,
          dark: theme.dark.background.card,
        },
      },
      textColor: {
        primary: {
          DEFAULT: theme.light.text.primary,
          dark: theme.dark.text.primary,
        },
        secondary: {
          DEFAULT: theme.light.text.secondary,
          dark: theme.dark.text.secondary,
        },
        accent: {
          DEFAULT: theme.light.text.accent,
          dark: theme.dark.text.accent,
        },
      },
      borderColor: {
        primary: {
          DEFAULT: theme.light.border.primary,
          dark: theme.dark.border.primary,
        },
        accent: {
          DEFAULT: theme.light.border.hover,
          dark: theme.dark.border.hover,
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
