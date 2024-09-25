import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const buttonBase = style({
  padding: "5px 10px",
  border: "none",
  borderRadius: vars.borderRadius.sm,
  cursor: "pointer",
  marginRight: vars.spacing.sm,
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});
