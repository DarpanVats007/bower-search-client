import { style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/theme.css";

export const sidebar = style({
  width: 180,
  backgroundColor: vars.color.white,
  color: vars.color.primary,
  padding: vars.spacing.lg,
  transition: "transform 0.3s ease-in-out",
  transform: "translateX(0)",

  "@media": {
    "screen and (max-width: 768px)": {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      transform: "translateX(-100%)",
    },
  },
});

export const sidebarOpen = style({
  "@media": {
    "screen and (max-width: 768px)": {
      transform: "translateX(0)",
    },
  },
});

export const closeButton = style({
  backgroundColor: vars.color.danger,
  padding: vars.spacing.sm,
  color: vars.color.white,
  "@media": {
    "screen and (min-width: 769px)": {
      display: "none",
    },
  },
});

export const list = style({
  listStyleType: "none",
  padding: 0,
  margin: `${vars.spacing.md} 0`,
});

export const listItem = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  selectors: {
    "&:hover": {
      backgroundColor: vars.color.grayLight,
    },
  },
});
