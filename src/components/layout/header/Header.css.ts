import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const hamburgerMenu = style({
  display: "none",
  fontSize: vars.fontSize["2xl"],
  cursor: "pointer",
  color: vars.color.white,

  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
      position: "absolute",
      left: 0,
      padding: vars.spacing.md,
    },
  },
});

export const header = style({
  height: "100px",
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: vars.fontSize.xl,
  padding: `${vars.spacing.lg} ${vars.spacing["2xl"]}`,
  position: "relative",
  "@media": {
    "screen and (max-width: 768px)": {
      justifyContent: "center",
    },
  },
});

export const row = style({
 display: "flex",
 alignItems: "center"
});

export const column = style({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  fontSize: vars.fontSize.lg,
 });

 export const link = style({
 color: vars.color.dark
 });

export const headerTitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.white,
});

export const logoStyle = style({
  height: "60px",
  marginRight: vars.spacing.md,
});
