import { SortOption } from "@/components/sort/Sort";
import { getSortParam } from "@/utils/sort-utils";

describe("getSortParam", () => {
  test("returns 'stars' for sort option 'stars'", () => {
    const result = getSortParam("stars" as SortOption);
    expect(result).toBe("stars");
  });

  test("returns 'contributions_count' for sort option 'contributions_count'", () => {
    const result = getSortParam("contributions_count" as SortOption);
    expect(result).toBe("contributions_count");
  });

  test("returns 'contributions_count' for sort option 'contributions_count'", () => {
    const result = getSortParam("no selection" as SortOption);
    expect(result).toBe("no selection");
  });
});
