import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    white: "#ffffff",
    black: "#000000",
    gray: "#6c757d",
    grayLight: "#dddddd",
    background: "#f5f5f5",
    text: "#333333",
  },

  font: {
    body: "'Roboto', sans-serif",
    heading: "'Lato', sans-serif",
    mono: "'Courier New', monospace",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "30px",
    "3xl": "36px",
    "4xl": "48px",
    "5xl": "64px",
  },

  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    bold: "700",
  },

  lineHeight: {
    normal: "1.5",
    heading: "1.2",
    none: "1",
  },

  spacing: {
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
    "4xl": "64px",
  },

  borderRadius: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    circle: "50%",
  },

  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.2)",
  },

  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    widescreen: "1200px",
  },
});
