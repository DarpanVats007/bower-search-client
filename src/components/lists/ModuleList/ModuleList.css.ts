import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const moduleContainer = style({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${vars.color.grayLight}`,
  padding: vars.spacing.md,
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.white,
  boxShadow: vars.shadow.md,
  marginBottom: vars.spacing.md,
  width: "100%",
  boxSizing: "border-box",
});

export const moduleHeader = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: vars.spacing.sm,
  justifyContent: "space-between",
});

export const moduleSection = style({
  marginBottom: vars.spacing.sm,
});

export const moduleTitle = style({
  margin: `0 0 ${vars.spacing.xs} 0`,
  color: vars.color.text,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.medium,
});

export const moduleText = style({
  margin: 0,
  fontSize: vars.fontSize.sm,
  color: vars.color.gray,
});

export const moduleLink = style({
  margin: 0,
  fontSize: vars.fontSize.lg,
  color: vars.color.primary,
  textDecoration: "none",
  ":hover": {
    color: vars.color.info,
    textDecoration: "underline",
  },
});
