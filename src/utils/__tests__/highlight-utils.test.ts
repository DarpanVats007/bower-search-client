import { highlightText } from "../highlight-utils";

describe("highlightText", () => {
  test("returns empty string for undefined text", () => {
    expect(highlightText("", "react")).toBe("");
  });

  test("returns original text when query is empty", () => {
    expect(highlightText("This is a test", "")).toBe("This is a test");
  });
});
