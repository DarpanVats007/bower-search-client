import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

export const mainContent = style({
  display: "flex",
  flexGrow: 1,
});
