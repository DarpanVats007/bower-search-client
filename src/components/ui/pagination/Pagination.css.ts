import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const paginationContainer = style({
  display: "flex",
  justifyContent: "center",
  marginTop: vars.spacing.lg,
});

export const paginationButton = style({
  padding: "5px 10px",
  backgroundColor: vars.color.grayLight,
  marginRight: vars.spacing.sm,
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export const activeButton = style({
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

export const inactiveButton = style({
  backgroundColor: vars.color.grayLight,
  color: vars.color.dark,
});
