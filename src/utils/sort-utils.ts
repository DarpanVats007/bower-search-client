import { SortOption } from "@/components/sort/Sort";

export const getSortParam = (sort: SortOption): string | undefined => {
  switch (sort) {
    case "no selection":
      return "no selection";
    case "stars":
      return "stars";
    case "contributions_count":
      return "contributions_count";
    default:
      return "no selection";
  }
};
