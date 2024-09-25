import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const sponsorsContainer = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: vars.spacing.xs,
  marginTop: vars.spacing.md,
});

export const sponsorLink = style({
  color: vars.color.primary,
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
