export const colors = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  accent: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  },
} as const;

export const theme = {
  light: {
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      card: "rgba(248, 250, 252, 0.8)",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
      accent: "#0284c7",
    },
    border: {
      primary: "#e2e8f0",
      hover: "rgba(2, 132, 199, 0.3)",
    },
  },
  dark: {
    background: {
      primary: "#0f172a",
      secondary: "#1e293b",
      card: "rgba(30, 41, 59, 0.5)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8",
      accent: "#38bdf8",
    },
    border: {
      primary: "#1e293b",
      hover: "rgba(56, 189, 248, 0.5)",
    },
  },
} as const;

export const gradients = {
  light: {
    background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
    text: "linear-gradient(to right, #0284c7, #0d9488)",
    card: {
      hover: "linear-gradient(to right, rgba(2, 132, 199, 0.1), transparent)",
    },
  },
  dark: {
    background: "linear-gradient(to bottom, #0f172a, #1e293b)",
    text: "linear-gradient(to right, #38bdf8, #2dd4bf)",
    card: {
      hover: "linear-gradient(to right, rgba(56, 189, 248, 0.1), transparent)",
    },
  },
} as const;

export const shadows = {
  light: {
    card: {
      hover: "0 0 30px rgba(2, 132, 199, 0.1)",
    },
  },
  dark: {
    card: {
      hover: "0 0 30px rgba(56, 189, 248, 0.1)",
    },
  },
} as const;

export const animation = {
  transition: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
} as const;

export const layout = {
  maxWidth: "64rem", // 1024px
  containerPadding: {
    x: {
      mobile: "1rem",
      desktop: "1.5rem",
    },
    y: {
      mobile: "4rem",
      desktop: "6rem",
    },
  },
  grid: {
    gap: "2rem",
  },
} as const;
