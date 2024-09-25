import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontSize: vars.font.body,
  overflowX: "hidden",
});

globalStyle("*", {
  boxSizing: "border-box",
});
