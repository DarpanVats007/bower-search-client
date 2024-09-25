import {
  API_BASE_URL,
  API_KEY,
  PER_PAGE,
  PLATFORMS,
} from "../config/api-config";

import { ModuleInfo } from "../types/module-types";
import { SortOption } from "@/components/sort/Sort";
import { getSortParam } from "../utils/sort-utils";

export const fetchModules = async (
  query: string,
  page: number,
  sort: SortOption
): Promise<ModuleInfo[]> => {
  const sortParam = sort === "no selection" ? "" : getSortParam(sort);

  const response = await fetch(
    `${API_BASE_URL}/search?platforms=${PLATFORMS}&api_key=${API_KEY}&q=${query}&page=${page}&per_page=${PER_PAGE}${
      sortParam ? `&sort=${sortParam}` : ""
    }`
  );

  if (!response.ok) {
    throw new Error("Something went wrong, please try again later");
  }

  return response.json();
};
