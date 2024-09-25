import { getOwnerFromUrl } from "../url-utils";

describe("getOwnerFromUrl", () => {
  it("returns the owner from a valid GitHub URL", () => {
    const url = "https://github.com/owner/repo";
    expect(getOwnerFromUrl(url)).toBe("owner");
  });

  it('returns "Unknown Owner" for a URL without a valid owner', () => {
    const url = "https://gitlab.com/owner/repo";
    expect(getOwnerFromUrl(url)).toBe("Unknown Owner");
  });

  it('returns "Unknown Owner" for a malformed URL', () => {
    const url = "not-a-url";
    expect(getOwnerFromUrl(url)).toBe("Unknown Owner");
  });

  it('returns "Unknown Owner" for a GitHub URL without owner', () => {
    const url = "https://github.com/";
    expect(getOwnerFromUrl(url)).toBe("Unknown Owner");
  });

  it("returns the owner for a URL with subdirectories", () => {
    const url = "https://github.com/owner/repo/subdir";
    expect(getOwnerFromUrl(url)).toBe("owner");
  });
});
