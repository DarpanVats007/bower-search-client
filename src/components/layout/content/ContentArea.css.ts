import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const contentArea = style({
  padding: vars.spacing.md,
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  boxSizing: "border-box",
});
