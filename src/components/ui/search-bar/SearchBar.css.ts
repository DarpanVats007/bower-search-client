import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const searchBarWrapper = style({
  marginBottom: vars.spacing.sm,
});

export const searchBarInput = style({
  padding: vars.spacing.sm,
  width: "70%",
  marginRight: vars.spacing.xs,
});
