import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const footer = style({
  padding: vars.spacing.md,
  backgroundColor: vars.color.background,
  textAlign: "center",
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.secondary,
  borderTop: "1px solid #e0e0e0",
});

export const footerLinks = style({
  color: vars.color.primary,
  textDecoration: "none",
  margin: "0 5px",
  ":hover": {
    textDecoration: "underline",
  },
});

export const footerParagraph = style({
  marginBottom: vars.spacing.sm,
});

export const sponsors = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: vars.spacing.sm,
  marginTop: vars.spacing.md,
});

export const sponsorLink = style({
  color: vars.color.success,
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
