import {
  API_BASE_URL,
  API_KEY,
  PER_PAGE,
  PLATFORMS,
} from "@/config/api-config";

import { ModuleInfo } from "@/types/module-types";
import { fetchModules } from "@/api/module-api";
import { getSortParam } from "@/utils/sort-utils";

jest.mock("@/utils/sort-utils");

const mockGetSortParam = getSortParam as jest.Mock;

describe("fetchModules", () => {
  const query = "react";
  const page = 1;
  const sort = "stars";

  beforeEach(() => {
    mockGetSortParam.mockClear();
  });

  test("calls the API with the correct URL and parameters", async () => {
    mockGetSortParam.mockReturnValue("stars");

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;

    await fetchModules(query, page, sort);

    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}/search?platforms=${PLATFORMS}&api_key=${API_KEY}&q=${query}&page=${page}&per_page=${PER_PAGE}&sort=stars`
    );
  });

  test("returns expected data when the API call is successful", async () => {
    const mockData: ModuleInfo[] = [
      {
        name: "react",
        stars: 150,
        repository_url: "",
        owner: "facebook",
        description: "this is test library",
        contributions_count: "10",
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const result = await fetchModules(query, page, sort);
    expect(result).toEqual(mockData);
  });

  test("throws an error when the API call fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    await expect(fetchModules(query, page, sort)).rejects.toThrow(
      "Something went wrong, please try again later"
    );
  });

  test("handles empty sort parameter correctly", async () => {
    mockGetSortParam.mockReturnValue("");

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;

    await fetchModules(query, page, sort);

    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}/search?platforms=${PLATFORMS}&api_key=${API_KEY}&q=${query}&page=${page}&per_page=${PER_PAGE}`
    );
  });
});
